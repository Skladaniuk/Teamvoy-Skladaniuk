import css from './Pokemon.module.css';
import { nanoid } from 'nanoid';
export const Pokemon = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {pokemon.map(item => {
        return (
          <div
            className={css.pokemon}
            key={item.id}
            onClick={() => infoPokemon(item)}
          >
            <div className={css.pokemon__img}>
              <img src={item.sprites.front_default} width="100%" />
            </div>
            <p className={css.pokemon__name}>{item.name} </p>
            <ul className={css.pokemon__types}>
              {item.types.map(item => {
                return (
                  <div key={nanoid()} className={css.pokemon__wrapper}>
                    <li className={css.pokemon__type}>{item.type.name}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};
