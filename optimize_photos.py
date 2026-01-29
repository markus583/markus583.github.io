import os
import shutil
from PIL import Image, ImageOps
import sys

# Configuration
INPUT_DIR = "_raw_photos"
OUTPUT_DIR = "assets/photography"
MAX_DIMENSION = 2500  # Max width or height
QUALITY = 92          # High quality JPEG
KEEP_EXIF = True      # Attempt to keep EXIF metadata

def process_image(input_path, output_path):
    try:
        # Create output directory if it doesn't exist
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        # Check if output already exists and is newer than input
        if os.path.exists(output_path):
            input_mtime = os.path.getmtime(input_path)
            output_mtime = os.path.getmtime(output_path)
            if output_mtime >= input_mtime:
                # print(f"Skipping (already up to date): {output_path}")
                return

        print(f"Processing: {input_path} -> {output_path}")

        with Image.open(input_path) as img:
            # Preserve orientation from EXIF
            img = ImageOps.exif_transpose(img)
            
            # Get original EXIF data to copy later
            exif = img.info.get('exif')
            icc_profile = img.info.get('icc_profile')

            # Calculate new size while preserving aspect ratio
            width, height = img.size
            if width > MAX_DIMENSION or height > MAX_DIMENSION:
                ratio = min(MAX_DIMENSION / width, MAX_DIMENSION / height)
                new_size = (int(width * ratio), int(height * ratio))
                # High-quality downsampling
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Save parameters
            save_kwargs = {
                "quality": QUALITY,
                "optimize": True,
            }
            
            # Preserve EXIF if available and requested
            if KEEP_EXIF and exif:
                save_kwargs["exif"] = exif
            
            # Preserve ICC Profile (Color Management) if available
            if icc_profile:
                save_kwargs["icc_profile"] = icc_profile

            # Save the image
            img.save(output_path, "JPEG", **save_kwargs)

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def main():
    if not os.path.exists(INPUT_DIR):
        print(f"Error: Input directory '{INPUT_DIR}' not found.")
        return

    # Walk through the input directory
    for root, dirs, files in os.walk(INPUT_DIR):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                input_path = os.path.join(root, file)
                
                # Determine relative path to mirror structure
                rel_path = os.path.relpath(input_path, INPUT_DIR)
                output_path = os.path.join(OUTPUT_DIR, rel_path)

                process_image(input_path, output_path)

    print("Optimization complete.")

if __name__ == "__main__":
    main()
