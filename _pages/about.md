---
layout: about
title: about
permalink: /
subtitle: NLP Researcher • AI MSc Student

profile:
  align: center
  image: profile_pic.JPG
  image_circular: true

social: false
announcements:
  enabled: true
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
selected_papers: true
opensource_libraries: true
show_name: false
---

<style>
/* Custom styles for a distinctive, research-focused site */

/* Override the default about layout to center everything */
.profile {
  float: none !important;
  text-align: center !important;
  margin: 0 auto 50px auto !important;
  width: auto !important;
  max-width: 300px !important;
  display: block !important;
  position: relative;
}

.profile::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(37, 99, 168, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.profile img {
  width: 210px !important;
  height: 210px !important;
  margin: 0 auto 20px auto !important;
  display: block !important;
  float: none !important;
  box-shadow: 0 8px 24px rgba(37, 99, 168, 0.15) !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  position: relative;
  z-index: 1;
  border: 3px solid rgba(255, 255, 255, 0.9);
}

html[data-theme="dark"] .profile img {
  border-color: rgba(74, 144, 217, 0.3);
  box-shadow: 0 8px 24px rgba(74, 144, 217, 0.2) !important;
}

.profile img:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 40px rgba(37, 99, 168, 0.25) !important;
}

html[data-theme="dark"] .profile img:hover {
  box-shadow: 0 16px 40px rgba(74, 144, 217, 0.3) !important;
}

/* Force the article content to clear floats and center */
.post article {
  clear: both !important;
  max-width: 820px !important;
  margin: 0 auto !important;
  text-align: left !important;
}

.post-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.post-header .post-title {
  font-size: 2.6rem;
  margin-bottom: 12px;
  font-weight: 600;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #1a2a3a 0%, #2563a8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

html[data-theme="dark"] .post-header .post-title {
  background: linear-gradient(135deg, #e8f1fa 0%, #4a90d9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-header .desc {
  font-size: 1.18rem;
  color: #5a6c7d;
  margin-bottom: 30px;
  font-weight: 500;
  letter-spacing: 0.01em;
  position: relative;
  display: inline-block;
  padding: 0 20px;
}

.post-header .desc::before,
.post-header .desc::after {
  content: '◆';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #2563a8;
  opacity: 0.3;
  font-size: 0.6em;
}

html[data-theme="dark"] .post-header .desc::before,
html[data-theme="dark"] .post-header .desc::after {
  color: #4a90d9;
  opacity: 0.4;
}

.post-header .desc::before {
  left: 0;
}

.post-header .desc::after {
  right: 0;
}

/* Custom contact section with refined styling */
.contact-section {
  text-align: center;
  margin: 20px auto 50px auto;
  max-width: 520px;
  padding: 0 20px;
}

.contact-section a[href^="mailto"] {
  font-weight: 500;
  letter-spacing: -0.01em;
  border-bottom: 2px solid rgba(37, 99, 168, 0.3);
  transition: all 0.2s ease;
  padding-bottom: 2px;
}

.contact-section a[href^="mailto"]:hover {
  color: #1e4d84 !important;
  border-bottom-color: #1e4d84;
}

.contact-section a:hover i {
  transform: scale(1.15) rotate(5deg);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-section a i {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.clearfix {
  clear: both !important;
}

/* Additional override to ensure no floating */
.post .profile.float-left,
.post .profile.float-right {
  float: none !important;
  margin: 0 auto 50px auto !important;
}

/* Enhanced section styling with distinctive headers */
.post article h2 {
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-top: 3rem;
  margin-bottom: 1.8rem;
  padding-bottom: 0.8rem;
  padding-left: 18px;
  border-bottom: 2px solid rgba(37, 99, 168, 0.12);
  position: relative;
}

html[data-theme="dark"] .post article h2 {
  border-bottom-color: rgba(74, 144, 217, 0.2);
}

.post article h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  width: 4px;
  height: calc(100% - 10px);
  background: linear-gradient(180deg, #2563a8 0%, #4a90d9 100%);
  border-radius: 2px;
}

.post article h2 a {
  transition: color 0.2s ease;
  position: relative;
}

.post article h2 a:hover {
  color: #1e4d84 !important;
}

/* First section after intro gets special treatment */
.post article > hr:first-of-type {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

/* News section styling with card-like entries */
.news {
  margin-top: 1.5rem;
}

.news .table-responsive {
  overflow: hidden !important;
}

.news table {
  font-size: 0.95rem;
  border-collapse: separate;
  border-spacing: 0 8px;
}

.news tr {
  background: linear-gradient(135deg, #fafbfc 0%, #ffffff 100%);
  border-radius: 8px;
  transition: all 0.2s ease;
}

html[data-theme="dark"] .news tr {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.02) 100%);
}

.news tr:hover {
  background: linear-gradient(135deg, #f5f7fa 0%, #fafbfc 100%);
  transform: translateX(3px);
  box-shadow: -3px 0 0 0 #2563a8, 0 2px 8px rgba(37, 99, 168, 0.08);
}

html[data-theme="dark"] .news tr:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%);
  box-shadow: -3px 0 0 0 #4a90d9, 0 2px 8px rgba(74, 144, 217, 0.15);
}

.news td {
  padding: 1rem 1.2rem !important;
  line-height: 1.6;
  border: 1px solid rgba(37, 99, 168, 0.08);
}

html[data-theme="dark"] .news td {
  border-color: rgba(74, 144, 217, 0.15);
}

.news td:first-child {
  border-radius: 8px 0 0 8px;
  border-right: none;
}

.news td:last-child {
  border-radius: 0 8px 8px 0;
  border-left: none;
}

.news th {
  color: #5a6c7d;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.8rem 1.2rem !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Publication styling with elegant card-based layout */
.publications {
  margin-top: 1.5rem;
}

.publications ol.bibliography > li {
  background: linear-gradient(135deg, #fafbfc 0%, #ffffff 100%);
  border: 1px solid rgba(37, 99, 168, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

html[data-theme="dark"] .publications ol.bibliography > li {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-color: rgba(74, 144, 217, 0.15);
}

.publications ol.bibliography > li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #2563a8 0%, #4a90d9 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.publications ol.bibliography > li:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 168, 0.12);
  border-color: rgba(37, 99, 168, 0.2);
}

html[data-theme="dark"] .publications ol.bibliography > li:hover {
  box-shadow: 0 8px 24px rgba(74, 144, 217, 0.2);
  border-color: rgba(74, 144, 217, 0.3);
}

.publications ol.bibliography > li:hover::before {
  opacity: 1;
}

.publications .row {
  margin: 0 !important;
}

.publications .title {
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.6rem;
}

.publications .title a {
  transition: color 0.2s ease;
  color: #1a1a1a;
}

html[data-theme="dark"] .publications .title a {
  color: var(--global-text-color);
}

.publications .title a:hover {
  color: #2563a8 !important;
}

html[data-theme="dark"] .publications .title a:hover {
  color: #4a90d9 !important;
}

.publications .author {
  font-size: 0.93rem;
  margin-bottom: 0.5rem;
  color: #3a4a5a;
}

html[data-theme="dark"] .publications .author {
  color: var(--global-text-color);
}

.publications .periodical {
  font-size: 0.91rem;
  color: #5a6c7d;
  margin-bottom: 0.8rem;
  font-style: normal;
}

.publications .periodical em {
  color: #5a6c7d !important;
  font-style: normal !important;
  font-weight: normal !important;
}

html[data-theme="dark"] .publications .periodical {
  color: var(--global-text-color-light);
}

html[data-theme="dark"] .publications .periodical em {
  color: var(--global-text-color-light) !important;
}

.publications .links {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.publications .links a {
  margin-right: 0;
  margin-bottom: 0;
  transition: all 0.2s ease;
  font-size: 0.87rem;
  padding: 5px 12px;
}

.publications .links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(37, 99, 168, 0.18);
}

.publications .abbr {
  margin-bottom: 1rem;
}

.publications .abbr abbr {
  transition: all 0.2s ease;
  font-size: 0.82rem;
  padding: 6px 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.publications .abbr abbr:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 12px rgba(37, 99, 168, 0.25);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better paragraph spacing and typography */
.post article > p {
  line-height: 1.8;
  margin-bottom: 1.3rem;
  font-size: 1.02rem;
  color: #2a3a4a;
}

html[data-theme="dark"] .post article > p {
  color: var(--global-text-color);
}

/* First paragraph after contact section gets emphasis */
.post article > p:first-of-type {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #1a2a3a;
}

html[data-theme="dark"] .post article > p:first-of-type {
  color: var(--global-text-color);
}

/* Strong text (bold) styling */
.post article strong {
  font-weight: 600;
  color: #1a2a3a;
}

html[data-theme="dark"] .post article strong {
  color: var(--global-text-color);
}

/* Italic text styling */
.post article em {
  color: #2563a8;
  font-style: normal;
  font-weight: 500;
}

html[data-theme="dark"] .post article em {
  color: #4a90d9;
}

/* Subtle page background with research-inspired pattern */
body {
  background: linear-gradient(180deg, var(--global-bg-color) 0%, var(--global-bg-color) 100%);
  min-height: 100vh;
  position: relative;
}

html[data-theme="light"] body {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafb 100%);
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(37, 99, 168, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(37, 99, 168, 0.02) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

html[data-theme="dark"] body::before {
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(74, 144, 217, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(74, 144, 217, 0.04) 0%, transparent 50%);
}

.post {
  position: relative;
  z-index: 1;
}

/* Enhanced link styling */
.post article a:not(.btn):not(.badge):not(.nav-link) {
  color: #2563a8;
  transition: color 0.2s ease;
  text-decoration: none;
  border-bottom: 1px solid rgba(37, 99, 168, 0.3);
  padding-bottom: 1px;
}

.post article a:not(.btn):not(.badge):not(.nav-link):hover {
  color: #1e4d84;
  border-bottom-color: rgba(30, 77, 132, 0.6);
}

/* Section dividers */
.post article hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(37, 99, 168, 0.2) 50%, transparent 100%);
  margin: 2.5rem 0;
}

/* Enhanced button styling for publications */
.btn {
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 6px 14px;
  transition: all 0.2s ease;
  border: 1px solid rgba(37, 99, 168, 0.15);
}

html[data-theme="dark"] .btn {
  border-color: rgba(74, 144, 217, 0.2);
}

.btn:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 168, 0.3);
}

html[data-theme="dark"] .btn:hover {
  border-color: rgba(74, 144, 217, 0.4);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f3f5;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #2563a8 0%, #4a90d9 100%);
  border-radius: 5px;
  border: 2px solid #f1f3f5;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #1e4d84 0%, #2563a8 100%);
}

/* Selection styling */
::selection {
  background-color: rgba(37, 99, 168, 0.2);
  color: #1a2a3a;
}

::-moz-selection {
  background-color: rgba(37, 99, 168, 0.2);
  color: #1a2a3a;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .post-header .post-title {
    font-size: 2.2rem;
  }
  
  .post-header .desc {
    font-size: 1.08rem;
  }
  
  .profile img {
    width: 180px !important;
    height: 180px !important;
  }
  
  .publications ol.bibliography > li {
    padding: 1.2rem;
  }
}
</style>

<div class="contact-section">
  <div style="font-size: 1.1em; margin-bottom: 15px;">
    <span id="email-slot"></span>
    <script>
      (function() {
        const user = 'markus';
        const last = 'frohmann';
        const domain = 'gmail.com';
        const email = `${user}.${last}@${domain}`;
        const link = document.createElement('a');
        link.href = `mailto:${email}`;
        link.textContent = email;
        link.style.color = '#007bff';
        link.style.textDecoration = 'none';
        link.style.fontWeight = '500';
        document.getElementById('email-slot').appendChild(link);
      })();
    </script>
  </div>
  
  <div style="margin-bottom: 20px;">
    <a href="https://scholar.google.com/citations?user=8PxZyK8AAAAJ" target="_blank" style="margin: 0 10px; color: #4285f4; text-decoration: none; font-size: 1.5em;" title="Google Scholar">
      <i class="ai ai-google-scholar-square ai-lg"></i>
    </a>
    <a href="https://www.semanticscholar.org/author/Markus-Frohmann/2226600284" target="_blank" style="margin: 0 10px; color: #1857a4; text-decoration: none; font-size: 1.5em;" title="Semantic Scholar">
      <i class="ai ai-semantic-scholar-square ai-lg"></i>
    </a>
    <a href="https://github.com/markus583" target="_blank" style="margin: 0 10px; color: #333; text-decoration: none; font-size: 1.5em;" title="GitHub">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/markus-frohmann" target="_blank" style="margin: 0 10px; color: #0077b5; text-decoration: none; font-size: 1.5em;" title="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://x.com/FrohmannM" target="_blank" style="margin: 0 10px; color: #1da1f2; text-decoration: none; font-size: 1.5em;" title="X (Twitter)">
      <i class="fab fa-x-twitter"></i>
    </a>
  </div>
  
  <div class="phd-banner" style="background: linear-gradient(135deg, #e8f4fd 0%, #dce9f7 100%); border: 2px solid #9fc9ed; padding: 14px 24px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 12px rgba(37, 99, 168, 0.12); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 16px rgba(37, 99, 168, 0.18)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 12px rgba(37, 99, 168, 0.12)'">
    <strong class="phd-text" style="color: #1e4d84; font-size: 1.02em;">🎓 Available for PhD Positions starting Fall 2026!</strong>
  </div>

<style>
html[data-theme="dark"] .phd-banner {
  background: linear-gradient(135deg, rgba(74, 144, 217, 0.15) 0%, rgba(74, 144, 217, 0.1) 100%) !important;
  border-color: rgba(74, 144, 217, 0.3) !important;
  box-shadow: 0 2px 12px rgba(74, 144, 217, 0.2) !important;
}

html[data-theme="dark"] .phd-text {
  color: #6bb0ff !important;
}
</style>
</div>

I am a Master's student in Artificial Intelligence at **Johannes Kepler University Linz**, advised by [Prof. Markus Schedl](http://www.mschedl.eu/).
My research focuses on **composable, parameter-efficient** language models and multimodal systems. I'm especially interested in *modular architectures*, *personalised and robust behaviour*, and *applications* such as intelligent assistants and multilingual information access in long-tail languages and noisy, real-world settings.

I have been fortunate to gain research experience at **ETH Zürich** (advised by [Mario Giulianelli](https://glnmario.github.io/) and [Ryan Cotterell](https://scholar.google.com/citations?user=DexOqtoAAAAJ&hl=en)) and **Deezer Research**, as well as industry experience at **Bosch** and **Leftshift One**.

Outside research, I enjoy photography and exploring music & language across cultures.

---

<div class="cv-cta-box" style="margin-top: 2.5rem; padding: 1.5rem; background: linear-gradient(135deg, #f8fafb 0%, #ffffff 100%); border-radius: 10px; border: 1px solid rgba(37, 99, 168, 0.12); text-align: center;">
<span class="cv-cta-text" style="font-size: 1.02rem; color: #3a4a5a;">📄 See my <a href="/cv/" class="cv-link" style="font-weight: 600; color: #2563a8; text-decoration: none; border-bottom: 2px solid rgba(37, 99, 168, 0.3); padding-bottom: 2px; transition: all 0.2s ease;" onmouseover="this.style.color='#1e4d84'; this.style.borderBottomColor='#1e4d84'" onmouseout="this.style.color='#2563a8'; this.style.borderBottomColor='rgba(37, 99, 168, 0.3)'">CV</a> for a full overview and <a href="/publications/" class="cv-link" style="font-weight: 600; color: #2563a8; text-decoration: none; border-bottom: 2px solid rgba(37, 99, 168, 0.3); padding-bottom: 2px; transition: all 0.2s ease;" onmouseover="this.style.color='#1e4d84'; this.style.borderBottomColor='#1e4d84'" onmouseout="this.style.color='#2563a8'; this.style.borderBottomColor='rgba(37, 99, 168, 0.3)'">publications</a> for papers, code, and datasets.</span>
</div>

<style>
html[data-theme="dark"] .cv-cta-box {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.02) 100%) !important;
  border-color: rgba(74, 144, 217, 0.2) !important;
}

html[data-theme="dark"] .cv-cta-text {
  color: var(--global-text-color) !important;
}

html[data-theme="dark"] .cv-link {
  color: #4a90d9 !important;
  border-bottom-color: rgba(74, 144, 217, 0.4) !important;
}

html[data-theme="dark"] .cv-link:hover {
  color: #6bb0ff !important;
  border-bottom-color: #6bb0ff !important;
}
</style>
