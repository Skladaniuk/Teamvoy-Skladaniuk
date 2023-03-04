import css from './Pokemon.module.css';

export const Pokemon = ({ pokemon, loading, infoPokemon }) => {
  const array = pokemon.flatMap(item => {
    return item.types.flatMap(pok => {
      return pok.type;
    });
  });

  console.log(array);

  return (
    <>
      {pokemon.map(item => {
        return (
          <>
            <div
              className={css.pokemon}
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <h2>{item.id} </h2>
              <img src={item.sprites.front_default} />
              <p>{item.name}</p>
              <ul>
                {item.types.map(item => {
                  return <li key={item.id}>{item.type.name}</li>;
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};
