import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokemonController } from "./controllers/PokemonController.js";

export const router = [
  {
    path: '',
    controller: PokemonController
  },
  
]