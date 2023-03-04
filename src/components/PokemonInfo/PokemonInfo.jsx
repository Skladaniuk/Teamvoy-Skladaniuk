import css from './PokemonInfo.module.css';

export const PokemonInfo = ({ data }) => {
  console.log(data);

  return (
    <>
      {!data ? (
        ''
      ) : (
        <>
          <div>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
            />
            <div>
                <h2>{data.name}</h2>
                <p>{`#00${data.id}` }</p>
            </div>
          </div>
          <div className="">
            <table border="1" className={css.table}>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>
                    {data.types.map(item => {
                      return <p>{item.type.name}</p>;
                    })}
                  </td>
                </tr>
                {data.stats
                  .sort((prev, curr) => {
                    return prev.stat.name.localeCompare(curr.stat.name);
                  })
                  .map(item => {
                    return (
                      <>
                        <tr>
                          <td>{item.stat.name}</td>
                          <td>{item.base_stat}</td>
                        </tr>
                      </>
                    );
                  })}
                <tr>
                  <td>weight</td>
                  <td>{data.weight}</td>
                </tr>
                <tr>
                  <td>Total moves</td>
                  <td>{data.moves.length}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};
