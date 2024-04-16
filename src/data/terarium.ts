import { pokeballIcon, scarletIcon, violetIcon } from "./mapSupport"
import { MarkerInfo, PokeFilter } from "./dataTypes"
import { PokemonType } from "@/features/pokemon/pokemonApiSlice"
import { GameVersion } from "@/VersionSelect"

export const terariumPokeFilter: PokeFilter = {
  "10": {
    tableIDs: [
      18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 105,
    ],
    name: "bulbasaur",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
  },
  "40": {
    tableIDs: [
      44, 45, 58, 59, 60, 61, 62, 63, 74, 75, 76, 77, 78, 79, 96, 97, 98, 99,
      100, 112, 113,
    ],
    name: "charmander",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
  },
  "70": {
    tableIDs: [
      152, 165, 166, 180, 181, 196, 197, 210, 212, 213, 214, 228, 230, 231, 246,
    ],
    name: "squirtle",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
  },
  "271": {
    tableIDs: [
      310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 324, 325,
      326, 327, 332, 333, 334, 335, 342, 343, 344, 350, 351, 352, 353, 354, 355,
      356, 357, 358, 359, 7103,
    ],
    name: "alolan-sandshrew",
    types: [PokemonType.ICE, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10101.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "371": {
    tableIDs: [
      260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 274, 275,
      276, 277, 282, 283, 284, 285, 292, 293, 294, 300, 301, 302, 303, 304, 305,
      306, 307, 308, 309, 7104,
    ],
    name: "alolan-vulpix",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10103.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "430": {
    tableIDs: [
      13, 14, 31, 32, 33, 49, 50, 65, 66, 67, 81, 82, 83, 101, 102, 103, 7050,
    ],
    name: "oddish",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/43.png",
  },
  "440": {
    tableIDs: [
      13, 14, 31, 32, 33, 49, 50, 65, 66, 67, 81, 82, 83, 101, 102, 103, 7051,
    ],
    name: "gloom",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/44.png",
  },
  "450": {
    tableIDs: [
      13, 14, 31, 32, 33, 49, 50, 65, 66, 67, 81, 82, 83, 101, 102, 103,
    ],
    name: "vileplume",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/45.png",
  },
  "480": {
    tableIDs: [
      5003, 5005, 44, 45, 58, 59, 60, 61, 62, 63, 74, 75, 76, 77, 78, 79, 96,
      97, 98, 99, 100, 112, 113,
    ],
    name: "venonat",
    types: [PokemonType.BUG, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/48.png",
  },
  "490": {
    tableIDs: [
      44, 45, 58, 59, 60, 61, 62, 63, 74, 75, 76, 77, 78, 79, 96, 97, 98, 99,
      100, 112, 113, 7012,
    ],
    name: "venomoth",
    types: [PokemonType.BUG, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
  },
  "501": {
    tableIDs: [35, 36, 37, 53, 54, 55, 71, 85, 104],
    name: "alolan-diglet",
    types: [PokemonType.GROUND, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10105.png",
  },
  "511": {
    tableIDs: [35, 36, 37, 53, 54, 55, 7054],
    name: "alolan-dugtrio",
    types: [PokemonType.GROUND, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10106.png",
  },
  "720": {
    tableIDs: [
      7, 12, 13, 14, 15, 19, 25, 30, 31, 32, 33, 43, 48, 49, 50, 51, 52, 64, 65,
      67, 68, 80, 81, 83, 84, 101, 102, 103, 114, 115, 118, 119, 125, 126, 127,
      128, 129, 130, 134, 135, 136, 7036,
    ],
    name: "tentacool",
    types: [PokemonType.WATER, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/72.png",
  },
  "730": {
    tableIDs: [
      7, 12, 13, 14, 15, 19, 25, 30, 31, 32, 33, 43, 48, 49, 50, 51, 52, 64, 65,
      67, 68, 80, 81, 83, 84, 101, 102, 103, 114, 115, 118, 119, 125, 126, 127,
      128, 129, 130, 134, 135, 136, 7037,
    ],
    name: "tentacruel",
    types: [PokemonType.WATER, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/73.png",
  },
  "741": {
    tableIDs: [
      88, 89, 90, 139, 140, 150, 152, 153, 165, 166, 180, 181, 196, 197, 210,
      212, 213, 214, 215, 224, 225, 226, 227, 228, 230, 231, 232, 233, 242, 243,
      244, 245, 246, 248, 249, 250, 251, 7068, 7071, 7073, 7077,
    ],
    name: "alolan-geodude",
    types: [PokemonType.ROCK, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10109.png",
  },
  "751": {
    tableIDs: [
      5009, 88, 89, 90, 139, 140, 150, 152, 153, 165, 166, 180, 181, 196, 197,
      210, 212, 213, 214, 215, 224, 225, 226, 227, 228, 230, 231, 232, 233, 242,
      243, 244, 245, 246, 248, 249, 250, 251, 7075, 7076, 7078, 7091, 7092,
      7093,
    ],
    name: "alolan-graveler",
    types: [PokemonType.ROCK, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10110.png",
  },
  "791": {
    tableIDs: [
      30, 31, 35, 36, 37, 53, 54, 55, 71, 85, 103, 104, 7060, 7063, 7064, 7065,
      7066, 7067,
    ],
    name: "galarian-slowpoke",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10164.png",
  },
  "810": {
    tableIDs: [
      88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160, 161,
      162, 163, 164, 173, 174, 175, 176, 177, 178, 179, 189, 190, 191, 192, 193,
      194, 195, 204, 205, 206, 207, 208, 209, 210, 221, 222, 223, 224, 225, 239,
      240,
    ],
    name: "magnemite",
    types: [PokemonType.ELECTRIC, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/81.png",
  },
  "820": {
    tableIDs: [
      88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160, 161,
      162, 163, 164, 173, 174, 175, 176, 177, 178, 179, 189, 190, 191, 192, 193,
      194, 195, 204, 205, 206, 207, 208, 209, 210, 221, 222, 223, 224, 225, 239,
      240, 6010, 7125,
    ],
    name: "magneton",
    types: [PokemonType.ELECTRIC, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png",
  },
  "840": {
    tableIDs: [
      3, 26, 27, 44, 45, 58, 59, 60, 61, 62, 63, 74, 75, 76, 77, 78, 79, 96, 97,
      98, 99, 100, 112, 113, 7003, 7021,
    ],
    name: "doduo",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/84.png",
  },
  "850": {
    tableIDs: [
      5002, 3, 26, 27, 44, 45, 58, 59, 60, 61, 62, 63, 74, 75, 76, 77, 78, 79,
      96, 97, 98, 99, 100, 112, 113,
    ],
    name: "dodrio",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/85.png",
  },
  "860": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187, 198, 199,
      200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236,
      237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259, 7114, 7117,
      7118,
    ],
    name: "seel",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/86.png",
  },
  "870": {
    tableIDs: [
      5011, 154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187,
      198, 199, 200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234,
      235, 236, 237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259,
      6014,
    ],
    name: "dewgong",
    types: [PokemonType.WATER, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/87.png",
  },
  "881": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      64, 65, 66, 67, 68, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      115, 116, 127, 7056,
    ],
    name: "alolan-grimer",
    types: [PokemonType.POISON, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10112.png",
  },
  "891": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      64, 65, 66, 67, 68, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      115, 116, 127, 6008, 7055,
    ],
    name: "alolan-muk",
    types: [PokemonType.POISON, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10113.png",
  },
  "1020": {
    tableIDs: [
      5001, 5005, 5, 6, 13, 14, 15, 16, 17, 18, 22, 23, 24, 26, 30, 31, 32, 33,
      34, 35, 37, 40, 41, 42, 44, 45, 49, 50, 51, 52, 55, 58, 59, 60, 61, 62,
      63, 65, 66, 67, 68, 71, 74, 75, 76, 77, 78, 79, 81, 82, 83, 84, 86, 87,
      96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 112, 113, 115, 116, 127,
      7001, 7019,
    ],
    name: "exeggcute",
    types: [PokemonType.GRASS, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/102.png",
  },
  "1030": {
    tableIDs: [
      5, 6, 22, 23, 24, 26, 40, 41, 42, 44, 72, 73, 94, 95, 108, 109, 110, 120,
      121, 122, 131, 132, 133, 7004,
    ],
    name: "exeggutor",
    types: [PokemonType.GRASS, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/103.png",
  },
  "1031": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 53,
      55, 64, 65, 66, 67, 68, 69, 70, 71, 81, 82, 83, 84, 85, 86, 87, 101, 102,
      103, 104, 105, 115, 116, 127, 7062,
    ],
    name: "alolan-exeggutor",
    types: [PokemonType.GRASS, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10114.png",
  },
  "1060": {
    tableIDs: [231, 232],
    name: "hitmonlee",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/106.png",
  },
  "1070": {
    tableIDs: [150],
    name: "hitmonchan",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/107.png",
  },
  "1110": {
    tableIDs: [
      5001, 5, 6, 8, 22, 23, 24, 26, 40, 41, 42, 44, 45, 58, 59, 60, 61, 62, 63,
      74, 75, 76, 77, 78, 79, 96, 97, 98, 99, 100, 112, 113, 7010,
    ],
    name: "rhyhorn",
    types: [PokemonType.GROUND, PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/111.png",
  },
  "1120": {
    tableIDs: [5, 6, 22, 23, 24, 26, 40, 41, 42, 44, 6012],
    name: "rhydon",
    types: [PokemonType.GROUND, PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png",
  },
  "1130": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72, 73, 74, 75, 76,
      77, 78, 79, 95, 96, 97, 98, 99, 100, 110, 111, 112, 113, 120, 122, 123,
      124, 133, 7005, 7013, 7017, 7020,
    ],
    name: "chansey",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/113.png",
  },
  "1160": {
    tableIDs: [
      35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 149, 150, 151, 152, 162, 163, 164,
      165, 166, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 192, 193,
      194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 210, 211, 212, 213, 214,
      216, 217, 218, 219, 220, 221, 228, 229, 230, 231, 234, 235, 236, 237, 238,
      241, 246, 247, 252, 253, 254, 255, 256, 258, 259, 7121,
    ],
    name: "horsea",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/116.png",
  },
  "1170": {
    tableIDs: [
      5006, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 149, 150, 151, 152, 162,
      163, 164, 165, 166, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186,
      192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 210, 211, 212,
      213, 214, 216, 217, 218, 219, 220, 221, 228, 229, 230, 231, 234, 235, 236,
      237, 238, 241, 246, 247, 252, 253, 254, 255, 256, 258, 259, 6007,
    ],
    name: "seadra",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/117.png",
  },
  "1230": {
    tableIDs: [
      5002, 44, 45, 58, 59, 60, 61, 62, 63, 74, 75, 76, 77, 78, 79, 88, 89, 90,
      96, 97, 98, 99, 100, 112, 113, 137, 138, 139, 140, 141, 147, 148, 149,
      150, 151, 152, 160, 161, 162, 163, 164, 165, 166, 174, 175, 176, 177, 178,
      179, 180, 181, 190, 191, 192, 193, 194, 195, 197, 206, 207, 208, 209, 210,
      212, 213, 214, 215, 224, 225, 227, 228, 230, 231, 232, 233, 246, 248, 249,
      250, 251, 7002,
    ],
    name: "scyther",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/123.png",
  },
  "1250": {
    tableIDs: [
      5008, 26, 27, 88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150,
      151, 160, 161, 162, 163, 164, 165, 173, 174, 175, 176, 177, 178, 179, 189,
      190, 191, 192, 193, 194, 195, 204, 205, 206, 207, 208, 209, 210, 221, 222,
      223, 224, 225, 239, 240, 7082, 7127,
    ],
    name: "electabuzz",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/125.png",
  },
  "1260": {
    tableIDs: [
      5002, 5, 6, 22, 23, 24, 26, 35, 36, 37, 40, 41, 42, 44, 45, 53, 54, 55,
      6004,
    ],
    name: "magmar",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/126.png",
  },
  "1280": {
    tableIDs: [
      5001, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133, 6001,
      7011, 7022,
    ],
    name: "tauros",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/128.png",
  },
  "1310": {
    tableIDs: [
      5010, 182, 183, 184, 185, 186, 198, 199, 200, 201, 202, 211, 216, 217,
      218, 219, 220, 229, 234, 235, 236, 237, 238, 241, 247, 252, 253, 254, 255,
      256, 258, 259, 6019, 7123,
    ],
    name: "lapras",
    types: [PokemonType.WATER, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/131.png",
  },
  "1370": {
    tableIDs: [
      5011, 154, 155, 156, 160, 167, 168, 169, 170, 173, 174, 182, 183, 184,
      185, 186, 187, 189, 190, 199, 200, 201, 202, 203, 205, 206, 207, 216, 217,
      218, 219, 220, 221, 229, 234, 235, 236, 237, 238, 240, 241, 247, 252, 253,
      254, 255, 258, 259, 6017,
    ],
    name: "porygon",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/137.png",
  },
  "1520": {
    tableIDs: [
      15, 16, 17, 18, 30, 33, 34, 35, 37, 51, 52, 55, 64, 68, 71, 84, 86, 87,
      103, 104, 105, 115, 116, 127,
    ],
    name: "chikorita",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png",
  },
  "1550": {
    tableIDs: [254],
    name: "cyndaquil",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/155.png",
  },
  "1580": {
    tableIDs: [59, 73, 94, 95],
    name: "totodile",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/158.png",
  },
  "1700": {
    tableIDs: [
      149, 150, 151, 152, 162, 163, 164, 165, 166, 176, 177, 178, 179, 180, 181,
      192, 193, 194, 195, 196, 197, 210, 212, 213, 214, 228, 230, 231, 246,
    ],
    name: "chinchou",
    types: [PokemonType.WATER, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/170.png",
  },
  "1710": {
    tableIDs: [
      5006, 149, 150, 151, 152, 162, 163, 164, 165, 166, 176, 177, 178, 179,
      180, 181, 192, 193, 194, 195, 196, 197, 210, 212, 213, 214, 228, 230, 231,
      246, 7040,
    ],
    name: "lanturn",
    types: [PokemonType.WATER, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/171.png",
  },
  "1820": {
    tableIDs: [
      13, 15, 18, 30, 32, 33, 49, 50, 51, 53, 54, 64, 66, 67, 86, 103, 104, 106,
      107, 117, 118, 119, 128, 129, 130, 136,
    ],
    name: "bellossom",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/182.png",
  },
  "2030": {
    tableIDs: [
      5007, 45, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133,
    ],
    name: "girafarig",
    types: [PokemonType.NORMAL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/203.png",
  },
  "2090": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      254, 255, 256, 257, 258, 7102, 7112,
    ],
    name: "snubbull",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/209.png",
  },
  "2100": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      254, 255, 256, 257, 258, 6009, 7111,
    ],
    name: "granbull",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/210.png",
  },
  "2111": {
    tableIDs: [
      182, 183, 184, 185, 186, 198, 199, 200, 201, 202, 211, 216, 217, 218, 219,
      220, 229, 234, 235, 236, 237, 238, 241, 247, 252, 253, 254, 255, 256, 258,
      259,
    ],
    name: "hisuian-qwilfish",
    types: [PokemonType.POISON, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10234.png",
  },
  "2120": {
    tableIDs: [
      5, 6, 8, 22, 23, 24, 26, 40, 41, 42, 44, 45, 88, 89, 90, 139, 140, 152,
      153, 165, 166, 179, 180, 181, 194, 195, 196, 197, 210, 212, 213, 214, 215,
      224, 225, 226, 227, 228, 230, 231, 232, 233, 242, 243, 244, 245, 246, 248,
      249, 250, 251, 7090,
    ],
    name: "scizor",
    types: [PokemonType.BUG, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/212.png",
  },
  "2270": {
    tableIDs: [5009, 179, 180, 194, 195, 196, 212, 213],
    name: "skarmory",
    types: [PokemonType.STEEL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/227.png",
  },
  "2350": {
    tableIDs: [
      5002, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 15, 16, 17, 18, 20, 21, 22, 26, 27,
      28, 29, 30, 33, 34, 35, 37, 38, 39, 40, 42, 44, 45, 46, 47, 51, 52, 55,
      56, 57, 58, 59, 60, 62, 63, 64, 68, 71, 72, 73, 74, 84, 86, 87, 91, 92,
      93, 95, 96, 97, 98, 103, 104, 105, 110, 111, 112, 113, 115, 116, 120, 122,
      123, 124, 127, 133, 142, 143, 144, 145, 146, 152, 154, 155, 156, 157, 158,
      159, 160, 161, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175,
      176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 192,
      194, 195, 196, 197, 199, 200, 201, 202, 203, 204, 205, 210, 212, 213, 214,
      215, 216, 217, 218, 219, 220, 221, 222, 223, 227, 228, 229, 230, 231, 232,
      233, 234, 235, 236, 237, 238, 239, 240, 241, 246, 247, 248, 249, 250, 251,
      252, 253, 254, 255, 256, 257, 258, 259, 7089,
    ],
    name: "smeargle",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/235.png",
  },
  "2360": {
    tableIDs: [
      88, 89, 90, 139, 140, 150, 152, 153, 165, 166, 179, 180, 181, 194, 195,
      196, 197, 210, 212, 213, 214, 215, 224, 225, 226, 227, 228, 230, 231, 232,
      233, 242, 243, 244, 245, 246, 248, 249, 250, 251, 7070, 7072,
    ],
    name: "tyrogue",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/236.png",
  },
  "2370": {
    tableIDs: [196, 6011],
    name: "hitmontop",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/237.png",
  },
  "2390": {
    tableIDs: [
      26, 27, 88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160,
      161, 162, 163, 164, 165, 173, 174, 175, 176, 177, 178, 179, 189, 190, 191,
      192, 193, 194, 195, 204, 205, 206, 207, 208, 209, 210, 221, 222, 223, 224,
      225, 239, 240, 7081, 7083, 7124,
    ],
    name: "elekid",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/239.png",
  },
  "2400": {
    tableIDs: [
      5, 6, 22, 23, 24, 26, 35, 36, 37, 40, 41, 42, 44, 45, 53, 54, 55,
    ],
    name: "magby",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/240.png",
  },
  "2420": {
    tableIDs: [5, 6, 22, 23, 24, 26, 35, 36, 37, 40, 41, 42, 44, 53, 54, 55],
    name: "blissey",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/242.png",
  },
  "2520": {
    tableIDs: [179, 180, 194, 195, 196, 212, 213],
    name: "treecko",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/252.png",
  },
  "2550": {
    tableIDs: [157],
    name: "torchic",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/255.png",
  },
  "2580": {
    tableIDs: [35, 36, 37, 53, 54, 55],
    name: "mudkip",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/258.png",
  },
  "2870": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 53,
      55, 64, 65, 66, 67, 68, 69, 70, 71, 81, 82, 83, 84, 85, 86, 87, 101, 102,
      103, 104, 105, 106, 107, 115, 116, 117, 118, 119, 127, 128, 129, 130, 136,
      7048,
    ],
    name: "slakoth",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/287.png",
  },
  "2880": {
    tableIDs: [5005, 85, 86, 105, 106, 107, 116, 117, 118, 127, 128],
    name: "vigoroth",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/288.png",
  },
  "2890": {
    tableIDs: [
      85, 86, 105, 106, 107, 116, 117, 118, 119, 127, 128, 129, 130, 136,
    ],
    name: "slaking",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/289.png",
  },
  "3110": {
    tableIDs: [
      273, 277, 278, 279, 285, 286, 287, 288, 293, 294, 295, 296, 297, 300, 301,
      302, 304, 305, 323, 327, 328, 329, 335, 336, 337, 338, 343, 344, 345, 346,
      347, 350, 351, 352, 354, 355,
    ],
    name: "plusle",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/311.png",
  },
  "3120": {
    tableIDs: [
      273, 277, 278, 279, 285, 286, 287, 288, 293, 294, 295, 296, 297, 300, 301,
      302, 304, 305, 323, 327, 328, 329, 335, 336, 337, 338, 343, 344, 345, 346,
      347, 350, 351, 352, 354, 355,
    ],
    name: "minun",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/312.png",
  },
  "3220": {
    tableIDs: [
      18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 143, 156,
    ],
    name: "numel",
    types: [PokemonType.FIRE, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/322.png",
  },
  "3230": {
    tableIDs: [
      18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 143, 156,
    ],
    name: "camerupt",
    types: [PokemonType.FIRE, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/323.png",
  },
  "3240": {
    tableIDs: [
      5004, 18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 105,
      7059,
    ],
    name: "torkoal",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/324.png",
  },
  "3280": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 62, 63, 72, 73, 74, 95, 96, 97,
      98, 110, 111, 112, 113, 120, 122, 123, 124, 133, 7016, 7031, 7032, 7033,
      7034, 7035,
    ],
    name: "trapinch",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/328.png",
  },
  "3290": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 62, 63, 72, 73, 74, 95, 96, 97,
      98, 110, 111, 112, 113, 120, 122, 123, 124, 133, 6002, 7015,
    ],
    name: "vibrava",
    types: [PokemonType.GROUND, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/329.png",
  },
  "3300": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 62, 63, 72, 73, 74, 95, 96, 97,
      98, 110, 111, 112, 113, 120, 122, 123, 124, 133, 7006,
    ],
    name: "flygon",
    types: [PokemonType.GROUND, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/330.png",
  },
  "3330": {
    tableIDs: [5001, 179, 180, 194, 195, 196, 212, 213],
    name: "swablu",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/333.png",
  },
  "3340": {
    tableIDs: [5007, 179, 180, 194, 195, 196, 212, 213],
    name: "altaria",
    types: [PokemonType.DRAGON, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/334.png",
  },
  "3350": {
    tableIDs: [
      5004, 15, 16, 17, 18, 30, 33, 34, 35, 37, 51, 52, 53, 55, 68, 69, 70, 71,
      84, 85, 86, 87, 103, 104, 105, 115, 116, 127, 7049, 7058,
    ],
    name: "zangoose",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/335.png",
  },
  "3360": {
    tableIDs: [
      5004, 15, 16, 17, 18, 30, 33, 34, 35, 37, 51, 52, 53, 55, 68, 69, 70, 71,
      84, 85, 86, 87, 103, 104, 105, 115, 116, 127, 7046,
    ],
    name: "seviper",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/336.png",
  },
  "3700": {
    tableIDs: [
      7, 12, 13, 14, 15, 19, 25, 30, 31, 32, 33, 43, 48, 49, 50, 51, 52, 64, 65,
      67, 68, 80, 81, 83, 84, 101, 102, 103, 114, 115, 118, 119, 125, 126, 127,
      128, 129, 130, 134, 135, 136,
    ],
    name: "luvdisc",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/370.png",
  },
  "3740": {
    tableIDs: [
      5011, 91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 160,
      170, 171, 172, 173, 174, 186, 187, 188, 189, 190, 203, 204, 205, 206, 207,
      221, 222, 223, 238, 239, 240, 254, 255, 256, 257, 258,
    ],
    name: "beldum",
    types: [PokemonType.STEEL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/374.png",
  },
  "3750": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 160, 170,
      171, 172, 173, 174, 186, 187, 188, 189, 190, 203, 204, 205, 206, 207, 221,
      222, 223, 238, 239, 240, 254, 255, 256, 257, 258, 6021,
    ],
    name: "metang",
    types: [PokemonType.STEEL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/375.png",
  },
  "3870": {
    tableIDs: [
      88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160, 161,
      162, 163, 164, 165, 174, 175, 176, 177, 178, 179, 190, 191, 192, 193, 194,
      195, 206, 207, 208, 209, 210, 224, 225,
    ],
    name: "turtwig",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/387.png",
  },
  "3900": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      255, 256, 257, 258,
    ],
    name: "chimchar",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/390.png",
  },
  "3930": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187, 198, 199,
      200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236,
      237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259,
    ],
    name: "piplup",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/393.png",
  },
  "4080": {
    tableIDs: [280, 281, 289, 290, 291, 298, 299],
    name: "cranidos",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/408.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "4100": {
    tableIDs: [330, 331, 339, 340, 341, 348, 349],
    name: "shieldon",
    types: [PokemonType.ROCK, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/410.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "4400": {
    tableIDs: [5, 6, 22, 23, 24, 26, 35, 36, 37, 40, 41, 42, 44, 53, 54, 55],
    name: "happiny",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/440.png",
  },
  "4560": {
    tableIDs: [
      7, 12, 13, 14, 15, 19, 25, 30, 31, 32, 33, 43, 48, 49, 50, 51, 52, 64, 65,
      67, 68, 80, 81, 83, 84, 101, 102, 103, 114, 115, 118, 119, 125, 126, 127,
      128, 129, 130, 134, 135, 136, 182, 183, 184, 185, 186, 198, 199, 200, 201,
      202, 211, 216, 217, 218, 219, 220, 229, 234, 235, 236, 237, 238, 241, 247,
      252, 253, 254, 255, 256, 258, 259, 7038,
    ],
    name: "finneon",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/456.png",
  },
  "4570": {
    tableIDs: [
      7, 12, 13, 14, 15, 19, 25, 30, 31, 32, 33, 43, 48, 49, 50, 51, 52, 64, 65,
      67, 68, 80, 81, 83, 84, 101, 102, 103, 114, 115, 118, 119, 125, 126, 127,
      128, 129, 130, 134, 135, 136, 182, 183, 184, 185, 186, 198, 199, 200, 201,
      202, 211, 216, 217, 218, 219, 220, 229, 234, 235, 236, 237, 238, 241, 247,
      252, 253, 254, 255, 256, 258, 259, 7039,
    ],
    name: "lumineon",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/457.png",
  },
  "4590": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      255, 256, 257, 258, 7100, 7109,
    ],
    name: "snover",
    types: [PokemonType.GRASS, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/459.png",
  },
  "4600": {
    tableIDs: [
      5010, 91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170,
      171, 172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239,
      240, 255, 256, 257, 258, 6016, 7110,
    ],
    name: "abomasnow",
    types: [PokemonType.GRASS, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/460.png",
  },
  "4620": {
    tableIDs: [5008],
    name: "magnezone",
    types: [PokemonType.ELECTRIC, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/462.png",
  },
  "4790": {
    tableIDs: [
      5004, 3, 26, 27, 35, 36, 37, 45, 53, 54, 55, 71, 85, 103, 104, 143, 150,
      156, 157, 160, 173, 174, 175, 180, 189, 190, 191, 192, 196, 204, 205, 206,
      207, 208, 210, 213, 221, 222, 223, 231, 232, 239, 240, 254,
    ],
    name: "rotom",
    types: [PokemonType.ELECTRIC, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/479.png",
  },
  "4950": {
    tableIDs: [72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133],
    name: "snivy",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/495.png",
  },
  "4980": {
    tableIDs: [
      88, 89, 90, 139, 140, 152, 153, 165, 166, 179, 180, 181, 194, 195, 196,
      197, 210, 212, 213, 214, 215, 224, 225, 226, 227, 228, 230, 231, 232, 233,
      242, 243, 244, 245, 246, 248, 249, 250, 251,
    ],
    name: "tepig",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/498.png",
  },
  "5010": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187, 198, 199,
      200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236,
      237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259,
    ],
    name: "oshawott",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/501.png",
  },
  "5220": {
    tableIDs: [45, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133],
    name: "blitzle",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/522.png",
  },
  "5230": {
    tableIDs: [
      5001, 45, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133,
    ],
    name: "zebstrika",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/523.png",
  },
  "5290": {
    tableIDs: [
      5003, 88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160,
      161, 162, 163, 164, 173, 174, 175, 176, 177, 178, 179, 180, 189, 190, 191,
      192, 193, 194, 195, 196, 204, 205, 206, 207, 208, 209, 210, 221, 222, 223,
      224, 225, 231, 232, 239, 240, 7084, 7085,
    ],
    name: "drilbur",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/529.png",
  },
  "5300": {
    tableIDs: [
      88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160, 161,
      162, 163, 164, 173, 174, 175, 176, 177, 178, 179, 180, 189, 190, 191, 192,
      193, 194, 195, 196, 204, 205, 206, 207, 208, 209, 210, 221, 222, 223, 224,
      225, 231, 232, 239, 240,
    ],
    name: "excadrill",
    types: [PokemonType.GROUND, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/530.png",
  },
  "5460": {
    tableIDs: [
      13, 14, 31, 32, 33, 49, 50, 65, 66, 67, 81, 82, 83, 101, 102, 103, 104,
    ],
    name: "cottonee",
    types: [PokemonType.GRASS, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/546.png",
  },
  "5470": {
    tableIDs: [
      13, 14, 31, 32, 33, 49, 50, 65, 66, 67, 81, 82, 83, 101, 102, 103, 104,
    ],
    name: "whimsicott",
    types: [PokemonType.GRASS, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/547.png",
  },
  "5510": {
    tableIDs: [72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133],
    name: "sandile",
    types: [PokemonType.GROUND, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/551.png",
  },
  "5520": {
    tableIDs: [
      3, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133, 7018,
    ],
    name: "krokorok",
    types: [PokemonType.GROUND, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/552.png",
  },
  "5530": {
    tableIDs: [
      5003, 3, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133,
    ],
    name: "krookodile",
    types: [PokemonType.GROUND, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/553.png",
  },
  "5590": {
    tableIDs: [
      88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 152, 160,
      161, 162, 163, 164, 165, 166, 174, 175, 176, 177, 178, 179, 180, 181, 190,
      191, 192, 193, 194, 195, 197, 206, 207, 208, 209, 210, 212, 213, 214, 215,
      224, 225, 227, 228, 230, 231, 232, 233, 246, 248, 249, 250, 251, 7069,
      7079,
    ],
    name: "scraggy",
    types: [PokemonType.DARK, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/559.png",
  },
  "5600": {
    tableIDs: [
      5009, 88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 152,
      160, 161, 162, 163, 164, 165, 166, 174, 175, 176, 177, 178, 179, 180, 181,
      190, 191, 192, 193, 194, 195, 197, 206, 207, 208, 209, 210, 212, 213, 214,
      215, 224, 225, 227, 228, 230, 231, 232, 233, 246, 248, 249, 250, 251,
    ],
    name: "scrafty",
    types: [PokemonType.DARK, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/560.png",
  },
  "5720": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 179, 180, 182, 183, 184, 185, 186, 187,
      194, 195, 196, 199, 200, 201, 202, 203, 212, 213, 216, 217, 218, 219, 220,
      221, 229, 234, 235, 236, 237, 238, 240, 241, 247, 252, 253, 254, 255, 258,
      259, 7080, 7115,
    ],
    name: "minccino",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/572.png",
  },
  "5730": {
    tableIDs: [
      5007, 154, 155, 156, 167, 168, 169, 170, 179, 180, 182, 183, 184, 185,
      186, 187, 194, 195, 196, 199, 200, 201, 202, 203, 212, 213, 216, 217, 218,
      219, 220, 221, 229, 234, 235, 236, 237, 238, 240, 241, 247, 252, 253, 254,
      255, 258, 259,
    ],
    name: "cinccino",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/573.png",
  },
  "5740": {
    tableIDs: [35, 36, 37, 53, 54, 55, 7061],
    name: "gothita",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/574.png",
  },
  "5750": {
    tableIDs: [35, 36, 37, 53, 54, 55],
    name: "gothorita",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/575.png",
  },
  "5760": {
    tableIDs: [35, 36, 37, 53, 54, 55],
    name: "gothitelle",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/576.png",
  },
  "5770": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187, 198, 199,
      200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236,
      237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259, 7122,
    ],
    name: "solosis",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/577.png",
  },
  "5780": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187, 198, 199,
      200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236,
      237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259, 7116,
    ],
    name: "duosion",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/578.png",
  },
  "5790": {
    tableIDs: [
      5010, 154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187,
      198, 199, 200, 201, 202, 203, 211, 216, 217, 218, 219, 220, 221, 229, 234,
      235, 236, 237, 238, 240, 241, 247, 252, 253, 254, 255, 256, 258, 259,
      6020,
    ],
    name: "reuniclus",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/579.png",
  },
  "5850": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72, 73, 74, 95, 96,
      97, 98, 110, 111, 112, 113, 120, 122, 123, 124, 133,
    ],
    name: "deerling-spring",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585.png",
  },
  "5851": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      65, 66, 67, 68, 69, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      114, 115, 116, 127,
    ],
    name: "deerling-summer",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585-summer.png",
  },
  "5852": {
    tableIDs: [
      88, 89, 90, 139, 140, 152, 153, 165, 166, 179, 180, 181, 194, 195, 196,
      197, 210, 212, 213, 214, 215, 224, 225, 226, 227, 228, 230, 231, 232, 233,
      242, 243, 244, 245, 246, 248, 249, 250, 251,
    ],
    name: "deerling-autumn",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585-autumn.png",
  },
  "5853": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      255, 256, 257, 258,
    ],
    name: "deerling-winter",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585-winter.png",
  },
  "5860": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72, 73, 74, 95, 96,
      97, 98, 110, 111, 112, 113, 120, 122, 123, 124, 133,
    ],
    name: "sawsbuck-spring",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586.png",
  },
  "5861": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      65, 66, 67, 68, 69, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      114, 115, 116, 127,
    ],
    name: "sawsbuck-summer",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586-summer.png",
  },
  "5862": {
    tableIDs: [
      88, 89, 90, 139, 140, 152, 153, 165, 166, 179, 180, 181, 194, 195, 196,
      197, 210, 212, 213, 214, 215, 224, 225, 226, 227, 228, 230, 231, 232, 233,
      242, 243, 244, 245, 246, 248, 249, 250, 251, 7074,
    ],
    name: "sawsbuck-autumn",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586-autumn.png",
  },
  "5863": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      255, 256, 257, 258,
    ],
    name: "sawsbuck-winter",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586-winter.png",
  },
  "5940": {
    tableIDs: [
      5006, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 149, 150, 151, 152, 162,
      163, 164, 165, 176, 177, 178, 179, 180, 192, 193, 194, 195, 196, 210, 212,
      213, 214, 230, 231, 7042,
    ],
    name: "alomomola",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/594.png",
  },
  "5950": {
    tableIDs: [
      160, 173, 174, 175, 189, 190, 191, 192, 204, 205, 206, 207, 208, 221, 222,
      223, 239, 240,
    ],
    name: "joltik",
    types: [PokemonType.BUG, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/595.png",
  },
  "5960": {
    tableIDs: [175, 191, 192, 205, 206, 207, 223, 7095, 7096, 7097, 7098, 7099],
    name: "galvantula",
    types: [PokemonType.BUG, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/596.png",
  },
  "6020": {
    tableIDs: [
      59, 73, 94, 95, 160, 174, 175, 189, 190, 191, 192, 204, 205, 206, 208,
      223, 239,
    ],
    name: "tynamo",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/602.png",
  },
  "6030": {
    tableIDs: [
      59, 73, 94, 95, 160, 174, 175, 189, 190, 191, 192, 204, 205, 206, 208,
      223, 239, 7126,
    ],
    name: "eelektrik",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/603.png",
  },
  "6040": {
    tableIDs: [
      160, 174, 175, 189, 190, 191, 192, 204, 205, 206, 208, 223, 239, 6015,
    ],
    name: "eelektross",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/604.png",
  },
  "6100": {
    tableIDs: [143, 156, 179, 180, 194, 195, 196, 212, 213],
    name: "axew",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/610.png",
  },
  "6110": {
    tableIDs: [143, 156, 179, 180, 194, 195, 196, 212, 213],
    name: "fraxure",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/611.png",
  },
  "6120": {
    tableIDs: [5007],
    name: "haxorus",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/612.png",
  },
  "6130": {
    tableIDs: [
      154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187, 199, 200,
      201, 202, 203, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236, 237, 238,
      240, 241, 247, 252, 253, 254, 255, 258, 259, 7113, 7119,
    ],
    name: "cubchoo",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/613.png",
  },
  "6140": {
    tableIDs: [
      5010, 154, 155, 156, 167, 168, 169, 170, 182, 183, 184, 185, 186, 187,
      199, 200, 201, 202, 203, 216, 217, 218, 219, 220, 221, 229, 234, 235, 236,
      237, 238, 240, 241, 247, 252, 253, 254, 255, 258, 259, 7120,
    ],
    name: "beartic",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/614.png",
  },
  "6220": {
    tableIDs: [
      88, 89, 90, 91, 92, 93, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
      147, 148, 149, 150, 151, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 186, 187, 188, 189, 190,
      191, 192, 193, 194, 195, 203, 204, 205, 206, 207, 208, 209, 210, 221, 222,
      223, 224, 225, 238, 239, 240, 254, 255, 256, 257, 258, 7087,
    ],
    name: "golett",
    types: [PokemonType.GROUND, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/622.png",
  },
  "6230": {
    tableIDs: [
      5009, 88, 89, 90, 91, 92, 93, 137, 138, 139, 140, 141, 142, 143, 144, 145,
      146, 147, 148, 149, 150, 151, 155, 156, 157, 158, 159, 160, 161, 162, 163,
      164, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 186, 187, 188, 189,
      190, 191, 192, 193, 194, 195, 203, 204, 205, 206, 207, 208, 209, 210, 221,
      222, 223, 224, 225, 238, 239, 240, 254, 255, 256, 257, 258, 6013, 7086,
    ],
    name: "golurk",
    types: [PokemonType.GROUND, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/623.png",
  },
  "6270": {
    tableIDs: [72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133],
    name: "rufflet",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/627.png",
  },
  "6280": {
    tableIDs: [
      5003, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133,
    ],
    name: "braviary",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/628.png",
  },
  "6290": {
    tableIDs: [5, 6, 22, 23, 24, 26, 40, 41, 42, 44, 7023, 7025, 7027, 7029],
    name: "vullaby",
    types: [PokemonType.DARK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/629.png",
  },
  "6300": {
    tableIDs: [5, 6, 22, 23, 24, 26, 40, 41, 42, 44, 7024, 7026, 7028, 7030],
    name: "mandibuzz",
    types: [PokemonType.DARK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/630.png",
  },
  "6500": {
    tableIDs: [
      160, 173, 174, 175, 189, 190, 191, 192, 204, 205, 206, 207, 208, 221, 222,
      223, 239, 240,
    ],
    name: "chespin",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/650.png",
  },
  "6530": {
    tableIDs: [5, 6, 22, 23, 24, 26, 40, 41, 42, 44],
    name: "fennekin",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/653.png",
  },
  "6560": {
    tableIDs: [
      13, 14, 31, 32, 33, 48, 49, 50, 51, 64, 65, 66, 67, 80, 81, 82, 83, 84,
      101, 102, 103,
    ],
    name: "froakie",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/656.png",
  },
  "6610": {
    tableIDs: [
      18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 105, 210,
    ],
    name: "fletchling",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/661.png",
  },
  "6620": {
    tableIDs: [
      18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 105, 210,
      7043,
    ],
    name: "fletchinder",
    types: [PokemonType.FIRE, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/662.png",
  },
  "6630": {
    tableIDs: [
      5004, 18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 105,
    ],
    name: "talonflame",
    types: [PokemonType.FIRE, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/663.png",
  },
  "6670": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 23, 24, 26, 27, 28, 29, 38,
      39, 40, 41, 42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72, 73,
      74, 94, 95, 96, 97, 98, 108, 109, 110, 111, 112, 113, 120, 121, 122, 123,
      124, 131, 132, 133, 7007,
    ],
    name: "litleo",
    types: [PokemonType.FIRE, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/667.png",
  },
  "6680": {
    tableIDs: [
      5002, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 23, 24, 26, 27, 28, 29,
      38, 39, 40, 41, 42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72,
      73, 74, 94, 95, 96, 97, 98, 108, 109, 110, 111, 112, 113, 120, 121, 122,
      123, 124, 131, 132, 133, 7008, 7009,
    ],
    name: "pyroar",
    types: [PokemonType.FIRE, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/668.png",
  },
  "6770": {
    tableIDs: [
      86, 105, 106, 107, 116, 117, 118, 119, 127, 128, 129, 130, 136, 196,
    ],
    name: "espurr",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/677.png",
  },
  "6780": {
    tableIDs: [
      86, 105, 106, 107, 116, 117, 118, 119, 127, 128, 129, 130, 136, 196, 7045,
    ],
    name: "meowstic",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/678.png",
  },
  "6860": {
    tableIDs: [
      7, 12, 13, 14, 15, 19, 25, 30, 31, 32, 33, 34, 35, 43, 48, 49, 50, 51, 52,
      53, 55, 64, 65, 67, 68, 69, 70, 71, 80, 81, 83, 84, 85, 86, 87, 101, 102,
      103, 105, 114, 115, 118, 119, 125, 126, 127, 128, 129, 130, 134, 135, 136,
      7041, 7052,
    ],
    name: "inkay",
    types: [PokemonType.DARK, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/686.png",
  },
  "6870": {
    tableIDs: [5006, 5008],
    name: "malamar",
    types: [PokemonType.DARK, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/687.png",
  },
  "7220": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 20, 21, 22, 26, 27, 28, 29, 38, 39, 40,
      42, 44, 45, 46, 47, 56, 57, 58, 59, 60, 62, 63, 72, 73, 74, 95, 96, 97,
      98, 110, 111, 112, 113, 120, 122, 123, 124, 133,
    ],
    name: "rowlet",
    types: [PokemonType.GRASS, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/722.png",
  },
  "7250": {
    tableIDs: [
      88, 89, 90, 137, 138, 139, 140, 141, 147, 148, 149, 150, 151, 160, 161,
      162, 163, 164, 165, 174, 175, 176, 177, 178, 179, 190, 191, 192, 193, 194,
      195, 206, 207, 208, 209, 210, 224, 225,
    ],
    name: "litten",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/725.png",
  },
  "7280": {
    tableIDs: [
      7, 12, 13, 14, 15, 18, 19, 25, 30, 31, 32, 33, 43, 48, 49, 50, 51, 52, 64,
      65, 66, 67, 68, 80, 81, 83, 84, 86, 101, 102, 103, 104, 106, 107, 114,
      115, 118, 119, 125, 126, 127, 128, 129, 130, 134, 135, 136,
    ],
    name: "popplio",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/728.png",
  },
  "7310": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      64, 65, 66, 67, 68, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      106, 107, 115, 116, 117, 118, 119, 127, 128, 129, 130, 136,
    ],
    name: "pikipek",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/731.png",
  },
  "7320": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      64, 65, 66, 67, 68, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      106, 107, 115, 116, 117, 118, 119, 127, 128, 129, 130, 136, 6005,
    ],
    name: "trumbeak",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/732.png",
  },
  "7330": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 30, 31, 32, 33, 34, 35, 37, 49, 50, 51, 52, 55,
      65, 66, 67, 68, 69, 71, 81, 82, 83, 84, 86, 87, 101, 102, 103, 104, 105,
      114, 115, 116, 127, 7053,
    ],
    name: "toucannon",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/733.png",
  },
  "7390": {
    tableIDs: [
      13, 15, 18, 30, 32, 33, 49, 50, 51, 64, 66, 67, 86, 91, 92, 93, 103, 104,
      106, 107, 118, 119, 129, 130, 136, 142, 143, 144, 145, 146, 155, 156, 157,
      158, 159, 170, 171, 172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222,
      223, 238, 239, 240, 255, 256, 257, 258, 7044, 7106, 7107, 7108,
    ],
    name: "crabrawler",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/739.png",
  },
  "7400": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      255, 256, 257, 258,
    ],
    name: "crabominable",
    types: [PokemonType.FIGHTING, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/740.png",
  },
  "7510": {
    tableIDs: [
      18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 59, 69, 70, 71, 73, 85, 86, 87,
      94, 95, 105,
    ],
    name: "dewpider",
    types: [PokemonType.WATER, PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/751.png",
  },
  "7520": {
    tableIDs: [
      5005, 18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86, 87, 105,
    ],
    name: "araquanid",
    types: [PokemonType.WATER, PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/752.png",
  },
  "7640": {
    tableIDs: [5005, 86, 105, 106, 107, 116, 117, 118, 127, 128],
    name: "comfey",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/764.png",
  },
  "7740": {
    tableIDs: [
      5012, 5008, 18, 19, 34, 35, 36, 37, 52, 53, 54, 55, 69, 70, 71, 85, 86,
      87, 88, 89, 90, 91, 92, 93, 103, 137, 138, 139, 140, 141, 142, 143, 144,
      145, 146, 147, 148, 149, 150, 151, 155, 156, 157, 158, 159, 160, 161, 162,
      163, 164, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 186, 187, 188,
      189, 190, 191, 192, 193, 194, 195, 203, 204, 205, 206, 207, 208, 209, 210,
      221, 222, 223, 224, 225, 238, 239, 240, 255, 256, 257, 258,
    ],
    name: "minior",
    types: [PokemonType.ROCK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/774.png",
  },
  "7790": {
    tableIDs: [5006, 59, 73, 94, 95, 6006],
    name: "bruxish",
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/779.png",
  },
  "8100": {
    tableIDs: [86, 105, 106, 107, 116, 117, 118, 119, 127, 128, 129, 130, 136],
    name: "grookey",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/810.png",
  },
  "8130": {
    tableIDs: [
      91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170, 171,
      172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239, 240,
      255, 256, 257, 258,
    ],
    name: "scorbunny",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/813.png",
  },
  "8160": {
    tableIDs: [22, 23, 62, 76, 77, 78, 121],
    name: "sobble",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/816.png",
  },
  "8540": {
    tableIDs: [
      160, 161, 164, 165, 174, 175, 176, 177, 178, 179, 192, 194, 195, 7088,
    ],
    name: "sinistea",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/854.png",
  },
  "8680": {
    tableIDs: [
      5009, 5010, 5012, 91, 92, 93, 142, 143, 144, 145, 146, 154, 155, 156, 157,
      158, 159, 167, 168, 169, 170, 171, 172, 173, 182, 183, 184, 185, 186, 187,
      188, 189, 198, 199, 200, 201, 202, 203, 204, 205, 211, 216, 217, 218, 219,
      220, 221, 222, 223, 229, 234, 235, 236, 237, 238, 239, 240, 241, 247, 252,
      253, 254, 255, 256, 257, 258, 259, 7057, 7101, 7105,
    ],
    name: "milcery",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/868.png",
  },
  "8840": {
    tableIDs: [
      5012, 91, 92, 93, 142, 143, 144, 145, 146, 155, 156, 157, 158, 159, 170,
      171, 172, 173, 186, 187, 188, 189, 203, 204, 205, 221, 222, 223, 238, 239,
      240, 255, 256, 257, 258, 6018,
    ],
    name: "duraludon",
    types: [PokemonType.STEEL, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/884.png",
  },
  "9000": {
    tableIDs: [193, 209, 7094],
    name: "kleavor",
    types: [PokemonType.BUG, PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/900.png",
  },
  "9530": {
    tableIDs: [
      5003, 3, 26, 27, 45, 72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131,
      132, 133,
    ],
    name: "rellor",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/953.png",
  },
  "9540": {
    tableIDs: [
      72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133, 6003,
    ],
    name: "rabsca",
    types: [PokemonType.BUG, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/954.png",
  },
  "9810": {
    tableIDs: [72, 73, 94, 95, 108, 109, 110, 120, 121, 122, 131, 132, 133],
    name: "farigiraf",
    types: [PokemonType.NORMAL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/981.png",
  },
}

export const terariumMarkers: MarkerInfo[] = [
  { coords: [1050, 1050], icon: pokeballIcon, tableID: 1 },
  { coords: [1050, 1050], icon: pokeballIcon, tableID: 2 },
  { coords: [1050, 1150], icon: pokeballIcon, tableID: 3 },
  { coords: [1050, 1250], icon: pokeballIcon, tableID: 4 },
  { coords: [1050, 1350], icon: pokeballIcon, tableID: 5 },
  { coords: [1050, 1450], icon: pokeballIcon, tableID: 6 },
  { coords: [1050, 150], icon: pokeballIcon, tableID: 7 },
  { coords: [1050, 1550], icon: pokeballIcon, tableID: 8 },
  { coords: [1050, 1650], icon: pokeballIcon, tableID: 9 },
  { coords: [1050, 1750], icon: pokeballIcon, tableID: 10 },
  { coords: [1050, 1850], icon: pokeballIcon, tableID: 11 },
  { coords: [1050, 250], icon: pokeballIcon, tableID: 12 },
  { coords: [1050, 350], icon: pokeballIcon, tableID: 13 },
  { coords: [1050, 450], icon: pokeballIcon, tableID: 14 },
  { coords: [1050, 550], icon: pokeballIcon, tableID: 15 },
  { coords: [1050, 650], icon: pokeballIcon, tableID: 16 },
  { coords: [1050, 750], icon: pokeballIcon, tableID: 17 },
  { coords: [1050, 850], icon: pokeballIcon, tableID: 18 },
  { coords: [1050, 950], icon: pokeballIcon, tableID: 19 },
  { coords: [1150, 1050], icon: pokeballIcon, tableID: 20 },
  { coords: [1150, 1150], icon: pokeballIcon, tableID: 21 },
  { coords: [1150, 1250], icon: pokeballIcon, tableID: 22 },
  { coords: [1150, 1350], icon: pokeballIcon, tableID: 23 },
  { coords: [1150, 1450], icon: pokeballIcon, tableID: 24 },
  { coords: [1150, 150], icon: pokeballIcon, tableID: 25 },
  { coords: [1150, 1550], icon: pokeballIcon, tableID: 26 },
  { coords: [1150, 1650], icon: pokeballIcon, tableID: 27 },
  { coords: [1150, 1750], icon: pokeballIcon, tableID: 28 },
  { coords: [1150, 1850], icon: pokeballIcon, tableID: 29 },
  { coords: [1150, 250], icon: pokeballIcon, tableID: 30 },
  { coords: [1150, 350], icon: pokeballIcon, tableID: 31 },
  { coords: [1150, 450], icon: pokeballIcon, tableID: 32 },
  { coords: [1150, 550], icon: pokeballIcon, tableID: 33 },
  { coords: [1150, 650], icon: pokeballIcon, tableID: 34 },
  { coords: [1150, 750], icon: pokeballIcon, tableID: 35 },
  { coords: [1150, 850], icon: pokeballIcon, tableID: 36 },
  { coords: [1150, 950], icon: pokeballIcon, tableID: 37 },
  { coords: [1250, 1050], icon: pokeballIcon, tableID: 38 },
  { coords: [1250, 1150], icon: pokeballIcon, tableID: 39 },
  { coords: [1250, 1250], icon: pokeballIcon, tableID: 40 },
  { coords: [1250, 1350], icon: pokeballIcon, tableID: 41 },
  { coords: [1250, 1450], icon: pokeballIcon, tableID: 42 },
  { coords: [1250, 150], icon: pokeballIcon, tableID: 43 },
  { coords: [1250, 1550], icon: pokeballIcon, tableID: 44 },
  { coords: [1250, 1650], icon: pokeballIcon, tableID: 45 },
  { coords: [1250, 1750], icon: pokeballIcon, tableID: 46 },
  { coords: [1250, 1850], icon: pokeballIcon, tableID: 47 },
  { coords: [1250, 250], icon: pokeballIcon, tableID: 48 },
  { coords: [1250, 350], icon: pokeballIcon, tableID: 49 },
  { coords: [1250, 450], icon: pokeballIcon, tableID: 50 },
  { coords: [1250, 550], icon: pokeballIcon, tableID: 51 },
  { coords: [1250, 650], icon: pokeballIcon, tableID: 52 },
  { coords: [1250, 750], icon: pokeballIcon, tableID: 53 },
  { coords: [1250, 850], icon: pokeballIcon, tableID: 54 },
  { coords: [1250, 950], icon: pokeballIcon, tableID: 55 },
  { coords: [1350, 1050], icon: pokeballIcon, tableID: 56 },
  { coords: [1350, 1150], icon: pokeballIcon, tableID: 57 },
  { coords: [1350, 1250], icon: pokeballIcon, tableID: 58 },
  { coords: [1350, 1350], icon: pokeballIcon, tableID: 59 },
  { coords: [1350, 1450], icon: pokeballIcon, tableID: 60 },
  { coords: [1350, 1550], icon: pokeballIcon, tableID: 61 },
  { coords: [1350, 1650], icon: pokeballIcon, tableID: 62 },
  { coords: [1350, 1750], icon: pokeballIcon, tableID: 63 },
  { coords: [1350, 250], icon: pokeballIcon, tableID: 64 },
  { coords: [1350, 350], icon: pokeballIcon, tableID: 65 },
  { coords: [1350, 450], icon: pokeballIcon, tableID: 66 },
  { coords: [1350, 550], icon: pokeballIcon, tableID: 67 },
  { coords: [1350, 650], icon: pokeballIcon, tableID: 68 },
  { coords: [1350, 750], icon: pokeballIcon, tableID: 69 },
  { coords: [1350, 850], icon: pokeballIcon, tableID: 70 },
  { coords: [1350, 950], icon: pokeballIcon, tableID: 71 },
  { coords: [1450, 1050], icon: pokeballIcon, tableID: 72 },
  { coords: [1450, 1150], icon: pokeballIcon, tableID: 73 },
  { coords: [1450, 1250], icon: pokeballIcon, tableID: 74 },
  { coords: [1450, 1350], icon: pokeballIcon, tableID: 75 },
  { coords: [1450, 1450], icon: pokeballIcon, tableID: 76 },
  { coords: [1450, 1550], icon: pokeballIcon, tableID: 77 },
  { coords: [1450, 1650], icon: pokeballIcon, tableID: 78 },
  { coords: [1450, 1750], icon: pokeballIcon, tableID: 79 },
  { coords: [1450, 250], icon: pokeballIcon, tableID: 80 },
  { coords: [1450, 350], icon: pokeballIcon, tableID: 81 },
  { coords: [1450, 450], icon: pokeballIcon, tableID: 82 },
  { coords: [1450, 550], icon: pokeballIcon, tableID: 83 },
  { coords: [1450, 650], icon: pokeballIcon, tableID: 84 },
  { coords: [1450, 750], icon: pokeballIcon, tableID: 85 },
  { coords: [1450, 850], icon: pokeballIcon, tableID: 86 },
  { coords: [1450, 950], icon: pokeballIcon, tableID: 87 },
  { coords: [150, 1050], icon: pokeballIcon, tableID: 88 },
  { coords: [150, 1150], icon: pokeballIcon, tableID: 89 },
  { coords: [150, 1250], icon: pokeballIcon, tableID: 90 },
  { coords: [150, 750], icon: pokeballIcon, tableID: 91 },
  { coords: [150, 850], icon: pokeballIcon, tableID: 92 },
  { coords: [150, 950], icon: pokeballIcon, tableID: 93 },
  { coords: [1550, 1050], icon: pokeballIcon, tableID: 94 },
  { coords: [1550, 1150], icon: pokeballIcon, tableID: 95 },
  { coords: [1550, 1250], icon: pokeballIcon, tableID: 96 },
  { coords: [1550, 1350], icon: pokeballIcon, tableID: 97 },
  { coords: [1550, 1450], icon: pokeballIcon, tableID: 98 },
  { coords: [1550, 1550], icon: pokeballIcon, tableID: 99 },
  {
    coords: [1550, 1650],
    icon: pokeballIcon,
    tableID: 100,
  },
  { coords: [1550, 350], icon: pokeballIcon, tableID: 101 },
  { coords: [1550, 450], icon: pokeballIcon, tableID: 102 },
  { coords: [1550, 550], icon: pokeballIcon, tableID: 103 },
  { coords: [1550, 650], icon: pokeballIcon, tableID: 104 },
  { coords: [1550, 750], icon: pokeballIcon, tableID: 105 },
  { coords: [1550, 850], icon: pokeballIcon, tableID: 106 },
  { coords: [1550, 950], icon: pokeballIcon, tableID: 107 },
  {
    coords: [1650, 1050],
    icon: pokeballIcon,
    tableID: 108,
  },
  {
    coords: [1650, 1150],
    icon: pokeballIcon,
    tableID: 109,
  },
  {
    coords: [1650, 1250],
    icon: pokeballIcon,
    tableID: 110,
  },
  {
    coords: [1650, 1350],
    icon: pokeballIcon,
    tableID: 111,
  },
  {
    coords: [1650, 1450],
    icon: pokeballIcon,
    tableID: 112,
  },
  {
    coords: [1650, 1550],
    icon: pokeballIcon,
    tableID: 113,
  },
  { coords: [1650, 450], icon: pokeballIcon, tableID: 114 },
  { coords: [1650, 550], icon: pokeballIcon, tableID: 115 },
  { coords: [1650, 650], icon: pokeballIcon, tableID: 116 },
  { coords: [1650, 750], icon: pokeballIcon, tableID: 117 },
  { coords: [1650, 850], icon: pokeballIcon, tableID: 118 },
  { coords: [1650, 950], icon: pokeballIcon, tableID: 119 },
  {
    coords: [1750, 1050],
    icon: pokeballIcon,
    tableID: 120,
  },
  {
    coords: [1750, 1150],
    icon: pokeballIcon,
    tableID: 121,
  },
  {
    coords: [1750, 1250],
    icon: pokeballIcon,
    tableID: 122,
  },
  {
    coords: [1750, 1350],
    icon: pokeballIcon,
    tableID: 123,
  },
  {
    coords: [1750, 1450],
    icon: pokeballIcon,
    tableID: 124,
  },
  { coords: [1750, 450], icon: pokeballIcon, tableID: 125 },
  { coords: [1750, 550], icon: pokeballIcon, tableID: 126 },
  { coords: [1750, 650], icon: pokeballIcon, tableID: 127 },
  { coords: [1750, 750], icon: pokeballIcon, tableID: 128 },
  { coords: [1750, 850], icon: pokeballIcon, tableID: 129 },
  { coords: [1750, 950], icon: pokeballIcon, tableID: 130 },
  {
    coords: [1850, 1050],
    icon: pokeballIcon,
    tableID: 131,
  },
  {
    coords: [1850, 1150],
    icon: pokeballIcon,
    tableID: 132,
  },
  {
    coords: [1850, 1250],
    icon: pokeballIcon,
    tableID: 133,
  },
  { coords: [1850, 750], icon: pokeballIcon, tableID: 134 },
  { coords: [1850, 850], icon: pokeballIcon, tableID: 135 },
  { coords: [1850, 950], icon: pokeballIcon, tableID: 136 },
  { coords: [250, 1050], icon: pokeballIcon, tableID: 137 },
  { coords: [250, 1150], icon: pokeballIcon, tableID: 138 },
  { coords: [250, 1250], icon: pokeballIcon, tableID: 139 },
  { coords: [250, 1350], icon: pokeballIcon, tableID: 140 },
  { coords: [250, 1450], icon: pokeballIcon, tableID: 141 },
  { coords: [250, 550], icon: pokeballIcon, tableID: 142 },
  { coords: [250, 650], icon: pokeballIcon, tableID: 143 },
  { coords: [250, 750], icon: pokeballIcon, tableID: 144 },
  { coords: [250, 850], icon: pokeballIcon, tableID: 145 },
  { coords: [250, 950], icon: pokeballIcon, tableID: 146 },
  { coords: [350, 1050], icon: pokeballIcon, tableID: 147 },
  { coords: [350, 1150], icon: pokeballIcon, tableID: 148 },
  { coords: [350, 1250], icon: pokeballIcon, tableID: 149 },
  { coords: [350, 1350], icon: pokeballIcon, tableID: 150 },
  { coords: [350, 1450], icon: pokeballIcon, tableID: 151 },
  { coords: [350, 1550], icon: pokeballIcon, tableID: 152 },
  { coords: [350, 1650], icon: pokeballIcon, tableID: 153 },
  { coords: [350, 450], icon: pokeballIcon, tableID: 154 },
  { coords: [350, 550], icon: pokeballIcon, tableID: 155 },
  { coords: [350, 650], icon: pokeballIcon, tableID: 156 },
  { coords: [350, 750], icon: pokeballIcon, tableID: 157 },
  { coords: [350, 850], icon: pokeballIcon, tableID: 158 },
  { coords: [350, 950], icon: pokeballIcon, tableID: 159 },
  { coords: [450, 1050], icon: pokeballIcon, tableID: 160 },
  { coords: [450, 1150], icon: pokeballIcon, tableID: 161 },
  { coords: [450, 1250], icon: pokeballIcon, tableID: 162 },
  { coords: [450, 1350], icon: pokeballIcon, tableID: 163 },
  { coords: [450, 1450], icon: pokeballIcon, tableID: 164 },
  { coords: [450, 1550], icon: pokeballIcon, tableID: 165 },
  { coords: [450, 1650], icon: pokeballIcon, tableID: 166 },
  { coords: [450, 350], icon: pokeballIcon, tableID: 167 },
  { coords: [450, 450], icon: pokeballIcon, tableID: 168 },
  { coords: [450, 550], icon: pokeballIcon, tableID: 169 },
  { coords: [450, 650], icon: pokeballIcon, tableID: 170 },
  { coords: [450, 750], icon: pokeballIcon, tableID: 171 },
  { coords: [450, 850], icon: pokeballIcon, tableID: 172 },
  { coords: [450, 950], icon: pokeballIcon, tableID: 173 },
  { coords: [550, 1050], icon: pokeballIcon, tableID: 174 },
  { coords: [550, 1150], icon: pokeballIcon, tableID: 175 },
  { coords: [550, 1250], icon: pokeballIcon, tableID: 176 },
  { coords: [550, 1350], icon: pokeballIcon, tableID: 177 },
  { coords: [550, 1450], icon: pokeballIcon, tableID: 178 },
  { coords: [550, 1550], icon: pokeballIcon, tableID: 179 },
  { coords: [550, 1650], icon: pokeballIcon, tableID: 180 },
  { coords: [550, 1750], icon: pokeballIcon, tableID: 181 },
  { coords: [550, 250], icon: pokeballIcon, tableID: 182 },
  { coords: [550, 350], icon: pokeballIcon, tableID: 183 },
  { coords: [550, 450], icon: pokeballIcon, tableID: 184 },
  { coords: [550, 550], icon: pokeballIcon, tableID: 185 },
  { coords: [550, 650], icon: pokeballIcon, tableID: 186 },
  { coords: [550, 750], icon: pokeballIcon, tableID: 187 },
  { coords: [550, 850], icon: pokeballIcon, tableID: 188 },
  { coords: [550, 950], icon: pokeballIcon, tableID: 189 },
  { coords: [650, 1050], icon: pokeballIcon, tableID: 190 },
  { coords: [650, 1150], icon: pokeballIcon, tableID: 191 },
  { coords: [650, 1250], icon: pokeballIcon, tableID: 192 },
  { coords: [650, 1350], icon: pokeballIcon, tableID: 193 },
  { coords: [650, 1450], icon: pokeballIcon, tableID: 194 },
  { coords: [650, 1550], icon: pokeballIcon, tableID: 195 },
  { coords: [650, 1650], icon: pokeballIcon, tableID: 196 },
  { coords: [650, 1750], icon: pokeballIcon, tableID: 197 },
  { coords: [650, 250], icon: pokeballIcon, tableID: 198 },
  { coords: [650, 350], icon: pokeballIcon, tableID: 199 },
  { coords: [650, 450], icon: pokeballIcon, tableID: 200 },
  { coords: [650, 550], icon: pokeballIcon, tableID: 201 },
  { coords: [650, 650], icon: pokeballIcon, tableID: 202 },
  { coords: [650, 750], icon: pokeballIcon, tableID: 203 },
  { coords: [650, 850], icon: pokeballIcon, tableID: 204 },
  { coords: [650, 950], icon: pokeballIcon, tableID: 205 },
  { coords: [750, 1050], icon: pokeballIcon, tableID: 206 },
  { coords: [750, 1150], icon: pokeballIcon, tableID: 207 },
  { coords: [750, 1250], icon: pokeballIcon, tableID: 208 },
  { coords: [750, 1350], icon: pokeballIcon, tableID: 209 },
  { coords: [750, 1450], icon: pokeballIcon, tableID: 210 },
  { coords: [750, 150], icon: pokeballIcon, tableID: 211 },
  { coords: [750, 1550], icon: pokeballIcon, tableID: 212 },
  { coords: [750, 1650], icon: pokeballIcon, tableID: 213 },
  { coords: [750, 1750], icon: pokeballIcon, tableID: 214 },
  { coords: [750, 1850], icon: pokeballIcon, tableID: 215 },
  { coords: [750, 250], icon: pokeballIcon, tableID: 216 },
  { coords: [750, 350], icon: pokeballIcon, tableID: 217 },
  { coords: [750, 450], icon: pokeballIcon, tableID: 218 },
  { coords: [750, 550], icon: pokeballIcon, tableID: 219 },
  { coords: [750, 650], icon: pokeballIcon, tableID: 220 },
  { coords: [750, 750], icon: pokeballIcon, tableID: 221 },
  { coords: [750, 850], icon: pokeballIcon, tableID: 222 },
  { coords: [750, 950], icon: pokeballIcon, tableID: 223 },
  { coords: [850, 1050], icon: pokeballIcon, tableID: 224 },
  { coords: [850, 1150], icon: pokeballIcon, tableID: 225 },
  { coords: [850, 1250], icon: pokeballIcon, tableID: 226 },
  { coords: [850, 1350], icon: pokeballIcon, tableID: 227 },
  { coords: [850, 1450], icon: pokeballIcon, tableID: 228 },
  { coords: [850, 150], icon: pokeballIcon, tableID: 229 },
  { coords: [850, 1550], icon: pokeballIcon, tableID: 230 },
  { coords: [850, 1650], icon: pokeballIcon, tableID: 231 },
  { coords: [850, 1750], icon: pokeballIcon, tableID: 232 },
  { coords: [850, 1850], icon: pokeballIcon, tableID: 233 },
  { coords: [850, 250], icon: pokeballIcon, tableID: 234 },
  { coords: [850, 350], icon: pokeballIcon, tableID: 235 },
  { coords: [850, 450], icon: pokeballIcon, tableID: 236 },
  { coords: [850, 550], icon: pokeballIcon, tableID: 237 },
  { coords: [850, 650], icon: pokeballIcon, tableID: 238 },
  { coords: [850, 750], icon: pokeballIcon, tableID: 239 },
  { coords: [850, 850], icon: pokeballIcon, tableID: 240 },
  { coords: [850, 950], icon: pokeballIcon, tableID: 241 },
  { coords: [950, 1050], icon: pokeballIcon, tableID: 242 },
  { coords: [950, 1150], icon: pokeballIcon, tableID: 243 },
  { coords: [950, 1250], icon: pokeballIcon, tableID: 244 },
  { coords: [950, 1350], icon: pokeballIcon, tableID: 245 },
  { coords: [950, 1450], icon: pokeballIcon, tableID: 246 },
  { coords: [950, 150], icon: pokeballIcon, tableID: 247 },
  { coords: [950, 1550], icon: pokeballIcon, tableID: 248 },
  { coords: [950, 1650], icon: pokeballIcon, tableID: 249 },
  { coords: [950, 1750], icon: pokeballIcon, tableID: 250 },
  { coords: [950, 1850], icon: pokeballIcon, tableID: 251 },
  { coords: [950, 250], icon: pokeballIcon, tableID: 252 },
  { coords: [950, 350], icon: pokeballIcon, tableID: 253 },
  { coords: [950, 450], icon: pokeballIcon, tableID: 254 },
  { coords: [950, 550], icon: pokeballIcon, tableID: 255 },
  { coords: [950, 650], icon: pokeballIcon, tableID: 256 },
  { coords: [950, 750], icon: pokeballIcon, tableID: 257 },
  { coords: [950, 850], icon: pokeballIcon, tableID: 258 },
  { coords: [950, 950], icon: pokeballIcon, tableID: 259 },
  { coords: [150, 750], icon: scarletIcon, tableID: 260 },
  { coords: [150, 850], icon: scarletIcon, tableID: 261 },
  { coords: [150, 950], icon: scarletIcon, tableID: 262 },
  { coords: [250, 550], icon: scarletIcon, tableID: 263 },
  { coords: [250, 650], icon: scarletIcon, tableID: 264 },
  { coords: [250, 750], icon: scarletIcon, tableID: 265 },
  { coords: [250, 850], icon: scarletIcon, tableID: 266 },
  { coords: [250, 950], icon: scarletIcon, tableID: 267 },
  { coords: [350, 550], icon: scarletIcon, tableID: 268 },
  { coords: [350, 650], icon: scarletIcon, tableID: 269 },
  { coords: [350, 750], icon: scarletIcon, tableID: 270 },
  { coords: [350, 850], icon: scarletIcon, tableID: 271 },
  { coords: [350, 950], icon: scarletIcon, tableID: 272 },
  { coords: [450, 1050], icon: scarletIcon, tableID: 273 },
  { coords: [450, 650], icon: scarletIcon, tableID: 274 },
  { coords: [450, 750], icon: scarletIcon, tableID: 275 },
  { coords: [450, 850], icon: scarletIcon, tableID: 276 },
  { coords: [450, 950], icon: scarletIcon, tableID: 277 },
  { coords: [550, 1050], icon: scarletIcon, tableID: 278 },
  { coords: [550, 1150], icon: scarletIcon, tableID: 279 },
  { coords: [550, 1550], icon: scarletIcon, tableID: 280 },
  { coords: [550, 1650], icon: scarletIcon, tableID: 281 },
  { coords: [550, 650], icon: scarletIcon, tableID: 282 },
  { coords: [550, 750], icon: scarletIcon, tableID: 283 },
  { coords: [550, 850], icon: scarletIcon, tableID: 284 },
  { coords: [550, 950], icon: scarletIcon, tableID: 285 },
  { coords: [650, 1050], icon: scarletIcon, tableID: 286 },
  { coords: [650, 1150], icon: scarletIcon, tableID: 287 },
  { coords: [650, 1250], icon: scarletIcon, tableID: 288 },
  { coords: [650, 1450], icon: scarletIcon, tableID: 289 },
  { coords: [650, 1550], icon: scarletIcon, tableID: 290 },
  { coords: [650, 1650], icon: scarletIcon, tableID: 291 },
  { coords: [650, 750], icon: scarletIcon, tableID: 292 },
  { coords: [650, 850], icon: scarletIcon, tableID: 293 },
  { coords: [650, 950], icon: scarletIcon, tableID: 294 },
  { coords: [750, 1050], icon: scarletIcon, tableID: 295 },
  { coords: [750, 1150], icon: scarletIcon, tableID: 296 },
  { coords: [750, 1250], icon: scarletIcon, tableID: 297 },
  { coords: [750, 1550], icon: scarletIcon, tableID: 298 },
  { coords: [750, 1650], icon: scarletIcon, tableID: 299 },
  { coords: [750, 750], icon: scarletIcon, tableID: 300 },
  { coords: [750, 850], icon: scarletIcon, tableID: 301 },
  { coords: [750, 950], icon: scarletIcon, tableID: 302 },
  { coords: [850, 650], icon: scarletIcon, tableID: 303 },
  { coords: [850, 750], icon: scarletIcon, tableID: 304 },
  { coords: [850, 850], icon: scarletIcon, tableID: 305 },
  { coords: [950, 550], icon: scarletIcon, tableID: 306 },
  { coords: [950, 650], icon: scarletIcon, tableID: 307 },
  { coords: [950, 750], icon: scarletIcon, tableID: 308 },
  { coords: [950, 850], icon: scarletIcon, tableID: 309 },
  { coords: [150, 750], icon: violetIcon, tableID: 310 },
  { coords: [150, 850], icon: violetIcon, tableID: 311 },
  { coords: [150, 950], icon: violetIcon, tableID: 312 },
  { coords: [250, 550], icon: violetIcon, tableID: 313 },
  { coords: [250, 650], icon: violetIcon, tableID: 314 },
  { coords: [250, 750], icon: violetIcon, tableID: 315 },
  { coords: [250, 850], icon: violetIcon, tableID: 316 },
  { coords: [250, 950], icon: violetIcon, tableID: 317 },
  { coords: [350, 550], icon: violetIcon, tableID: 318 },
  { coords: [350, 650], icon: violetIcon, tableID: 319 },
  { coords: [350, 750], icon: violetIcon, tableID: 320 },
  { coords: [350, 850], icon: violetIcon, tableID: 321 },
  { coords: [350, 950], icon: violetIcon, tableID: 322 },
  { coords: [450, 1050], icon: violetIcon, tableID: 323 },
  { coords: [450, 650], icon: violetIcon, tableID: 324 },
  { coords: [450, 750], icon: violetIcon, tableID: 325 },
  { coords: [450, 850], icon: violetIcon, tableID: 326 },
  { coords: [450, 950], icon: violetIcon, tableID: 327 },
  { coords: [550, 1050], icon: violetIcon, tableID: 328 },
  { coords: [550, 1150], icon: violetIcon, tableID: 329 },
  { coords: [550, 1550], icon: violetIcon, tableID: 330 },
  { coords: [550, 1650], icon: violetIcon, tableID: 331 },
  { coords: [550, 650], icon: violetIcon, tableID: 332 },
  { coords: [550, 750], icon: violetIcon, tableID: 333 },
  { coords: [550, 850], icon: violetIcon, tableID: 334 },
  { coords: [550, 950], icon: violetIcon, tableID: 335 },
  { coords: [650, 1050], icon: violetIcon, tableID: 336 },
  { coords: [650, 1150], icon: violetIcon, tableID: 337 },
  { coords: [650, 1250], icon: violetIcon, tableID: 338 },
  { coords: [650, 1450], icon: violetIcon, tableID: 339 },
  { coords: [650, 1550], icon: violetIcon, tableID: 340 },
  { coords: [650, 1650], icon: violetIcon, tableID: 341 },
  { coords: [650, 750], icon: violetIcon, tableID: 342 },
  { coords: [650, 850], icon: violetIcon, tableID: 343 },
  { coords: [650, 950], icon: violetIcon, tableID: 344 },
  { coords: [750, 1050], icon: violetIcon, tableID: 345 },
  { coords: [750, 1150], icon: violetIcon, tableID: 346 },
  { coords: [750, 1250], icon: violetIcon, tableID: 347 },
  { coords: [750, 1550], icon: violetIcon, tableID: 348 },
  { coords: [750, 1650], icon: violetIcon, tableID: 349 },
  { coords: [750, 750], icon: violetIcon, tableID: 350 },
  { coords: [750, 850], icon: violetIcon, tableID: 351 },
  { coords: [750, 950], icon: violetIcon, tableID: 352 },
  { coords: [850, 650], icon: violetIcon, tableID: 353 },
  { coords: [850, 750], icon: violetIcon, tableID: 354 },
  { coords: [850, 850], icon: violetIcon, tableID: 355 },
  { coords: [950, 550], icon: violetIcon, tableID: 356 },
  { coords: [950, 650], icon: violetIcon, tableID: 357 },
  { coords: [950, 750], icon: violetIcon, tableID: 358 },
  { coords: [950, 850], icon: violetIcon, tableID: 359 },
]
