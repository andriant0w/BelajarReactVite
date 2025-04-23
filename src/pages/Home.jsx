import React from 'react';

function Home({ books }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">{books[0]?.title} - Yuval Noah Harari</h1>
            <p className="lead">
              {books[0]?.description}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Browse Books</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
            </div>
          </div>
          <div className="col-lg-6 p-4 overflow-hidden d-flex justify-content-center align-items-center">
            <img className="rounded-lg-3 img-fluid" src={books[0]?.cover} alt="Bookstore Hero" />
          </div>
        </div>
      </div>

      {/* Best Seller Section */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">Explore our most popular books that readers love. Find your next favorite read today!</p>
          </div>
        </div>
      </section>

      {/* Book List */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book, index) => (
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
