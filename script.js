document.addEventListener("DOMContentLoaded", () => {
    const abrirMenuBtn = document.getElementById("abrir");
    const cerrarMenuBtn = document.getElementById("cerrar");
    const nav = document.getElementById("nav");
    const verMasBtn = document.getElementById("ver-mas-btn");
  
   
    abrirMenuBtn.addEventListener("click", () => {
        nav.classList.add("visible");
    });
  
    // Ocultar el menú
    cerrarMenuBtn.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
  
    // Desplazarse hacia la sección de información al hacer clic en "Ver más"
    verMasBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        
        // Desplazarse hacia la sección de información
        const targetID = verMasBtn.getAttribute("href");
        const targetElement = document.querySelector(targetID);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        }
    });
  });

//temas js

let items = document.querySelectorAll('.slider .list .item');
let next = document.querySelector('.arrow-next');  // Cambiado a .arrow-next
let prev = document.querySelector('.arrow-prev');  // Cambiado a .arrow-prev
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000)

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000)
}

function setPositionThumbnail() {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

var arrows = document.querySelectorAll(".arrow-main");

arrows.forEach(function (arrow) {
    arrow.addEventListener("click", function (e) {
        e.preventDefault();

        if (!arrow.classList.contains("animate")) {
            arrow.classList.add("animate");
            setTimeout(function () {
                arrow.classList.remove("animate");
            }, 1600);
        }
    });
});

new Swiper('.envoltura', {    
    loop: true,
    spaceBetween: 30,
  
    // viñeta de pagina
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation flechas
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
    }
  
  });
