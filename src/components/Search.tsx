import React from 'react';

interface searchProps {
  getPokemon(name: string): Promise<void>;
}

const Search: React.FC<searchProps> = (props) => {
  const [val, setVal] = React.useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setVal(event.target.value);
  };

  const search = (event: React.MouseEvent, value: string) => {
    event.preventDefault();
    props.getPokemon(value);
  };

  return (
    <div className="search">
      <form action="get">
        <input
          id="search"
          placeholder="Введите имя или номер"
          value={val}
          onChange={changeHandler}
          // onKeyPress={(event) => search(event, val)}
        />
        <button onClick={(event) => search(event, val)}>
          <i className="button-img"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
