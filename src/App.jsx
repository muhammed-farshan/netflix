import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Row from "./components/Row"
import requests from "./requests"

function App() {

  return (
    <>
    <Nav/>
    <Banner fetchurl={requests.fetchNetflixOriginals}/>
    <Row title={'TRENDING'}  fetchurl = {requests.fetchTrending}/>
    <Row title={'NETFLIX ORGINALS'} fetchurl={requests.fetchNetflixOriginals}/>
    <Row title={'TOP RATED'} fetchurl={requests.fetchTopRated}/>
    <Row title={'ACTION MOVIES'} fetchurl={requests.fetchActionMovies}/>
    <Row title={'COMEDY MOVIES'} fetchurl={requests.fetchComedyMovies}/>
    <Row title={'HORROR MOVIES'} fetchurl={requests.fetchHorrorMovies}/>
    <Row title={'ROMANCE MOVIES'} fetchurl={requests.fetchRomanceMovies}/>
    <Row title={'DOCUMENTORIES'} fetchurl={requests.fetchDocumentaries}/>

    </>
  )
}

export default App
