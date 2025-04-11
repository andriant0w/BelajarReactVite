import React from 'react';
import sapiensCover from '../assets/books/sapiens.jpeg';
import AtomicHabitCover from '../assets/books/AtomicHabit.jpg';
import GO1984Cover from '../assets/books/1984.jpg';
import toKillAMockingbirdCover from '../assets/books/TKAM.jpeg';
import theSubtleArtCover from '../assets/books/TSAONGAF.jpeg';
import theAlchemistCover from '../assets/books/TheAlcemist.jpeg';

function Home() {
  return (
    <div>
      {/* Hero - konten */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Welcome to Our Bookstore</h1>
            <p className="lead">
              Discover a wide range of books from various genres, including fiction, non-fiction, self-help, and more. 
              Whether you're looking for the latest bestsellers or timeless classics, we have something for every reader.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Browse Books</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
            </div>
          </div>
          <div className="col-lg-6 p-4 overflow-hidden d-flex justify-content-center align-items-center">
            <img className="rounded-lg-3 img-fluid " src={sapiensCover} alt="Bookstore Hero" />
          </div>
        </div>
      </div>

      {/* produk list */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">Explore our most popular books that readers love. Find your next favorite read today!</p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[
              { title: "Sapiens", description: "A brief history of humankind.", cover: sapiensCover },
              { title: "Atomic Habits", description: "An easy & proven way to build good habits.", cover: AtomicHabitCover },
              { title: "The Alchemist", description: "A journey of self-discovery.", cover: theAlchemistCover },
              { title: "1984", description: "A dystopian novel by George Orwell.", cover: GO1984Cover },
              { title: "To Kill a Mockingbird", description: "A classic novel of racism and injustice.", cover: toKillAMockingbirdCover },
              { title: "The Subtle Art of Not Giving a F*ck", description: "A counterintuitive approach to living a good life.", cover: theSubtleArtCover }
            ].map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" src={book.cover} alt={book.title} />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">Popular</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
