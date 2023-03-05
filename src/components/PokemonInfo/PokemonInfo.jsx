import css from './PokemonInfo.module.css';
import { nanoid } from 'nanoid';
export const PokemonInfo = ({ data }) => {

  return (
    <div>
      {!data ? (
        ''
      ) : (
        <>
          <div className={css.pokemon}>
            <div>
              <img
                className={css.pokemon__img}
                src={data.sprites.other.dream_world.front_default}
                alt={data.name}
              />

              <div>
                <h2 className={css.pokemon__title}>
                  {data.name}
                  <span>{`#00${data.id}`}</span>
                </h2>
              </div>
            </div>
            <div>
              <table
                border="1"
                width="100%"
                cellSpacing="0"
                cellPadding="5"
                className={css.table}
              >
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>
                      {data.types.map(item => {
                        return (
                          <p key={nanoid()}>
                            {item.type.name.charAt(0).toUpperCase() +
                              item.type.name.slice(1)}
                          </p>
                        );
                      })}
                    </td>
                  </tr>
                  {data.stats
                    .sort((prev, curr) => {
                      return prev.stat.name.localeCompare(curr.stat.name);
                    })
                    .map(item => {
                      return (
                        <tr key={nanoid()}>
                          <td>
                            {item.stat.name.charAt(0).toUpperCase() +
                              item.stat.name.slice(1)}
                          </td>
                          <td> {item.base_stat}</td>
                        </tr>
                      );
                    })}
                  <tr>
                    <td>Weight</td>
                    <td>{data.weight}</td>
                  </tr>
                  <tr>
                    <td>Total moves</td>
                    <td>{data.moves.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
