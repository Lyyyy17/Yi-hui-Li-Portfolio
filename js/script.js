document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');

    if (toggleButton && navMenu) {
        // 監聽按鈕點擊事件，切換選單開關
        toggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            
            // 變更按鈕圖示：漢堡線 (☰) 或 關閉 (✕)
            if (navMenu.classList.contains('open')) {
                toggleButton.textContent = '✕'; 
            } else {
                toggleButton.textContent = '☰'; 
            }
        });
        
        // 點擊導航連結後自動關閉選單，提升手機版 UX
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                toggleButton.textContent = '☰';
            });
        });
    }
});