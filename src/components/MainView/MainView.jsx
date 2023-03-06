import css from './MainView.module.css';
import { useState, useEffect } from 'react';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { PokemonInfo } from 'components/PokemonInfo/PokemonInfo';
import axios from 'axios';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { FilterBar } from 'components/FilterBar/FilterBar';
import { Title } from 'components/Title/Title';

export const MainView = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffSet] = useState(0);
  const [currentPok, setCurrentPok] = useState();
  const [filter, setFilter] = useState('');
  const limit = 12;
 
  useEffect(() => {
    pokeFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const pokeFun = async () => {
    setLoading(true);

    const url = creatLink(limit, offset);
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
    setFilter(event.target.value);
  };

  const getVisiblePokemons = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredPokemons = pokeData.filter(pokemon => {
      for (const iterator of pokemon.types) {
        if (iterator.type.name.toLowerCase() === normalizedFilter) {
          return true;
        } else {
          continue;
        }
      }
    });
    return filteredPokemons.length > 0 ? filteredPokemons : pokeData;
  };

  const creatLink = (limit, offset) => {
    return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  };



  return (
    <>
     
        <div className={css.container}>
          <Title />
          <FilterBar value={filter} onChange={changeFilter} />
          <div className={css.sectionWrapper}>
            <div className={css.leftContent}>
              <Pokemon
                pokemon={getVisiblePokemons()}
                loading={loading}
                infoPokemon={pok => setCurrentPok(pok)}
              />
              <ButtonLoadMore loadMore={loadMore} />
            </div>
            <div className={css.rightContent}>
              <PokemonInfo data={currentPok} />
            </div>
          </div>
        </div>
     
    </>
  );
};
