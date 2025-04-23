import React, { useState } from 'react';

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverFile, setCoverFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverFile(file);
    setPreview(URL.createObjectURL(file)); // Preview langsung
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !coverFile) {
      alert('Lengkapi semua field!');
      return;
    }

    const newBook = {
      title,
      description,
      cover: preview, // pakai URL blob lokal
    };

    onAddBook(newBook); // kirim ke komponen parent
    setTitle('');
    setDescription('');
    setCoverFile(null);
    setPreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <div className="mb-3">
        <label className="form-label">Judul Buku</label>
        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Deskripsi</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Cover Buku</label>
        <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
        {preview && <img src={preview} alt="Preview" className="img-thumbnail mt-3" width={150} />}
      </div>

      <button type="submit" className="btn btn-primary">Tambah Buku</button>
    </form>
  );
}

export default AddBookForm;
