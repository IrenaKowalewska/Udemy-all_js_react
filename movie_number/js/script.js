
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +(prompt('Сколько фильмов вы уже посмотрели?', ''));
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +(prompt('Сколько фильмов вы уже посмотрели?', ''));
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const nameFilm = prompt('Один из последних просмотренных фильмов?', '');
            const rating = prompt('На сколько его оцените?', '');
            if (nameFilm != null && rating != null && nameFilm != '' && rating != 0 && nameFilm.length < 50) {
                personalMovieDB.movies[nameFilm] = rating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов.');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
            alert('Вы классический зритель.');
        } else if (30 <= personalMovieDB.count) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!')
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let nameGenrеs = prompt(`Введите Ваши любимые жанры через запятую`).toLocaleLowerCase();
            if (nameGenrеs === null || nameGenrеs === '') {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = nameGenrеs.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
};

personalMovieDB.writeYourGenres();
