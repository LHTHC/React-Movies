export const Header = () => {
  return (
    <nav className="nav blue darken-4">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/LHTHC/react-movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
