import React, { useState } from 'react';
import initialBooks from '../Utils/books';

function Home() {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return alert('Judul dan Penulis wajib diisi!');
    
    const addedBook = {
      id: Date.now(),
      ...newBook,
      year: Number(newBook.year) || 2026,
      image: newBook.image || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
    };

    setBooks([addedBook, ...books]);
    setNewBook({ title: '', author: '', year: '', description: '', image: '' });
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Daftar Buku</h2>

      {/* Form Tambah Buku (Hooks useState) */}
      <div className="card p-4 mb-5 shadow-sm">
        <h4 className="mb-3">Tambah Buku Baru</h4>
        <form onSubmit={handleAddBook}>
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" name="title" className="form-control" placeholder="Judul Buku" value={newBook.title} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <input type="text" name="author" className="form-control" placeholder="Penulis" value={newBook.author} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <input type="number" name="year" className="form-control" placeholder="Tahun Terbit" value={newBook.year} onChange={handleChange} />
            </div>
            <div className="col-md-8">
              <input type="url" name="image" className="form-control" placeholder="URL Gambar (Opsional)" value={newBook.image} onChange={handleChange} />
            </div>
            <div className="col-12">
              <textarea name="description" className="form-control" placeholder="Deskripsi Singkat" value={newBook.description} onChange={handleChange}></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">+ Tambah Buku</button>
            </div>
          </div>
        </form>
      </div>

      {/* Rendering Data Menggunakan .map() */}
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author} ({book.year})</h6>
                <p className="card-text flex-grow-1">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;