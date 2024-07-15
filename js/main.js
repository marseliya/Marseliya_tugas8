const API_KEY = '8fa6e9d2c43306860f86299f63eaf5b0';
const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
fetch(url, options)
  .then(response => response.json())
  .then(response => {
    const results = response.results;
    results.forEach(data => {
      card(data);
      // localStorage.setItem('person',JSON.stringify(person))
      // localStorage.removeItem('img')
    });
    console.log(response)
  })
  .catch(err => console.error(err));
  
function card(data){
    const main = document.querySelector('.main')
    const figure = document.createElement('figure')
    const figcaption = document.createElement('figcaption')
    const a = document.createElement('a')
    a.setAttribute('href',"../html/detail.html")
    const img = document.createElement('img')
    img.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.profile_path}`);
    const h3 = document.createElement('h3')
    h3.textContent = data.name
    a.appendChild(img)
    figure.appendChild(a)
    figure.appendChild(figcaption)
    figcaption.appendChild(h3)
    main.appendChild(figure)

    figure.addEventListener('click',() => {
      localStorage.setItem('selectedPerson',JSON.stringify(data))
    })
}
