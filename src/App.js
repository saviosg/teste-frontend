import {Header} from "./components/Header";
import {CardList} from "./components/CardList";
import {Footer} from "./components/Footer";
import {useState, useEffect} from "react";
import {get} from "axios";
import { createGlobalStyle } from "styled-components";
import {Separator} from "./components/Separator";

const API_URL = 'https://fakerapi.it/api/v1';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: 'DM Sans';
    src: local('DM Sans'), url('/assets/DMSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter'), url('/assets/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('/assets/Roboto-Regular.ttf') format('truetype');
  }
`
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    get(API_URL + '/books').then((res) => {
      const books = res.data.data;
      setBooks(books);
    });
  }, []);
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Header/>
        <Separator/>
        <CardList books={books}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
