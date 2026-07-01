/* ===========================================
   MAIN JS v4 - Shared utilities & nav
   - Bypass cache bằng version query string
   - Dùng absolute path (từ root repo) để tránh lỗi depth
   - Brand: "Mạng Máy Tính - Huy Tin2A"
   - Floating Donate button với QR code
   =========================================== */

// Lấy root path của website (ví dụ: /mang_may_tinh_luyen_tap/)
function getRoot() {
  const path = window.location.pathname;
  const docsIdx = path.lastIndexOf('/docs/');
  if (docsIdx >= 0) {
    return path.substring(0, docsIdx + 6);
  }
  const segments = path.split('/').filter(s => s.length > 0);
  const knownSubs = ['theory', 'labs', 'quiz', 'css', 'js', 'assets'];
  const subIdx = segments.findIndex(s => knownSubs.includes(s));
  if (subIdx > 0) {
    return '/' + segments.slice(0, subIdx).join('/') + '/';
  }
  return path.endsWith('/') ? path : path.substring(0, path.lastIndexOf('/') + 1);
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
  const r = getRoot();
  const html = `
  <header class="topbar">
    <div class="topbar-inner">
      <a href="${r}index.html" class="brand">
        <div class="brand-logo">M</div>
        <span>Mạng Máy Tính - Huy Tin2A<br><small style="font-size:.7rem;color:var(--text-muted);font-weight:500;">Review Hub</small></span>
      </a>
      <button class="menu-toggle" aria-label="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <nav class="nav-links">
        <a class="nav-link ${active==='home'?'active':''}" href="${r}index.html">Trang chủ</a>
        <a class="nav-link ${active==='theory'?'active':''}" href="${r}theory/chuong1.html">Lý thuyết</a>
        <a class="nav-link ${active==='labs'?'active':''}" href="${r}labs/subnet-calc.html">Mô phỏng</a>
        <a class="nav-link ${active==='quiz'?'active':''}" href="${r}quiz/trac-nghiem.html">Trắc nghiệm</a>
        <a class="nav-link ${active==='essay'?'active':''}" href="${r}quiz/tu-luan.html">Tự luận</a>
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
  const r = getRoot();
  const html = `
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <h4>Mạng Máy Tính - Huy Tin2A</h4>
        <p style="color:#94A3B8;font-size:.92rem;line-height:1.6;">
          Tài liệu ôn tập đầy đủ, sinh động, trực quan cho môn Nhập môn Mạng máy tính.
          Bao gồm lý thuyết chi tiết, mô phỏng tương tác, ngân hàng câu hỏi trắc nghiệm và tự luận.
        </p>
      </div>
      <div>
        <h4>Nội dung</h4>
        <a href="${r}theory/chuong1.html">Khái niệm cơ bản</a>
        <a href="${r}theory/chuong2.html">Môi trường & Thiết bị</a>
        <a href="${r}theory/chuong3.html">Mô hình OSI & TCP/IP</a>
        <a href="${r}theory/chuong4.html">IPv4 & Subnetting</a>
        <a href="${r}theory/chuong6.html">Cloud Computing</a>
      </div>
      <div>
        <h4>Luyện tập</h4>
        <a href="${r}labs/subnet-calc.html">Subnet Calculator</a>
        <a href="${r}labs/osi-encap.html">OSI Encapsulation</a>
        <a href="${r}labs/tcp-handshake.html">TCP Handshake</a>
        <a href="${r}labs/dhcp-dora.html">DHCP DORA</a>
        <a href="${r}labs/collision.html">Hub vs Switch</a>
        <a href="${r}quiz/trac-nghiem.html">Trắc nghiệm</a>
      </div>
    </div>
    <div class="footer-bottom">
      © 2026 Mạng Máy Tính - Huy Tin2A · Tài liệu học tập · Made with ❤ for students
    </div>
  </footer>`;
  const ph = document.getElementById('footer-placeholder');
  if (ph) ph.innerHTML = html;
}

// Render floating Donate QR card (hiện luôn, có nút X để tắt)
function renderDonate() {
  const r = getRoot();

  // Tạo card QR nổi ở góc dưới phải
  const card = document.createElement('div');
  card.id = 'donate-card';
  card.innerHTML = `
    <button class="donate-close" onclick="closeDonateCard()" aria-label="Đóng QR">✕</button>
    <div class="donate-card-header">
      <span class="donate-emoji">☕</span>
      <div>
        <div class="donate-title">Ủng hộ tác giả</div>
        <div class="donate-subtitle">Mời ly cafe nhé! ❤️</div>
      </div>
    </div>
    <img src="${r}assets/donate-qr.png" alt="QR Donate" class="donate-qr-img" />
    <div class="donate-hint">Quét mã QR để ủng hộ</div>
  `;
  document.body.appendChild(card);

  // Tạo nút nổi nhỏ (ẩn mặc định) - hiện lại khi user đã tắt QR card
  const fab = document.createElement('div');
  fab.id = 'donate-fab';
  fab.style.display = 'none';
  fab.innerHTML = `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <span>Donate</span>
  `;
  fab.title = 'Hiện lại QR ủng hộ';
  fab.addEventListener('click', reopenDonateCard);
  document.body.appendChild(fab);
}

function closeDonateCard() {
  const card = document.getElementById('donate-card');
  if (card) card.style.display = 'none';
  const fab = document.getElementById('donate-fab');
  if (fab) fab.style.display = 'inline-flex';
}

function reopenDonateCard() {
  const card = document.getElementById('donate-card');
  if (card) card.style.display = 'block';
  const fab = document.getElementById('donate-fab');
  if (fab) fab.style.display = 'none';
}

window.closeDonateCard = closeDonateCard;
window.reopenDonateCard = reopenDonateCard;

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderDonate();
});
