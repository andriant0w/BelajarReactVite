import React from 'react';
import andriPhoto from '../assets/anggota/andri.jpg';
import sarahPhoto from '../assets/anggota/sarah.webp';
import michaelPhoto from '../assets/anggota/lee.jpg';

function Team() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Our Team</h1>
            <p className="lead text-body-secondary">
              Meet the amazing people behind our success. Get to know our dedicated team members!
            </p>
          </div>
        </div>
      </section>

      <div className="row text-center justify-content-center px-3">
        <div className="col-lg-4 d-flex flex-column align-items-center mb-5">
          <img
            src={andriPhoto}
            alt="Andrianto Wicaksono"
            className="rounded-circle img-fluid shadow-sm mb-3"
            style={{ width: "140px", height: "140px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">Andrianto Wicaksono</h2>
          <p className="text-center">A passionate developer who loves building amazing applications and solving complex problems.</p>
          <p><a className="btn btn-secondary" href="#">View profile &raquo;</a></p>
        </div>

        <div className="col-lg-4 d-flex flex-column align-items-center mb-5">
          <img
            src={sarahPhoto}
            alt="Sarah Johnson"
            className="rounded-circle img-fluid shadow-sm mb-3"
            style={{ width: "140px", height: "140px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">Sarah Johnson</h2>
          <p className="text-center">An experienced designer with a keen eye for detail and a passion for creating stunning visuals.</p>
          <p><a className="btn btn-secondary" href="#">View profile &raquo;</a></p>
        </div>

        <div className="col-lg-4 d-flex flex-column align-items-center mb-5">
          <img
            src= {michaelPhoto}
            alt="Michael Lee"
            className="rounded-circle img-fluid shadow-sm mb-3"
            style={{ width: "140px", height: "140px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">Michael Lee</h2>
          <p className="text-center">A marketing expert who excels at connecting with audiences and driving growth for the team.</p>
          <p><a className="btn btn-secondary" href="#">View profile &raquo;</a></p>
        </div>
      </div>
    </>
  );
}

export default Team;
