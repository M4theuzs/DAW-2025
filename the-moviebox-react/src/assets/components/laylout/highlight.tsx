import { useMovies } from "../../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../../cases/movies/movie-genres";


export default function Highlight() {

    const { selectedMovie } = useMovies();

    if (!selectedMovie) {
        return (
            <div className="h-[380px] flex items-center justify-center text-white">
                <p className="text-xl">Carregando...</p>
            </div>
        );
    }

    return (
        <section
            className="flex relative w-full text-white min-h-[380px]"
            style={{
                backgroundImage: `url(${selectedMovie.highlight})`
            }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="relative z-20 max-w-screen-xl mx-auto flex gap-8 p-8 w-full">
                <img
                    src={selectedMovie.image}
                    className="rounded-lg shadow-2xl hidden md:block w-[340px]"
                />

                <div className="flex flex-col">
                    <h2 className="text-4xl mb-4">{selectedMovie.title}</h2>

                    <MovieGenres movie={selectedMovie}>
                        <span className="pl-4 text-gray-300">
                            {selectedMovie.duration.replace(":", "h ") + " m"}
                        </span>
                    </MovieGenres>

                    <p className="text-gray-300 max-w-2xl">{selectedMovie.sinopse}</p>
                </div>
            </div>
        </section>
    );
}
