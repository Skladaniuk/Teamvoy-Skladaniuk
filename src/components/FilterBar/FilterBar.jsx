import css from './FilterBar.module.css';


export const FilterBar = ({ value, onChange }) => {


  const onChangeInput = e => {};
  return (
    <div>
      <p>Find pokemons by type</p>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};