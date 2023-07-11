let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); // llamada a la funcion (opcional)
});

// Agregar evento "click" al elemento <body> para cerrar el sidebar cuando se hace clic fuera de él
document.querySelector("body").addEventListener("click", (event) => {
  // Si el elemento que se hizo clic no es el botón de cierre ni está dentro del sidebar, entonces cerrar el sidebar
  if (event.target !== closeBtn && !sidebar.contains(event.target)) {
    sidebar.classList.remove("open");
    menuBtnChange(); // llamada a la funcion (opcional)
  }
});

// funcion para cambiar boton de barra de navegacion (opcional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bi-menu", "b-menu-alt-right");
  } else {
    closeBtn.classList.replace("bi-menu-alt-right", "bi-menu");
  }
}

// Funcion de cambio de theme

const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const toggleIcon = document.getElementById('toggle-icon');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

toggleIcon.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
    toggleIcon.classList.toggle('bi-toggle2-on');
    toggleIcon.classList.toggle('bi-toggle2-off');
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);



// Funcion de animacion en tarjetas

const filterContainer = document.querySelector(".gallery__categories");

const galleryItems = document.querySelectorAll(".project__card");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active")
    const filterValue = event.target.getAttribute("data-filter")
    galleryItems.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide")
        item.classList.add("show")
      } else {
        item.classList.remove("show")
        item.classList.add("hide")
      }
    })
  }
})

function scrollToSection(sectionId){
  document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
}

// Funcion de animacion en tarjetas

const filterContainers = document.querySelector(".gallery__categorie");

const galleryItem = document.querySelectorAll(".certi__card");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active")
    const filterValue = event.target.getAttribute("data-filter")
    galleryItems.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide")
        item.classList.add("show")
      } else {
        item.classList.remove("show")
        item.classList.add("hide")
      }
    })
  }
})

function scrollToSection(sectionId){
  document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
}