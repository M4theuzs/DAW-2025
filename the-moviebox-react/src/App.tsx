import { Footer } from './assets/components/laylout/footer'
import { Header } from './assets/components/laylout/header'
import { Navbar } from './assets/components/laylout/navbar'
import { MovieContntent } from './cases/movies/components/movie-content'
import Highlight from './assets/components/laylout/highlight';

function App() {

  return (
    <>
    <Header/>
    <main>
      <Navbar />
      <Highlight />
      <MovieContntent/>
    </main>
    <Footer />
    
    </>
  )
}

export default App
