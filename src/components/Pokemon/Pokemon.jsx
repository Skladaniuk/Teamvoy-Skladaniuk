import css from './Pokemon.module.css';
import { nanoid } from 'nanoid';
import colors from 'const';
export const Pokemon = ({ pokemon, infoPokemon }) => {



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
              <img src={item.sprites.front_default} width="100%" alt={pokemon.name} />
            </div>
            <p className={css.pokemon__name}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}{' '}
            </p>
            <ul className={css.pokemon__types}>
              {item.types.map(item => {
                const typeColor = colors[item.type.name];
            
                return (
                  <div key={nanoid()} className={css.pokemon__wrapper}>
                    <li
                      style={{ backgroundColor: typeColor }}
                      className={css.pokemon__type}
                    >
                      {item.type.name.charAt(0).toUpperCase() +
                        item.type.name.slice(1)}
                    </li>
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
