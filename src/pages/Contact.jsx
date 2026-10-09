export default function Contact() {
  return (
    <div>
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Hubungi Kami</h1>
          <p className="text-muted">Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan kepada kami.</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h3 className="fw-bold mb-4">Informasi Kontak</h3>
              <p className="text-muted mb-4">Silakan hubungi kami melalui saluran di bawah ini atau isi formulir di samping.</p>
              
              <div className="d-flex mb-3">
                <div className="bi bi-geo-alt-fill text-primary fs-4 me-3"></div>
                <div>
                  <h5 className="mb-1">Alamat</h5>
                  <p className="text-muted">Jl. Jenderal Sudirman No. 123, Jakarta Selatan</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="bi bi-envelope-fill text-primary fs-4 me-3"></div>
                <div>
                  <h5 className="mb-1">Email</h5>
                  <p className="text-muted">support@companyname.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4">
                <div className="card-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label">Nama Lengkap</label>
                      <input type="text" className="form-control" placeholder="Masukkan nama Anda" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Alamat Email</label>
                      <input type="email" className="form-control" placeholder="nama@email.com" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Pesan</label>
                      <textarea className="form-control" rows="5" placeholder="Tuliskan pesan Anda..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}