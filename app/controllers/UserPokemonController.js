import { AppState } from "../AppState.js";
import { userPokemonService } from "../services/UserPokemonService.js";


function _drawUserPokemon(){
    let template = /*html*/ `
    <div class="">
    <div class="d-flex">
    <p>
        <b>
        Prepared${AppState.userPokemon.filter(p => p.prepared).length}/${AppState.userPokemon.length}</p>
        </b>
        </div>
        </div>`
}

export class UserPokemonController{
    constructor(){
        AppState.on('account', this.getUserPokemon)
        AppState.on('userPokemon', _drawUserPokemon)
    }


    async getUserPokemon(){
        try {
            await userPokemonService.getUserPokemon()
        } catch (error) {
            
        }
    }

    async addPokemon(){
        try {
            await userPokemonService.addPokemon()
        } catch (error) {
            
        }
    }
}