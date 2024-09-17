function Footer() {

  const date = new Date();
  let year = date.getFullYear();

    return (
      <footer>
          <p className="copyright">Copyright © {year} Cameron Pool</p>
          <button className="contact">Contact Me</button>
      </footer>
    );
  }
  
  export default Footer;
  