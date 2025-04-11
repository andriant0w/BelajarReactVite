import React from 'react';
import GO1984koper from '../assets/books/1984.jpg';
import AtomicHabitkoper from '../assets/books/AtomicHabit.jpg';
import sapienskoper from '../assets/books/sapiens.jpeg';
import theAlchemistkoper from '../assets/books/TheAlcemist.jpeg';
import toKillAMockingbirdkoper from '../assets/books/TKAM.jpeg';
import theSubtleArtkoper from '../assets/books/TSAONGAF.jpeg';

function Book() {
  return (
      <>
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
              { title: "Sapiens", description: "A brief history of humankind.", cover: sapienskoper },
              { title: "Atomic Habits", description: "An easy & proven way to build good habits.", cover: AtomicHabitkoper },
              { title: "The Alchemist", description: "A journey of self-discovery.", cover: theAlchemistkoper },
              { title: "1984", description: "A dystopian novel by George Orwell.", cover: GO1984koper },
              { title: "To Kill a Mockingbird", description: "A classic novel of racism and injustice.", cover: toKillAMockingbirdkoper },
              { title: "The Subtle Art of Not Giving a F*ck", description: "A counterintuitive approach to living a good life.", cover: theSubtleArtkoper }
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
      </>
  );
}

export default Book;
