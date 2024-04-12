import {
  pokeballIcon,
  layPokeball,
  layScarlet,
  layViolet,
  scarletIcon,
  violetIcon,
} from "@/MapController"
import { MarkerInfo, PokeFilter } from "./dataTypes"
import { PokemonType } from "@/features/pokemon/pokemonApiSlice"
import { GameVersion } from "@/VersionSelect"

export const kitakamiPokeFilter: PokeFilter = {
  "230": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 183, 7022,
      7028, 7030, 7031,
    ],
    name: "ekans",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
  },
  "240": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 6004,
      7086, 7087,
    ],
    name: "arbok",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png",
  },
  "250": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 7010,
    ],
    name: "pikachu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
  },
  "270": {
    tableIDs: [
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100, 101, 7029,
    ],
    name: "sandshrew",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png",
  },
  "280": {
    tableIDs: [
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 6005, 7104,
    ],
    name: "sandslash",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png",
  },
  "350": {
    tableIDs: [34, 35, 36, 100, 102, 103, 104, 105, 106, 107, 7036],
    name: "clefairy",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
  },
  "370": {
    tableIDs: [
      10, 18, 23, 29, 33, 35, 41, 45, 47, 56, 57, 58, 59, 60, 61, 62, 63, 64,
      65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 94, 96, 98, 99, 100, 107, 108,
      109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
      124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
      139, 140, 141, 142, 143, 144, 145, 146, 147, 6003, 7019,
    ],
    name: "vulpix",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/37.png",
  },
  "560": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 68, 71, 79, 85, 87, 96, 121, 126, 146, 148, 149, 150,
      151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
    ],
    name: "mankey",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/56.png",
  },
  "570": {
    tableIDs: [
      57, 68, 71, 79, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153,
      154, 155, 156, 157, 158, 7126,
    ],
    name: "primeape",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/57.png",
  },
  "580": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34,
      57, 68, 71, 79, 85, 87, 96, 118, 121, 126, 141, 146, 148, 149, 150, 151,
      152, 153, 154, 155, 156, 157, 158, 161, 162, 163, 164, 165, 166, 167, 168,
      7018, 7080,
    ],
    name: "growlithe",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/58.png",
  },
  "600": {
    tableIDs: [
      10, 19, 21, 22, 23, 27, 28, 29, 31, 115, 117, 169, 170, 171, 172, 173,
      7020,
    ],
    name: "poliwag",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/60.png",
  },
  "610": {
    tableIDs: [
      19, 21, 22, 23, 27, 28, 29, 31, 32, 138, 143, 170, 171, 172, 173, 174,
      175, 176, 177, 178, 179, 180, 181, 182, 6013,
    ],
    name: "poliwhirl",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/61.png",
  },
  "690": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 183,
    ],
    name: "bellsprout",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/69.png",
  },
  "700": {
    tableIDs: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    name: "weepinbell",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/70.png",
  },
  "740": {
    tableIDs: [
      1, 10, 15, 34, 35, 41, 45, 47, 56, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 101, 102, 106,
      107, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133,
      134, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 146, 147, 162, 164,
      165, 166, 168, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194,
      195, 196, 197, 198, 6006,
    ],
    name: "geodude",
    types: [PokemonType.ROCK, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/74.png",
  },
  "750": {
    tableIDs: [
      35, 41, 45, 47, 56, 57, 71, 72, 75, 79, 85, 87, 94, 96, 98, 99, 107, 120,
      121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
      136, 137, 138, 139, 140, 142, 143, 144, 145, 146, 151, 156, 197, 198, 199,
      200, 201, 202, 7045, 7051, 7075, 7110,
    ],
    name: "graveler",
    types: [PokemonType.ROCK, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/75.png",
  },
  "920": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 56,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 129, 142, 168,
    ],
    name: "gastly",
    types: [PokemonType.GHOST, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png",
  },
  "930": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 142,
    ],
    name: "haunter",
    types: [PokemonType.GHOST, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/93.png",
  },
  "940": {
    tableIDs: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    name: "gengar",
    types: [PokemonType.GHOST, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png",
  },
  "1090": {
    tableIDs: [
      35, 36, 56, 102, 103, 104, 105, 106, 120, 122, 129, 131, 140, 145, 164,
      166, 186, 187, 189, 191, 195, 196, 7042,
    ],
    name: "koffing",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/109.png",
  },
  "1290": {
    tableIDs: [
      10, 19, 21, 22, 23, 27, 28, 29, 31, 34, 57, 71, 99, 107, 117, 122, 126,
      130, 132, 133, 141, 148, 149, 150, 151, 152, 153, 155, 161, 168, 170, 171,
      173, 179, 181, 185, 188, 194,
    ],
    name: "magikarp",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/129.png",
  },
  "1300": {
    tableIDs: [
      32, 57, 71, 126, 132, 133, 138, 143, 148, 149, 150, 151, 152, 153, 155,
      171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
    ],
    name: "gyarados",
    types: [PokemonType.WATER, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
  },
  "1430": {
    tableIDs: [7135],
    name: "snorlax",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png",
  },
  "1610": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 21, 23, 29, 33,
      100, 101, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 170,
      183, 203, 7008,
    ],
    name: "sentret",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/161.png",
  },
  "1620": {
    tableIDs: [
      1, 10, 15, 18, 21, 23, 29, 33, 100, 101, 108, 109, 110, 111, 112, 113,
      114, 115, 116, 117, 118, 119, 170, 183, 203, 7009,
    ],
    name: "furret",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/162.png",
  },
  "1630": {
    tableIDs: [
      8, 10, 11, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      32, 33, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 79, 84, 85, 87, 96, 97, 100, 101, 107, 108, 109, 110,
      111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 123, 126, 127, 134, 136,
      138, 146, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 197, 198,
      199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
    ],
    name: "hoothoot",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/163.png",
  },
  "1640": {
    tableIDs: [
      8, 11, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
      73, 74, 75, 79, 84, 85, 87, 96, 97, 101, 121, 123, 126, 127, 134, 136,
      138, 146, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
      171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 197, 198, 199,
      200, 201, 202, 204, 205, 206, 207, 208, 209, 210, 7032,
    ],
    name: "noctowl",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/164.png",
  },
  "1670": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 53, 57, 58, 59, 60, 61,
      62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 85, 87, 96, 100,
      108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 123, 126,
      146, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 169, 170, 183,
      197, 198, 199, 200, 201, 202, 203, 211, 212, 213, 214,
    ],
    name: "spinarak",
    types: [PokemonType.BUG, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/167.png",
  },
  "1680": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 57, 58,
      59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 79,
      85, 87, 96, 121, 123, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155,
      156, 157, 158, 197, 198, 199, 200, 201, 202, 7079, 7119,
    ],
    name: "ariados",
    types: [PokemonType.BUG, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/168.png",
  },
  "1720": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 34, 118, 141, 161, 162,
      163, 164, 165, 166, 167, 168, 183,
    ],
    name: "pichu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/172.png",
  },
  "1730": {
    tableIDs: [34, 35, 36, 100, 102, 103, 104, 105, 106, 107],
    name: "cleffa",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png",
  },
  "1850": {
    tableIDs: [
      45, 54, 57, 68, 71, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
      89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 121, 126, 136, 146, 148, 149,
      150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 204, 205, 206, 207,
      208,
    ],
    name: "sudowoodo",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/185.png",
  },
  "1900": {
    tableIDs: [
      215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229,
      230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244,
      245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259,
      260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274,
      275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289,
      290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304,
      305, 306, 307,
    ],
    name: "aipom",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/190.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "1930": {
    tableIDs: [
      3, 9, 14, 15, 35, 36, 39, 51, 53, 55, 57, 68, 71, 79, 85, 87, 96, 102,
      103, 104, 105, 106, 115, 117, 121, 126, 146, 148, 149, 150, 151, 152, 153,
      154, 155, 156, 157, 158, 169, 209, 210, 211, 212, 213, 214, 6012, 7005,
      7007, 7067, 7132,
    ],
    name: "yanma",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/193.png",
  },
  "1940": {
    tableIDs: [
      3, 9, 10, 14, 15, 19, 21, 22, 23, 27, 28, 29, 31, 32, 53, 57, 59, 71, 101,
      115, 117, 125, 126, 130, 132, 133, 134, 138, 139, 143, 148, 149, 150, 151,
      152, 153, 155, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
      181, 182, 199, 202, 211, 212, 213, 214, 7002, 7024, 7039,
    ],
    name: "wooper",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/194.png",
  },
  "1950": {
    tableIDs: [
      19, 21, 22, 23, 27, 28, 29, 31, 32, 57, 59, 71, 125, 126, 130, 132, 133,
      134, 138, 139, 143, 148, 149, 150, 151, 152, 153, 155, 170, 171, 172, 173,
      174, 175, 176, 177, 178, 179, 180, 181, 182, 6020, 7056, 7098, 7128,
    ],
    name: "quagsire",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/195.png",
  },
  "2060": {
    tableIDs: [
      34, 35, 36, 56, 62, 72, 107, 125, 129, 130, 132, 133, 134, 139, 142, 200,
      7033,
    ],
    name: "dunsparce",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/206.png",
  },
  "2070": {
    tableIDs: [
      308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322,
      323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337,
      338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352,
      353, 354, 355, 356, 357, 358, 359,
    ],
    name: "gligar",
    types: [PokemonType.GROUND, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/207.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "2140": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      100, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 7017,
      7134,
    ],
    name: "heracross",
    types: [PokemonType.BUG, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/214.png",
  },
  "2150": {
    tableIDs: [72, 125, 130, 132, 133, 134, 139, 142, 7055],
    name: "sneasel",
    types: [PokemonType.DARK, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/215.png",
  },
  "2180": {
    tableIDs: [
      35, 36, 102, 103, 104, 105, 106, 132, 137, 140, 146, 147, 186, 188, 190,
      192, 193, 194, 6007, 7041, 7046,
    ],
    name: "slugma",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/218.png",
  },
  "2200": {
    tableIDs: [
      10, 18, 21, 23, 29, 33, 34, 100, 108, 109, 110, 111, 112, 113, 114, 115,
      116, 117, 118, 119, 125, 130, 132, 133, 134, 139, 170, 184, 203,
    ],
    name: "swinub",
    types: [PokemonType.ICE, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/220.png",
  },
  "2210": {
    tableIDs: [125, 130, 132, 133, 134, 139],
    name: "piloswine",
    types: [PokemonType.ICE, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/221.png",
  },
  "2280": {
    tableIDs: [
      35, 41, 45, 46, 47, 56, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
      88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 106, 107, 120, 121, 122,
      123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
      138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 164, 166, 186, 187, 189,
      191, 195, 196, 7040,
    ],
    name: "houndour",
    types: [PokemonType.DARK, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/228.png",
  },
  "2290": {
    tableIDs: [
      35, 41, 45, 47, 56, 94, 96, 98, 99, 107, 120, 121, 122, 123, 124, 125,
      126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
      141, 142, 143, 144, 145, 146, 147, 7047, 7107,
    ],
    name: "houndoom",
    types: [PokemonType.DARK, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/229.png",
  },
  "2340": {
    tableIDs: [
      10, 18, 23, 29, 33, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
      70, 71, 72, 73, 74, 75, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119,
    ],
    name: "stantler",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/234.png",
  },
  "2610": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 53, 115, 117, 169,
      183, 211, 212, 213, 214, 7001, 7004, 7011,
    ],
    name: "poochyena",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/261.png",
  },
  "2620": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 68, 71, 84, 85, 87, 95, 96, 97, 121, 126, 136, 146,
      148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 204, 205,
      206, 207, 208, 209, 210, 7006, 7114, 7131,
    ],
    name: "mightyena",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/262.png",
  },
  "2700": {
    tableIDs: [
      39, 41, 51, 55, 57, 68, 71, 85, 87, 96, 98, 99, 121, 122, 126, 128, 130,
      140, 141, 142, 143, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
      157, 158, 188, 194, 209, 210, 7025,
    ],
    name: "lotad",
    types: [PokemonType.WATER, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/270.png",
  },
  "2710": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152,
      153, 154, 155, 156, 157, 158, 209, 210, 7026,
    ],
    name: "lombre",
    types: [PokemonType.WATER, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/271.png",
  },
  "2730": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      57, 68, 71, 85, 87, 96, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155, 156,
      157, 158, 7023,
    ],
    name: "seedot",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/273.png",
  },
  "2740": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 57, 58,
      59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 85,
      87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
      158, 7027, 7124,
    ],
    name: "nuzleaf",
    types: [PokemonType.GRASS, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/274.png",
  },
  "2800": {
    tableIDs: [
      8, 10, 11, 13, 18, 21, 23, 29, 33, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 84, 97, 100, 108, 109, 110, 111,
      112, 113, 114, 115, 116, 117, 118, 119, 136, 159, 160, 170, 203, 204, 205,
      206, 207, 208, 209, 210,
    ],
    name: "ralts",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/280.png",
  },
  "2810": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 68, 71, 84, 85, 87, 96, 97, 121, 126, 136, 146, 148,
      149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 204, 205, 206,
      207, 208, 209, 210, 7069, 7113, 7115,
    ],
    name: "kirlia",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/281.png",
  },
  "2820": {
    tableIDs: [
      57, 68, 71, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154,
      155, 156, 157, 158, 7112,
    ],
    name: "gardevoir",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/282.png",
  },
  "2830": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 41, 57,
      68, 71, 85, 87, 96, 98, 99, 121, 122, 126, 128, 140, 141, 142, 143, 146,
      147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 171,
    ],
    name: "surskit",
    types: [PokemonType.BUG, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/283.png",
  },
  "2840": {
    tableIDs: [22, 27, 57, 71, 148, 149, 150, 151, 152, 153, 155, 171, 7064],
    name: "masquerain",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/284.png",
  },
  "2990": {
    tableIDs: [
      54, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95, 96, 97, 98, 99, 136, 160, 204, 205, 206, 207, 208, 6016, 7076,
    ],
    name: "nosepass",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/299.png",
  },
  "3130": {
    tableIDs: [
      216, 217, 220, 223, 224, 225, 226, 227, 229, 232, 233, 234, 241, 260, 265,
      270, 280, 285, 286, 289, 291, 295, 297, 299, 303, 305, 332, 333, 334, 335,
      336, 337, 338, 339, 340, 341, 342, 348, 349, 350, 356, 358, 360, 361, 362,
      363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
      378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392,
      393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407,
      408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422,
      423, 424, 425, 426, 427, 428, 429, 430, 431,
    ],
    name: "volbeat",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/313.png",
  },
  "3140": {
    tableIDs: [
      216, 217, 220, 223, 224, 225, 226, 227, 229, 232, 233, 234, 241, 260, 265,
      270, 280, 285, 286, 289, 291, 295, 297, 299, 303, 305, 332, 333, 334, 335,
      336, 337, 338, 339, 340, 341, 342, 348, 349, 350, 356, 358, 360, 361, 362,
      363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
      378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392,
      393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407,
      408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422,
      423, 424, 425, 426, 427, 428, 429, 430, 431,
    ],
    name: "illumise",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/314.png",
  },
  "3250": {
    tableIDs: [
      35, 41, 45, 47, 56, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
      89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 102, 106, 107, 120, 121, 122,
      123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
      138, 139, 140, 142, 143, 144, 145, 146, 147, 164, 166, 186, 187, 188, 189,
      190, 191, 192, 193, 194, 195, 196, 7044,
    ],
    name: "spoink",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/325.png",
  },
  "3390": {
    tableIDs: [
      32, 35, 36, 138, 143, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
      181, 182, 7085,
    ],
    name: "barboach",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/339.png",
  },
  "3400": {
    tableIDs: [
      32, 57, 71, 126, 138, 143, 148, 149, 150, 151, 152, 153, 155, 171, 172,
      173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 7058,
    ],
    name: "whiscash",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/340.png",
  },
  "3410": {
    tableIDs: [
      3, 10, 14, 19, 21, 22, 23, 27, 28, 29, 31, 32, 115, 117, 138, 143, 169,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 211, 212,
    ],
    name: "corphish",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/341.png",
  },
  "3420": {
    tableIDs: [
      32, 138, 143, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
    ],
    name: "crawdaunt",
    types: [PokemonType.WATER, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/342.png",
  },
  "3490": {
    tableIDs: [35, 36],
    name: "feebas",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/349.png",
  },
  "3550": {
    tableIDs: [
      34, 35, 36, 41, 45, 47, 56, 67, 72, 73, 75, 94, 96, 98, 99, 102, 103, 104,
      105, 106, 107, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131,
      132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
      147, 164, 166, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
      198, 199, 200, 201, 202,
    ],
    name: "duskull",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/355.png",
  },
  "3560": {
    tableIDs: [67, 72, 73, 75, 123, 197, 198, 199, 200, 201, 202, 6017],
    name: "dusclops",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/356.png",
  },
  "3580": {
    tableIDs: [35, 36, 102, 103, 104, 105, 106, 7003, 7048],
    name: "chimecho",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/358.png",
  },
  "3610": {
    tableIDs: [125, 130, 132, 133, 134, 139],
    name: "snorunt",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/361.png",
  },
  "3960": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 100, 101, 108, 109, 110,
      111, 112, 113, 114, 115, 116, 117, 118, 119, 127, 134, 138, 143, 170, 171,
      172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 199, 202, 203,
    ],
    name: "starly",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/396.png",
  },
  "3970": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 101, 127,
      134, 138, 143, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
      182, 199, 202,
    ],
    name: "staravia",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/397.png",
  },
  "3980": {
    tableIDs: [
      22, 25, 27, 32, 101, 127, 134, 138, 143, 171, 172, 173, 174, 175, 176,
      177, 178, 179, 180, 181, 182, 199, 202, 7063, 7092,
    ],
    name: "staraptor",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/398.png",
  },
  "4010": {
    tableIDs: [
      10, 18, 23, 29, 33, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
      118, 119,
    ],
    name: "kricketot",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/401.png",
  },
  "4020": {
    tableIDs: [
      10, 18, 23, 29, 33, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
      118, 119,
    ],
    name: "kricketune",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/402.png",
  },
  "4030": {
    tableIDs: [
      45, 54, 67, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
      88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 123, 136, 159, 160, 197,
      198, 199, 200, 201, 202, 204, 205, 206, 207, 208,
    ],
    name: "shinx",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/403.png",
  },
  "4040": {
    tableIDs: [
      45, 54, 67, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
      88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 123, 136, 159, 160, 197,
      198, 199, 200, 201, 202, 204, 205, 206, 207, 208, 7061, 7062,
    ],
    name: "luxio",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/404.png",
  },
  "4050": {
    tableIDs: [67, 72, 73, 75, 123, 197, 198, 199, 200, 201, 202, 7133],
    name: "luxray",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/405.png",
  },
  "4170": {
    tableIDs: [
      10, 18, 23, 29, 33, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
      70, 71, 72, 73, 74, 75, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119,
    ],
    name: "pachirisu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/417.png",
  },
  "4330": {
    tableIDs: [
      35, 36, 41, 45, 47, 56, 94, 96, 98, 99, 102, 103, 104, 105, 106, 107, 120,
      121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
      136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 164, 166, 186,
      187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 7049,
    ],
    name: "chingling",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/433.png",
  },
  "4360": {
    tableIDs: [
      34, 35, 36, 41, 45, 47, 56, 94, 96, 98, 99, 102, 103, 104, 105, 106, 107,
      120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134,
      135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
    ],
    name: "bronzor",
    types: [PokemonType.STEEL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/436.png",
  },
  "4370": {
    tableIDs: [34, 35, 36],
    name: "bronzong",
    types: [PokemonType.STEEL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/437.png",
  },
  "4380": {
    tableIDs: [
      10, 34, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
      92, 93, 94, 95, 96, 97, 98, 99, 118, 141, 161, 162, 163, 164, 165, 166,
      167, 168, 184, 185,
    ],
    name: "bonsly",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/438.png",
  },
  "4430": {
    tableIDs: [34, 35, 36, 46, 56, 95, 129, 159, 160],
    name: "gible",
    types: [PokemonType.DRAGON, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/443.png",
  },
  "4440": {
    tableIDs: [34, 35, 36, 56, 129],
    name: "gabite",
    types: [PokemonType.DRAGON, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/444.png",
  },
  "4460": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 68, 71, 79, 84, 85, 87, 96, 97, 121, 126, 136, 146,
      148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 204, 205,
      206, 207, 208, 209, 210, 6001, 7077,
    ],
    name: "munchlax",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/446.png",
  },
  "4470": {
    tableIDs: [
      8, 11, 13, 18, 22, 25, 27, 32, 33, 37, 38, 39, 40, 42, 48, 53, 54, 72, 75,
      84, 97, 100, 101, 108, 110, 111, 119, 127, 134, 136, 138, 160, 171, 172,
      173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 198, 199, 200, 201, 202,
      204, 205, 206, 207, 208, 7096,
    ],
    name: "riolu",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/447.png",
  },
  "4480": {
    tableIDs: [67, 72, 73, 75, 123, 197, 198, 199, 200, 201, 202],
    name: "lucario",
    types: [PokemonType.FIGHTING, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png",
  },
  "4750": {
    tableIDs: [67, 72, 73, 75, 123, 197, 198, 199, 200, 201, 202],
    name: "gallade",
    types: [PokemonType.PSYCHIC, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/475.png",
  },
  "5320": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34,
      45, 54, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
      92, 93, 94, 95, 96, 97, 98, 99, 118, 136, 141, 159, 160, 161, 162, 163,
      164, 165, 166, 167, 168, 204, 205, 206, 207, 208,
    ],
    name: "timburr",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/532.png",
  },
  "5330": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 6011,
      7021, 7084, 7109,
    ],
    name: "gurdurr",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/533.png",
  },
  "5400": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 39, 51, 53, 55, 115, 117, 169,
      183, 209, 210, 211, 212, 213, 214,
    ],
    name: "sewaddle",
    types: [PokemonType.BUG, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/540.png",
  },
  "5410": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 39, 51,
      55, 209, 210, 7065,
    ],
    name: "swadloon",
    types: [PokemonType.BUG, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/541.png",
  },
  "5420": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 39, 51,
      55, 209, 210, 7066, 7068,
    ],
    name: "leavanny",
    types: [PokemonType.BUG, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/542.png",
  },
  "5480": {
    tableIDs: [
      8, 10, 11, 13, 18, 21, 23, 29, 33, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 84, 97, 100, 108, 109, 110, 111,
      112, 113, 114, 115, 116, 117, 118, 119, 136, 159, 160, 170, 203, 204, 205,
      206, 207, 208, 209, 210,
    ],
    name: "petilil",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/548.png",
  },
  "5800": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 101, 127,
      134, 138, 143, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
      182, 199, 202, 7083,
    ],
    name: "ducklett",
    types: [PokemonType.WATER, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/580.png",
  },
  "5810": {
    tableIDs: [6021, 7090, 7094, 7099, 7130],
    name: "swanna",
    types: [PokemonType.WATER, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/581.png",
  },
  "6020": {
    tableIDs: [125, 130, 132, 133, 134, 139],
    name: "tynamo",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/602.png",
  },
  "6030": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 7125,
    ],
    name: "eelektrik",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/603.png",
  },
  "6070": {
    tableIDs: [
      34, 35, 36, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
      72, 73, 74, 75, 102, 103, 104, 105, 106, 132, 137, 140, 146, 147, 186,
      188, 190, 192, 193, 194, 7043,
    ],
    name: "litwick",
    types: [PokemonType.GHOST, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/607.png",
  },
  "6080": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 6008,
    ],
    name: "lampent",
    types: [PokemonType.GHOST, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/608.png",
  },
  "6190": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 84, 97, 125, 130, 132, 133, 134, 136, 139, 159, 160, 204,
      205, 206, 207, 208, 7078,
    ],
    name: "mienfoo",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/619.png",
  },
  "6240": {
    tableIDs: [
      46, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
      74, 75, 123, 159, 160, 197, 198, 199, 200, 201, 202,
    ],
    name: "pawniard",
    types: [PokemonType.DARK, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/624.png",
  },
  "6250": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 200,
    ],
    name: "bisharp",
    types: [PokemonType.DARK, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/625.png",
  },
  "6290": {
    tableIDs: [
      22, 25, 27, 32, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
      90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 101, 127, 134, 138, 171, 172, 173,
      174, 175, 176, 177, 178, 179, 180, 181, 182, 199, 202, 6015, 7088, 7093,
      7106,
    ],
    name: "vullaby",
    types: [PokemonType.DARK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/629.png",
  },
  "7030": {
    tableIDs: [34, 35, 36, 7053],
    name: "carbink",
    types: [PokemonType.ROCK, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/703.png",
  },
  "7040": {
    tableIDs: [62, 72, 125, 130, 132, 133, 134, 139, 172, 173, 200, 7052, 7054],
    name: "goomy",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/704.png",
  },
  "7050": {
    tableIDs: [62, 72, 200],
    name: "sliggoo",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/705.png",
  },
  "7080": {
    tableIDs: [
      18, 33, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
      73, 74, 75, 108, 110, 111, 7120,
    ],
    name: "phantump",
    types: [PokemonType.GHOST, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/708.png",
  },
  "7090": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 6018,
    ],
    name: "trevenant",
    types: [PokemonType.GHOST, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/709.png",
  },
  "7140": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      34, 35, 36, 100, 101, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
      118, 119, 127, 134, 138, 141, 161, 162, 163, 164, 165, 166, 167, 168, 170,
      171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 184, 185, 199,
      202, 203, 7038,
    ],
    name: "noibat",
    types: [PokemonType.FLYING, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/714.png",
  },
  "7360": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 84, 97, 123, 136, 159, 160, 197, 198, 199, 200, 201,
      202, 204, 205, 206, 207, 208, 209, 210,
    ],
    name: "grubbin",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/736.png",
  },
  "7370": {
    tableIDs: [
      8, 11, 13, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 84, 97, 123, 136, 159, 160, 197, 198, 199, 200, 201,
      202, 204, 205, 206, 207, 208, 209, 210,
    ],
    name: "charjabug",
    types: [PokemonType.BUG, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/737.png",
  },
  "7380": {
    tableIDs: [6019],
    name: "vikavolt",
    types: [PokemonType.BUG, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/738.png",
  },
  "7420": {
    tableIDs: [
      3, 8, 9, 11, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
      29, 30, 31, 32, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      51, 52, 53, 54, 55, 56, 84, 97, 115, 117, 136, 159, 160, 169, 204, 205,
      206, 207, 208, 209, 210, 211, 212, 213, 214, 7072, 7074,
    ],
    name: "cutiefly",
    types: [PokemonType.BUG, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/742.png",
  },
  "7430": {
    tableIDs: [
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 39, 51,
      55, 209, 210, 7073,
    ],
    name: "ribombee",
    types: [PokemonType.BUG, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/743.png",
  },
  "7440": {
    tableIDs: [
      8, 10, 11, 13, 18, 21, 22, 23, 25, 27, 29, 32, 33, 35, 37, 38, 39, 40, 41,
      42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 84, 94, 96,
      97, 98, 99, 100, 101, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131,
      132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
      147, 159, 160, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
      182, 199, 202, 203, 204, 205, 206, 207, 208, 209, 210, 7050, 7071,
    ],
    name: "rockruff",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/744.png",
  },
  "7450": {
    tableIDs: [39, 51, 55, 209, 210],
    name: "lycanroc-midday",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/745.png",
  },
  "7451": {
    tableIDs: [
      22, 25, 27, 32, 101, 127, 134, 138, 171, 172, 173, 174, 175, 176, 177,
      178, 179, 180, 181, 182, 199, 202,
    ],
    name: "lycanroc-midnight",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10126.png",
  },
  "7490": {
    tableIDs: [
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 7101,
    ],
    name: "mudbray",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/749.png",
  },
  "7530": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 57, 58, 59, 60, 61, 62, 63,
      64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 85, 87, 96, 100, 108, 109,
      110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 126, 146, 148, 149,
      150, 151, 152, 153, 154, 155, 156, 157, 158, 170, 183, 203,
    ],
    name: "fomantis",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/753.png",
  },
  "7540": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155,
      156, 157, 158, 7117,
    ],
    name: "lurantis",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/754.png",
  },
  "7570": {
    tableIDs: [34, 35, 36, 162, 165, 168, 184, 185, 7035, 7037],
    name: "salandit",
    types: [PokemonType.POISON, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/757.png",
  },
  "7780": {
    tableIDs: [
      35, 41, 45, 47, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
      70, 71, 72, 73, 74, 75, 94, 96, 98, 99, 102, 106, 107, 120, 121, 122, 123,
      124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
      139, 140, 142, 143, 144, 145, 146, 147, 164, 166, 186, 187, 188, 189, 190,
      191, 192, 193, 194, 195, 196,
    ],
    name: "mimikyu-disguised",
    types: [PokemonType.GHOST, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/778.png",
  },
  "7820": {
    tableIDs: [
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 157, 7100, 7103, 7111,
    ],
    name: "jangmo-o",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/782.png",
  },
  "7830": {
    tableIDs: [157, 6009],
    name: "hakamo-o",
    types: [PokemonType.DRAGON, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/783.png",
  },
  "8190": {
    tableIDs: [
      8, 10, 11, 13, 18, 21, 23, 29, 33, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 84, 97, 100, 108, 109, 110, 111,
      112, 113, 114, 115, 116, 117, 118, 119, 136, 159, 160, 170, 203, 204, 205,
      206, 207, 208, 209, 210,
    ],
    name: "skwovet",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/819.png",
  },
  "8200": {
    tableIDs: [
      39, 51, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
      72, 73, 74, 75, 85, 87, 96, 121, 123, 126, 146, 148, 149, 150, 151, 152,
      153, 154, 155, 156, 157, 158, 197, 198, 199, 200, 201, 202, 209, 210,
      7129,
    ],
    name: "greedent",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/820.png",
  },
  "8330": {
    tableIDs: [
      19, 21, 22, 23, 27, 28, 29, 31, 32, 57, 59, 71, 126, 138, 143, 148, 149,
      150, 151, 152, 153, 155, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179,
      180, 181, 182, 7091,
    ],
    name: "chewtle",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/833.png",
  },
  "8340": {
    tableIDs: [
      32, 57, 59, 71, 126, 138, 143, 148, 149, 150, 151, 152, 153, 155, 171,
      172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 7095, 7097,
    ],
    name: "drednaw",
    types: [PokemonType.WATER, PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/834.png",
  },
  "8400": {
    tableIDs: [1, 2, 5, 7, 9, 20, 183, 6002, 7012, 7013, 7014, 7081, 7082],
    name: "applin",
    types: [PokemonType.GRASS, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/840.png",
  },
  "8410": {
    tableIDs: [20],
    name: "flapple",
    types: [PokemonType.GRASS, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/841.png",
  },
  "8420": {
    tableIDs: [20],
    name: "appletun",
    types: [PokemonType.GRASS, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/842.png",
  },
  "8450": {
    tableIDs: [
      311, 317, 319, 328, 332, 336, 343, 344, 345, 346, 347, 348, 349, 350, 351,
      352, 353, 354, 355, 356, 357, 358, 359,
    ],
    name: "cramorant",
    types: [PokemonType.FLYING, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/845.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "8460": {
    tableIDs: [
      32, 34, 35, 36, 57, 71, 104, 107, 126, 132, 133, 138, 143, 148, 149, 150,
      151, 152, 153, 155, 161, 168, 171, 172, 173, 174, 175, 176, 177, 178, 179,
      180, 181, 182, 185,
    ],
    name: "arrokuda",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/846.png",
  },
  "8470": {
    tableIDs: [
      32, 132, 133, 138, 143, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
      181, 182, 7089,
    ],
    name: "barraskewda",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/847.png",
  },
  "8560": {
    tableIDs: [
      10, 34, 57, 68, 71, 79, 85, 87, 96, 118, 121, 126, 141, 146, 148, 149,
      150, 151, 152, 153, 154, 155, 156, 157, 158, 161, 162, 163, 164, 165, 166,
      167, 168, 184, 185, 7034, 7070,
    ],
    name: "hatenna",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/856.png",
  },
  "8570": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155,
      156, 157, 158, 7116,
    ],
    name: "hattrem",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/857.png",
  },
  "8580": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 7118,
    ],
    name: "hatterene",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/858.png",
  },
  "8590": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75,
    ],
    name: "impidimp",
    types: [PokemonType.DARK, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/859.png",
  },
  "8600": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75,
    ],
    name: "morgrem",
    types: [PokemonType.DARK, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/860.png",
  },
  "8610": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 7123,
    ],
    name: "grimmsnarl",
    types: [PokemonType.DARK, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/861.png",
  },
  "8760": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155,
      156, 157, 158,
    ],
    name: "indeedee-male",
    types: [PokemonType.PSYCHIC, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/876.png",
  },
  "8761": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153, 154, 155,
      156, 157, 158,
    ],
    name: "indeedee-female",
    types: [PokemonType.PSYCHIC, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/876-female.png",
  },
  "8770": {
    tableIDs: [
      226, 230, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
      249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
      264, 265, 266, 267, 268, 269, 270,
    ],
    name: "morpeko",
    types: [PokemonType.ELECTRIC, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/877.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9240": {
    tableIDs: [
      8, 11, 13, 34, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
      52, 53, 54, 55, 56, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
      89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 118, 141, 159, 160, 161, 162,
      165, 167, 168, 184, 185, 7015,
    ],
    name: "tandemaus",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/924.png",
  },
  "9480": {
    tableIDs: [
      10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 100, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
    ],
    name: "toedscool",
    types: [PokemonType.GROUND, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/948.png",
  },
  "9490": {
    tableIDs: [
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 7121, 7122, 7127,
    ],
    name: "toedscruel",
    types: [PokemonType.GROUND, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/949.png",
  },
  "9620": {
    tableIDs: [
      22, 25, 27, 32, 67, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 101, 123, 127,
      134, 138, 143, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
      197, 198, 199, 200, 201, 202,
    ],
    name: "bombirdier",
    types: [PokemonType.FLYING, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/962.png",
  },
  "9680": {
    tableIDs: [
      34, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95, 96, 97, 98, 99, 162, 165, 168, 184, 185, 7102, 7105, 7108,
    ],
    name: "orthworm",
    types: [PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/968.png",
  },
  "9690": {
    tableIDs: [34, 35, 36, 102, 103, 104, 105, 106],
    name: "glimmet",
    types: [PokemonType.ROCK, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/969.png",
  },
  "9700": {
    tableIDs: [6010, 7057, 7059, 7060],
    name: "glimmora",
    types: [PokemonType.ROCK, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/970.png",
  },
  "9790": {
    tableIDs: [
      57, 68, 71, 79, 85, 87, 96, 121, 126, 146, 148, 149, 150, 151, 152, 153,
      154, 155, 156, 157, 158,
    ],
    name: "annihilape",
    types: [PokemonType.FIGHTING, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/979.png",
  },
  "9820": {
    tableIDs: [34, 35, 36, 62, 125, 130, 132, 133, 134, 139, 200],
    name: "dudunsparce",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/982.png",
  },
  "9830": {
    tableIDs: [62, 72, 200],
    name: "kingambit",
    types: [PokemonType.DARK, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/983.png",
  },
  "10120": {
    tableIDs: [18, 22, 25, 26, 27, 33, 108, 110, 111, 6014, 7016],
    name: "poltchageist",
    types: [PokemonType.GRASS, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1012.png",
  },
}

export const kitakamiMarkers: MarkerInfo[] = [
  {
    coords: [850, 27, 1550],
    icon: pokeballIcon,
    tableID: 1,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1450],
    icon: pokeballIcon,
    tableID: 2,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1550],
    icon: pokeballIcon,
    tableID: 3,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1450],
    icon: pokeballIcon,
    tableID: 4,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1550],
    icon: pokeballIcon,
    tableID: 5,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1450],
    icon: pokeballIcon,
    tableID: 6,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1450],
    icon: pokeballIcon,
    tableID: 7,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1550],
    icon: pokeballIcon,
    tableID: 8,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1650],
    icon: pokeballIcon,
    tableID: 9,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1350],
    icon: pokeballIcon,
    tableID: 10,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1550],
    icon: pokeballIcon,
    tableID: 11,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1350],
    icon: pokeballIcon,
    tableID: 12,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1350],
    icon: pokeballIcon,
    tableID: 13,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1650],
    icon: pokeballIcon,
    tableID: 14,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1650],
    icon: pokeballIcon,
    tableID: 15,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1350],
    icon: pokeballIcon,
    tableID: 16,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1550],
    icon: pokeballIcon,
    tableID: 17,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1350],
    icon: pokeballIcon,
    tableID: 18,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1650],
    icon: pokeballIcon,
    tableID: 19,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1650],
    icon: pokeballIcon,
    tableID: 20,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1550],
    icon: pokeballIcon,
    tableID: 21,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1250],
    icon: pokeballIcon,
    tableID: 22,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1450],
    icon: pokeballIcon,
    tableID: 23,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1650],
    icon: pokeballIcon,
    tableID: 24,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1250],
    icon: pokeballIcon,
    tableID: 25,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1350],
    icon: pokeballIcon,
    tableID: 26,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1250],
    icon: pokeballIcon,
    tableID: 27,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1350],
    icon: pokeballIcon,
    tableID: 28,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1550],
    icon: pokeballIcon,
    tableID: 29,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1450],
    icon: pokeballIcon,
    tableID: 30,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1750],
    icon: pokeballIcon,
    tableID: 31,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1150],
    icon: pokeballIcon,
    tableID: 32,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1450],
    icon: pokeballIcon,
    tableID: 33,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1150],
    icon: pokeballIcon,
    tableID: 34,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1050],
    icon: pokeballIcon,
    tableID: 35,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1050],
    icon: pokeballIcon,
    tableID: 36,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 1450],
    icon: pokeballIcon,
    tableID: 37,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 1350],
    icon: pokeballIcon,
    tableID: 38,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1550],
    icon: pokeballIcon,
    tableID: 39,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1450],
    icon: pokeballIcon,
    tableID: 40,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 1250],
    icon: pokeballIcon,
    tableID: 41,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1650],
    icon: pokeballIcon,
    tableID: 42,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1250],
    icon: pokeballIcon,
    tableID: 43,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1350],
    icon: pokeballIcon,
    tableID: 44,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1050],
    icon: pokeballIcon,
    tableID: 45,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 1550],
    icon: pokeballIcon,
    tableID: 46,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1150],
    icon: pokeballIcon,
    tableID: 47,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1450],
    icon: pokeballIcon,
    tableID: 48,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 1250],
    icon: pokeballIcon,
    tableID: 49,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1350],
    icon: pokeballIcon,
    tableID: 50,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 1650],
    icon: pokeballIcon,
    tableID: 51,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 1150],
    icon: pokeballIcon,
    tableID: 52,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1650],
    icon: pokeballIcon,
    tableID: 53,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 1050],
    icon: pokeballIcon,
    tableID: 54,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 1450],
    icon: pokeballIcon,
    tableID: 55,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1250],
    icon: pokeballIcon,
    tableID: 56,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 550],
    icon: pokeballIcon,
    tableID: 57,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 350],
    icon: pokeballIcon,
    tableID: 58,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 450],
    icon: pokeballIcon,
    tableID: 59,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 450],
    icon: pokeballIcon,
    tableID: 60,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 450],
    icon: pokeballIcon,
    tableID: 61,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 450],
    icon: pokeballIcon,
    tableID: 62,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 350],
    icon: pokeballIcon,
    tableID: 63,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 350],
    icon: pokeballIcon,
    tableID: 64,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 550],
    icon: pokeballIcon,
    tableID: 65,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 350],
    icon: pokeballIcon,
    tableID: 66,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 550],
    icon: pokeballIcon,
    tableID: 67,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 350],
    icon: pokeballIcon,
    tableID: 68,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 250],
    icon: pokeballIcon,
    tableID: 69,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 450],
    icon: pokeballIcon,
    tableID: 70,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 450],
    icon: pokeballIcon,
    tableID: 71,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 650],
    icon: pokeballIcon,
    tableID: 72,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 550],
    icon: pokeballIcon,
    tableID: 73,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 250],
    icon: pokeballIcon,
    tableID: 74,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 650],
    icon: pokeballIcon,
    tableID: 75,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 450],
    icon: pokeballIcon,
    tableID: 76,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 350],
    icon: pokeballIcon,
    tableID: 77,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 550],
    icon: pokeballIcon,
    tableID: 78,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 450],
    icon: pokeballIcon,
    tableID: 79,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 350],
    icon: pokeballIcon,
    tableID: 80,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 650],
    icon: pokeballIcon,
    tableID: 81,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 250],
    icon: pokeballIcon,
    tableID: 82,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 550],
    icon: pokeballIcon,
    tableID: 83,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 650],
    icon: pokeballIcon,
    tableID: 84,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 350],
    icon: pokeballIcon,
    tableID: 85,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 450],
    icon: pokeballIcon,
    tableID: 86,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 450],
    icon: pokeballIcon,
    tableID: 87,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 550],
    icon: pokeballIcon,
    tableID: 88,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 450],
    icon: pokeballIcon,
    tableID: 89,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 350],
    icon: pokeballIcon,
    tableID: 90,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 550],
    icon: pokeballIcon,
    tableID: 91,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 450],
    icon: pokeballIcon,
    tableID: 92,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 350],
    icon: pokeballIcon,
    tableID: 93,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 650],
    icon: pokeballIcon,
    tableID: 94,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 550],
    icon: pokeballIcon,
    tableID: 95,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 550],
    icon: pokeballIcon,
    tableID: 96,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 750],
    icon: pokeballIcon,
    tableID: 97,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 650],
    icon: pokeballIcon,
    tableID: 98,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 750],
    icon: pokeballIcon,
    tableID: 99,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1250],
    icon: pokeballIcon,
    tableID: 100,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1250],
    icon: pokeballIcon,
    tableID: 101,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 850],
    icon: pokeballIcon,
    tableID: 102,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 950],
    icon: pokeballIcon,
    tableID: 103,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 950],
    icon: pokeballIcon,
    tableID: 104,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 950],
    icon: pokeballIcon,
    tableID: 105,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1050],
    icon: pokeballIcon,
    tableID: 106,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1050],
    icon: pokeballIcon,
    tableID: 107,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1450],
    icon: pokeballIcon,
    tableID: 108,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1550],
    icon: pokeballIcon,
    tableID: 109,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1350],
    icon: pokeballIcon,
    tableID: 110,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1350],
    icon: pokeballIcon,
    tableID: 111,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1550],
    icon: pokeballIcon,
    tableID: 112,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1450],
    icon: pokeballIcon,
    tableID: 113,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1350],
    icon: pokeballIcon,
    tableID: 114,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1550],
    icon: pokeballIcon,
    tableID: 115,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1450],
    icon: pokeballIcon,
    tableID: 116,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1650],
    icon: pokeballIcon,
    tableID: 117,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1250],
    icon: pokeballIcon,
    tableID: 118,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1450],
    icon: pokeballIcon,
    tableID: 119,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 950],
    icon: pokeballIcon,
    tableID: 120,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 650],
    icon: pokeballIcon,
    tableID: 121,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 850],
    icon: pokeballIcon,
    tableID: 122,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 750],
    icon: pokeballIcon,
    tableID: 123,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 1150],
    icon: pokeballIcon,
    tableID: 124,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 950],
    icon: pokeballIcon,
    tableID: 125,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 650],
    icon: pokeballIcon,
    tableID: 126,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1150],
    icon: pokeballIcon,
    tableID: 127,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 650],
    icon: pokeballIcon,
    tableID: 128,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1150],
    icon: pokeballIcon,
    tableID: 129,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 950],
    icon: pokeballIcon,
    tableID: 130,
    layer: layPokeball,
  },
  {
    coords: [550, 27, 1050],
    icon: pokeballIcon,
    tableID: 131,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 850],
    icon: pokeballIcon,
    tableID: 132,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 850],
    icon: pokeballIcon,
    tableID: 133,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 850],
    icon: pokeballIcon,
    tableID: 134,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 750],
    icon: pokeballIcon,
    tableID: 135,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 950],
    icon: pokeballIcon,
    tableID: 136,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 650],
    icon: pokeballIcon,
    tableID: 137,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 950],
    icon: pokeballIcon,
    tableID: 138,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 950],
    icon: pokeballIcon,
    tableID: 139,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 750],
    icon: pokeballIcon,
    tableID: 140,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1050],
    icon: pokeballIcon,
    tableID: 141,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 650],
    icon: pokeballIcon,
    tableID: 142,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1050],
    icon: pokeballIcon,
    tableID: 143,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1050],
    icon: pokeballIcon,
    tableID: 144,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 1050],
    icon: pokeballIcon,
    tableID: 145,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 650],
    icon: pokeballIcon,
    tableID: 146,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 750],
    icon: pokeballIcon,
    tableID: 147,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 350],
    icon: pokeballIcon,
    tableID: 148,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 350],
    icon: pokeballIcon,
    tableID: 149,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 450],
    icon: pokeballIcon,
    tableID: 150,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 450],
    icon: pokeballIcon,
    tableID: 151,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 550],
    icon: pokeballIcon,
    tableID: 152,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 350],
    icon: pokeballIcon,
    tableID: 153,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 350],
    icon: pokeballIcon,
    tableID: 154,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 350],
    icon: pokeballIcon,
    tableID: 155,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 450],
    icon: pokeballIcon,
    tableID: 156,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 550],
    icon: pokeballIcon,
    tableID: 157,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 550],
    icon: pokeballIcon,
    tableID: 158,
    layer: layPokeball,
  },
  {
    coords: [250, 27, 950],
    icon: pokeballIcon,
    tableID: 159,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 950],
    icon: pokeballIcon,
    tableID: 160,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1150],
    icon: pokeballIcon,
    tableID: 161,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1250],
    icon: pokeballIcon,
    tableID: 162,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1250],
    icon: pokeballIcon,
    tableID: 163,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1250],
    icon: pokeballIcon,
    tableID: 164,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1250],
    icon: pokeballIcon,
    tableID: 165,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1150],
    icon: pokeballIcon,
    tableID: 166,
    layer: layPokeball,
  },
  {
    coords: [1350, 27, 1150],
    icon: pokeballIcon,
    tableID: 167,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1250],
    icon: pokeballIcon,
    tableID: 168,
    layer: layPokeball,
  },
  {
    coords: [1250, 27, 1650],
    icon: pokeballIcon,
    tableID: 169,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1650],
    icon: pokeballIcon,
    tableID: 170,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1150],
    icon: pokeballIcon,
    tableID: 171,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1050],
    icon: pokeballIcon,
    tableID: 172,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 1050],
    icon: pokeballIcon,
    tableID: 173,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 850],
    icon: pokeballIcon,
    tableID: 174,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 850],
    icon: pokeballIcon,
    tableID: 175,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 850],
    icon: pokeballIcon,
    tableID: 176,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 950],
    icon: pokeballIcon,
    tableID: 177,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 950],
    icon: pokeballIcon,
    tableID: 178,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 950],
    icon: pokeballIcon,
    tableID: 179,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 850],
    icon: pokeballIcon,
    tableID: 180,
    layer: layPokeball,
  },
  {
    coords: [1750, 27, 1050],
    icon: pokeballIcon,
    tableID: 181,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 1150],
    icon: pokeballIcon,
    tableID: 182,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1550],
    icon: pokeballIcon,
    tableID: 183,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 1150],
    icon: pokeballIcon,
    tableID: 184,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1150],
    icon: pokeballIcon,
    tableID: 185,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 850],
    icon: pokeballIcon,
    tableID: 186,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 950],
    icon: pokeballIcon,
    tableID: 187,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 750],
    icon: pokeballIcon,
    tableID: 188,
    layer: layPokeball,
  },
  {
    coords: [650, 27, 850],
    icon: pokeballIcon,
    tableID: 189,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 750],
    icon: pokeballIcon,
    tableID: 190,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1150],
    icon: pokeballIcon,
    tableID: 191,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 750],
    icon: pokeballIcon,
    tableID: 192,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 750],
    icon: pokeballIcon,
    tableID: 193,
    layer: layPokeball,
  },
  {
    coords: [1050, 27, 850],
    icon: pokeballIcon,
    tableID: 194,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 950],
    icon: pokeballIcon,
    tableID: 195,
    layer: layPokeball,
  },
  {
    coords: [750, 27, 1050],
    icon: pokeballIcon,
    tableID: 196,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 650],
    icon: pokeballIcon,
    tableID: 197,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 750],
    icon: pokeballIcon,
    tableID: 198,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 750],
    icon: pokeballIcon,
    tableID: 199,
    layer: layPokeball,
  },
  {
    coords: [1650, 27, 550],
    icon: pokeballIcon,
    tableID: 200,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 650],
    icon: pokeballIcon,
    tableID: 201,
    layer: layPokeball,
  },
  {
    coords: [1550, 27, 750],
    icon: pokeballIcon,
    tableID: 202,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1750],
    icon: pokeballIcon,
    tableID: 203,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 750],
    icon: pokeballIcon,
    tableID: 204,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 850],
    icon: pokeballIcon,
    tableID: 205,
    layer: layPokeball,
  },
  {
    coords: [250, 27, 750],
    icon: pokeballIcon,
    tableID: 206,
    layer: layPokeball,
  },
  {
    coords: [450, 27, 850],
    icon: pokeballIcon,
    tableID: 207,
    layer: layPokeball,
  },
  {
    coords: [250, 27, 850],
    icon: pokeballIcon,
    tableID: 208,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 1550],
    icon: pokeballIcon,
    tableID: 209,
    layer: layPokeball,
  },
  {
    coords: [350, 27, 1650],
    icon: pokeballIcon,
    tableID: 210,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1650],
    icon: pokeballIcon,
    tableID: 211,
    layer: layPokeball,
  },
  {
    coords: [1150, 27, 1550],
    icon: pokeballIcon,
    tableID: 212,
    layer: layPokeball,
  },
  {
    coords: [950, 27, 1750],
    icon: pokeballIcon,
    tableID: 213,
    layer: layPokeball,
  },
  {
    coords: [850, 27, 1750],
    icon: pokeballIcon,
    tableID: 214,
    layer: layPokeball,
  },
  {
    coords: [1450, 27, 1450],
    icon: violetIcon,
    tableID: 215,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 1550],
    icon: violetIcon,
    tableID: 216,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 1550],
    icon: violetIcon,
    tableID: 217,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 1350],
    icon: violetIcon,
    tableID: 218,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 1350],
    icon: violetIcon,
    tableID: 219,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 1650],
    icon: violetIcon,
    tableID: 220,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 1450],
    icon: violetIcon,
    tableID: 221,
    layer: layViolet,
  },
  {
    coords: [1250, 27, 1350],
    icon: violetIcon,
    tableID: 222,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 1550],
    icon: violetIcon,
    tableID: 223,
    layer: layViolet,
  },
  {
    coords: [1250, 27, 1550],
    icon: violetIcon,
    tableID: 224,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 1450],
    icon: violetIcon,
    tableID: 225,
    layer: layViolet,
  },
  {
    coords: [1150, 27, 1350],
    icon: violetIcon,
    tableID: 226,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 1450],
    icon: violetIcon,
    tableID: 227,
    layer: layViolet,
  },
  {
    coords: [1150, 27, 1450],
    icon: violetIcon,
    tableID: 228,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 1650],
    icon: violetIcon,
    tableID: 229,
    layer: layViolet,
  },
  {
    coords: [1250, 27, 1250],
    icon: violetIcon,
    tableID: 230,
    layer: layViolet,
  },
  {
    coords: [1250, 27, 1450],
    icon: violetIcon,
    tableID: 231,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 1350],
    icon: violetIcon,
    tableID: 232,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 1750],
    icon: violetIcon,
    tableID: 233,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 1550],
    icon: violetIcon,
    tableID: 234,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 1250],
    icon: violetIcon,
    tableID: 235,
    layer: layViolet,
  },
  { coords: [550, 27, 1450], icon: violetIcon, tableID: 236, layer: layViolet },
  { coords: [550, 27, 1350], icon: violetIcon, tableID: 237, layer: layViolet },
  { coords: [350, 27, 750], icon: violetIcon, tableID: 238, layer: layViolet },
  { coords: [450, 27, 1550], icon: violetIcon, tableID: 239, layer: layViolet },
  { coords: [450, 27, 1450], icon: violetIcon, tableID: 240, layer: layViolet },
  { coords: [650, 27, 1550], icon: violetIcon, tableID: 241, layer: layViolet },
  { coords: [350, 27, 850], icon: violetIcon, tableID: 242, layer: layViolet },
  { coords: [350, 27, 1050], icon: violetIcon, tableID: 243, layer: layViolet },
  { coords: [550, 27, 1250], icon: violetIcon, tableID: 244, layer: layViolet },
  { coords: [650, 27, 1650], icon: violetIcon, tableID: 245, layer: layViolet },
  { coords: [450, 27, 1250], icon: violetIcon, tableID: 246, layer: layViolet },
  { coords: [450, 27, 1350], icon: violetIcon, tableID: 247, layer: layViolet },
  { coords: [450, 27, 750], icon: violetIcon, tableID: 248, layer: layViolet },
  { coords: [350, 27, 950], icon: violetIcon, tableID: 249, layer: layViolet },
  { coords: [450, 27, 1050], icon: violetIcon, tableID: 250, layer: layViolet },
  { coords: [550, 27, 1550], icon: violetIcon, tableID: 251, layer: layViolet },
  { coords: [450, 27, 1150], icon: violetIcon, tableID: 252, layer: layViolet },
  { coords: [450, 27, 1650], icon: violetIcon, tableID: 253, layer: layViolet },
  { coords: [450, 27, 950], icon: violetIcon, tableID: 254, layer: layViolet },
  { coords: [250, 27, 950], icon: violetIcon, tableID: 255, layer: layViolet },
  { coords: [450, 27, 850], icon: violetIcon, tableID: 256, layer: layViolet },
  { coords: [650, 27, 1450], icon: violetIcon, tableID: 257, layer: layViolet },
  { coords: [350, 27, 1250], icon: violetIcon, tableID: 258, layer: layViolet },
  { coords: [650, 27, 1350], icon: violetIcon, tableID: 259, layer: layViolet },
  { coords: [750, 27, 1550], icon: violetIcon, tableID: 260, layer: layViolet },
  { coords: [250, 27, 850], icon: violetIcon, tableID: 261, layer: layViolet },
  { coords: [350, 27, 1150], icon: violetIcon, tableID: 262, layer: layViolet },
  { coords: [350, 27, 1550], icon: violetIcon, tableID: 263, layer: layViolet },
  { coords: [350, 27, 1650], icon: violetIcon, tableID: 264, layer: layViolet },
  { coords: [750, 27, 1650], icon: violetIcon, tableID: 265, layer: layViolet },
  { coords: [350, 27, 1450], icon: violetIcon, tableID: 266, layer: layViolet },
  { coords: [650, 27, 1250], icon: violetIcon, tableID: 267, layer: layViolet },
  { coords: [250, 27, 750], icon: violetIcon, tableID: 268, layer: layViolet },
  { coords: [350, 27, 650], icon: violetIcon, tableID: 269, layer: layViolet },
  { coords: [750, 27, 1350], icon: violetIcon, tableID: 270, layer: layViolet },
  { coords: [1550, 27, 350], icon: violetIcon, tableID: 271, layer: layViolet },
  { coords: [1350, 27, 450], icon: violetIcon, tableID: 272, layer: layViolet },
  { coords: [1550, 27, 450], icon: violetIcon, tableID: 273, layer: layViolet },
  { coords: [1450, 27, 450], icon: violetIcon, tableID: 274, layer: layViolet },
  { coords: [1650, 27, 450], icon: violetIcon, tableID: 275, layer: layViolet },
  { coords: [1750, 27, 350], icon: violetIcon, tableID: 276, layer: layViolet },
  { coords: [1650, 27, 350], icon: violetIcon, tableID: 277, layer: layViolet },
  { coords: [1350, 27, 550], icon: violetIcon, tableID: 278, layer: layViolet },
  { coords: [1450, 27, 350], icon: violetIcon, tableID: 279, layer: layViolet },
  { coords: [1450, 27, 550], icon: violetIcon, tableID: 280, layer: layViolet },
  { coords: [1350, 27, 350], icon: violetIcon, tableID: 281, layer: layViolet },
  { coords: [1550, 27, 250], icon: violetIcon, tableID: 282, layer: layViolet },
  { coords: [1750, 27, 450], icon: violetIcon, tableID: 283, layer: layViolet },
  { coords: [1250, 27, 450], icon: violetIcon, tableID: 284, layer: layViolet },
  { coords: [1350, 27, 650], icon: violetIcon, tableID: 285, layer: layViolet },
  { coords: [1550, 27, 550], icon: violetIcon, tableID: 286, layer: layViolet },
  { coords: [1250, 27, 550], icon: violetIcon, tableID: 287, layer: layViolet },
  { coords: [1650, 27, 250], icon: violetIcon, tableID: 288, layer: layViolet },
  { coords: [1450, 27, 650], icon: violetIcon, tableID: 289, layer: layViolet },
  { coords: [1550, 27, 850], icon: violetIcon, tableID: 290, layer: layViolet },
  { coords: [1450, 27, 750], icon: violetIcon, tableID: 291, layer: layViolet },
  {
    coords: [1550, 27, 1150],
    icon: violetIcon,
    tableID: 292,
    layer: layViolet,
  },
  { coords: [1450, 27, 850], icon: violetIcon, tableID: 293, layer: layViolet },
  { coords: [1650, 27, 950], icon: violetIcon, tableID: 294, layer: layViolet },
  {
    coords: [1650, 27, 1150],
    icon: violetIcon,
    tableID: 295,
    layer: layViolet,
  },
  { coords: [1650, 27, 850], icon: violetIcon, tableID: 296, layer: layViolet },
  {
    coords: [1750, 27, 1150],
    icon: violetIcon,
    tableID: 297,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 1050],
    icon: violetIcon,
    tableID: 298,
    layer: layViolet,
  },
  { coords: [1550, 27, 750], icon: violetIcon, tableID: 299, layer: layViolet },
  {
    coords: [1550, 27, 1050],
    icon: violetIcon,
    tableID: 300,
    layer: layViolet,
  },
  { coords: [1550, 27, 950], icon: violetIcon, tableID: 301, layer: layViolet },
  {
    coords: [1450, 27, 1250],
    icon: violetIcon,
    tableID: 302,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 1250],
    icon: violetIcon,
    tableID: 303,
    layer: layViolet,
  },
  { coords: [1750, 27, 950], icon: violetIcon, tableID: 304, layer: layViolet },
  {
    coords: [1650, 27, 1250],
    icon: violetIcon,
    tableID: 305,
    layer: layViolet,
  },
  { coords: [1750, 27, 850], icon: violetIcon, tableID: 306, layer: layViolet },
  {
    coords: [1750, 27, 1050],
    icon: violetIcon,
    tableID: 307,
    layer: layViolet,
  },
  {
    coords: [350, 27, 450],
    icon: scarletIcon,
    tableID: 308,
    layer: layScarlet,
  },
  {
    coords: [450, 27, 350],
    icon: scarletIcon,
    tableID: 309,
    layer: layScarlet,
  },
  {
    coords: [450, 27, 550],
    icon: scarletIcon,
    tableID: 310,
    layer: layScarlet,
  },
  {
    coords: [750, 27, 450],
    icon: scarletIcon,
    tableID: 311,
    layer: layScarlet,
  },
  {
    coords: [650, 27, 350],
    icon: scarletIcon,
    tableID: 312,
    layer: layScarlet,
  },
  {
    coords: [450, 27, 650],
    icon: scarletIcon,
    tableID: 313,
    layer: layScarlet,
  },
  {
    coords: [650, 27, 250],
    icon: scarletIcon,
    tableID: 314,
    layer: layScarlet,
  },
  {
    coords: [350, 27, 550],
    icon: scarletIcon,
    tableID: 315,
    layer: layScarlet,
  },
  {
    coords: [350, 27, 650],
    icon: scarletIcon,
    tableID: 316,
    layer: layScarlet,
  },
  {
    coords: [750, 27, 350],
    icon: scarletIcon,
    tableID: 317,
    layer: layScarlet,
  },
  {
    coords: [450, 27, 450],
    icon: scarletIcon,
    tableID: 318,
    layer: layScarlet,
  },
  {
    coords: [850, 27, 450],
    icon: scarletIcon,
    tableID: 319,
    layer: layScarlet,
  },
  {
    coords: [750, 27, 550],
    icon: scarletIcon,
    tableID: 320,
    layer: layScarlet,
  },
  {
    coords: [550, 27, 450],
    icon: scarletIcon,
    tableID: 321,
    layer: layScarlet,
  },
  {
    coords: [350, 27, 350],
    icon: scarletIcon,
    tableID: 322,
    layer: layScarlet,
  },
  {
    coords: [550, 27, 550],
    icon: scarletIcon,
    tableID: 323,
    layer: layScarlet,
  },
  {
    coords: [650, 27, 450],
    icon: scarletIcon,
    tableID: 324,
    layer: layScarlet,
  },
  {
    coords: [550, 27, 350],
    icon: scarletIcon,
    tableID: 325,
    layer: layScarlet,
  },
  {
    coords: [550, 27, 650],
    icon: scarletIcon,
    tableID: 326,
    layer: layScarlet,
  },
  {
    coords: [650, 27, 550],
    icon: scarletIcon,
    tableID: 327,
    layer: layScarlet,
  },
  {
    coords: [850, 27, 550],
    icon: scarletIcon,
    tableID: 328,
    layer: layScarlet,
  },
  {
    coords: [450, 27, 750],
    icon: scarletIcon,
    tableID: 329,
    layer: layScarlet,
  },
  {
    coords: [650, 27, 650],
    icon: scarletIcon,
    tableID: 330,
    layer: layScarlet,
  },
  {
    coords: [550, 27, 750],
    icon: scarletIcon,
    tableID: 331,
    layer: layScarlet,
  },
  {
    coords: [1450, 27, 750],
    icon: scarletIcon,
    tableID: 332,
    layer: layScarlet,
  },
  {
    coords: [1650, 27, 550],
    icon: scarletIcon,
    tableID: 333,
    layer: layScarlet,
  },
  {
    coords: [1650, 27, 750],
    icon: scarletIcon,
    tableID: 334,
    layer: layScarlet,
  },
  {
    coords: [1350, 27, 650],
    icon: scarletIcon,
    tableID: 335,
    layer: layScarlet,
  },
  {
    coords: [1550, 27, 750],
    icon: scarletIcon,
    tableID: 336,
    layer: layScarlet,
  },
  {
    coords: [1450, 27, 650],
    icon: scarletIcon,
    tableID: 337,
    layer: layScarlet,
  },
  {
    coords: [1550, 27, 650],
    icon: scarletIcon,
    tableID: 338,
    layer: layScarlet,
  },
  {
    coords: [1450, 27, 550],
    icon: scarletIcon,
    tableID: 339,
    layer: layScarlet,
  },
]
