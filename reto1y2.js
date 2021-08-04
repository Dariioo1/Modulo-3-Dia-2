//<!--RETO DEL SEGUNDO DIA--!>

let fs = require('fs/promises')

let persona = 
{
    "name":"Dario",
    "surname":"Paucarr",
    "age":54
}
//THEN AND CATCH
fs.writeFile('miArchivo.json' , JSON.stringify(persona))
.then(function() {
    return fs.readFile('miArchivo.json' , 'utf8') 
}
)
.then(function(data){

    console.log(JSON.parse(data));
})

.catch(function(error){
    console.log(error);
})
//ASYNC AND AWAIT

async function asyncAwait()
{
    try{
    await fs.writeFile('miArchivo.json' , JSON.stringify(persona))
    let leer = await fs.readFile('miArchivo.json' , 'utf8')
    let leerArchivo = JSON.parse(leer)
    console.log(leerArchivo);
    }
    catch(error)
    {
        console.log(error);

    }
}

asyncAwait()

