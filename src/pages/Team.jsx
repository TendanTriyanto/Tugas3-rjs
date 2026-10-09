import React from 'react';
import tendanImg from '../assets/ten.jpeg';
import bilaImg from '../assets/bila.jpeg';
import ambonImg from '../assets/ambon.jpeg';

function Team() {
  const members = [
    {
      id: 1,
      name: "Tendan",
      role: "Chief Executive Officer (CEO)",
      desc: "Memimpin visi dan strategi pengembangan platform toko buku digital ini.",
      image: tendanImg
    },
    {
      id: 2,
      name: "Bila",
      role: "Book Curator & Editor",
      desc: "Ahli yang menyeleksi kurasi bacaan berkualitas dan menjalin relasi penerbit.",
      image: bilaImg
    },
    {
      id: 3,
      name: "Ambon",
      role: "Marketing Director",
      desc: "Mengelola promosi buku, kampanye literasi, dan kepuasan pelanggan.",
      image: ambonImg
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Tim BookStore</h2>
        <p className="text-muted">Orang-orang hebat di balik layar yang memastikan buku terbaik sampai ke tanganmu</p>
      </div>

      <div className="row g-4">
        {members.map((member) => (
          <div key={member.id} className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-3 border-0">
              <div className="d-flex justify-content-center mt-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle shadow-sm"
                  style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <h4 className="fw-bold mb-1">{member.name}</h4>
                <p className="text-primary small mb-3">{member.role}</p>
                <p className="card-text text-muted">{member.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;