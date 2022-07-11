export const Footer = () => {
  return (
    <footer className="page-footer blue darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} React Movies
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/LHTHC/react-movies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
