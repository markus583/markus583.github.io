---
layout: page
permalink: /photography/
nav: true
nav_order: 10
title: photography
description: A few moments from life.
---

<div class="photography-intro">
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
