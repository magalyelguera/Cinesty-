let imagen = document.getElementById('imagen');
let hi = document.getElementById('hi');
let name = document.getElementById('name');
let premiers = document.getElementById('premiers');
const container = document.getElementById('container');
const demo = document.getElementById('demo');
container.style.display='none';
const apicall = () => {
    let randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
    let randomMovie = randomMovieArray[randomNumber];
    fetch('http://www.omdbapi.com/?t=' + encodeURI(randomMovie) + '&apikey=691b66e1')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let image = data.Poster;
            if (image !== 'N/A') {
                imagen.src = image;
            }
            console.log(data.Year);
            hi.innerHTML=data.Plot;
            name.innerHTML=data.Title;
        })
let demo = document.getElementById('demo');
const newMovies = document.getElementById('newMovies');
const newBtn = document.getElementById('new');
const home = document.getElementById('home');
const watch = document.getElementById('watch');
const randomMovieArray = ['The Spongebob Movie', 'Deadpool', 'The Hangover', '21 Jump Street', 'The perfect Date', "There's something about Mary"];
home.addEventListener('click', ()=>{
    hi.style.display='none';
    demo.style.display='block';
    watch.style.display='block';
})
let card = (data) => {
    return `
          <div class="card cards">
                    <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p>Country : ${data.Country}</p>
                    <p>Year : ${data.Year}  </p>
                    <p>Director : ${data.Director}</p>
                    <p>${data.Plot}</p>
                    <p>Awards: ${data.Awards}</p>
            </div>
      </div> `
};

const randomMovie = randomMovieArray.forEach(item => {
    fetch('https://www.omdbapi.com/?t=' + item + '&apikey=691b66e1')
        .then(res => res.json())
        .then(data => {
            newBtn.addEventListener('click', () => {
                demo.style.display = 'none';
                watch.style.display = 'none';
                document.getElementById('hi').innerHTML += card(data);
            });
        })
});
}
