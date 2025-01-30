//import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        <ul className="list-inline mt-2">
          <li className="list-inline-item">
            <a href="#" className="text-light">Privacy Policy</a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="#" className="text-light">Terms of Service</a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <a href="#" className="text-light">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
