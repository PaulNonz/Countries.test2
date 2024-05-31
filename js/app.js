document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('navbar-button-toggler');
 
    const searchInput = document.getElementById('searcher');
    const regionFilter = document.getElementById('filterer');
    let countries = [];

    // Toggle theme
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    
  

    // Fetch countries data
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        countries = data;
        displayCountries(countries);
    })
    .catch(error => console.error('Error fetching countries:', error));

    
    function displayCountries(countries) {
        const countriesContainer = document.getElementById('countries');
        countriesContainer.innerHTML = '';

        
        countries.forEach(country => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="img-container">
                    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" class="card-img">
                </div>
                <div class="card-content">
                    <h3 class="country-title">${country.name.common}</h3>
                    <p class="population"><span id="make-bold">Population:</span> ${country.population}</p>
                    <p class="region"><span id="make-bold">Region:</span> ${country.region}</p>
                    <p class="capital"><span id="make-bold">Capital:</span> ${country.capital}</p>
                </div>
            `;
            card.addEventListener('click', () => {
                localStorage.setItem('selectedCountry', JSON.stringify(country));
                window.location.href = 'info.html';
            });
            countriesContainer.appendChild(card);
        });
    }
 

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue));
        displayCountries(filteredCountries);
    });

    // Region filter functionality
    regionFilter.addEventListener('input', () => {
        const regionValue = regionFilter.value;
        const filteredCountries = regionValue 
            ? countries.filter(country => country.region === regionValue)
            : countries;
        displayCountries(filteredCountries);
    });
    
});
