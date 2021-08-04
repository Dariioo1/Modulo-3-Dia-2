
let fs = require("fs/promises")
let readline = require('readline')
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function pregunta (pregunta)
{
    let question = new Promise((resolve , reject)=>{
        rl.question(pregunta,(respuesta) =>{resolve(respuesta)})

    })
    return question;
}

let persona2 =
{
    "name":"",
    "surname":"",
    "age":0
}

function promesaReadline(){

    let miPregunta = pregunta("Name: ")

    miPregunta.then((respuesta1) =>{

        persona2.name=respuesta1
        return pregunta("Surname: ")
    })
    
    .then((respuesta2)=>{
        persona2.surname=respuesta2
       return pregunta("Age: ")
    })
   .then((respuesta3)=>{
        persona2.age=respuesta3
        rl.close()
        return fs.writeFile("miArchivo.json" , JSON.stringify(persona2))
    })
   .then(()=>{
        return fs.readFile("miArchivo.json" ,"utf-8")
    })
    .then((data) =>{
        console.log(JSON.parse(data));
    })
    miPregunta.catch((error)=>{
        console.log(error);
        
    })
}

promesaReadline()

async function readlineAsync()
{
    try{
    let name = await pregunta("Name: ")
    let surname = await pregunta("Surname: ")
    let age = await pregunta("Age: ")
    persona2 =
    {
        "name":name,
        "surname":surname,
        "age":age
    }
    await fs.writeFile("miArchivo.json" , JSON.stringify(persona2))
    let leer = await fs.readFile('miArchivo.json' , 'utf8')
    let leerArchivo = JSON.parse(leer)
    console.log(leerArchivo);
    rl.close()
    }
    catch(error)
    {
        console.log(error);
    }
}
readlineAsync()