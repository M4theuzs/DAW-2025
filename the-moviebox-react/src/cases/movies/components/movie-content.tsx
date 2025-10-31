import { useEffect, useState } from "react"
import { MovieService, type MovieDTO } from "../services/movie.service"


export function MovieContntent() {

    const [movies, setMovies] = useState<MovieDTO[]>([]);

    useEffect(()=> {
        MovieService.list()
        .then((result)=>{
            setMovies(result)
        })
    },[]);

    return (
        <section 
            className="
                bg-[#1c1c1c] p-8 grid
                grid-colors-[repeat(auto-fill,minmax(200px, 1fr))]
                gap-8 max-w-6xl mx-auto
            "
        >

            <>{JSON.stringify(movies)}</>

        </section>
    )
}