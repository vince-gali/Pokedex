import { AppState } from "../AppState.js"


export class Pokemon{
    constructor(data){
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.sprites.front_shiny
        this.weight = data.weight
        this.types = data.types
        this.creatorId = data.creatorId
        this.creator = data.creator
    }



    get ActivePokemonCardTemplate(){
        return /*html*/`
        
        <div class=" card col-4 sticky-top my-4">
        <div class="card-body">
            <p class="fs-2">${this.name}</p>
            <p class="fs-2">${this.img}</p>
            ${this.AddPokemonButton}
        </div>
        </div>
        
        `
    }


    get PokemonList(){
        return /*html*/ `
        <div>
        <p class="fs-4 selectable" role="button">${this.name} </p>
        <div>
        `
    }

    get AddPokemonButton(){
        if (!AppState.account){
            return /*html*/ `
            <button class="btn btn-primary" onclick="app.AuthController.login()">Login to add to Poke Backpack</button>`
        }
        return /*html*/ `
        <button class="btn btn-primary" onclick="app.userPokemonController.addPokemon()">Add Poke</button>`
    }

    
}