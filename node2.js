//CLASE DE NODE DIA 2
function metodoCallback(valor, callback)
{
    if(valor)
        return callback(null , "El valor es verdadero")
    else
        return callback("Error: El valor es falso" , null)
}

function metodoPromesa(valor)
{
    let promesa = new Promise(function(resolve , reject)
    {
        if(valor)
        {
            let resultado = {ok:true , message:"Este valor es verdadero"}
            setTimeout(function(){
                resolve(resultado)

            }, 1000)
    }
        else{
            let error = {ok:false, message:"Este valor es falso"}
            setTimeout(function(){
                reject(error)

            },1000)
        }
    })
    return promesa
}
//IMPORTANTE CON CALLBACK
// metodoCallback(true , function(error, data)
// {
//     if(error)
    
//     console.log(error);
//     else
//     {
//     console.log(data);
//     metodoCallback(true, function(error , data)
//     {
//         if(error)
//         {
//             console.log(error);
//         }
//         else
//         {
//             console.log(data);
//         }
//     })
//     }
// })

metodoPromesa(true)
.then(function(result)
{
    console.log(result);
    return metodoPromesa(true)
})
//ESTE THEN ES EL DEL METODO PROMESA DE return metodoPromesa(true)
.then(function(data)
{
    console.log(data);
})

//CATCH ES GENERICO PERO TAMBIEN SE PUEDE HACER COMO EL THEN.
.catch(function(error)
{
    console.log(error);
})

// async function metodoAsyncAway()
// {
//     try//Para poner antes del cuerpo del metodo de async/await.
//     {
//     console.log("El primer metodo Promesa es verdadero");
//     let resultado = await metodoPromesa(true);
//     console.log(resultado);
//     let resultado2 = await metodoPromesa(false)
//     console.log(resultado2);
//     }
//     catch(error)//Para que de el 2 resultado false
//     {
//         console.log("El segundo metodo Promesa es falso");
//         console.log(error);
//     }
// }

// metodoAsyncAway()

