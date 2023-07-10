const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "http://surl.li/iydbn",
      rooms: 5,
      m: 500
    }

  ];
  

console.log(`hola`)
// Selectores html
const cantidadCuartos = document.querySelector('#cantidad-cuartos');
const desdeXMetros = document.querySelector('#desdeXmetros');
const hastaXMetros = document.querySelector('#hastaXmetros');
const btnBuscar = document.querySelector('#btn-buscar')
const total = document.querySelector("#total");


//let contenedorPropiedades = document.querySelector('#props')
const contenedor = document.querySelector('#props')

console.log(contenedor)

let arrDatos = []

let template = ``;
let contar = 0;
propiedadesJSON.forEach(elemento => {
   template += `
    <div class="propiedad">
        <div class="img" style="background-image: url(${elemento.src})"></div>
        <section>
            <h5>${elemento.name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${elemento.rooms}</p>
                <p>Metros: ${elemento.m}</p>
            </div>
            <p class="my-3">${elemento.description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>
    `;
  contar = contar + 1
  contenedor.innerHTML = template;
  total.innerHTML = contar

  arrDatos.push(elemento.name, elemento.rooms, elemento.src, elemento.m)
})

console.log(arrDatos)

/*
cantidadCuartos
desdeXMetros
hastaXMetros
*/

const filtroPropiedades = (cuartos, desde, hasta) => {
  var html = "";
  let contar = 0;

//Ciclo que recorre las propiedades de los objetos del arreglo
  for (let propiedad of propiedadesJSON) {

    if (propiedad.rooms >= cuartos && propiedad.m >= desde && propiedad.m <= hasta) {

    html += `<div class="propiedad"> 

              <div class="img" style="background-image: url('${propiedad.src}')"></div> 

              <section> 
                <h5>${propiedad.name}</h5> 

              <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad.rooms}</p> 
                <p>Metros: ${propiedad.m}</p> 
              </div> 

                <p class="my-3">${propiedad.description}</p> 

                <button class="btn btn-info ">Ver más</button> 
              </section> 
            </div>`
    
      contar = contar + 1

    }
  } 
  
  contenedor.innerHTML = html
  
  total.innerHTML = contar
}

btnBuscar.addEventListener('click', (e) => {
  //console.log(`enviando`)
  e.preventDefault();
  let cantidadCuartos = Number(document.querySelector('#cantidad-cuartos').value);
  let desdeXMetros = Number(document.querySelector('#desdeXmetros').value);
  let hastaXMetros = Number(document.querySelector('#hastaXmetros').value);
  cantidadCuartos = Number(cantidadCuartos)
  desdeXMetros = Number(desdeXMetros)
  hastaXMetros = Number(hastaXMetros)
  

  if(cantidadCuartos == 0 || desdeXMetros == 0 || hastaXMetros == 0){
      alert('Faltan campos por llenar')
  }else{
    console.log(`todo completo`)
    // Mostrar los elementos que cumplan la condicion
    filtroPropiedades(cantidadCuartos, desdeXMetros, hastaXMetros)
    console.log(`hola`)
  }

  if (cantidadCuartos <= 0 || desdeXMetros <= 0 || hastaXMetros <= 0){
    // Mostrar un mensaje de error o realizar alguna acción adecuada
    console.log('No se permiten números negativos');
    alert('No se permiten numeros negativos')
  } else {
    filtroPropiedades(cantidadCuartos, desdeXMetros, hastaXMetros)
    console.log('Número válido');
  }
})

