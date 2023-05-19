import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"

class UserPokemonService{
    async getUserPokemon(){
        const res = await sandboxApi.get('api/pokemon')
        AppState.userPokemon = res.data.map(p => new Pokemon(p))
    }

    async addPokemon(){
        const res = await sandboxApi.post('api/pokemon', AppState.activePokemon)
        const newPokemon = new Pokemon(res.data)
        AppState.userPokemon.push(newPokemon)
        AppState.emit('userPokemon')
    }
}

export const userPokemonService = new UserPokemonService()