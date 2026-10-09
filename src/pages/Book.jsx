import React from 'react';
import books from '../Utils/books';

function Book() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Koleksi Buku</h2>
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author} ({book.year})</h6>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;