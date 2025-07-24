#!/usr/bin/env bash
# create_thumbnails.sh - Batch-convert images to 1000×562 px preview files
# Usage: ./create_thumbnails.sh [src_dir] [dest_dir]
# If dest_dir is omitted, images are overwritten in-place with “_thumb” suffix.

set -euo pipefail
shopt -s nullglob

FORCE=false
SRC_DIR=assets/img/publication_preview
DEST_DIR=$SRC_DIR

# Parse flags/args
while [[ $# -gt 0 ]]; do
  case "$1" in
    -f|--force)
      FORCE=true
      shift
      ;;
    *)
      if [[ -z "$SRC_SET" ]]; then
        SRC_DIR="$1"; SRC_SET=true
      elif [[ -z "$DEST_SET" ]]; then
        DEST_DIR="$1"; DEST_SET=true
      else
        echo "Unknown argument: $1" && exit 1
      fi
      shift
      ;;
  esac
done

WIDTH=1000
HEIGHT=562
BG="#ffffff"

# create destination dir if needed
mkdir -p "$DEST_DIR"

echo "Converting thumbnails in $SRC_DIR → $DEST_DIR (${WIDTH}×${HEIGHT})"

for img in "$SRC_DIR"/*.{png,jpg,jpeg,JPG,JPEG,PNG}; do
  [ -e "$img" ] || continue # skip if no match
  filename=$(basename "$img")
  name_no_ext="${filename%.*}"
  ext="${filename##*.}"

  # output keeps original extension; add _thumb before ext if DEST == SRC
  if [ "$DEST_DIR" = "$SRC_DIR" ]; then
    out="$DEST_DIR/${name_no_ext}_thumb.${ext,,}"
  else
    out="$DEST_DIR/${name_no_ext}.${ext,,}"
  fi

  # Skip if up-to-date unless --force was provided
  if [ "$FORCE" = false ] && [ -f "$out" ] && [ "$out" -nt "$img" ]; then
    echo "✓ $filename already processed (use --force to regenerate)"
    continue
  fi

  echo "→ $filename → $(basename "$out")"

  # Resize so the image fits entirely within WIDTH×HEIGHT without distortion,
  # then pad the missing dimension with background color. This avoids cropping
  # (no content lost) and adds horizontal or vertical whitespace *only* when
  # the image is narrower or shorter than the target box.
  convert "$img" -auto-orient \
    -resize "${WIDTH}x${HEIGHT}" \
    -background "$BG" -gravity center -extent "${WIDTH}x${HEIGHT}" \
    -filter Lanczos -strip -quality 85 \
    "$out"

done

echo "Done." 