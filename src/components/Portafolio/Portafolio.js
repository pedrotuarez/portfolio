import React, { useState, useEffect } from 'react';
import SliderContent from './js/SliderContent';
import Arrows from './js/Arrows';
import Dots from './js/Dots';
import imagesPortfolio from './js/imagesPortfolio';
import imageSliderp1 from './js/imageSliderp1';
import './css/Portafolio.css';

let len = 0;

function Portafolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  len = imageSliderp1.length - 1;

  const activeBtn = () => {
    
    const $btnMenu = document.querySelector(".p1-menu-btn");
    const $menu = document.querySelector(".p1-menu");

    $btnMenu.firstElementChild.classList.toggle("p1-none");
    $btnMenu.lastElementChild.classList.toggle("p1-none");
    $menu.classList.toggle("p1-is-active");
  
    document.addEventListener("click", (e)=>{
      if(!e.target.matches(".p1-menu a")) return false;
    
      $btnMenu.firstElementChild.classList.remove("p1-none");
      $btnMenu.lastElementChild.classList.add("p1-none");
      $menu.classList.remove("p1-is-active");
    });
  
  }

  const submitForm = () => {

    const $form = document.querySelector(".p1-contact-form");
    const $loader = document.querySelector(".p1-contact-form-loader");
    const $response = document.querySelector(".p1-contact-form-response");
   
    $form.addEventListener("submit", (e)=>{
      e.preventDefault();
      $loader.classList.remove("p1-none");
    
      fetch("https://formsubmit.co/ajax/pedrotuarez.g@gmail.com", {
        method:"POST",
        body:new FormData(e.target)
      }).then((res) => (res.ok?res.json():Promise.reject(res)))
      .then(json => {
        window.location.hash = "#gracias";
        $form.reset();
      })
      .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error, intenta nuevamente";
        $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
      }).finally(() => {
        $loader.classList.add("p1-none");
        setTimeout(() => {
          window.location.hash = "#close";
        },3000);
      });

    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);


  return (
    <>
      <header className="p1-header">
        <section className="p1-container">
          <div className="p1-logo">
            <a href="https://pedrotuarez.github.io/portfolio">pedrotuarez</a>
          </div>
          <button className="p1-menu-btn" onClick={activeBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24">
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/>
            </svg>
            <svg className="p1-none" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24">
              <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758
              10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192
              17.656 17.606 16.242 13.364 12 17.606 7.758z"/>
            </svg>
          </button>
          <nav className="p1-menu">
            <a href="#inicio">Inicio</a>
            <a href="#acerca">Acerca</a>
            <a href="#servicios">Servicios</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </section>
      </header>
      
      <section id="inicio" className="p1-home">
        <article className="p1-hero-image-h">
          <aside className="p1-hero-image-opacity">
            <div className="p1-hero-image-content">
              <h2 className="p1-hero-image-title"
                  style={{'--hero-text-color': 'var(--white-color)'}}>
                Bienvenido<br/>a mi Sitio Web
              </h2>
              <a href="#contacto" className="p1-btn">CONTÁCTAME</a>
            </div>
          </aside>
        </article>
      </section>
      <section id="acerca"
        className="p1-about p1-section p1-container p1-full-lg-screen">
        <article className="p1-text-lg-right">
          <aside className="p1-text-center p1-text-lg-right">
            <h1>Pedro Tuárez</h1>
            <h5>Web Design</h5>
          </aside>
          <p>
            Desde el año 2012 tengo experiencia en el área del Desarrollo 
            <i>Web</i> y la educación. Imparto clases y doy asesorías para 
            personas y empresas, tanto presencial, como por Internet.
          </p>
          <p>
            También colaboro en proyectos como <i>Freelance FullStack</i>. Estoy 
            más orientado al <i>Frontend</i>, pero también hago <i>Backend</i>.
          </p>
          <p>
            Disfruto llevar a cabo la maquetación e interactividad de 
            interfaces <i>Web</i> así como la optimización, para el buen 
            posicionamiento y rendimiento de carga de Sitios y Aplicaciones 
            <i>Web</i>.
          </p>
          <p>
            También cuento con experiencia en el área de <i>Social Media</i>, 
            &nbsp;<i>Marketing</i> de Contenido y <i>SEO</i>.
          </p>
          <div className="p1-text-center p1-text-lg-center">
            <a href="PedroCurriculo2024.pdf"
               download = "PedroCurriculo2024.pdf" 
               className="p1-btn" >
               Download my CV
            </a>
          </div>
        </article>
        <article className="p1-text-center">
          <img src={imagesPortfolio[0].src} alt={imagesPortfolio[0].alt}
           className="p1-gray-scale"/>
        </article>
        <article>
          <h2 className="p1-text-center p1-text-lg-left">Mis Habilidades</h2>
          <div className="p1-progress">
            <p>
              <b>Desarrollo <i>Web Frontend</i></b>
              <b>90%</b>
            </p>
            <progress value="90" min="0" max="100"></progress>
          </div>
          <div className="p1-progress">
            <p>
              <b>Diseño <i>Web</i></b>
              <b>85%</b>
            </p>
            <progress value="85" min="0" max="100"></progress>
          </div>
          <div className="p1-progress">
            <p>
              <b>Web Performance Optimization<i>WPO</i> y <i>SEO</i></b>
              <b>80%</b>
            </p>
            <progress value="80" min="0" max="100"></progress>
          </div>
          <div className="p1-progress">
            <p>
              <b>Desarrollo <i>Web Backend</i></b>
              <b>75%</b>
            </p>
            <progress value="75" min="0" max="100"></progress>
          </div>
          <div className="p1-progress">
            <p>
              <b><i>Social Media</i> y <i>Marketing</i> de Contenido</b>
              <b>60%</b>
            </p>
            <progress value="60" min="0" max="100"></progress>
          </div>
        </article>
      </section>
      <section id="servicios" className="p1-services p1-section p1-bg-gray-light">
        <div className="p1-container p1-full-lg-screen">
          <h2 className="p1-section-title">¿Qué te ofrezco?</h2>
          <article className="p1-service-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,
                    2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,
                    3z M4,19V7h16 l0.002,12H4z"/>
              <path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414
                    13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13
                    13.293 15.293 14.707 16.707 18.414 13z"/>
            </svg>
            <h3>Programación <i>Web</i></h3>
            <p>
              Desarrollo sitios y aplicaciones para plataformas <i>Web</i>. 
              Te ayudo a construir tu proyecto de principio a fin 
              <i>Frontend</i>, <i>Backend</i>&nbsp; y Base de Datos.
            </p>
          </article>
          <article className="p1-service-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,
                    1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,
                    2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,
                    17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z"/>
            </svg>
            <h3>Diseño <i>Web</i></h3>
            <p>
              Prototipo y maqueto tus diseños estáticos y los convierto en 
              increíbles sitios y aplicaciones <i>web</i> responsivas, óptimas 
              y accesibles.
            </p>
          </article>
          <article className="p1-service-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <circle cx="12" cy="20" r="2"/>
              <circle cx="12" cy="4" r="2"/>
              <circle cx="6.343" cy="17.657" r="2"/>
              <circle cx="17.657" cy="6.343" r="2"/>
              <circle cx="4" cy="12" r="2.001"/>
              <circle cx="20" cy="12" r="2"/>
              <circle cx="6.343" cy="6.344" r="2"/>
              <circle cx="17.657" cy="17.658" r="2"/>
            </svg>
            <h3><i>WPO</i></h3>
            <p>
              <i>Web Performance Optimization</i>. Hago que tus sitios y 
              aplicaciones <i>web</i> mejoren su tiempo de carga y respuesta.
            </p>
          </article>
          <article className="p1-service-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,
                    4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,
                    18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,
                    4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,
                    10,4z"/>
              <path d="M11.412,8.586C11.791,8.966,12,9.468,12,
                    10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-
                    1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,
                    8.586z"/>
            </svg>
            <h3><i>SEO</i></h3>
            <p>
              <i>Search Engine Optimization</i>. Optimizo tus sitios y
              aplicaciones <i>web</i> para que mejoren su posición en
              los buscadores orgánicamente.
            </p>
          </article>
          <article className="p1-service-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M16.018,3.815L15.232,8h-4.966l0.716-3.815L9.018,3.815L8.232,
                    8H4v2h3.857l-0.751,4H3v2h3.731l-0.714,3.805l1.965,
                    0.369 L8.766,16h4.966l-0.714,3.805l1.965,0.369L15.766,
                    16H20v-2h-3.859l0.751-4H21V8h-3.733l0.716-3.815L16.018,
                    3.815z M14.106,14H9.141 l0.751-4h4.966L14.106,14z"/>
            </svg>
            <h3><i>SMO</i></h3>
            <p>
              <i>Social Media Optimization</i> y <i>Marketing</i> de 
              contenido. Te ayudo a elegir los canales digitales correctos 
              para llegar a tu audiencia.
            </p>
          </article>
          <article className="p1-service-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path fill="none"
                d="M4 15v4h16.002L20 15H4zM16 18h-2v-2h2V18zM19 18h-2v-2h2V18zM4
                5v4h16.002L20 5H4zM16 8h-2V6h2V8zM19 8h-2V6h2V8z"/>
              <path
                d="M20 3H4C2.897 3 2 3.897 2 5v4c0 1.103.897 2 2 2h16c1.103 0
                2-.897 2-2V5C22 3.897 21.103 3 20 3zM4 9V5h16l.002 4H4zM20 
                13H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 
                2-.897 2-2v-4C22 13.897 21.103 13 20 13zM4 19v-4h16l.002 
                4H4z"/>
              <path
                d="M17 6H19V8H17zM14 6H16V8H14zM17 16H19V18H17zM14 16H16V18H14z"/>
            </svg>
            <h3><i>Web Hosting</i></h3>
            <p>
              ¿No cuentas con donimio y hospedaje <i>web</i> para tu proyecto? 
              No te preocupes. De esas cosas técnicas me encargo yo.
            </p>
          </article>
        </div>
      </section>
      <section id="portafolio" className="p1-portfolio p1-section">
        <div className="p1-container">
          <h2 className="p1-section-title">Mis Trabajos</h2>
          <a href="#trabajo-1" className="p1-portfolio-card">
            <img src={imagesPortfolio[1].src} alt={imagesPortfolio[1].alt}/>
            <aside className="p1-portfolio-card-info">
              <div>
                <h3>Proyecto 1</h3>
                <p>
                  Proyecto Web de cuatro páginas. Dar click en esta 
                  descripción para ir al Proyecto. 
                </p>
              </div>
            </aside>
          </a>
          <a href="#trabajo-2" className="p1-portfolio-card">
            <img src={imagesPortfolio[2].src} alt={imagesPortfolio[2].alt}/>
            <aside className="p1-portfolio-card-info">
              <div>
                <h3>Proyecto 2</h3>
                <p>
                  Proyecto Web de una página. Dar click en esta 
                  descripción para ir al proyecto.
                </p>
              </div>
            </aside>
          </a>
          <a href="#trabajo-3" className="p1-portfolio-card">
            <img src={imagesPortfolio[3].src} alt={imagesPortfolio[3].alt}/>
            <aside className="p1-portfolio-card-info">
              <div>
                <h3>Proyecto 3</h3>
                <p>
                  Proyecto Web de una página. Dar click en esta 
                  descripción para ir al proyecto.
                </p>
              </div>
            </aside>
          </a>
          <a href="#trabajo-4" className="p1-portfolio-card">
            <img src={imagesPortfolio[4].src} alt={imagesPortfolio[4].alt}/>
            <aside className="p1-portfolio-card-info">
              <div>
                <h3>Proyecto 4</h3>
                <p>
                  Su cuerpo físico posee un termostato interno autoconstruido. 
                  Este es un servo-mecanismo que mantiene constantemente su 
                  temperatura interna a treinta y seis grados y medio. El sujeto 
                  también posee un termostato espiritual interno, construido por él 
                  mismo que le capacita para que pueda mantener un clima y atmósfera 
                  emocionales constantes a pesar del tiempo EMOCIONAL que 
                  le circunde.
                </p>
              </div>
            </aside>
          </a>
          <a href="#trabajo-5" className="p1-portfolio-card">
            <img src={imagesPortfolio[5].src} alt={imagesPortfolio[5].alt}/>
            <aside className="p1-portfolio-card-info">
              <div>
                <h3>Proyecto 5</h3>
                <p>
                  La inferioridad y la superioridad son las partes reversibles de la 
                  misma moneda. La curación consiste en llegar a reconocer la falsedad 
                  total de la moneda en cuestión. Y la verdad acerca de un individuo 
                  es esta: Usted no es "inferior". Usted no es "superior"... Usted es 
                  simplemente "usted". Usted como personalidad, no se encuentra en 
                  competencia con ninguna otra personalidad, debido a que no existe 
                  otra persona en la superficie de la tierra que sea absolutamente 
                  como usted.
                </p>
              </div>
            </aside>
          </a>
          <a href="#trabajo-6" className="p1-portfolio-card">
            <img src={imagesPortfolio[6].src} alt={imagesPortfolio[6].alt}/>
            <aside className="p1-portfolio-card-info">
              <div>
                <h3>Proyecto 6</h3>
                <p>
                  Nuestro Sistema Nervioso no podrá expresar el fracaso real 
                  cuando se hallare sometido a la influencia de un fracaso 
                  imaginario. No podemos atisbar conscientemente adentro de 
                  nuestro mecanismo de creación para ver si éste se halla dirigido 
                  por el éxito o por el fracaso. Pero sí podemos determinar, 
                  mediante nuestros propios sentimientos, su "posición actual". 
                  En el mismo momento en que este mecanismo se orienta hacia el 
                  éxito, en ese instante experimentamos "la sensación de la 
                  victoria"...
                </p>
              </div>
            </aside>
          </a>
        </div>
      </section>
      <section id="trabajo-1" className="p1-modal">
        <div className="p1-modal-content">
          <a href="#cerrar" className="p1-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,
                    10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,
                    13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,
                    9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,
                    12L16.207,14.793z"/>
            </svg>
          </a>
          <article className="p1-portfolio-modal">
            <img src={imagesPortfolio[1].src} alt={imagesPortfolio[1].alt}/>
            <div className="p1-portfolio-info">
              <h3>Your Restaurant</h3>
              <p>
                Proyecto realizado en HTML, CSS y JavaScript. Uso react
                como librería para integrar este, y los otros dos proyectos 
                en la Web principal. Click en el enlace de la parte inferior 
                de este modal para mostrar web YourRestaurant.   

              </p>
              <aside className="p1-portfolio-details">
                <small><b>CLIENTE:</b></small>
                <small>Cliente Universal</small>
                <small><b>FECHA:</b></small>
                <small>01/10/2024</small>
                <small><b>TIPO:</b></small>
                <small>Proyecto Universal</small>
                <small><b>ENLACE:</b></small>
                <small>
                  <a href="https://pedrotuarez.github.io/yourrestaurant">
                    Ir a YourRestaurant...
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section id="trabajo-2" className="p1-modal">
        <div className="p1-modal-content">
          <a href="#cerrar" className="p1-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,
                    10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,
                    13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,
                    9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,
                    12L16.207,14.793z"/>
            </svg>
          </a>
          <article className="p1-portfolio-modal">
            <img src={imagesPortfolio[2].src} alt={imagesPortfolio[2].alt}/>
            <div className="p1-portfolio-info">
              <h3>Online Shop</h3>
              <p>
                Proyecto realizado en HTML, CSS y JavaScript. 
                Sólo página principal con slider y varios efectos. 
                Click en el enlace de la parte inferior de este 
                modal para mostrar web OnlineShop.
              </p>
              <aside className="p1-portfolio-details">
                <small><b>CLIENTE:</b></small>
                <small>Cliente Universal</small>
                <small><b>FECHA:</b></small>
                <small>01/10/2024</small>
                <small><b>TIPO:</b></small>
                <small>Proyecto Universal</small>
                <small><b>ENLACE:</b></small>
                <small>
                  <a href="https://pedrotuarez.github.io/onlineshop">
                    Ir a OnlineShop...  
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section id="trabajo-3" className="p1-modal">
        <div className="p1-modal-content">
          <a href="#cerrar" className="p1-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,
                    10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,
                    13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,
                    9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,
                    12L16.207,14.793z"/>
            </svg>
          </a>
          <article className="p1-portfolio-modal">
            <img src={imagesPortfolio[3].src} alt={imagesPortfolio[3].alt}/>
            <div className="p1-portfolio-info">
              <h3>Room Design</h3>
              <p>
                Proyecto realizado en HTML, CSS y JavaScript. 
                Sólo página principal. Click en el enlace de 
                la parte inferior de este modal para mostrar 
                web RoomDesign.
              </p>
              <aside className="p1-portfolio-details">
                <small><b>CLIENTE:</b></small>
                <small>Cliente Universal</small>
                <small><b>FECHA:</b></small>
                <small>01/10/2024</small>
                <small><b>TIPO:</b></small>
                <small>Proyecto Universal</small>
                <small><b>ENLACE:</b></small>
                <small>
                  <a href="https://pedrotuarez.github.io/roomdesign">
                    Ir a RoomDesign...  
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section id="trabajo-4" className="p1-modal">
        <div className="p1-modal-content">
          <a href="#cerrar" className="p1-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,
                    10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,
                    13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,
                    9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,
                    12L16.207,14.793z"/>
            </svg>
          </a>
          <article className="p1-portfolio-modal">
            <img src={imagesPortfolio[4].src} alt={imagesPortfolio[4].alt}/>
            <div className="p1-portfolio-info">
              <h3>NOMBRE DEL PROYECTO 4</h3>
              <p>
                Proyecto por realizar.
              </p>
              <aside className="p1-portfolio-details">
                <small><b>CLIENTE:</b></small>
                <small>Cliente Universal</small>
                <small><b>FECHA:</b></small>
                <small>01/10/2024</small>
                <small><b>TIPO:</b></small>
                <small>Proyecto Universal</small>
                <small><b>ENLACE:</b></small>
                <small>
                  <a href="https://pedrotuarez.github.io/portfolio">
                    https://
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section id="trabajo-5" className="p1-modal">
        <div className="p1-modal-content">
          <a href="#cerrar" className="p1-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,
                    10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,
                    13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,
                    9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,
                    12L16.207,14.793z"/>
            </svg>
          </a>
          <article className="p1-portfolio-modal">
            <img src={imagesPortfolio[5].src} alt={imagesPortfolio[5].alt}/>
            <div className="p1-portfolio-info">
              <h3>NOMBRE DEL PROYECTO 5</h3>
              <p>
                Proyecto por realizar.
              </p>
              <aside className="p1-portfolio-details">
                <small><b>CLIENTE:</b></small>
                <small>Cliente Universal</small>
                <small><b>FECHA:</b></small>
                <small>01/10/2024</small>
                <small><b>TIPO:</b></small>
                <small>Proyecto Universal</small>
                <small><b>ENLACE:</b></small>
                <small>
                  <a href="https://pedrotuarez.github.io/portfolio">
                    https://
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section id="trabajo-6" className="p1-modal">
        <div className="p1-modal-content">
          <a href="#cerrar" className="p1-modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,
                    10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,
                    13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,
                    9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,
                    12L16.207,14.793z"/>
            </svg>
          </a>
          <article className="p1-portfolio-modal">
            <img src={imagesPortfolio[6].src} alt={imagesPortfolio[6].alt}/>
            <div className="p1-portfolio-info">
              <h3>NOMBRE DEL PROYECTO 6</h3>
              <p>
                Proyecto por realizar.
              </p>
              <aside className="p1-portfolio-details">
                <small><b>CLIENTE:</b></small>
                <small>Cliente Universal</small>
                <small><b>FECHA:</b></small>
                <small>01/10/2024</small>
                <small><b>TIPO:</b></small>
                <small>Proyecto Universal</small>
                <small><b>ENLACE:</b></small>
                <small>
                  <a href="https://pedrotuarez.github.io/portfolio">
                    https://
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section id="testimonios" className="p1-testimonials">
        <article className="p1-hero-image-c">
          <aside className="p1-hero-image-opacity"
                 style={{'--hero-opacity-color': 'var(--white-alpha-color)'}}>
            <div className="p1-hero-image-content">
              <div className="p1-container">
                <h2 className="p1-section-title"
                    style={{'--hero-text-color': 'var(--white-color)'}}>
                   Mis clientes dicen
                </h2>
                <article className="p1-carousel"
                  style={{'--carousel-bg-color': 'var(--white-alpha-color)'}}
                >
                  <SliderContent 
                    activeIndex={activeIndex} 
                    imageSliderp1={imageSliderp1} />
                  <Arrows prevSlidep1={
                    () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    } 
                    nextSlidep1={
                    () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    }
                  />
                  <Dots 
                    activeIndex={activeIndex} 
                    imageSliderp1={imageSliderp1} 
                    onclick={(activeIndex) => setActiveIndex(activeIndex)}  
                  />
                </article>
              </div>
            </div>
          </aside>
        </article>
      </section>
      <section id="contacto" className="p1-contact p1-section">
        <div className="p1-container">
          <h2 className="p1-section-title">
            ¿Interesado?
          </h2>
          <article className="p1-contact-cards">
            <aside className="p1-contact-card p1-box-shadow-1">
              <svg width="37" height="28" 
                viewBox="0 0 37 28" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 
                      28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 
                      20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 
                      20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 
                      28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 
                      7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 
                      7.125 18.625 7.1875 18.5 7.3125ZM36.6875 13.75L31.5 
                      9.4375V0.8125C31.5 0.375 31.125 0.0625 30.75 
                      0.0625H27.25C26.8125 0.0625 26.5 0.375 26.5 
                      0.8125V5.3125L20.875 0.6875C20.375 0.3125 19.6875 
                      0.0625 19 0.0625C18.25 0.0625 17.5625 0.3125 17.0625 
                      0.6875L1.25 13.75C1.0625 13.875 0.9375 14.125 0.9375 
                      14.3125C0.9375 14.5 1.0625 14.6875 1.125 14.8125L2.75 
                      16.75C2.875 16.9375 3.0625 17 3.3125 17C3.5 17 3.6875 
                      16.9375 3.8125 16.8125L18.5 4.75C18.625 4.625 18.8125 
                      4.5625 19 4.5625C19.125 4.5625 19.3125 4.625 19.4375 
                      4.75L34.125 16.8125C34.25 16.9375 34.4375 17 34.625 
                      17C34.875 17 35.0625 16.9375 35.1875 16.75L36.8125 
                      14.8125C36.9375 14.6875 37 14.5 37 14.3125C37 14.125 
                      36.875 13.875 36.6875 13.75Z" fill="#D90062"/>
              </svg>
              <h5>UBICACIÓN</h5>
              <small><i>Caracas</i>, Dtto. Capital - Venezuela</small>
            </aside>
            <aside className="p1-contact-card p1-box-shadow-1">
              <svg width="33" height="32" 
                viewBox="0 0 33 32" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M31.8125 1.5625L25.3125 0.0625C24.625 -0.125 23.875 
                      0.25 23.5625 0.9375L20.5625 7.9375C20.3125 8.5625 
                      20.5 9.25 21 9.6875L24.8125 12.8125C22.5625 17.5625 
                      18.625 21.5625 13.75 23.875L10.625 20.0625C10.1875 
                      19.5625 9.5 19.375 8.875 19.625L1.875 22.625C1.1875 
                      22.9375 0.875 23.6875 1 24.375L2.5 30.875C2.6875 
                      31.5625 3.25 32 4 32C20 32 33 19.0625 33 3C33 2.3125 
                      32.5 1.75 31.8125 1.5625Z" fill="#D90062"/>
              </svg>
              <h5>TELÉFONO</h5>
              <small className="p1-contact-phone">(+58) 0412-699.69.41</small>
            </aside>
            <aside className="p1-contact-card p1-box-shadow-1">
              <svg width="32" height="24" 
                viewBox="0 0 32 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 
                      15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 
                      18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 
                      9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 
                      22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 
                      21V8.25C32 7.9375 31.625 7.75 31.375 7.9375ZM16 
                      16C17.4375 16.0625 19.5 14.1875 20.5625 13.4375C28.875 
                      7.4375 29.5 6.875 31.375 5.375C31.75 5.125 32 4.6875 
                      32 4.1875V3C32 1.375 30.625 0 29 0H3C1.3125 0 0 1.375 
                      0 3V4.1875C0 4.6875 0.1875 5.125 0.5625 5.375C2.4375 
                      6.875 3.0625 7.4375 11.375 13.4375C12.4375 14.1875 
                      14.5 16.0625 16 16Z" fill="#D90062"/>
              </svg>
              <h5>EMAIL</h5>
              <small className="p1-contact-mail">pedrotuarez.g@gmail.com</small>
            </aside>
            <aside className="p1-contact-card p1-box-shadow-1">
              <svg width="24" height="24" 
                viewBox="0 0 24 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.018,3.815L15.232,8h-4.966l0.716-3.815L9.018,
                      3.815L8.232,8H4v2h3.857l-0.751,4H3v2h3.731l-0.714,
                      3.805l1.965,0.369 L8.766,16h4.966l-0.714,3.805l1.965,
                      0.369L15.766,
                      16H20v-2h-3.859l0.751-4H21V8h-3.733l0.716-3.815L16.018,
                      3.815z M14.106,14H9.141 l0.751-4h4.966L14.106,14z"/>
              </svg>
              <h5>SOCIAL MEDIA</h5>
              <small className="p1-social-media">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                    height="24" viewBox="0 0 24 24">
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,
                          1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,
                          3z M8.339,18.337H5.667	v-8.59h2.672V18.337z 
                          M7.003,8.574c-0.856,
                          0-1.548-0.694-1.548-1.548s0.691-1.548,
                          1.548-1.548c0.854,0,1.548,0.693,1.548,
                          1.548	S7.857,8.574,7.003,8.574z M18.338,
                          18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,
                          0-1.601,1.086-1.601,2.207v4.248
                          h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,
                          1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,
                          4.092V18.337z"/>
                  </svg>
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                    height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                       d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,
                       2.857,8.145,6.821,9.465
                       c0.499,0.09,0.679-0.217,
                       0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,
                       0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,
                       0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,
                       1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,
                       0.351-1.085,
                       0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93
                       c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,
                       0.099-2.64c0,0,0.837-0.269,2.742,1.021
                       c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,
                       1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,
                       2.742-1.021
                       c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,
                       1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,
                       4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,
                       1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,
                       0.687,0.479
                       C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,
                       2,12.026,2z"/>
                  </svg>
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512" style={{width: "16px"}}>
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                      106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                      48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                    height="24" viewBox="0 0 24 24">
                    <path 
                      d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,
                      2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,
                      4.623-4.624
                      C16.622,9.447,14.551,7.377,11.999,7.377L11.999,
                      7.377z M11.999,15.004c-1.659,
                      0-3.004-1.345-3.004-3.003	c0-1.659,1.345-3.003,
                      3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,
                      13.658,15.004,11.999,15.004L11.999,15.004z"/>
                      <circle cx="16.806" cy="7.207" r="1.078"/>
                      <path 
                        d="M20.533,
                        6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42
                        c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,
                        0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,
                        3.945,4.902,3.477,6.111
                        c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,
                        0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,
                        3.71	c0.015,0.748,0.156,1.486,0.419,2.187c0.469,
                        1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,
                        0.426,2.185,0.45	c0.963,0.042,1.268,0.055,3.71,
                        0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,
                        2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633
                        c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,
                        0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,
                        7.57,20.801,6.819,20.533,6.111z M19.315,
                        15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,
                        0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,
                        0.303-1.67,0.311	c-0.95,0.044-1.218,0.055-3.654,
                        0.055c-2.438,0-2.687,
                        0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311
                        c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654
                        c0-2.437,0-2.686,0.053-3.655c0.007-0.576,
                        0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,
                        1.719-1.712	c0.534-0.198,
                        1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,
                        3.655-0.055c2.437,0,2.687,0,3.654,0.055
                        c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,
                        1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,
                        0.311,1.669	c0.043,0.951,0.054,1.218,0.054,
                        3.655c0,2.436,0,2.698-0.043,3.654H19.315z"/>
                  </svg>
                </a> 
              </small>
            </aside>
          </article>
              
          <form className="p1-contact-form p1-box-shadow-1">
            <input type="text" name="name" placeholder="Ingresa tu nombre *"
              title="Nombre solo acepta letras y espacios en blanco" 
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
            <input type="email" name="email" placeholder="Ingresa tu correo *"
              title="Email incorrecto" required/>
            <textarea name="comments" cols="30" rows="10"
              placeholder="Comenta aquí *" required></textarea>
            <div className="p1-contact-form-loader p1-text-center p1-none">
              <img src={imagesPortfolio[7].src} alt={imagesPortfolio[7].alt}/>
            </div>
              <input
                type="submit" 
                value="ENVIAR" 
                className="p1-btn-form"
                onClick={submitForm}  
              />  
          </form>

          <article id="gracias" className="p1-modal">
            <div className="p1-modal-content">
              <article className="p1-contact-form-response">
                <h3>
                  ¡Muchas Gracias<br/>por tus comentarios!
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"/>
                  <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,
                        10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,
                        20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,
                        8S16.411,20,12,20z"/>
                  <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 
                        1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 
                        0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 
                        3l2 .012C7.012 11.55 7.194 11 8 11z"/>
                </svg>
              </article>
            </div>
          </article>
        </div>
      </section>
    
      <footer className="p1-footer">
        <small>Sitio Web Diseñado por 
          <a href="https://pedrotuarez.github.io/portfolio">
            &nbsp;&nbsp;@pedrotuarez
          </a>
        </small>
      </footer>
    </>
  );
}

export default Portafolio;