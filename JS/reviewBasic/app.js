//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? Iteración #1: Mix for e includes
//? Dado el siguiente javascript usa for of para recorrer el array de películas, genera un nuevo array con las categorías
//? de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
//? Para filtrar las categorías puedes ayudarte de la función .includes()
//!----------------------------------------------------------------------------------------------------------------------------------------------------
/* const movies = [
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

console.log(newMovies); */

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? Iteración #2: Mix Fors
//? Dado el siguiente javascript usa for of y for in para hacer la media del volumen de todos los sonidos
//? favoritos que tienen los usuarios.
//!----------------------------------------------------------------------------------------------------------------------------------------------------

/* const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const volumeSonidos = [];
console.log("🚀 ~ volumeSonidos:", volumeSonidos);
for (const user of users) {
  for (const sonido in user.favoritesSounds.volume) {
    if (!volumeSonidos.includes(sonido)) {
      volumeSonidos.push(sonido);
    }
  }
}

console.log(volumeSonidos); */

let cadena = "programacion funcional";

// Convertir los caracteres únicos a un array
let caracteresUnicos = [...new Set(cadena)];

console.log(caracteresUnicos);
