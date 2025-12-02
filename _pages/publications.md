---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<style>
/* Publication styling with elegant card-based layout - consistent with homepage */
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

/* Button styling */
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

/* Year headers */
.publications h2.bibliography {
  color: var(--global-theme-color);
  font-weight: 600;
  letter-spacing: -0.01em;
  padding-left: 18px;
  position: relative;
}

.publications h2.bibliography::before {
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  width: 4px;
  height: calc(100% - 10px);
  background: linear-gradient(180deg, #2563a8 0%, #4a90d9 100%);
  border-radius: 2px;
}
</style>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
