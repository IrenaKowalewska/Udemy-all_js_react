const numberOfFilms = +(prompt('Сколько фильмов вы уже посмотрели?', ''));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const nameFilm = prompt('Один из последних просмотренных фильмов?', '');
    const rating  = prompt('На сколько его оцените?', '');
    if (nameFilm != null && rating != null && nameFilm != '' && rating != 0 && nameFilm.length < 50) {
        personalMovieDB.movies[nameFilm] = rating;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов.');
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert('Вы классический зритель.');
} else if (30 <= personalMovieDB.count) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!')
}

console.log(personalMovieDB);
