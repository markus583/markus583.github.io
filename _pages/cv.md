---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 4
cv_pdf: Markus_Frohmann_CV.pdf
description:
---

<div style="text-align: right; margin-bottom: 20px;">
  <a href="{{ '/assets/pdf/cv.Markus_Frohmann_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" 
     style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; 
            text-decoration: none; border-radius: 5px; font-weight: bold;">
    <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
  </a>
</div>

<div class="pdf-container" style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <embed src="{{ '/assets/pdf/Markus_Frohmann_CV.pdf' | relative_url }}" type="application/pdf" width="100%" height="100%" style="border: none;">
  <div style="padding: 40px; text-align: center; color: #666; background-color: #f8f9fa;">
    <i class="fa-solid fa-file-pdf" style="font-size: 48px; color: #dc3545; margin-bottom: 20px;"></i>
    <h4>PDF Viewer Not Supported</h4>
    <p>Your browser does not support inline PDF viewing.</p>
    <a href="{{ '/assets/pdf/Markus_Frohmann_CV.pdf' | relative_url }}" target="_blank" 
       style="display: inline-block; background-color: #007bff; color: white; padding: 12px 24px; 
              text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 10px;">
      <i class="fa-solid fa-download"></i> Download CV (PDF)
    </a>
  </div>
</div>

<style>
.pdf-container embed {
  display: block;
}

.pdf-container p {
  display: none;
}

.pdf-container:has(embed:not([src])) p,
.pdf-container:has(embed[src=""]) p {
  display: block;
}

@media (max-width: 768px) {
  .pdf-container {
    height: 600px;
  }
}
</style>
