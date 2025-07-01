// 導航欄移動端切換
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 圖片彈窗功能
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

function openModal(imgSrc, title, description) {
    modalImg.src = imgSrc;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden'; // 防止背景滾動
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢復背景滾動
    }, 300);
}

// 點擊彈窗外部關閉
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// 滾動時導航欄效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});

// 按ESC鍵關閉彈窗
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});