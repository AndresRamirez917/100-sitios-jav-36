async function getData(){
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const desserts = await result.json();
    const dessertsArr = desserts.meals.map(elemento => Object.entries(elemento))
    console.log(desserts)
    desserts.meals.forEach(element => {
for(let i of dessertsArr.slice(0, 1)){
    console.log("larry")
        const card = document.createRange().createContextualFragment(`
            
            <div class="card card-1">
                <img src="${element.strMealThumb}" alt="">
                <h3>${element.strMeal}</h3>
                <h4>${element.strCategory}</h4>
            </div>

            `)
            const speakers_row = document.querySelector('.speakers-row');
            speakers_row.append(card);
}     
    });
}

function events(){
    for(i = 1; i < 5; i++){
        const box = document.createRange().createContextualFragment(`
            
                <div class="box box-${i}">
                   <h3>27 October</h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, voluptates.</p>
                   <button class="btn button-2">more details</button>
                </div>
            
            `)
            const events_row = document.querySelector('.events-row');
            events_row.append(box)
    }
}



const btn_enviar = document.getElementById('btn-enviar');
const enviar = (e) => {
e.preventDefault();
const nonmbre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const arr = [];
const messageArr = ["Nombre", "Email", "Mensaje"];
arr.push(nonmbre, email, mensaje);
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato correcto`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nonmbre.value = "";
     email.value = "";
     mensaje.value = "";
return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

btn_enviar.addEventListener("click", enviar)

getData()
events()