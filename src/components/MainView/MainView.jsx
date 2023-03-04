import css from './MainView.module.css';
import { useState, useEffect } from 'react';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { PokemonInfo } from 'components/PokemonInfo/PokemonInfo';
import axios from 'axios';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { FilterBar } from 'components/FilterBar/FilterBar';
export const MainView = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [offset, setOffSet] = useState(0);
  const [currentPok, setCurrentPok] = useState();
  const [filter, setFilter] = useState('');
  const limit = 12;

  useEffect(() => {
    pokeFun();
  }, [offset]);
  
  const pokeFun = async () => {
    setLoading(true);
    const url = creatLink(limit, offset);
    console.log(url)
    const res = await axios(url);

    getPokemon(res.data.results);

    setLoading(false);
  };

  const getPokemon = async res => {
    res.map(async item => {
      const result = await axios.get(item.url);
      setPokeData(state => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const loadMore = async () => {
    setOffSet(prev => prev + limit);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisiblePokemons = () => {
    const normalizedFilter = filter.toLowerCase();
    return pokeData.filter(({ type }) =>
      type.toLowerCase().includes(normalizedFilter)
    );
  };

  const creatLink = (limit, offset) => {
    return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  };

  return (
    <>
      <FilterBar />
      <div className={css.container}>
        <div className={css.leftContent}>
          <Pokemon
            pokemon={pokeData}
            loading={loading}
            infoPokemon={pok => setCurrentPok(pok)}
          />
        </div>
        <div className={css.rightContent}>
          <PokemonInfo data={currentPok} />
        </div>
      </div>
      <ButtonLoadMore loadMore={loadMore} />
    </>
  );
};
