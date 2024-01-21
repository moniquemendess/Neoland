//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? Iteración #1: Mix for e includes
//? Dado el siguiente javascript usa for of para recorrer el array de películas, genera un nuevo array con las categorías
//? de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
//? Para filtrar las categorías puedes ayudarte de la función .includes()
//!----------------------------------------------------------------------------------------------------------------------------------------------------
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const newMovies = [];

for (const movie of movies) {
  console.log("🚀 ~ movie:", movie);
  // accender el aray
  for (const categoria of movie.categories) {
    console.log("🚀 ~ movie.categories:", movie.categories);
    console.log("🚀 ~ categoria:", categoria);

    // accender el array de las categorias
    if (!newMovies.includes(categoria)) {
      // si el variable newMovies no tiene el valor de las categorias
      newMovies.push(categoria); // que empure.
    }
  }
}

console.log(newMovies);
