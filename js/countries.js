document.getElementById('btn').addEventListener('click', loadCountries)


function loadCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => getCountries(data))
}

getCountries = (countries) => {
    console.log(countries);

    var section = document.querySelector('#section')
    for (country of countries) {


        const div = document.createElement('div')

        div.innerHTML = `
        <div class="card m-3" style="width: 18rem;">
        <img src="${country.flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${country.name}</h5>
          <p> Capital: ${country.capital} </p>
          <button onclick='modalCall(${country.flag})' class='btn btn-primary'>Details</button>
        </div>
      </div>`

        section.appendChild(div);
    }

}

