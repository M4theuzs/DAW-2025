import { useContext } from "react";
import { MovieContext } from "../context/movie-context";

export function useMovies() {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error("useMovies deve ser usado dentro de MovieContextProvider");
    }

    return context;
}
