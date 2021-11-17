const buttonImg = document.querySelectorAll(".carrousel__punto") 
const carrouselPrincipal = document.getElementById("carrouselPrincipal")
const logoIdioma = document.getElementById("logoIdioma")
const bioParrafo = document.getElementById("bioParrafo")
const serviciosTitulo = document.getElementById("servicios__titulo")
const index = document.getElementById("enlace-index")
const servicios = document.getElementById("enlace-servicios")
const tecnologias = document.getElementById("enlace-tecnologias")
const proyectos = document.getElementById("enlace-proyectos")
const contacto = document.getElementById("enlace-contacto")
const subtituloDiseño = document.getElementById("subtitulo-diseño")
const subtituloAplicaciones = document.getElementById("subtitulo-aplicaciones")
const titleTecnologias = document.getElementById("tecnologias")
const titleProyectos = document.getElementById("proyectos")
const titleContacto = document.getElementById("contacto")
const formLegend = document.getElementById("formLegend")
let enlaceProyectos = document.getElementById("enlaceProyectos")

/* Enlaces Proyectos */

let array = ["https://festivalmusicasite.netlify.app/",
             "https://blogsitecafe.netlify.app/", 
             "https://sitefreelancer2021.netlify.app/", 
             "https://webstorepage.netlify.app/"]

/* Traduccion */

buttonImg.forEach((punto, index) => {
    buttonImg[index].addEventListener("click", () => {
        let posicion = index
        let calculoOperacion = posicion * -100
        carrouselPrincipal.style.transform = `translateX(${calculoOperacion}%)`
        buttonImg.forEach((punto, index) => {
            buttonImg[index].classList.remove("boton__activo")
        })
        buttonImg[index].classList.add("boton__activo")
        enlaceProyectos.setAttribute("HREF", array[index])
    })
})  

logoIdioma.addEventListener("click", (e) => {
    e.preventDefault();
    if(logoIdioma.getAttribute("SRC") == "assets/img/ing.png") {
        logoIdioma.setAttribute("SRC", "assets/img/arg.png")
        bioParrafo.textContent = "My name is Nicolas and I am passionate about technology. I try to keep up to date with new trends and I am always looking for new challenges. I currently reside in Buenos Aires, Argentina."
        serviciosTitulo.textContent = "Services" 
        index.textContent = "Home"
        servicios.textContent = "Services"
        tecnologias.textContent = "Technologies"
        proyectos.textContent = "Projects"
        contacto.textContent = "Contact"
        subtituloDiseño.textContent = "Web Design"
        subtituloAplicaciones.textContent = "Web Applications"
        titleTecnologias.textContent = "Technologies"
        titleProyectos.textContent = "Projects"
        titleContacto.textContent = "Contact"
        formLegend.textContent = "Contact me by filling in all the fields"
    } else {
        logoIdioma.setAttribute("SRC", "assets/img/ing.png")
        bioParrafo.textContent = "Mi nombre es Nicolas y me apasiona la tecnologia. Intento mantenerme actualizado de las nuevastendencias y siempre busco nuevos desafios. Actualmente resido en Buenos Aires, Argentina."
        serviciosTitulo.textContent = "Servicios" 
        index.textContent = "Inicio"
        servicios.textContent = "Servicios"
        tecnologias.textContent = "Tecnologias"
        proyectos.textContent = "Proyectos"
        contacto.textContent = "Contacto"
        subtituloDiseño.textContent = "Diseño Web"
        subtituloAplicaciones.textContent = "Aplicaciones Web"
        titleTecnologias.textContent = "Tecnologias"
        titleProyectos.textContent = "Proyectos"
        titleContacto.textContent = "Contacto"
        formLegend.textContent = "Contactame llenando todos los campos"
    }
})

/* Efecto Smooth en Scroll */

document.addEventListener('DOMContentLoaded', function() {
    scrollNav()
})

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    enlaces.forEach(function(enlace) {                                    
        enlace.addEventListener('click', function(e) {
            e.preventDefault()
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}