import React from 'react';

function Contact() {
  return (
    <div>
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
            <div className="col-md-8">
            <div className="card p-4 shadow-sm">
                <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
            </div>
        </div>
        </div>

    </div>
  );
}

export default Contact;
