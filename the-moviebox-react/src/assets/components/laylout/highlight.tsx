import React from "react";
import { useMovies } from "../../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../../cases/movies/movie-genres";


export const Highlight: React.FC = () => {
    const { selectedMovie } = useMovies();

    if (!selectedMovie) {
        return (
            <div className="flex justify-center items-center h-40">
                <p className="text-2xl text-white">Carregando Highlight...</p>
            </div>
        );
    }

    return (
        <section
            className="relative flex bg-cover bg-no-repeat text-white min-h-[380px]"
            style={{
                
                backgroundImage: `url(/${selectedMovie.highlight.replace(/^\//, "")})`,

                
                backgroundPosition: "center top",
                backgroundSize: "cover"
            }}
        >

            {/* Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0.6) 50%, rgba(17,17,17,0.2) 100%)",
                }}
            ></div>

            {/* Conteúdo */}
            <div className="relative z-20 max-w-screen-xl mx-auto flex gap-8 p-8 items-start pt-24 pb-8">

                {/* Pôster */}
                <img
                    src={`/${selectedMovie.image.replace(/^\//, "")}`}
                    alt={selectedMovie.title}
                    className="rounded-lg shadow-2xl hidden md:block"
                    style={{ width: 340 }}
                />

                <div className="flex flex-col flex-grow">
                    <h2 className="text-4xl font-normal mb-4">
                        {selectedMovie.title}
                    </h2>

                    <MovieGenres movie={selectedMovie}>
                        <span className="pl-4 text-gray-300">
                            {selectedMovie.duration.replace(":", "h ") + "m"}
                        </span>
                    </MovieGenres>

                    <h4 className="text-xl mt-6 mb-2">Sinopse</h4>
                    <p className="text-gray-300 max-w-2xl text-sm">
                        {selectedMovie.sinopse}
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded font-bold transition">
                            Assistir
                        </button>

                        <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded transition">
                            Detalhes
                        </button>

                        <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded transition">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlight;
