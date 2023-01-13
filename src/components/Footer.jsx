import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-stone-900 text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Brand your products</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div><img src="/2daEntrega-React/logo_footer.png" alt="logo" /></div>
      </footer>




    </div>
  )
}

export default Footer