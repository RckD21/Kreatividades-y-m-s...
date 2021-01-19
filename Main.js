
window.addEventListener("resize",()=>{
 if(window.innerWidth <= 700) alert("Para poder disfrutar de todos los efectos de la página, por favor acceda desde un computador.")
});

let articulosAlquilier = document.querySelector(".articulosAlquiler");
let articulos = document.querySelector("#articulos");
let timeout;



// Links

let contacto = document.querySelector("#contacto");
let ubicacion = document.querySelector("#ubicacion");

contacto.addEventListener("click",()=>{

    window.open("https://api.whatsapp.com/send?phone=18296030849&text=Hola!,%20%C2%BFest%C3%A1n%20disponibles?", '_blank');

});

ubicacion.addEventListener("click",()=>{

    window.open("https://goo.gl/maps/ojvXR783agwkEx6t9", '_blank');

});



// Articulos


let imagenesMuestra = document.querySelector(".imagenesMuestra");
let textos = document.querySelector(".textos");

    let eventosArticulos = articulo=>{

        articulo.addEventListener("mouseover",()=>{

            imagenesMuestra.style.transition = ".2s";
            imagenesMuestra.style.transform = "scale(1)";
            imagenesMuestra.style.zIndex = "600";
            
            textos.style.transform = "scale(0)";
            textos.style.visibility = "hidden";

    
        });
        articulo.addEventListener("mouseleave",()=>{
    
            imagenesMuestra.style.transition = ".5s";
            imagenesMuestra.style.transform = "scale(.0)";
            imagenesMuestra.style.zIndex = "0";
            textos.style.transform = "scale(1)";
            textos.style.visibility = "visible";
        });

    }

        // Calls a eventos
    let sillas = document.querySelector("#sillas");
    let mesas = document.querySelector("#mesas");
    let manteles = document.querySelector("#manteles");
    let copas = document.querySelector("#copas");
    let mamparas = document.querySelector("#mamparas");
    let bebederos = document.querySelector("#bebederos");
    let topes = document.querySelector("#topes");
    let bancoMadera = document.querySelector("#bancoMadera");
    let mesaBuffet = document.querySelector("#mesaBuffet");
    let mesitaMaderaCuadrada = document.querySelector("#mesitaMaderaCuadrada");
    let mesitaMaderaRedonda = document.querySelector("#mesitaMaderaRedonda");
    let mesaPlasticaCuadrada = document.querySelector("#mesaPlasticaCuadrada");
    let mesaPlasticaRedonda = document.querySelector("#mesaPlasticaRedonda");
    let estante = document.querySelector("#estante");
    let figuraNum1 = document.querySelector("#figuraNum1");
    let mesitaBebidas = document.querySelector("#mesitaBebidas");
    let taburetes = document.querySelector("#taburetes");
    let sillasNinos = document.querySelector("#sillasNinos");
    let baseCupcake = document.querySelector("#baseCupcake");
    let platosDecorativos = document.querySelector("#platosDecorativos");
    let mesaMaderaGrande = document.querySelector("#mesaMaderaGrande");
    let baseBizcocho = document.querySelector("#baseBizcocho");
    let hielera = document.querySelector("#hielera");


    let subTitle = document.querySelectorAll(".subTitle");
 



    for(let i = 0; i < subTitle.length; i++){

        eventosArticulos(subTitle[i]);
      
    }
    eventosArticulos(sillas);
    eventosArticulos(mesitaBebidas);
    eventosArticulos(mesaMaderaGrande);
    eventosArticulos(copas);
    eventosArticulos(baseBizcocho);
    eventosArticulos(hielera);
    eventosArticulos(baseCupcake);
    eventosArticulos(platosDecorativos);
    eventosArticulos(mesaPlasticaCuadrada);
    eventosArticulos(mesaPlasticaRedonda);
    eventosArticulos(manteles);
    eventosArticulos(sillasNinos);
    eventosArticulos(topes);
    eventosArticulos(mamparas);
    eventosArticulos(estante);
    eventosArticulos(bebederos);
    eventosArticulos(bancoMadera);
    eventosArticulos(mesaBuffet);
    eventosArticulos(mesitaMaderaCuadrada);
    eventosArticulos(mesitaMaderaRedonda);
    eventosArticulos(figuraNum1);
    eventosArticulos(taburetes);

    // mouso On 

    sillas.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/silla.png)";

    });
    sillas.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    // //////////////////////////////////
    bancoMadera.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/bancoMadera.png)";

    });
    bancoMadera.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    ////////////////////////////////////
    mesaBuffet.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesaBuffet.png)";

    });
    mesaBuffet.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    //////////////////////////////////
    mesitaMaderaCuadrada.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesitaMaderaCuadrada.png)";

    });
    mesitaMaderaCuadrada.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    mesitaMaderaRedonda.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesitaMaderaRedonda.png)";

    });
    mesitaMaderaRedonda.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    mesaPlasticaCuadrada.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesaPlasticaCuadrada.png)";

    });
    mesaPlasticaCuadrada.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    bebederos.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/bebedero.png)";

    });
    bebederos.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    estante.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/estante.png)";

    });
    estante.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    figuraNum1.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/figuraNum1.png)";

    });
    figuraNum1.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    manteles.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/manteles.png)";

    });
    manteles.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    topes.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/topes.png)";

    });
    topes.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    mamparas.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mamparas.png)";

    });
    mamparas.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    mesaPlasticaRedonda.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesaPlasticaRedonda.png)";

    });
    mesaPlasticaRedonda.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    mesitaBebidas.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesitaBebidas.png)";

    });
    mesitaBebidas.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    taburetes.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/taburetes.png)";

    });
    taburetes.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////
    sillasNinos.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/sillasNinos.png)";

    });
    sillasNinos.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    ///////////////////////////////////// 
    baseCupcake.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/baseCupcake.png)";

    });
    baseCupcake.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });  
    /////////////////////////////////////
    platosDecorativos.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/platosDecorativos.png)";

    });
    platosDecorativos.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });  
    /////////////////////////////////////   
    mesaMaderaGrande.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/mesaMaderaGrande.png)";

    });
    mesaMaderaGrande.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });  
    ///////////////////////////////////// 
    baseBizcocho.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/baseBizcocho.png)";

    });
    baseBizcocho.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });    
    /////////////////////////////////////   
    hielera.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/hielera.png)";

    });
    hielera.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////   
    copas.addEventListener("mouseover",()=>{

        imagenesMuestra.style.backgroundImage = "url(Image/Items/copas.png)";

    });
    copas.addEventListener("mouseleave",()=>{

        imagenesMuestra.style.backgroundImage = "";

    });
    /////////////////////////////////////   

    // sillas
    // sillas.addEventListener("mouseover",()=>{

    //     imagenesMuestra.style.transition = ".2s";
    //     imagenesMuestra.style.transform = "scale(1)";
    //     imagenesMuestra.style.zIndex = "600";

    // });
    // sillas.addEventListener("mouseleave",()=>{

    //     imagenesMuestra.style.transition = ".5s";
    //     imagenesMuestra.style.transform = "scale(.0)";
    //     imagenesMuestra.style.zIndex = "0";

    // });
    // // mesas
    // mesas.addEventListener("mouseover",()=>{

    //     imagenesMuestra.style.transition = ".2s";
    //     imagenesMuestra.style.transform = "scale(1)";
    //     imagenesMuestra.style.zIndex = "600";

    // });
    // mesas.addEventListener("mouseleave",()=>{

    //     imagenesMuestra.style.transition = ".5s";
    //     imagenesMuestra.style.transform = "scale(.0)";
    //     imagenesMuestra.style.zIndex = "0";

    // });






    // Eventos de los articulos
    articulos.addEventListener("mouseover",()=>{

        articulosAlquilier.style.transition = ".3s";
        articulosAlquilier.style.top = "90px";
        articulosAlquilier.style.transform = "scale(1)"
        clearTimeout(timeout);
    });
    articulos.addEventListener("mouseleave",()=>{

        timeout = setTimeout(() => {
            articulosAlquilier.style.transition = "1s";
            articulosAlquilier.style.top = "-40em";
            articulosAlquilier.style.transform = "scale(.2)"
        }, 500);

    });
    articulosAlquilier.addEventListener("mouseover",()=>{

        articulosAlquilier.style.transition = ".3s";
        articulosAlquilier.style.top = "90px";
        articulosAlquilier.style.transform = "scale(1)"
        clearTimeout(timeout);

    });
    articulosAlquilier.addEventListener("mouseleave",()=>{

        timeout = setTimeout(() => {
            articulosAlquilier.style.transition = "1s";
            articulosAlquilier.style.top = "-40em";
            articulosAlquilier.style.transform = "scale(.2)"
        }, 500);

    });


//////////////////////////////// Efecto typed /////////////////////////////////////////

let typed = new Typed('.typed', {
	strings: [
		'<i class="articulos2">Sillas...</i>',
		'<i class="articulos2">Mesas...</i>',
		'<i class="articulos2">Manteles...</i>',
        '<i class="articulos2">Topes...</i>',
        '<i class="articulos2">Mamparas...</i>',
        '<i class="articulos2">Bebederos...</i>',
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '<span class="cursor">|</span>', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

// Globos

// let globosContainer = document.querySelector('.globos');
// let globo1 = document.querySelector('#globo1');
// let globo2 = document.querySelector('#globo2');
// let globo3 = document.querySelector('#globo3');

// globosContainer.style.width = (screen.width + 100) + "px";
// globosContainer.style.height = (screen.height + 100) + "px";
// globosContainer.style.left = "-50px";

window.onload = ()=>{

    // Variables 
    const burbuja1 = document.getElementById('burbuja1');
    const burbuja2 = document.getElementById('burbuja2');
    const burbuja3 = document.getElementById('burbuja3');
    const burbuja4 = document.getElementById('burbuja4');
    const burbuja5 = document.getElementById('burbuja5');
    const burbuja6 = document.getElementById('burbuja6');
    const burbuja7 = document.getElementById('burbuja7');
    const burbuja8 = document.getElementById('burbuja8');
    const burbuja9 = document.getElementById('burbuja9');
    const burbuja10 = document.getElementById('burbuja10');
    // const ventana = document.querySelector(".content");
    posicionTop = 0;
    

    burbujeo(burbuja1, 12);
    burbujeo(burbuja2, 21);
    burbujeo(burbuja3, 22);
    burbujeo(burbuja4, 15);
    burbujeo(burbuja5, 11);
    burbujeo(burbuja6, 10);
    burbujeo(burbuja7, 17);
    burbujeo(burbuja8, 14);
    burbujeo(burbuja9, 21);
    burbujeo(burbuja10, 11);

   
    
}



function burbujeo(nombreBurbuja, tiempoSubida){

    // console.time();

    nombreBurbuja.style.transition = tiempoSubida + "s linear";
    setTimeout(()=>{
        // console.log("Entrando en el SET timeOut");
        nombreBurbuja.style.bottom = "720px";
        setTimeout(()=>{

            nombreBurbuja.style.transition = "0s linear";
            nombreBurbuja.style.bottom = "-800px";
            setTimeout(()=>{

                nombreBurbuja.style.transition = tiempoSubida + "s linear";
               
            },1000);

        },tiempoSubida + "000");
    }, (tiempoSubida + "000") - 10000);


    //Interval
    setInterval(()=>{

        // console.log("Entrando en el SET Interval");
        

        nombreBurbuja.style.bottom = "720px";
        setTimeout(()=>{
            
            nombreBurbuja.style.transition = "0s linear";
            nombreBurbuja.style.bottom = "-800px";
            setTimeout(()=>{

                nombreBurbuja.style.transition = tiempoSubida + "s linear";

            },1000);

        },tiempoSubida + "000");


    }, parseInt(tiempoSubida + "000") + 3000);
}
//Toca hacer la animacion del cambio de imagenes!

let imagen1 = document.querySelector('#imagen1');
let imagen2 = document.querySelector('#imagen2');
let imageBool = true;
let image1Number = 1;
let image2Number = 2;
let numeroVuelta = 6000;

let intervalImages = setInterval(()=>{
    
    if(imageBool){

        imagen1.style.zIndex = "50";
        imagen2.style.zIndex = "100";
    switch(image1Number){
       
        case 1:
            image1Number = 2;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
            
        case 2:
            image1Number = 3;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
            
        case 3:
            image1Number = 4;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
            
        case 4:
            image1Number = 5;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
            
        case 5:
            image1Number = 6;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;

        case 6:
            image1Number = 7;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
        case 7:
            image1Number = 8;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
        case 8:
            image1Number = 9;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;      
        case 9:
            image1Number = 10;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;
        case 10:
            image1Number = 1;
            imagen1.setAttribute("src", `Image/imagen${image1Number}.PNG`);
            break;            

    }
    
    imageBool = false;

    } else{

        imagen1.style.zIndex = "100";
        imagen2.style.zIndex = "50";
        switch(image2Number){
           
            case 1:
                image2Number = 2;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
                
            case 2:
                image2Number = 3;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
                
            case 3:
                image2Number = 4;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
                
            case 4:
                image2Number = 5;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
                
            case 5:
                image2Number = 6;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
            case 6:
                image2Number = 7;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
            case 7:
                image2Number = 8;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
            case 8:
                image2Number = 9;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;      
            case 9:
                image2Number = 10;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;
            case 10:
                image2Number = 1;
                imagen2.setAttribute("src", `Image/imagen${image2Number}.PNG`);
                break;            
    
    
        }
       
        imageBool = true;
    }
   
},numeroVuelta);


