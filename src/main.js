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
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    apicall();
});

premiers.addEventListener('click', () => {
    demo.style.display ='none';
    container.style.display='block';
})