

const objTelefono={
    marca: "Sony",
    modelo:"JC5",
    camara: true,
    colores:["rojo","verde","azul" ],
    informacion:{
        peso:"100g",
        alto:"15cm",
        ancho:"10cm"
    },
    llamar:()=>console.log("El teléfono está llamando."),
    sonarAlarma:()=>console.log("La alarma está sonando.")
}


console.log(objTelefono)
console.log(objTelefono.camara)
console.log(objTelefono.colores[1])
objTelefono.llamar()
objTelefono.sonarAlarma()

console.log(objTelefono["marca"])

objTelefono.modelo="1234"

console.log(objTelefono.modelo)
objTelefono.anio="2022"
console.log(objTelefono)
delete objTelefono.colores
console.log(objTelefono)
/* 
for(let key in objTelefono){
    // console.log(key)
    console.log(objTelefono[key])
} */

const persona={
    nombre:"Pepe", 
    edad:"30",
    correo:"pepe@correo.es"
}

const persona2 = persona


// console.log("Persona", persona)
// console.log("Persona 2", persona2)

persona2.nombre = "maría"
// console.log(persona)
// console.log(persona2)

const persona3={
    ...persona
}

// console.log(persona3)
persona3.nombre="juan"
// console.log("Persona 3",persona3)

let llaves = Object.keys(persona)
console.log(llaves)

let valores=Object.values(persona)
console.log(valores)