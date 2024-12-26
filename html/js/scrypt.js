// script.js

// Ждём загрузки контента страницы
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
  
    // Таймаут на 2 секунды, чтобы скрыть загрузку
    setTimeout(() => {
      preloader.classList.add("hidden"); // Добавляем класс для плавного исчезновения
      
      // Ждём окончания перехода (1 секунда) и затем показываем контент
      setTimeout(() => {
        mainContent.style.display = "block"; // Показываем основной контент
        document.body.style.overflow = "auto"; // Возвращаем скролл
      }, 1000); // Время перехода (совпадает с CSS)
    }, 2000); // Задержка в миллисекундах (2000 = 2 секунды)
  });

  