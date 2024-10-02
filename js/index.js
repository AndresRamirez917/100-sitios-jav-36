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
                <h3>Jhoanna Doe</h3>
                <h4>Web Developer</h4>
            </div>

            `)
            const speakers_row = document.querySelector('.speakers-row');
            speakers_row.append(card)

}
          
        
    });
}

getData()