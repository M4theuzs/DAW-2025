import { Footer } from './assets/components/laylout/footer'
import { Header } from './assets/components/laylout/header'
import { Navbar } from './assets/components/laylout/navbar'
import { MovieContntent } from './cases/movies/components/movie-content'

function App() {

  return (
    <>
    <Header/>
    <main>
      <Navbar />
      <MovieContntent/>
    </main>
    <Footer />
    
    </>
  )
}

export default App
