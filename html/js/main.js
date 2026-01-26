// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы заказа
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные из формы
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const size = document.getElementById('size').value;
            const theme = document.getElementById('theme').value;
            
            // В реальном проекте здесь был бы AJAX-запрос к серверу
            // Для примера просто показываем сообщение
            alert(`Спасибо, ${name}! Ваша заявка на картину размером ${size} в тематике "${theme}" принята. Мы свяжемся с вами по телефону ${phone} в ближайшее время.`);
            
            // Очищаем форму
            orderForm.reset();
        });
    }
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});