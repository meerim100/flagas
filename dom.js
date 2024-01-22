document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn")
    const flag = document.getElementById("flag")
    fetch("https://restcountries.com/v3.1/all")
     .then(response => response.json())
     .then(data => {
      btn.addEventListener("click", function () {
       const div = document.createElement("div")
       div.classList.add("flagd")
       const currentCountry = data[Math.floor(Math.random() * data.length)]
       div.innerHTML = `
             <img src="${currentCountry.flags.png}" alt="Flag">
             <h2>${currentCountry.name.common}</h2>
           `
       flag.append(div)
      })
     })
   })