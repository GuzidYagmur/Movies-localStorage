let movies= [];

if(localStorage.movies){
    movies=JSON.parse(localStorage.movies);
}

let movie = prompt("İzlemek istediğiniz film nedir?");
movies.push(movie);

localStorage.movies=JSON.stringify(movies);

console.log(movies);