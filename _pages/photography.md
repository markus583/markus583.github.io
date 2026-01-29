---
layout: page
permalink: /photography/
nav: true
nav_order: 10
title: photography
description: A few moments from life.
---

<div style="border-top: 1px solid var(--global-divider-color); padding-top: 1.5rem; margin-bottom: 2.5rem;">
  <div class="gear-section">
    <div class="gear-column">
      <h4>Body</h4>
      <div class="gear-body">Sony a6700</div>
      <div class="gear-sub">+ LA-E5 adapter</div>
    </div>
    
    <div class="gear-column">
      <h4>Lenses</h4>
      <ul class="lens-list">
        <li>Minolta 85mm f1.4 <span class="lens-nickname">(Dreamlens)</span></li>
        <li>Minolta 100-300mm f4.5-5.6 APO <span class="lens-nickname">(Newzoomlens)</span></li>
        <li>Sony 35mm f1.8 DT SAM <span class="lens-nickname">(Plasticlens)</span></li>
        <li>Minolta 28-105mm f3.5-4.5 RS <span class="lens-nickname">(Hongkonglens)</span></li>
        <li>Minolta 20mm f2.8 RS <span class="lens-nickname">(Widelens)</span></li>
        <li>Minolta 75-300mm f4.5-5.6 <span class="lens-nickname">(Longlens)</span></li>
        <li>Sony 50mm f1.8 OSS E <span class="lens-nickname">(Metallens)</span></li>
        <li>Minolta 35-105mm f3.5-4.5 <span class="lens-nickname">(Shortlens)</span></li>
        <li>Minolta 100-200mm f4.5 <span class="lens-nickname">(Lieblingszoomlens)</span></li>
        <li>Sony 16-50mm f3.5-5.6 <span class="lens-nickname">(Kitlens)</span></li>
      </ul>
    </div>
  </div>
</div>

<style>
/* Gear section styles */
.gear-section {
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto; 
}

.gear-column {
  text-align: left;
}

.gear-column h4 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8e8e8e;
  margin: 0 0 0.6rem 0;
  font-weight: 600;
}

html[data-theme="dark"] .gear-column h4 {
  color: #a0a0a0;
}

.gear-body {
  font-size: 0.95rem;
  font-weight: 600;
  color: #262626;
  margin-bottom: 0.3rem;
}

html[data-theme="dark"] .gear-body {
  color: var(--global-text-color);
}

.gear-sub {
  font-size: 0.9rem;
  color: #6a7a8a;
  font-weight: 300;
}

html[data-theme="dark"] .gear-sub {
  color: var(--global-text-color-light);
}

.lens-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
  color: #4a5a6a;
  columns: 2;
  column-gap: 1.5rem;
}

html[data-theme="dark"] .lens-list {
  color: var(--global-text-color-light);
}

.lens-list li {
  margin-bottom: 0.35rem;
  white-space: nowrap;
}

.lens-nickname {
  font-size: 0.8em;
  color: #8e8e8e;
  font-style: italic;
}

html[data-theme="dark"] .lens-nickname {
  color: #a0a0a0;
}

/* Active filter banner */
.filter-active {
  display: none;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #e8f4fd 0%, #dce9f7 100%);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #1e4d84;
}

html[data-theme="dark"] .filter-active {
  background: linear-gradient(135deg, rgba(74, 144, 217, 0.15) 0%, rgba(74, 144, 217, 0.1) 100%);
  color: #6bb0ff;
}

.filter-active.visible {
  display: flex;
}

.filter-label {
  font-weight: 600;
}

.filter-clear {
  background: none;
  border: none;
  color: #2563a8;
  cursor: pointer;
  font-size: 0.85rem;
  text-decoration: underline;
  padding: 0;
}

html[data-theme="dark"] .filter-clear {
  color: #4a90d9;
}

/* Instagram-style feed layout */
.photo-feed {
  max-width: 540px;
  margin: 0 auto;
}

/* Individual photo post */
.photo-post {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 2rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.photo-post.hidden {
  display: none;
}

html[data-theme="dark"] .photo-post {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

.photo-post:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

html[data-theme="dark"] .photo-post:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Post header with date/location */
.post-header-feed {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

html[data-theme="dark"] .post-header-feed {
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.post-date {
  font-size: 0.82rem;
  color: #8e8e8e;
  font-weight: 500;
}

html[data-theme="dark"] .post-date {
  color: #a0a0a0;
}

.post-location {
  font-size: 0.82rem;
  color: #2563a8;
  display: flex;
  align-items: center;
  gap: 4px;
}

html[data-theme="dark"] .post-location {
  color: #4a90d9;
}

.post-location::before {
  content: '📍';
  font-size: 0.9em;
}

/* Photo container */
.post-image-container {
  position: relative;
  width: 100%;
  background: #fafafa;
  line-height: 0;
}

html[data-theme="dark"] .post-image-container {
  background: rgba(0, 0, 0, 0.2);
}

.post-image-container > img {
  max-width: 100%;
  max-height: 70vh;
  height: auto;
  width: auto;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.post-image-container img:hover {
  opacity: 0.95;
}

/* Multi-image carousel */
.post-carousel {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}

html[data-theme="dark"] .carousel-slide {
  background: rgba(0, 0, 0, 0.2);
}

.carousel-slide img {
  max-width: 100%;
  max-height: 70vh;
  height: auto;
  width: auto;
}

/* Lazy loading placeholder */
.carousel-slide img.lazy-carousel {
  min-height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

html[data-theme="dark"] .carousel-slide img.lazy-carousel {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #262626;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10;
}

.post-carousel:hover .carousel-nav {
  opacity: 1;
}

.carousel-nav:hover {
  background: #ffffff;
}

.carousel-nav.prev { left: 12px; }
.carousel-nav.next { right: 12px; }

.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.carousel-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.2s ease;
}

.carousel-dot.active {
  background: #ffffff;
}

/* Caption area */
.post-caption {
  padding: 16px;
}

.caption-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: #262626;
  margin-bottom: 6px;
}

html[data-theme="dark"] .caption-title {
  color: var(--global-text-color);
}

.caption-text {
  font-size: 0.9rem;
  color: #565656;
  line-height: 1.5;
}

html[data-theme="dark"] .caption-text {
  color: var(--global-text-color-light);
}

/* Meta tags (country + lens) */
.post-meta {
  padding: 0 16px 14px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.meta-tag {
  font-size: 0.78rem;
  padding: 4px 10px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  font-family: inherit;
}

.meta-tag:hover {
  transform: translateY(-1px);
}

.meta-tag.country {
  color: #1e6f5c;
  background: rgba(30, 111, 92, 0.1);
}

.meta-tag.country:hover {
  background: rgba(30, 111, 92, 0.18);
}

html[data-theme="dark"] .meta-tag.country {
  color: #5dd5b8;
  background: rgba(93, 213, 184, 0.15);
}

.meta-tag.lens {
  color: #8b5a2b;
  background: rgba(139, 90, 43, 0.1);
}

.meta-tag.lens:hover {
  background: rgba(139, 90, 43, 0.18);
}

html[data-theme="dark"] .meta-tag.lens {
  color: #daa06d;
  background: rgba(218, 160, 109, 0.15);
}

/* Empty state */
.feed-placeholder {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  color: #8e8e8e;
}

html[data-theme="dark"] .feed-placeholder {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
  color: #a0a0a0;
}

.feed-placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.no-results {
  text-align: center;
  padding: 3rem 2rem;
  color: #8e8e8e;
  display: none;
}

.no-results.visible {
  display: block;
}

/* View toggle */
.view-toggle {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 1.5rem;
  background: rgba(0, 0, 0, 0.04);
  padding: 4px;
  border-radius: 8px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

html[data-theme="dark"] .view-toggle {
  background: rgba(255, 255, 255, 0.08);
}

.view-btn {
  padding: 8px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #6a7a8a;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
}

html[data-theme="dark"] .view-btn {
  color: #a0a0a0;
}

.view-btn:hover {
  color: #2563a8;
}

html[data-theme="dark"] .view-btn:hover {
  color: #4a90d9;
}

.view-btn.active {
  background: #ffffff;
  color: #262626;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

html[data-theme="dark"] .view-btn.active {
  background: rgba(255, 255, 255, 0.15);
  color: var(--global-text-color);
}

/* Grid view */
.photo-feed.grid-view {
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.photo-feed.grid-view .photo-post {
  border: none;
  border-radius: 0;
  margin-bottom: 0;
  background: transparent;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
}

.photo-feed.grid-view .photo-post:hover {
  box-shadow: none;
}

.photo-feed.grid-view .post-header-feed,
.photo-feed.grid-view .post-caption,
.photo-feed.grid-view .post-meta,
.photo-feed.grid-view .carousel-nav,
.photo-feed.grid-view .carousel-dots {
  display: none;
}

.photo-feed.grid-view .post-image-container {
  height: 100%;
}

.photo-feed.grid-view .post-carousel {
  height: 100%;
}

.photo-feed.grid-view .carousel-track {
  height: 100%;
}

.photo-feed.grid-view .carousel-slide {
  height: 100%;
}

.photo-feed.grid-view .carousel-slide img,
.photo-feed.grid-view .post-image-container > img {
  width: 100%;
  height: 100%;
  max-height: none;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.photo-feed.grid-view .photo-post:hover img {
  transform: scale(1.05);
  opacity: 0.9;
}

/* Grid overlay on hover */
.photo-feed.grid-view .photo-post {
  position: relative;
}

.photo-feed.grid-view .photo-post::before {
  content: '⤢';
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 5;
}

.photo-feed.grid-view .photo-post:hover::before {
  opacity: 1;
}

.photo-feed.grid-view .photo-post::after {
  content: attr(data-title);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 0.5rem 0.5rem 0.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  text-align: center;
}

.photo-feed.grid-view .photo-post:hover::after {
  opacity: 1;
}

/* Responsive */
@media (max-width: 600px) {
  .photo-feed {
    max-width: 100%;
  }
  
  .photo-feed.grid-view {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }
  
  .photo-post {
    border-radius: 0;
    border-left: none;
    border-right: none;
    margin-bottom: 1rem;
  }
  
  .gear-section {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  
  .gear-column {
    text-align: center;
  }
  
  .view-toggle {
    margin-bottom: 1rem;
  }
  
  .view-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>

<div class="view-toggle">
  <button class="view-btn" id="feedBtn" onclick="setView('feed')">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="3" y1="15" x2="21" y2="15"/>
    </svg>
    Feed
  </button>
  <button class="view-btn active" id="gridBtn" onclick="setView('grid')">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
    </svg>
    Grid
  </button>
</div>

<div class="filter-active" id="filterBanner">
  <span>Showing: <span class="filter-label" id="filterLabel"></span></span>
  <button class="filter-clear" onclick="clearFilter()">Show all</button>
</div>

{% include photography.liquid %}

<div class="no-results" id="noResults">
  No photos found with this filter.
</div>

<script>
function filterPhotos(type, value) {
  const posts = document.querySelectorAll('.photo-post');
  const banner = document.getElementById('filterBanner');
  const label = document.getElementById('filterLabel');
  const noResults = document.getElementById('noResults');
  
  let visibleCount = 0;
  
  posts.forEach(post => {
    let matches = false;
    if (type === 'country') {
      matches = post.dataset.country === value;
    } else if (type === 'lens') {
      const lenses = post.dataset.lenses ? post.dataset.lenses.split(',') : [];
      matches = lenses.includes(value);
    }
    
    if (matches) {
      post.classList.remove('hidden');
      visibleCount++;
    } else {
      post.classList.add('hidden');
    }
  });
  
  banner.classList.add('visible');
  label.textContent = value;
  noResults.classList.toggle('visible', visibleCount === 0);
}

function clearFilter() {
  const posts = document.querySelectorAll('.photo-post');
  const banner = document.getElementById('filterBanner');
  const noResults = document.getElementById('noResults');
  
  posts.forEach(post => post.classList.remove('hidden'));
  banner.classList.remove('visible');
  noResults.classList.remove('visible');
}

function setView(view) {
  const feed = document.querySelector('.photo-feed');
  const feedBtn = document.getElementById('feedBtn');
  const gridBtn = document.getElementById('gridBtn');
  
  if (view === 'grid') {
    feed.classList.add('grid-view');
    gridBtn.classList.add('active');
    feedBtn.classList.remove('active');
  } else {
    feed.classList.remove('grid-view');
    feedBtn.classList.add('active');
    gridBtn.classList.remove('active');
  }
}

function openPost(post) {
  const feed = document.querySelector('.photo-feed');
  
  // Only trigger in grid view
  if (!feed.classList.contains('grid-view')) return;
  
  // Switch to feed view
  setView('feed');
  
  // Scroll to the post after a brief delay for view transition
  setTimeout(() => {
    post.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 50);
}
</script>
