import { Footer } from "./assets/components/laylout/footer";
import { Header } from "./assets/components/laylout/header";
import { Navbar } from "./assets/components/laylout/navbar";
import { MovieContent } from "./cases/movies/components/movie-content";
import { MovieContextProvider } from "./cases/movies/context/movie-context";
import Highlight from "./assets/components/laylout/highlight";

export default function App() {
    return (
        <>
            <Header />

            <MovieContextProvider>
                <Navbar />
                <Highlight />
                <MovieContent />
            </MovieContextProvider>

            <Footer />
        </>
    );
}
