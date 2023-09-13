const chalk = require('chalk');

function saludar (nombre) {
    
    return new Promise ((resolve, reject) => {
        setTimeout(() => { //setTimeout es una función en JavaScript que se utiliza para programar la ejecución de una función después de un cierto período de tiempo en milisegundos.
        if (nombre.length > 3){
            resolve ("Hola " + nombre);  // la promesa se cumple
        } else {
            reject ("No te salude") // la promesa no se cumple
        }   
    }, 2000);
       
    }); 
}

saludar ("Amy").then((respuesta) => {
    console.log(chalk.red.bgWhiteBright(respuesta));
})

.catch((error) => {
    console.log(error);
});

//console.log(saludar("Diego"));
console.log(chalk.cyan.bgGray("Hooola clase"));

//resolver una promesa
const pokeApi = fetch ("https://pokeapi.co/api/v2/pokemon");

pokeApi
.then((respuesta)  => (respuesta).json())
.then((resObj) => console.log(resObj.results[3].name)); //muestra el json organizado
//.results[3].name me muestra en consola la posision 3 del objeto