const dataFetching = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>loadData(data))
}

const loadData = (countries) =>{
    console.log(countries);
    const htmlContent = countries.map(country=>showdata(country))
    console.log(htmlContent);
    const content = document.getElementById("countries")
    content.innerHTML=htmlContent.join(" ");
}

// 1st Way Not using parapeter Destructuring
// const showdata=(singleCountry)=>{
//     return `
//         <div class="styleing">
//             <h3>${singleCountry.name.common}</h3>
//             <img src="${singleCountry.flags.png}">
//         </div>
//     `
// }

// 2nd Way using parapeter Destructuring
// const showdata=(singleCountry)=>{
//     const {name,flags} = singleCountry;
//     return `
//         <div class="styleing">
//             <h3>${name.common}</h3>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// 3rd Way using parapeter Destructuring
const showdata=({name,area,region,flags})=>{
    return `
        <div class="styleing">
            <h3>Country Name: ${name.common}</h3>
            <p>Area: ${area}</p>
            <p>Continet:${region}</p>
            <img src="${flags.png}">
        </div>
    `
}
dataFetching();