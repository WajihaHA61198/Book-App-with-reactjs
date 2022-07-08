import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Favourites,
  BookList,
  BookDetails,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
