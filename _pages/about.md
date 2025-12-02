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
/* Custom styles for a more personal, distinctive site */

/* Override the default about layout to center everything */
.profile {
  float: none !important;
  text-align: center !important;
  margin: 0 auto 50px auto !important;
  width: auto !important;
  max-width: 300px !important;
  display: block !important;
}

.profile img {
  width: 210px !important;
  height: 210px !important;
  margin: 0 auto 20px auto !important;
  display: block !important;
  float: none !important;
  box-shadow: 0 8px 24px rgba(37, 99, 168, 0.15) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.profile img:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(37, 99, 168, 0.2) !important;
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
}

.post-header .post-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.post-header .desc {
  font-size: 1.15rem;
  color: #5a6c7d;
  margin-bottom: 30px;
  font-weight: 500;
}

/* Custom contact section with refined styling */
.contact-section {
  text-align: center;
  margin: 20px auto 50px auto;
  max-width: 520px;
}

.contact-section a:hover i {
  transform: scale(1.12);
  transition: transform 0.2s ease;
}

.contact-section a i {
  transition: transform 0.2s ease;
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

/* Enhanced section styling */
.post article h2 {
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(37, 99, 168, 0.12);
}

.post article h2 a {
  transition: color 0.2s ease;
}

.post article h2 a:hover {
  color: #1e4d84 !important;
}

/* News section styling */
.news {
  margin-top: 1.5rem;
}

.news table {
  font-size: 0.95rem;
}

.news td {
  padding: 0.75rem 0.5rem !important;
  line-height: 1.6;
}

.news th {
  color: #5a6c7d;
  font-weight: 500;
}

/* Publication styling enhancements */
.publications {
  margin-top: 1.5rem;
}

.publications .title {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.publications .title a {
  transition: color 0.2s ease;
}

.publications .title a:hover {
  color: #1e4d84 !important;
}

.publications .author {
  font-size: 0.92rem;
  margin-bottom: 0.4rem;
}

.publications .periodical {
  font-size: 0.90rem;
  color: #5a6c7d;
  margin-bottom: 0.6rem;
}

.publications .links a {
  margin-right: 8px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
}

.publications .links a:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(37, 99, 168, 0.15);
}

.publications .abbr abbr {
  transition: all 0.2s ease;
}

.publications .abbr abbr:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(37, 99, 168, 0.2);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better paragraph spacing */
.post article > p {
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

/* Subtle page background enhancement */
body {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafb 100%);
  min-height: 100vh;
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
}

.btn:hover {
  transform: translateY(-1px);
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
  
  <div style="background: linear-gradient(135deg, #e8f4fd 0%, #dce9f7 100%); border: 2px solid #9fc9ed; padding: 14px 24px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 12px rgba(37, 99, 168, 0.12); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 16px rgba(37, 99, 168, 0.18)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 12px rgba(37, 99, 168, 0.12)'">
    <strong style="color: #1e4d84; font-size: 1.02em;">🎓 Available for PhD Position starting Fall 2026!</strong>
  </div>
</div>

I am a Master's student in Artificial Intelligence at **Johannes Kepler University Linz**, advised by [Prof. Markus Schedl](http://www.mschedl.eu/).
My research focuses on **composable, parameter-efficient** language models and multimodal systems. I'm especially interested in *modular architectures*, *personalised and robust behaviour*, and *applications* such as intelligent assistants and multilingual information access in long-tail languages and noisy, real-world settings.

I have been fortunate to gain research experience at **ETH Zürich** (advised by [Mario Giulianelli](https://glnmario.github.io/) and [Ryan Cotterell](https://scholar.google.com/citations?user=DexOqtoAAAAJ&hl=en)) and **Deezer Research**, as well as industry experience at **Bosch** and **Leftshift One**.

Outside research, I enjoy photography and exploring music & language across cultures.

---

See my [CV](/cv/) for a full overview and [publications](/publications/) for papers, code, and datasets.
