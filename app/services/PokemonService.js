import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"



class PokemonService{


    async setActivePokemon(index){
        const res = await pokeApi.get('api/v2/pokemon/' + index)
        console.log('pokemon', new Pokemon(res.data));
        AppState.activePokemon = new Pokemon(res.data)

    }
    async getPokemon(){
        const res = await pokeApi.get('api/v2/pokemon')
        console.log('what is the res', res.data.results);
        AppState.pokeDex = res.data.results
    }
}



export const pokemonService = new PokemonService()