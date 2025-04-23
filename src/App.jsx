import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Import gambar secara eksplisit
import sapiensCover from './assets/books/sapiens.jpeg';
import atomicHabitCover from './assets/books/AtomicHabit.jpg';
import theAlchemistCover from './assets/books/TheAlcemist.jpeg';
import go1984Cover from './assets/books/1984.jpg';
import mockingbirdCover from './assets/books/TKAM.jpeg';
import subtleArtCover from './assets/books/TSAONGAF.jpeg';

function App() {
  const [books, setBooks] = useState([
    {
      title: "Sapiens",
      description: "A brief history of humankind.",
      cover: sapiensCover,
    },
    {
      title: "Atomic Habits",
      description: "An easy & proven way to build good habits.",
      cover: atomicHabitCover,
    },
    {
      title: "The Alchemist",
      description: "A journey of self-discovery.",
      cover: theAlchemistCover,
    },
    {
      title: "1984",
      description: "A dystopian novel by George Orwell.",
      cover: go1984Cover,
    },
    {
      title: "To Kill a Mockingbird",
      description: "A classic novel of racism and injustice.",
      cover: mockingbirdCover,
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      description: "A counterintuitive approach to living a good life.",
      cover: subtleArtCover,
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/book" element={<Book books={books} setBooks={setBooks} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;