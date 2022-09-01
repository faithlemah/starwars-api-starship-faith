const getStarShipsApi =async()=>{
    let starshipApi= await fetch ("https://swapi.dev/api/starships");
    let starshipData = await starshipApi.json();
    let finalData = starshipData.results
         let result = finalData.map(starships2 => `<li> name: ${starships2.name} ---- model: ${starships2.model} --- films: ${starships2.films} --- created: ${starships2.created} --- <br><br>`)
    
 return document.body.innerHTML = result.join("");

}
getStarShipsApi();
