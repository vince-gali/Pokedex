import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { pokemonService } from "../services/PokemonService.js"




function _drawPokeDex(){
    // console.log('pokeDex', AppState.pokeDex);
    let template = ''
    AppState.pokeDex.forEach(p => {
        template += /*html*/ `
        <div>
        <p class="fs-4 selectable" role="button" onclick="app.PokemonController.setActivePokemon('${p.name}')">${p.name} </p>
        <div>
        `
    })
    
    setHTML('pokeDex', template)
    
}

function _drawActivePokemon(){
    // @ts-ignore
    setHTML('activePokemon', AppState.activePokemon.ActivePokemonCardTemplate)
}
export class PokemonController{

    constructor(){

        AppState.on('pokeDex', _drawPokeDex)
        AppState.on('activePokemon', _drawActivePokemon)
        this.getPokemon()
        _drawPokeDex()

    }


    async getPokemon(){
        try {
            await pokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActivePokemon(index){
        try { 
            await pokemonService.setActivePokemon(index)
        } catch (error) {
            Pop.error(error)
        }
    }
}