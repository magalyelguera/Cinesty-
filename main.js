let randomMovieArray = ['Deadpool', 'The Hangover', '21 Jump Street', 'The perfect Date',];

let imagen = document.getElementById('imagen');

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
        })
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    apicall();
});