// import axios from "axios";
// axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';


// export async function fetchPokemonsList() {
//     try{
//         const {data}  = await axios.get(`?limit=12`)
//         const pokemonList = data.results
//         return pokemonList
//     }
//     catch(error){
//         console.log(error.message)
//         throw new Error
        
//     }
// }

// export async function fetchPokemonInfo(name) {
//     try{
//         const {data} = await axios.get(`${name}`)
//         const pokemonInfo = data.results
//     }
//     catch(error) {
//         console.log(error.message)
//         throw new Error
//     }
// }