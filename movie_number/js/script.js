let numberOfFilms;

function start() {
    numberOfFilms = +(prompt('Сколько фильмов вы уже посмотрели?', ''));
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +(prompt('Сколько фильмов вы уже посмотрели?', ''));
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const nameFilm = prompt('Один из последних просмотренных фильмов?', '');
        const rating = prompt('На сколько его оцените?', '');
        if (nameFilm != null && rating != null && nameFilm != '' && rating != 0 && nameFilm.length < 50) {
            personalMovieDB.movies[nameFilm] = rating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов.');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert('Вы классический зритель.');
    } else if (30 <= personalMovieDB.count) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!')
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const nameGenres = prompt(`Ваш любимый жанр ${i}`, '');
        if (nameGenres != null && nameGenres != '') {
            personalMovieDB.genres[i-1] = `${nameGenres}`;
        } else {
            i--;
        }
    }
}
writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
