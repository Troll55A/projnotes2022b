let show = (msg="No menssage given")=>{
    console.log(msg)
}
show();

//Promesa
//Async Await
function resolveAfter2Seconds(){
    return new Promise(resolve=> {
        setTimeout(()=>{
            resolve('resolved');
        },200)
    });
}
//Forma de ahorrarte la promesa pero manda a llamar la funcion de arriba
async function asyncCall(){
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();