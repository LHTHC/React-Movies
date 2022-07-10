export const Movie = (props) => {
  const { Title: title, Year: year, Type: type, Poster: poster, imdbID: id } = props;
  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img src={`https://via.placeholder.com/300x450?text=${title}`} alt={'noimg'} />
        ) : (
          <img className="activator" src={poster} alt="poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>
          {year}
          <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
};
