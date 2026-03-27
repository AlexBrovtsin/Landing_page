// Инициализация Tailwind (на случай, если нужно)
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ Лендинг «Кристаллайзер» загружен!', 'color:#FF7A8A; font-size:16px; font-weight:bold');
});

// Обработка форм
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = `
        <svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
    `;

    setTimeout(() => {
        alert('✅ Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.');
        form.reset();
        btn.innerHTML = originalText;
    }, 1200);
}

// Привязка форм
document.getElementById('lead-form').addEventListener('submit', handleFormSubmit);

// Выбор тарифа
window.selectTariff = function(id) {
    const messages = {
        1: 'Вы выбрали тариф «Самостоятельный» — 3 900 ₽',
        2: 'Отлично! Тариф «С поддержкой» — 7 900 ₽ (самый популярный)',
        3: 'Премиум-тариф «Мастер» — 12 900 ₽'
    };
    if (confirm(messages[id] + '\n\nПерейти к форме оплаты?')) {
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
    }
};

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#form') return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});