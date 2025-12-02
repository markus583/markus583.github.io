---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 4
cv_pdf: Markus_Frohmann_CV.pdf
description:
---

<style>
.cv-download-btn {
  display: inline-block;
  background: linear-gradient(135deg, #2563a8 0%, #1e4d84 100%);
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(37, 99, 168, 0.2);
  border: none;
}

.cv-download-btn:hover {
  background: linear-gradient(135deg, #1e4d84 0%, #164072 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 168, 0.3);
  color: white;
}

html[data-theme="dark"] .cv-download-btn {
  background: linear-gradient(135deg, #4a90d9 0%, #2563a8 100%);
}

html[data-theme="dark"] .cv-download-btn:hover {
  background: linear-gradient(135deg, #6bb0ff 0%, #4a90d9 100%);
}
</style>

<div style="text-align: right; margin-bottom: 20px;">
  <a href="{{ '/assets/pdf/Markus_Frohmann_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="cv-download-btn">
    <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
  </a>
</div>

<div class="pdf-container" style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <embed src="{{ '/assets/pdf/Markus_Frohmann_CV.pdf' | relative_url }}" type="application/pdf" width="100%" height="100%" style="border: none;">
  <div style="padding: 40px; text-align: center; color: #666; background-color: #f8f9fa;">
    <i class="fa-solid fa-file-pdf" style="font-size: 48px; color: #dc3545; margin-bottom: 20px;"></i>
    <h4>PDF Viewer Not Supported</h4>
    <p>Your browser does not support inline PDF viewing.</p>
    <a href="{{ '/assets/pdf/Markus_Frohmann_CV.pdf' | relative_url }}" target="_blank" class="cv-download-btn" style="margin-top: 10px;">
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
