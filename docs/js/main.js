/* ===========================================
   MAIN JS - Shared utilities & nav
   Auto-detect depth to generate correct relative paths
   =========================================== */

// Detect depth: index.html at root = depth 0, subfolder pages = depth 1
function getDepth() {
  const path = window.location.pathname;
  // Count '/' segments after the repo root
  // e.g. /mang_may_tinh_luyen_tap/  -> depth 0
  //      /mang_may_tinh_luyen_tap/theory/chuong1.html -> depth 1
  //      /mang_may_tinh_luyen_tap/labs/subnet-calc.html -> depth 1
  // Strip trailing slash and filename
  let p = path.replace(/\/[^/]*\.(html?|php)$/, '');
  p = p.replace(/\/$/, '');
  // Count remaining slashes
  const matches = p.match(/\//g) || [];
  // First slash is the leading slash, so depth = matches.length - 1
  // But on GitHub Pages the path includes the repo name as first segment
  // So /repo/ -> depth 0, /repo/theory -> depth 1
  // matches for "/repo" = 1, for "/repo/theory" = 2
  // depth = matches.length - 1
  return Math.max(0, matches.length - 1);
}

function prefix() {
  return getDepth() === 0 ? '' : '../';
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Auto TOC scrollspy
  const tocLinks = document.querySelectorAll('.toc a');
  const headings = document.querySelectorAll('h2[id], h3[id]');
  if (tocLinks.length && headings.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-80px 0px -70% 0px' });
    headings.forEach(h => observer.observe(h));
  }

  // Smooth scroll for TOC
  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
});

// Render shared top nav into placeholder
function renderNav(active) {
  const p = prefix();
  const html = `
  <header class="topbar">
    <div class="topbar-inner">
      <a href="${p}index.html" class="brand">
        <div class="brand-logo">M</div>
        <span>Mạng Máy Tính<br><small style="font-size:.7rem;color:var(--text-muted);font-weight:500;">Review Hub</small></span>
      </a>
      <button class="menu-toggle" aria-label="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <nav class="nav-links">
        <a class="nav-link ${active==='home'?'active':''}" href="${p}index.html">Trang chủ</a>
        <a class="nav-link ${active==='theory'?'active':''}" href="${p}theory/chuong1.html">Lý thuyết</a>
        <a class="nav-link ${active==='labs'?'active':''}" href="${p}labs/subnet-calc.html">Mô phỏng</a>
        <a class="nav-link ${active==='quiz'?'active':''}" href="${p}quiz/trac-nghiem.html">Trắc nghiệm</a>
        <a class="nav-link ${active==='essay'?'active':''}" href="${p}quiz/tu-luan.html">Tự luận</a>
      </nav>
    </div>
  </header>`;
  const ph = document.getElementById('nav-placeholder');
  if (ph) ph.innerHTML = html;

  // Re-bind toggle after render
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

function renderFooter() {
  const p = prefix();
  const html = `
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <h4>Mạng Máy Tính - Review Hub</h4>
        <p style="color:#94A3B8;font-size:.92rem;line-height:1.6;">
          Tài liệu ôn tập đầy đủ, sinh động, trực quan cho môn Nhập môn Mạng máy tính.
          Bao gồm lý thuyết chi tiết, mô phỏng tương tác, ngân hàng câu hỏi trắc nghiệm và tự luận.
        </p>
      </div>
      <div>
        <h4>Nội dung</h4>
        <a href="${p}theory/chuong1.html">Khái niệm cơ bản</a>
        <a href="${p}theory/chuong2.html">Môi trường & Thiết bị</a>
        <a href="${p}theory/chuong3.html">Mô hình OSI</a>
        <a href="${p}theory/chuong4.html">IPv4 & Subnetting</a>
        <a href="${p}theory/chuong5.html">Quản trị Windows</a>
        <a href="${p}theory/chuong6.html">Cloud Computing</a>
      </div>
      <div>
        <h4>Luyện tập</h4>
        <a href="${p}labs/subnet-calc.html">Subnet Calculator</a>
        <a href="${p}labs/osi-encap.html">OSI Encapsulation</a>
        <a href="${p}labs/tcp-handshake.html">TCP Handshake</a>
        <a href="${p}labs/dhcp-dora.html">DHCP DORA</a>
        <a href="${p}labs/collision.html">Hub vs Switch</a>
        <a href="${p}quiz/trac-nghiem.html">Trắc nghiệm</a>
      </div>
    </div>
    <div class="footer-bottom">
      © 2026 Mạng Máy Tính Review Hub · Tài liệu học tập · Made with ❤ for students
    </div>
  </footer>`;
  const ph = document.getElementById('footer-placeholder');
  if (ph) ph.innerHTML = html;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
