import { api } from "../../../lib/axios";

export type MovieDTO = {
    id: number;
    title: string;
    year: number;
    image: string;
    genres: string;
    duration: string;
    sinopse: string;
    highlight: string;
};

const _ENDPOINT = "/movies?key=41258d90";

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        const result = await api.get<MovieDTO[]>(_ENDPOINT);

        return result.data.map(movie => ({
            ...movie,
            image: movie.image.startsWith("/") ? movie.image : "/" + movie.image,
            highlight: movie.highlight.startsWith("/") ? movie.highlight : "/" + movie.highlight
        }));
    }
};
