(() => {

    function getAMovieById(id: string) {
        console.log({id});
    }

    function getActorsByMovie(id: string) {
        console.log({id});
    }

    function getActorBioById(ActorId: string) {
        console.log({ActorId});
    }

    interface Movie {
        cast: string[]
        description: string,
        title: string,
        rating: number,
    };

    function createMovie(movie: Movie) {
        console.log(movie.cast, movie.description, movie.title, movie.rating);
    }

    function checkFullName(fullName: string) {
        console.log(fullName);
        return true;
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor', birthdate);
        return true;

    }

})();
