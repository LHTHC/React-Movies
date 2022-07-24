import { useState } from 'react';

const Search = (props) => {
  const { load = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      load(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    load(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          type="search"
          className="validate"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn search-btn"
          onClick={() => {
            load(search, type);
          }}
        >
          Search
        </button>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
