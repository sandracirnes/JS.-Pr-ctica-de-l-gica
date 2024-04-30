function getUserProfile() {
    const username = prompt("Ingresa tu nombre de Usuario");
    const age = prompt("Ingresa tu edad");
    const favoriteMovies = prompt("Ingresa tus películas favoritas separadas por comas (,):").split(',');

    return {
        username: username,
        age: age,
        favoriteMovies: favoriteMovies
    };
}

function displayUserProfile(profile) {
    console.log(`Usuario: ${profile.username}`);
    console.log(`Edad: ${profile.age}`);
    console.log("Películas Favoritas:");
    profile.favoriteMovies.forEach(movie => {
        console.log(`- La película ${movie.trim()} es de mis películas favoritas.`);
    });
}

const userProfile = getUserProfile();
displayUserProfile(userProfile);