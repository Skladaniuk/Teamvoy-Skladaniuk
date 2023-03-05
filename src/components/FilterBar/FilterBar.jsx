import css from './FilterBar.module.css';


export const FilterBar = ({ value, onChange }) => {
  return (
    <div className={css.filter__wrapper}>
      <h3 className={css.filter__text}>Find pokemons by type</h3>
      <input className={css.filter__input} type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};