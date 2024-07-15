document.addEventListener('DOMContentLoaded', () => {
  const personData = JSON.parse(localStorage.getItem('selectedPerson'));
  if (personData) {
      card(personData);
      console.log(personData)
  } else {
      document.querySelector('.detail').textContent = "No data found for this person.";
  }
});


function card(data){
  const main = document.querySelector('.main')
  const figure = document.createElement('figure')
  const figcaption = document.createElement('figcaption')
  const a = document.createElement('a')
  a.setAttribute('href',"../html/detail.html")
  const img = document.createElement('img')
  img.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.profile_path}`);
  const h3 = document.createElement('h3')
  h3.textContent = (`Name : ${data.name}`)
  const h4 = document.createElement('h4')
  h4.textContent = (`Original name : ${data.original_name}`)
  const h6 = document.createElement('h6')
  h6.textContent = (`Known for : ${data.known_for_department}`)
  const h7 = document.createElement('h7')
  h7.textContent = (`Popularity : ${data.popularity}`)
  const h8 = document.createElement('h8')
  if(data.gender == '2'){
    h8.textContent = ("Gender : Male")
  }
  else{
    h8.textContent = ('Gender : Female')
  }

  
  const poster = document.createElement('div')
  poster.className = 'poster'

  const desc = document.createElement('div')
  desc.className = 'desc'
  const h2 = document.createElement('h2')
  const h5 = document.createElement('h5')

  const knownForArray = data.known_for;

  knownForArray.forEach(item => {
    const image = document.createElement('img')
    image.setAttribute('src', `https://image.tmdb.org/t/p/w500${item.poster_path}`);
    image.setAttribute('alt', 'Movie Poster');
    image.addEventListener('mouseover', () => {
      h2.textContent = item.title || item.original_name;
      h5.textContent = item.overview;
      h2.style.display = 'block';
      h5.style.display = 'block';
    });
    image.addEventListener('mouseout', () => {
      h2.style.display = 'none';
      h5.style.display = 'none';
    })
    image.className = 'image'
    poster.appendChild(image)
    
  });

  
  a.appendChild(img)
  figure.appendChild(a)
  figure.appendChild(figcaption)
  figcaption.appendChild(h3)
  figcaption.appendChild(h4)
  figcaption.appendChild(h6)
  figcaption.appendChild(h7)
  figcaption.appendChild(h8)
  figure.appendChild(poster)

  desc.appendChild(h2)
  desc.appendChild(h5)
  figure.appendChild(desc)
  
  main.appendChild(figure)


}

// console.log(`${data.known_for[0].poster_path}`)

