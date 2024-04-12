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

export const paldeaPokeFilter: PokeFilter = {
  "250": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 7156, 7175,
    ],
    name: "pikachu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
  },
  "260": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25, 828, 6066],
    name: "raichu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png",
  },
  "390": {
    tableIDs: [3, 6, 10, 26, 27, 28, 29, 6042],
    name: "jigglypuff",
    types: [PokemonType.NORMAL, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png",
  },
  "400": {
    tableIDs: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
    name: "wigglytuff",
    types: [PokemonType.NORMAL, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
  },
  "480": {
    tableIDs: [13, 14, 15, 16, 17, 18, 44, 45, 46, 47, 48],
    name: "venonat",
    types: [PokemonType.BUG, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/48.png",
  },
  "490": {
    tableIDs: [32, 35, 39, 40, 43, 44, 45, 49, 50, 828, 7380],
    name: "venomoth",
    types: [PokemonType.BUG, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
  },
  "500": {
    tableIDs: [
      1, 3, 26, 27, 46, 47, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
      64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
      6040, 7210, 7211, 7321,
    ],
    name: "diglett",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/50.png",
  },
  "510": {
    tableIDs: [
      41, 44, 46, 47, 49, 50, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      67, 68, 69, 70, 71, 74, 76, 77, 78, 79, 82, 83, 84, 85, 86, 87, 88, 89,
      90, 91, 92, 93, 94, 828, 7209,
    ],
    name: "dugtrio",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/51.png",
  },
  "520": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 44, 46, 47, 49, 55, 56, 57, 58, 59, 60, 61,
      62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 77, 78, 79, 83, 90, 95, 96, 97,
      98, 99, 100, 101, 102, 103, 104, 105, 106, 6041,
    ],
    name: "meowth",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png",
  },
  "530": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 78, 83, 90, 100, 101, 102, 103, 104, 105, 107,
      108, 7191,
    ],
    name: "persian",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png",
  },
  "540": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 13, 26, 28, 40, 44, 45, 48, 49, 53, 54, 56, 57,
      58, 59, 61, 63, 65, 66, 67, 68, 70, 71, 72, 73, 74, 76, 77, 78, 79, 82,
      91, 96, 98, 100, 101, 103, 104, 105, 107, 108, 109, 110, 111, 112, 113,
      114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
      129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
      144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
      159, 160, 161, 162, 7013,
    ],
    name: "psyduck",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png",
  },
  "550": {
    tableIDs: [
      7, 19, 22, 24, 25, 30, 31, 32, 36, 39, 43, 45, 50, 66, 74, 76, 77, 78, 79,
      82, 91, 93, 94, 96, 98, 100, 101, 103, 105, 107, 108, 129, 152, 153, 154,
      155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 828, 6045,
      7202,
    ],
    name: "golduck",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/55.png",
  },
  "560": {
    tableIDs: [
      8, 9, 11, 18, 27, 51, 54, 74, 75, 76, 80, 81, 104, 111, 113, 117, 118,
      122, 124, 131, 132, 133, 134, 135, 137, 138, 139, 140, 141, 142, 143, 144,
      145, 146, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194,
      195, 7057, 7239, 7247,
    ],
    name: "mankey",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/56.png",
  },
  "570": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 30, 32, 35, 39, 49, 83, 90, 100, 102, 103,
      104, 105, 6025, 7194, 7238,
    ],
    name: "primeape",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/57.png",
  },
  "580": {
    tableIDs: [
      18, 58, 59, 60, 61, 62, 63, 67, 68, 69, 182, 196, 197, 198, 6019, 7053,
      7054, 7223, 7473,
    ],
    name: "growlithe",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/58.png",
  },
  "590": {
    tableIDs: [32, 39, 43, 50, 63, 66, 71, 147, 199, 200, 201, 7190, 7474],
    name: "arcanine",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/59.png",
  },
  "790": {
    tableIDs: [
      7, 8, 13, 19, 22, 24, 25, 48, 56, 67, 68, 70, 77, 78, 79, 93, 96, 97, 98,
      99, 101, 103, 105, 106, 108, 111, 113, 118, 131, 135, 136, 137, 148, 151,
      156, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176,
      177, 178, 202, 203, 204, 205, 7391, 7392,
    ],
    name: "slowpoke",
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/79.png",
  },
  "800": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
      6005, 7390,
    ],
    name: "slowbro",
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/80.png",
  },
  "810": {
    tableIDs: [
      13, 48, 57, 60, 62, 64, 67, 68, 69, 70, 106, 109, 148, 149, 150, 151,
    ],
    name: "magnemite",
    types: [PokemonType.ELECTRIC, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/81.png",
  },
  "820": {
    tableIDs: [
      29, 34, 40, 41, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94,
      100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165,
      180, 181, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
      7442,
    ],
    name: "magneton",
    types: [PokemonType.ELECTRIC, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png",
  },
  "880": {
    tableIDs: [48, 67, 69, 97, 99, 106, 151],
    name: "grimer",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/88.png",
  },
  "900": {
    tableIDs: [
      17, 30, 33, 36, 38, 67, 69, 71, 72, 75, 80, 81, 86, 87, 92, 97, 98, 99,
      106, 111, 115, 126, 127, 130, 131, 136, 137, 151, 189, 193, 195, 202, 203,
      204, 205, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227,
      228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
      243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257,
      258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272,
      273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284,
    ],
    name: "shellder",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/90.png",
  },
  "910": {
    tableIDs: [
      20, 21, 23, 25, 30, 31, 33, 36, 38, 41, 71, 86, 87, 92, 98, 99, 130, 166,
      176, 178, 179, 193, 214, 215, 216, 217, 219, 220, 221, 222, 229, 231, 232,
      237, 242, 245, 261, 263, 264, 265, 267, 269, 274, 275, 276, 277, 278, 279,
      280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294,
      295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
      310,
    ],
    name: "cloyster",
    types: [PokemonType.WATER, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png",
  },
  "920": {
    tableIDs: [
      4, 5, 8, 9, 11, 15, 18, 27, 46, 47, 51, 53, 54, 55, 57, 58, 59, 60, 61,
      62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 80, 81, 104,
      111, 113, 114, 115, 117, 121, 124, 127, 129, 130, 135, 138, 139, 140, 141,
      142, 143, 144, 145, 146, 148, 182, 183, 184, 185, 186, 187, 188, 189, 190,
      191, 192, 193, 194, 195, 210, 218, 224, 311, 312, 313,
    ],
    name: "gastly",
    types: [PokemonType.GHOST, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png",
  },
  "930": {
    tableIDs: [
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 64,
      77, 83, 84, 88, 89, 90, 100, 154, 160, 162, 181, 206, 207, 208, 209, 210,
      211, 7249,
    ],
    name: "haunter",
    types: [PokemonType.GHOST, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/93.png",
  },
  "960": {
    tableIDs: [51, 53, 111, 115, 183],
    name: "drowzee",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/96.png",
  },
  "970": {
    tableIDs: [7, 82, 90, 94, 209, 828],
    name: "hypno",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/97.png",
  },
  "1000": {
    tableIDs: [
      6, 10, 29, 44, 46, 47, 49, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 77, 7248,
    ],
    name: "voltorb",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/100.png",
  },
  "1010": {
    tableIDs: [6, 10, 12, 29],
    name: "electrode",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/101.png",
  },
  "1130": {
    tableIDs: [
      2, 6, 7, 8, 9, 10, 11, 12, 13, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 46, 48, 50, 55, 56, 62, 63, 64, 68, 69, 70, 71, 74,
      76, 77, 78, 79, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
      96, 97, 98, 100, 101, 102, 103, 104, 105, 107, 108, 129, 130, 147, 148,
      152, 165, 179, 180, 186, 193, 199, 209, 210, 214, 217, 219, 221, 230, 231,
      242, 271, 288, 314, 828, 7187,
    ],
    name: "chansey",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/113.png",
  },
  "1230": {
    tableIDs: [
      1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19, 22, 24, 25, 29, 32, 39, 43, 50, 54,
      66, 73, 78, 79, 83, 90, 93, 96, 98, 100, 101, 102, 103, 104, 105, 107,
      108, 120, 123, 126, 127, 128, 130, 156, 163, 164, 165, 166, 167, 168, 169,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 6047,
    ],
    name: "scyther",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/123.png",
  },
  "1281": {
    tableIDs: [
      8, 13, 14, 15, 16, 17, 48, 55, 56, 62, 67, 68, 69, 70, 77, 78, 79, 95, 96,
      97, 98, 109, 148, 149, 150, 151, 202, 204, 205, 210, 233, 312, 6020, 7073,
      7075, 7076, 7077, 7329, 7330,
    ],
    name: "paldean-tauros",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10250.png",
  },
  "1282": {
    tableIDs: [
      315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329,
      330,
    ],
    name: "paldean-tauros-fire",
    types: [PokemonType.FIGHTING, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10251.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "1283": {
    tableIDs: [
      331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345,
      346,
    ],
    name: "paldean-tauros-water",
    types: [PokemonType.FIGHTING, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10252.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "1290": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 13, 17, 26, 28, 30, 40, 44, 45, 48, 49, 53, 54,
      56, 57, 58, 59, 61, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77,
      78, 79, 80, 81, 82, 87, 91, 92, 96, 97, 98, 99, 100, 101, 103, 104, 105,
      106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
      121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
      136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
      151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 189, 193, 195,
      202, 203, 204, 205, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225,
      226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
      241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255,
      256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270,
      271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 283, 347, 348, 349, 350,
    ],
    name: "magikarp",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/129.png",
  },
  "1300": {
    tableIDs: [
      17, 20, 21, 23, 25, 30, 31, 33, 36, 38, 41, 69, 71, 80, 81, 86, 87, 92,
      97, 98, 99, 106, 111, 126, 130, 131, 136, 137, 151, 164, 166, 167, 169,
      170, 171, 172, 173, 174, 175, 176, 178, 179, 189, 193, 195, 202, 203, 204,
      205, 214, 215, 216, 217, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
      229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 242, 243, 245,
      247, 250, 252, 253, 254, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265,
      266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280,
      281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295,
      296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
      6004, 7385, 7386, 7398, 7399,
    ],
    name: "gyarados",
    types: [PokemonType.WATER, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
  },
  "1320": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 55, 56, 78, 79, 83, 90, 95, 96, 97, 98, 99,
      100, 101, 102, 103, 104, 105, 107, 108,
    ],
    name: "ditto",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
  },
  "1330": {
    tableIDs: [6, 10, 12, 26, 27, 28, 29, 54, 7216],
    name: "eevee",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png",
  },
  "1340": {
    tableIDs: [
      7, 19, 22, 24, 25, 30, 31, 32, 36, 39, 43, 45, 50, 66, 74, 76, 77, 78, 79,
      82, 91, 93, 94, 96, 98, 100, 101, 103, 105, 107, 108, 129, 152, 153, 154,
      155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 6006,
    ],
    name: "vaporeon",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/134.png",
  },
  "1350": {
    tableIDs: [7, 10, 12, 19, 20, 21, 22, 23, 24, 25, 103, 105, 6061],
    name: "jolteon",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/135.png",
  },
  "1360": {
    tableIDs: [
      2, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130,
      152, 165, 209, 210, 214, 217, 219, 221, 242, 6049,
    ],
    name: "flareon",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/136.png",
  },
  // "1440": {
  //   tableIDs: [8201],
  //   name: "articuno",
  //   types: [PokemonType.ICE, PokemonType.FLYING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png",
  // },
  // "1450": {
  //   tableIDs: [8202],
  //   name: "zapdos",
  //   types: [PokemonType.ELECTRIC, PokemonType.FLYING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
  // },
  // "1460": {
  //   tableIDs: [8203],
  //   name: "moltres",
  //   types: [PokemonType.FIRE, PokemonType.FLYING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png",
  // },
  "1470": {
    tableIDs: [
      7, 19, 22, 24, 25, 30, 32, 36, 39, 43, 50, 66, 74, 78, 79, 82, 93, 96, 98,
      101, 103, 105, 108, 129, 156, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 174, 175, 176, 177, 178,
    ],
    name: "dratini",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png",
  },
  "1480": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
      6054, 7378,
    ],
    name: "dragonair",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/148.png",
  },
  "1490": {
    tableIDs: [6035, 7095, 7371, 7479, 7480, 7481],
    name: "dragonite",
    types: [PokemonType.DRAGON, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png",
  },
  "1720": {
    tableIDs: [1, 2, 3, 110, 117, 120, 121],
    name: "pichu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/172.png",
  },
  "1740": {
    tableIDs: [3, 26, 27, 28, 53, 118, 120, 125, 351, 7029, 7030],
    name: "igglybuff",
    types: [PokemonType.NORMAL, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/174.png",
  },
  "1790": {
    tableIDs: [
      1, 2, 3, 5, 26, 27, 28, 51, 52, 53, 54, 114, 123, 124, 125, 140, 191, 352,
    ],
    name: "mareep",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/179.png",
  },
  "1800": {
    tableIDs: [
      2, 8, 55, 56, 74, 76, 78, 79, 82, 85, 86, 87, 95, 96, 97, 98, 129, 130,
      219, 221, 7184, 7185,
    ],
    name: "flaaffy",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/180.png",
  },
  "1810": {
    tableIDs: [
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 76, 82, 85, 86,
      87, 219, 221, 242,
    ],
    name: "ampharos",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/181.png",
  },
  "1830": {
    tableIDs: [
      1, 2, 4, 5, 8, 13, 26, 48, 54, 62, 67, 68, 69, 70, 73, 77, 104, 106, 109,
      111, 113, 118, 120, 122, 123, 126, 127, 128, 129, 130, 131, 132, 134, 135,
      136, 137, 144, 146, 148, 149, 150, 151, 205,
    ],
    name: "marill",
    types: [PokemonType.WATER, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/183.png",
  },
  "1840": {
    tableIDs: [
      6, 7, 9, 78, 79, 96, 98, 100, 101, 103, 105, 107, 108, 156, 163, 164, 166,
      167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 6008,
    ],
    name: "azumarill",
    types: [PokemonType.WATER, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/184.png",
  },
  "1850": {
    tableIDs: [6, 7, 8, 9, 10, 11, 12, 19, 20, 21, 22, 23, 24, 25, 103, 105],
    name: "sudowoodo",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/185.png",
  },
  "1870": {
    tableIDs: [
      1, 2, 3, 5, 26, 27, 28, 51, 52, 53, 54, 72, 73, 110, 111, 113, 114, 115,
      116, 117, 118, 120, 121, 122, 123, 124, 125, 133, 7003, 7005, 7015, 7016,
      7017,
    ],
    name: "hoppip",
    types: [PokemonType.GRASS, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/187.png",
  },
  "1880": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 48, 62, 67, 68, 69, 70, 77, 109, 111, 113, 117,
      118, 122, 131, 132, 133, 134, 135, 136, 137, 138, 148, 149, 150, 151, 182,
      183, 197, 198, 202, 204, 205, 210, 233, 311, 312, 7290,
    ],
    name: "skiploom",
    types: [PokemonType.GRASS, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/188.png",
  },
  "1890": {
    tableIDs: [
      7, 8, 10, 12, 29, 32, 33, 35, 36, 37, 50, 63, 71, 78, 82, 83, 85, 86, 90,
      92, 94, 100, 101, 103, 105, 107, 108, 147, 179, 180, 199, 214, 217, 288,
      828,
    ],
    name: "jumpluff",
    types: [PokemonType.GRASS, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/189.png",
  },
  "1910": {
    tableIDs: [
      1, 72, 110, 113, 114, 117, 118, 120, 123, 125, 7006, 7173, 7174, 7183,
    ],
    name: "sunkern",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/191.png",
  },
  "1920": {
    tableIDs: [35, 40, 44, 82, 85, 86, 94, 179, 180, 214, 217, 271, 288, 7469],
    name: "sunflora",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/192.png",
  },
  "1960": {
    tableIDs: [
      7, 10, 12, 29, 78, 83, 90, 92, 94, 100, 101, 103, 105, 107, 108, 179, 180,
      214, 288, 828, 6024,
    ],
    name: "espeon",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/196.png",
  },
  "1941": {
    tableIDs: [
      1, 4, 5, 54, 73, 110, 111, 113, 115, 118, 120, 121, 122, 123, 126, 127,
      128, 130, 131, 132, 137, 7125,
    ],
    name: "paldean-wooper",
    types: [PokemonType.GROUND, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10253.png",
  },
  "1970": {
    tableIDs: [
      41, 50, 74, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
      828, 6053,
    ],
    name: "umbreon",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/197.png",
  },
  "1980": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 26, 29, 35,
      40, 44, 45, 46, 47, 48, 49, 54, 55, 56, 57, 60, 62, 64, 67, 68, 69, 70,
      73, 74, 77, 78, 79, 83, 85, 86, 90, 95, 96, 97, 98, 99, 100, 101, 102,
      103, 104, 105, 106, 107, 108, 109, 111, 113, 117, 118, 120, 121, 122, 123,
      126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 148, 149,
      150, 151, 155, 158, 182, 183, 186, 193, 196, 197, 198, 202, 204, 205, 210,
      218, 221, 230, 231, 233, 311, 312, 314, 828,
    ],
    name: "murkrow",
    types: [PokemonType.DARK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/198.png",
  },
  "2000": {
    tableIDs: [
      335, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366,
      367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381,
      382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396,
      397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
      412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426,
      427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441,
      442, 443, 444, 445, 446, 447, 448, 449, 450,
    ],
    name: "misdreavus",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/200.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "2030": {
    tableIDs: [8, 55, 56, 78, 79, 95, 96, 97, 98, 828, 7289],
    name: "girafarig",
    types: [PokemonType.NORMAL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/203.png",
  },
  "2040": {
    tableIDs: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 35, 40, 44, 45, 46,
      47, 48, 49, 103, 105,
    ],
    name: "pineco",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/204.png",
  },
  "2050": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25, 7374],
    name: "forretress",
    types: [PokemonType.BUG, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/205.png",
  },
  "2060": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 26, 29, 35,
      40, 44, 45, 46, 47, 48, 49, 54, 55, 56, 57, 58, 59, 60, 61, 62, 65, 66,
      67, 68, 69, 70, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
      87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 104,
      105, 106, 107, 108, 109, 111, 113, 117, 118, 120, 121, 122, 123, 126, 127,
      128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 148, 149, 150, 151,
      152, 153, 161, 182, 183, 186, 193, 196, 197, 198, 202, 204, 205, 210, 218,
      230, 231, 233, 311, 312, 314, 828, 6043, 7212, 7220, 7293,
    ],
    name: "dunsparce",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/206.png",
  },
  "2110": {
    tableIDs: [
      17, 30, 33, 36, 38, 69, 71, 72, 80, 81, 86, 87, 92, 97, 98, 99, 106, 111,
      115, 126, 127, 130, 131, 136, 137, 151, 189, 193, 195, 202, 203, 204, 205,
      215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229,
      230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244,
      245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259,
      260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274,
      275, 276, 277, 278, 279, 280, 281, 282, 283, 284,
    ],
    name: "qwilfish",
    types: [PokemonType.WATER, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/211.png",
  },
  "2140": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25, 32, 39, 43, 50, 7466],
    name: "heracross",
    types: [PokemonType.BUG, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/214.png",
  },
  "2150": {
    tableIDs: [
      29, 34, 40, 41, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94,
      100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165,
      180, 181, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 828,
      6014, 7427,
    ],
    name: "sneasel",
    types: [PokemonType.DARK, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/215.png",
  },
  "2160": {
    tableIDs: [13, 14, 15, 16, 17, 18],
    name: "teddiursa",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/216.png",
  },
  "2170": {
    tableIDs: [
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 50, 64,
      77, 83, 84, 88, 89, 90, 100, 209, 210, 6010, 7303,
    ],
    name: "ursaring",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/217.png",
  },
  "2250": {
    tableIDs: [
      34, 40, 41, 42, 45, 83, 88, 91, 92, 93, 94, 100, 107, 108, 152, 153, 154,
      155, 156, 157, 158, 159, 160, 161, 162, 165, 180, 181, 206, 207, 208, 209,
      211, 212, 213, 214, 215, 216, 7445,
    ],
    name: "delibird",
    types: [PokemonType.ICE, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/225.png",
  },
  "2280": {
    tableIDs: [1, 2, 4, 72, 73, 74, 126, 127, 128, 129, 130],
    name: "houndour",
    types: [PokemonType.DARK, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/228.png",
  },
  "2290": {
    tableIDs: [39, 43, 50, 63, 66, 71, 147, 199, 200, 201, 6052, 7192],
    name: "houndoom",
    types: [PokemonType.DARK, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/229.png",
  },
  "2310": {
    tableIDs: [
      1, 4, 5, 8, 9, 11, 27, 51, 54, 55, 56, 73, 74, 75, 76, 80, 81, 95, 104,
      114, 120, 121, 123, 124, 126, 127, 128, 129, 130, 139, 140, 141, 142, 143,
      144, 145, 146, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
      218, 314, 451, 828, 7034, 7262, 7354, 7355,
    ],
    name: "phanpy",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/231.png",
  },
  "2320": {
    tableIDs: [
      2, 8, 55, 56, 74, 76, 78, 79, 82, 85, 86, 87, 95, 96, 97, 98, 129, 130,
      186, 187, 193, 194, 219, 221, 230, 231, 242, 314, 451, 828, 7035, 7273,
      7276, 7277, 7286, 7287, 7288, 7353,
    ],
    name: "donphan",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/232.png",
  },
  "2340": {
    tableIDs: [
      18, 111, 113, 117, 118, 122, 131, 132, 133, 134, 135, 136, 137, 138, 182,
      183, 196, 7045, 7046,
    ],
    name: "stantler",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/234.png",
  },
  "2420": {
    tableIDs: [
      32, 33, 35, 36, 37, 50, 63, 71, 94, 147, 179, 180, 199, 214, 288,
    ],
    name: "blissey",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/242.png",
  },
  // "2430": {
  //   tableIDs: [8204],
  //   name: "raikou",
  //   types: [PokemonType.ELECTRIC],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/243.png",
  // },
  // "2440": {
  //   tableIDs: [8205],
  //   name: "entei",
  //   types: [PokemonType.FIRE],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/244.png",
  // },
  // "2450": {
  //   tableIDs: [8206],
  //   name: "suicune",
  //   types: [PokemonType.WATER],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/245.png",
  // },
  "2460": {
    tableIDs: [
      315, 321, 322, 323, 325, 326, 327, 329, 452, 453, 454, 455, 456, 457, 458,
      459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473,
      474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488,
      489,
    ],
    name: "larvitar",
    types: [PokemonType.ROCK, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/246.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "2470": {
    tableIDs: [473, 474, 490, 491, 7482, 7483],
    name: "pupitar",
    types: [PokemonType.ROCK, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/247.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  // "2490": {
  //   tableIDs: [8207],
  //   name: "lugia",
  //   types: [PokemonType.PSYCHIC, PokemonType.FLYING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/249.png",
  // },
  // "2500": {
  //   tableIDs: [8208],
  //   name: "ho-oh",
  //   types: [PokemonType.FIRE, PokemonType.FLYING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/250.png",
  // },
  "2780": {
    tableIDs: [
      72, 73, 75, 80, 81, 87, 97, 98, 99, 111, 115, 126, 127, 130, 136, 137,
      189, 193, 195, 218, 219, 220, 221, 222, 223, 225, 226, 227, 228, 229, 230,
      231, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251,
      252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 266, 347, 348, 349,
      350, 7001, 7019, 7094,
    ],
    name: "wingull",
    types: [PokemonType.WATER, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/278.png",
  },
  "2790": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 36, 38, 99, 179, 193, 215, 216, 217, 229, 231,
      237, 261, 263, 264, 265, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285,
      286, 287, 288, 289, 290, 291, 293, 294, 295, 296, 297, 298, 299, 300, 301,
      302, 303, 304, 305, 306, 307, 308, 309, 310,
    ],
    name: "pelipper",
    types: [PokemonType.WATER, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/279.png",
  },
  "2800": {
    tableIDs: [118, 120, 7123],
    name: "ralts",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/280.png",
  },
  "2810": {
    tableIDs: [48, 67, 69, 97, 99, 106, 151, 155, 158, 6021],
    name: "kirlia",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/281.png",
  },
  "2820": {
    tableIDs: [
      34, 41, 91, 92, 93, 94, 100, 107, 108, 152, 153, 154, 155, 156, 157, 158,
      159, 160, 161, 162, 165, 180, 181, 208, 211, 212, 213, 214, 215, 216,
      7441,
    ],
    name: "gardevoir",
    types: [PokemonType.PSYCHIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/282.png",
  },
  "2830": {
    tableIDs: [
      1, 2, 5, 26, 28, 53, 54, 110, 111, 112, 113, 114, 116, 117, 118, 121, 122,
      123, 124, 125, 131, 132, 133, 134, 135, 136, 137, 138,
    ],
    name: "surskit",
    types: [PokemonType.BUG, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/283.png",
  },
  "2840": {
    tableIDs: [5, 111, 113, 118, 120, 131, 135, 136, 137, 828],
    name: "masquerain",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/284.png",
  },
  "2850": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 18, 29, 102, 104, 111, 113, 117, 118, 122, 131, 132,
      133, 134, 135, 136, 137, 138, 182, 183,
    ],
    name: "shroomish",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/285.png",
  },
  "2860": {
    tableIDs: [6, 7, 8, 10, 12, 103, 105, 6067],
    name: "breloom",
    types: [PokemonType.GRASS, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/286.png",
  },
  "2870": {
    tableIDs: [
      18, 111, 113, 116, 117, 118, 119, 122, 131, 132, 133, 134, 135, 136, 137,
      138, 182, 183, 196, 197, 311, 492,
    ],
    name: "slakoth",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/287.png",
  },
  "2880": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 18, 29, 34, 40, 42, 46, 64, 77, 78, 83, 84, 88,
      89, 90, 100, 101, 102, 103, 104, 105, 107, 108, 111, 113, 117, 118, 122,
      131, 135, 136, 137, 182, 209, 210, 224,
    ],
    name: "vigoroth",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/288.png",
  },
  "2890": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25, 6033],
    name: "slaking",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/289.png",
  },
  "2960": {
    tableIDs: [
      1, 2, 4, 8, 13, 14, 15, 16, 17, 18, 27, 28, 44, 46, 47, 48, 49, 51, 54,
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73,
      74, 75, 76, 77, 78, 79, 80, 81, 95, 97, 109, 113, 116, 117, 118, 119, 122,
      123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 138,
      139, 140, 141, 142, 143, 144, 145, 146, 149, 150, 151, 182, 183, 184, 185,
      186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 202, 204,
      205, 210, 230, 231, 233, 311, 312, 314, 492, 7066,
    ],
    name: "makuhita",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/296.png",
  },
  "2970": {
    tableIDs: [
      2, 7, 8, 9, 29, 33, 34, 40, 42, 44, 45, 46, 47, 49, 55, 56, 57, 58, 59,
      60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 76, 77, 78, 79, 82, 83,
      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 102, 103,
      104, 105, 107, 108, 129, 152, 153, 159, 165, 180, 181, 207, 209, 210, 211,
      213, 214, 215, 216, 217, 219, 221, 7065, 7205, 7206, 7213, 7221, 7296,
      7297, 7298, 7319,
    ],
    name: "hariyama",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/297.png",
  },
  "2980": {
    tableIDs: [
      1, 2, 5, 26, 28, 53, 54, 72, 73, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119, 120, 121, 122, 123, 125, 7126,
    ],
    name: "azurill",
    types: [PokemonType.NORMAL, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/298.png",
  },
  "3020": {
    tableIDs: [
      41, 49, 50, 54, 55, 56, 58, 60, 61, 62, 65, 66, 74, 75, 76, 77, 78, 79,
      80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 828, 7058,
      7201,
    ],
    name: "sableye",
    types: [PokemonType.DARK, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/302.png",
  },
  "3070": {
    tableIDs: [
      2, 4, 5, 55, 56, 73, 74, 76, 78, 79, 82, 85, 86, 87, 114, 121, 129, 130,
      218, 219, 221, 828, 7203, 7204,
    ],
    name: "meditite",
    types: [PokemonType.FIGHTING, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/307.png",
  },
  "3080": {
    tableIDs: [
      74, 76, 82, 85, 86, 87, 129, 130, 219, 221, 242, 828, 7200, 7363,
    ],
    name: "medicham",
    types: [PokemonType.FIGHTING, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/308.png",
  },
  "3160": {
    tableIDs: [344, 379, 382, 386, 424, 426, 493, 494, 495, 496, 497, 498, 499],
    name: "gulpin",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/316.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "3170": {
    tableIDs: [
      333, 336, 337, 338, 445, 447, 448, 500, 501, 502, 503, 504, 505, 506, 507,
      508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522,
      523,
    ],
    name: "swalot",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/317.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "3220": {
    tableIDs: [
      8, 9, 11, 80, 104, 140, 142, 144, 145, 146, 184, 186, 187, 188, 190, 191,
      192, 193, 194, 828,
    ],
    name: "numel",
    types: [PokemonType.FIRE, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/322.png",
  },
  "3230": {
    tableIDs: [39, 43, 50, 63, 66, 71, 147, 199, 200, 201, 828],
    name: "camerupt",
    types: [PokemonType.FIRE, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/323.png",
  },
  "3240": {
    tableIDs: [
      44, 46, 47, 49, 57, 58, 59, 63, 64, 65, 66, 68, 70, 71, 77, 6057, 7365,
    ],
    name: "torkoal",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/324.png",
  },
  "3250": {
    tableIDs: [18, 116, 119, 132, 133, 182, 183, 196, 197, 198, 311, 492],
    name: "spoink",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/325.png",
  },
  "3260": {
    tableIDs: [
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 49,
      50, 63, 64, 66, 71, 77, 83, 84, 88, 89, 90, 100, 147, 181, 199, 200, 201,
      207, 209, 210, 211, 237, 290, 7188,
    ],
    name: "grumpig",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/326.png",
  },
  "3310": {
    tableIDs: [55, 56, 146, 451],
    name: "cacnea",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/331.png",
  },
  "3320": {
    tableIDs: [7264, 7272, 7285],
    name: "cacturne",
    types: [PokemonType.GRASS, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/332.png",
  },
  "3330": {
    tableIDs: [
      4, 5, 8, 9, 11, 15, 18, 73, 77, 80, 104, 113, 114, 117, 121, 127, 129,
      130, 135, 138, 140, 142, 144, 145, 146, 182, 184, 186, 187, 188, 190, 191,
      192, 193, 194, 210, 218, 224, 311, 312, 313, 828, 7255, 7258, 7387,
    ],
    name: "swablu",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/333.png",
  },
  "3340": {
    tableIDs: [
      7, 19, 22, 24, 25, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
      43, 50, 66, 74, 76, 78, 79, 82, 83, 85, 86, 87, 90, 91, 93, 96, 98, 100,
      101, 103, 105, 108, 129, 130, 152, 153, 156, 161, 163, 164, 165, 166, 167,
      168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 214, 217, 219, 221,
      242, 828, 6058, 7199, 7373, 7388, 7389,
    ],
    name: "altaria",
    types: [PokemonType.DRAGON, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/334.png",
  },
  "3350": {
    tableIDs: [
      18, 111, 113, 117, 118, 122, 131, 132, 134, 135, 136, 137, 138, 182, 183,
    ],
    name: "zangoose",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/335.png",
  },
  "3360": {
    tableIDs: [
      18, 111, 113, 117, 118, 122, 131, 132, 134, 135, 136, 137, 138, 182, 183,
    ],
    name: "seviper",
    types: [PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/336.png",
  },
  "3390": {
    tableIDs: [
      1, 4, 5, 6, 9, 40, 44, 54, 57, 59, 73, 111, 113, 118, 120, 122, 123, 126,
      127, 128, 130, 131, 132, 137,
    ],
    name: "barboach",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/339.png",
  },
  "3400": {
    tableIDs: [6, 9, 30, 39, 40, 44, 74, 76, 152, 153, 161],
    name: "whiscash",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/340.png",
  },
  "3530": {
    tableIDs: [16, 17, 18, 48, 57, 64, 67, 69, 106, 151, 197],
    name: "shuppet",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/353.png",
  },
  "3540": {
    tableIDs: [85, 86, 155, 158, 221, 242],
    name: "banette",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/354.png",
  },
  "3570": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 78, 79, 83, 90, 96, 98, 100, 101, 102, 103,
      104, 105, 107, 108, 156, 163, 164, 166, 167, 168, 169, 170, 171, 172, 173,
      174, 175, 176, 177, 178, 7292, 7372, 7422, 7423, 7424, 7425, 7426,
    ],
    name: "tropius",
    types: [PokemonType.GRASS, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/357.png",
  },
  "3610": {
    tableIDs: [
      29, 34, 40, 41, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94,
      100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165,
      180, 181, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
    ],
    name: "snorunt",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/361.png",
  },
  "3620": {
    tableIDs: [
      21, 31, 34, 38, 40, 41, 42, 154, 159, 160, 161, 165, 180, 181, 207, 208,
      216,
    ],
    name: "glalie",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/362.png",
  },
  "3700": {
    tableIDs: [
      17, 69, 71, 72, 80, 81, 87, 106, 111, 115, 126, 127, 130, 131, 136, 137,
      151, 189, 193, 195, 202, 203, 204, 205, 218, 219, 220, 221, 222, 223, 224,
      225, 226, 227, 228, 230, 231, 232, 233, 234, 235, 236, 238, 239, 240, 241,
      242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
      257, 258, 259, 260, 261, 262, 266, 267, 268, 269, 270, 271, 272, 273, 274,
    ],
    name: "luvdisc",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/370.png",
  },
  "3710": {
    tableIDs: [
      331, 337, 338, 339, 341, 342, 343, 345, 368, 369, 371, 376, 377, 378, 380,
      382, 385, 386, 389, 391, 392, 409, 420, 422, 423, 425, 430, 431, 432, 434,
      435, 436, 438, 445, 450, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533,
      534,
    ],
    name: "bagon",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/371.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "3720": {
    tableIDs: [368, 369, 370, 374, 7470, 7472],
    name: "shelgon",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/372.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  // "3800": {
  //   tableIDs: [8209],
  //   name: "latias",
  //   types: [PokemonType.DRAGON, PokemonType.PSYCHIC],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/380.png",
  // },
  // "3810": {
  //   tableIDs: [8210],
  //   name: "latios",
  //   types: [PokemonType.DRAGON, PokemonType.PSYCHIC],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/381.png",
  // },
  // "3820": {
  //   tableIDs: [8211],
  //   name: "kyogre",
  //   types: [PokemonType.WATER],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/382.png",
  // },
  // "3830": {
  //   tableIDs: [8212],
  //   name: "groudon",
  //   types: [PokemonType.GROUND],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/383.png",
  // },
  // "3840": {
  //   tableIDs: [8213],
  //   name: "rayquaza",
  //   types: [PokemonType.DRAGON, PokemonType.FLYING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/384.png",
  // },
  "3960": {
    tableIDs: [
      1, 2, 3, 4, 5, 26, 27, 28, 51, 52, 53, 54, 73, 74, 114, 120, 123, 124,
      125, 126, 127, 128, 129, 130, 140, 191, 218, 352, 7161, 7162, 7170,
    ],
    name: "starly",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/396.png",
  },
  "3970": {
    tableIDs: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 29, 55, 56, 73, 78, 79, 83, 90, 95, 96, 97,
      98, 100, 101, 102, 103, 104, 105, 107, 108, 120, 121, 123, 7157, 7307,
    ],
    name: "staravia",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/397.png",
  },
  "3980": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
      7222, 7379, 7381,
    ],
    name: "staraptor",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/398.png",
  },
  "4010": {
    tableIDs: [1, 3, 26, 27, 51, 52, 53, 54],
    name: "kricketot",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/401.png",
  },
  "4020": {
    tableIDs: [32, 39, 43, 50],
    name: "kricketune",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/402.png",
  },
  "4030": {
    tableIDs: [116, 119, 132, 133, 182, 183, 196, 198, 311, 492, 6048, 7050],
    name: "shinx",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/403.png",
  },
  "4040": {
    tableIDs: [
      18, 111, 113, 117, 118, 122, 131, 132, 134, 135, 136, 137, 138, 182, 183,
      7049, 7217,
    ],
    name: "luxio",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/404.png",
  },
  "4050": {
    tableIDs: [32, 39, 43, 50, 63, 66, 71, 147, 199, 200, 201, 7219],
    name: "luxray",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/405.png",
  },
  "4150": {
    tableIDs: [
      1, 2, 3, 26, 27, 51, 52, 53, 54, 72, 80, 81, 110, 113, 114, 117, 118, 120,
      123, 125, 126, 127, 128, 129, 130, 138, 186, 271, 7062, 7176, 7177, 7178,
      7179, 7243, 7246,
    ],
    name: "combee",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/415.png",
  },
  "4160": {
    tableIDs: [
      32, 33, 35, 36, 37, 40, 44, 50, 63, 71, 82, 85, 86, 94, 147, 179, 180,
      199, 214, 217, 271, 288, 7158, 7172, 7237,
    ],
    name: "vespiquen",
    types: [PokemonType.BUG, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/416.png",
  },
  "4170": {
    tableIDs: [
      1, 2, 4, 5, 6, 8, 9, 11, 18, 26, 29, 54, 73, 74, 102, 104, 111, 113, 117,
      118, 120, 121, 122, 123, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
      136, 137, 138, 182, 183, 218, 7014, 7038, 7039, 7047, 7346,
    ],
    name: "pachirisu",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/417.png",
  },
  "4180": {
    tableIDs: [
      1, 2, 5, 7, 8, 13, 17, 26, 28, 44, 45, 48, 49, 53, 54, 56, 58, 61, 63, 65,
      66, 67, 68, 69, 70, 71, 72, 73, 75, 77, 78, 79, 80, 81, 87, 96, 97, 98,
      99, 104, 106, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 120, 122,
      123, 124, 125, 126, 127, 128, 129, 130, 131, 133, 134, 135, 136, 137, 138,
      139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 189, 193,
      195, 202, 203, 204, 205, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227,
      228, 229, 230, 231, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243,
      244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
      259, 260, 261, 262, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 347,
      348, 349, 350, 828, 6060, 7244, 7245,
    ],
    name: "buizel",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/418.png",
  },
  "4190": {
    tableIDs: [
      7, 20, 21, 23, 25, 30, 31, 33, 36, 38, 41, 44, 45, 49, 58, 63, 65, 66, 69,
      71, 74, 77, 78, 79, 80, 81, 82, 86, 87, 91, 92, 94, 96, 97, 98, 99, 100,
      101, 103, 105, 107, 108, 129, 130, 152, 154, 155, 156, 157, 158, 159, 160,
      162, 166, 168, 176, 178, 179, 180, 181, 193, 203, 205, 214, 215, 216, 217,
      219, 220, 221, 222, 226, 227, 228, 229, 230, 231, 232, 235, 236, 237, 242,
      245, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
      274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288,
      289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303,
      304, 305, 306, 307, 308, 309, 310, 828,
    ],
    name: "floatzel",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/419.png",
  },
  "4220": {
    tableIDs: [97, 98, 99],
    name: "shellos-west",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/422.png",
  },
  "4221": {
    tableIDs: [131, 136, 137, 202, 203, 204],
    name: "shellos-east",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/422-east.png",
  },
  "4230": {
    tableIDs: [98, 178],
    name: "gastrodon-west",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/423.png",
  },
  "4231": {
    tableIDs: [30, 7451],
    name: "gastrodon-east",
    types: [PokemonType.WATER, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/423-east.png",
  },
  "4250": {
    tableIDs: [
      318, 319, 327, 330, 453, 456, 464, 466, 469, 472, 473, 475, 476, 483, 484,
      485, 486, 487, 488, 489, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544,
      545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559,
      560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574,
      575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586,
    ],
    name: "drifloon",
    types: [PokemonType.GHOST, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/425.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "4260": {
    tableIDs: [
      318, 453, 454, 455, 456, 464, 469, 470, 471, 473, 474, 477, 478, 479, 480,
      482, 490, 491, 539, 541, 573, 574, 575, 576, 577, 584, 587, 588, 589, 590,
      591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605,
      606, 607,
    ],
    name: "drifblim",
    types: [PokemonType.GHOST, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/426.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "4290": {
    tableIDs: [
      333, 336, 337, 338, 368, 376, 442, 443, 445, 446, 447, 448, 500, 501, 502,
      503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517,
      518, 519, 520, 521, 522, 523, 531, 608, 609, 610, 611, 612, 613,
    ],
    name: "mismagius",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/429.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "4300": {
    tableIDs: [
      2, 7, 10, 12, 19, 20, 21, 22, 23, 24, 25, 29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 45, 46, 49, 50, 63, 64, 66, 71, 74, 76, 77,
      82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 98, 100, 101, 103,
      105, 107, 108, 129, 130, 147, 152, 153, 156, 159, 163, 165, 166, 167, 168,
      172, 176, 178, 179, 180, 181, 199, 200, 201, 207, 209, 210, 211, 213, 214,
      215, 216, 217, 219, 221, 237, 242, 289, 290, 828, 7475,
    ],
    name: "honchkrow",
    types: [PokemonType.DARK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/430.png",
  },
  "4340": {
    tableIDs: [
      315, 316, 317, 318, 319, 320, 321, 322, 323, 484, 485, 486, 487, 488, 489,
      614, 615, 616, 617, 618, 619, 620, 621, 622,
    ],
    name: "stunky",
    types: [PokemonType.POISON, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/434.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "4350": {
    tableIDs: [
      317, 320, 321, 322, 482, 598, 599, 623, 624, 625, 626, 627, 628, 629, 630,
      631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645,
      646, 647, 648, 649,
    ],
    name: "skuntank",
    types: [PokemonType.POISON, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/435.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "4360": {
    tableIDs: [51, 53, 55, 121, 135, 148, 183, 187, 188, 190, 224],
    name: "bronzor",
    types: [PokemonType.STEEL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/436.png",
  },
  "4370": {
    tableIDs: [
      7, 21, 25, 31, 32, 34, 38, 40, 41, 42, 45, 82, 83, 88, 90, 91, 92, 93, 94,
      100, 101, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162,
      165, 180, 181, 199, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216,
      7198,
    ],
    name: "bronzong",
    types: [PokemonType.STEEL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/437.png",
  },
  "4380": {
    tableIDs: [1, 2, 3, 110, 117, 120, 121],
    name: "bonsly",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/438.png",
  },
  "4400": {
    tableIDs: [
      1, 2, 3, 5, 26, 27, 28, 51, 52, 53, 54, 72, 73, 80, 81, 110, 111, 113,
      114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 132, 133, 140,
      182, 183, 191, 196, 197, 311, 351, 352, 492, 7117,
    ],
    name: "happiny",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/440.png",
  },
  "4420": {
    tableIDs: [7366, 7421, 7448],
    name: "spiritomb",
    types: [PokemonType.GHOST, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/442.png",
  },
  "4430": {
    tableIDs: [54, 55, 56, 74, 75, 76, 78, 79, 80, 81, 828],
    name: "gible",
    types: [PokemonType.DRAGON, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/443.png",
  },
  "4440": {
    tableIDs: [
      41, 50, 74, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
      828, 7207, 7208, 7294, 7295,
    ],
    name: "gabite",
    types: [PokemonType.DRAGON, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/444.png",
  },
  "4450": {
    tableIDs: [
      828, 6064, 7096, 7097, 7098, 7099, 7100, 7101, 7102, 7103, 7104, 7105,
    ],
    name: "garchomp",
    types: [PokemonType.DRAGON, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/445.png",
  },
  "4470": {
    tableIDs: [
      1, 2, 4, 5, 26, 54, 73, 74, 114, 120, 121, 123, 126, 127, 128, 129, 130,
      218, 7189, 7452,
    ],
    name: "riolu",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/447.png",
  },
  "4480": {
    tableIDs: [
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 49, 50, 63, 66,
      71, 147, 181, 199, 200, 201, 237, 290, 6015,
    ],
    name: "lucario",
    types: [PokemonType.FIGHTING, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png",
  },
  "4490": {
    tableIDs: [186, 194, 230, 314, 7265, 7266, 7281, 7282],
    name: "hippopotas",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/449.png",
  },
  "4500": {
    tableIDs: [7261, 7280],
    name: "hippowdon",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/450.png",
  },
  "4530": {
    tableIDs: [
      8, 56, 78, 79, 96, 98, 111, 113, 118, 122, 131, 132, 133, 134, 135, 136,
      137, 138,
    ],
    name: "croagunk",
    types: [PokemonType.POISON, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/453.png",
  },
  "4540": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
    ],
    name: "toxicroak",
    types: [PokemonType.POISON, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/454.png",
  },
  "4560": {
    tableIDs: [
      80, 81, 87, 99, 189, 193, 195, 220, 226, 227, 228, 229, 231, 257, 260,
      261, 262, 263, 264, 265, 266,
    ],
    name: "finneon",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/456.png",
  },
  "4570": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 36, 38, 99, 179, 193, 215, 216, 217, 229, 231,
      237, 261, 263, 264, 265, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285,
      286, 287, 288, 289, 290, 291, 293, 294, 295, 296, 297, 298, 299, 300, 301,
      302, 303, 304, 305, 306, 307, 308, 309, 310,
    ],
    name: "lumineon",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/457.png",
  },
  "4590": {
    tableIDs: [
      34, 41, 91, 92, 93, 94, 100, 107, 108, 152, 153, 154, 155, 156, 157, 158,
      159, 160, 161, 162, 165, 180, 181, 208, 211, 212, 213, 214, 215, 216,
      7083,
    ],
    name: "snover",
    types: [PokemonType.GRASS, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/459.png",
  },
  "4600": {
    tableIDs: [
      91, 92, 93, 94, 152, 153, 154, 155, 156, 159, 161, 165, 180, 181, 212,
      213, 214, 215, 216, 7082,
    ],
    name: "abomasnow",
    types: [PokemonType.GRASS, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/460.png",
  },
  "4610": {
    tableIDs: [31, 34, 38, 41, 154, 181, 828, 7359, 7429],
    name: "weavile",
    types: [PokemonType.DARK, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/461.png",
  },
  "4620": {
    tableIDs: [828, 7106, 7107, 7108, 7109, 7110, 7111, 7112, 7113, 7114, 7115],
    name: "magnezone",
    types: [PokemonType.ELECTRIC, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/462.png",
  },
  "4700": {
    tableIDs: [7, 10, 12, 19, 20, 21, 22, 23, 24, 25, 103, 105, 6046],
    name: "leafeon",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/470.png",
  },
  "4710": {
    tableIDs: [
      21, 31, 34, 38, 40, 41, 42, 45, 83, 88, 91, 92, 93, 94, 100, 107, 108,
      152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165, 180, 181, 206,
      207, 208, 209, 211, 212, 213, 214, 215, 216, 6028,
    ],
    name: "glaceon",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/471.png",
  },
  "4750": {
    tableIDs: [
      2, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130,
      152, 165, 209, 210, 214, 217, 219, 221, 242,
    ],
    name: "gallade",
    types: [PokemonType.PSYCHIC, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/475.png",
  },
  "4780": {
    tableIDs: [
      21, 31, 34, 38, 40, 41, 42, 45, 83, 88, 91, 92, 93, 94, 100, 107, 108,
      152, 153, 154, 155, 156, 158, 159, 160, 161, 162, 165, 180, 181, 206, 207,
      208, 209, 211, 212, 213, 214, 215, 216, 6012, 7360, 7433, 7438,
    ],
    name: "froslass",
    types: [PokemonType.ICE, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/478.png",
  },
  "4790": {
    tableIDs: [48, 67, 69, 97, 99, 106, 151],
    name: "rotom",
    types: [PokemonType.ELECTRIC, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/479.png",
  },
  "5480": {
    tableIDs: [2, 80, 81, 126, 127, 128, 129, 130, 186],
    name: "petilil",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/548.png",
  },
  "5490": {
    tableIDs: [82, 85, 86, 94, 179, 180, 214, 288, 7186, 7304],
    name: "lilligant",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/549.png",
  },
  "5500": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 13, 26, 40, 44, 45, 48, 49, 54, 56, 57, 58, 59,
      61, 63, 65, 66, 67, 68, 70, 71, 73, 74, 76, 77, 78, 79, 82, 91, 96, 98,
      100, 101, 103, 104, 105, 107, 108, 109, 111, 113, 118, 119, 120, 122, 123,
      124, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
      140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154,
      155, 156, 157, 158, 159, 160, 161, 162,
    ],
    name: "basculin-red-striped",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/550.png",
  },
  "5501": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 13, 26, 40, 44, 45, 48, 49, 54, 56, 57, 58, 59,
      61, 63, 65, 66, 67, 68, 70, 71, 73, 74, 76, 77, 78, 79, 82, 91, 96, 98,
      100, 101, 103, 104, 105, 107, 108, 109, 111, 113, 118, 119, 120, 122, 123,
      124, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
      140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154,
      155, 156, 157, 158, 159, 160, 161, 162,
    ],
    name: "basculin-blue-striped",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/550-blue-striped.png",
  },
  "5510": {
    tableIDs: [186, 194, 230, 314],
    name: "sandile",
    types: [PokemonType.GROUND, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/551.png",
  },
  "5700": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 35, 40, 44, 45, 46, 47, 49, 78, 102, 104,
    ],
    name: "zorua",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/570.png",
  },
  "5710": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25],
    name: "zoroark",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/571.png",
  },
  "5740": {
    tableIDs: [57, 64],
    name: "gothita",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/574.png",
  },
  "5750": {
    tableIDs: [85, 86, 221, 242],
    name: "gothorita",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/575.png",
  },
  "5760": {
    tableIDs: [85, 86, 221, 242],
    name: "gothitelle",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/576.png",
  },
  "5850": {
    tableIDs: [
      1, 2, 4, 5, 18, 26, 54, 73, 74, 111, 113, 117, 118, 120, 121, 122, 123,
      126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 182, 183,
      218, 7031, 7032, 7037, 7044,
    ],
    name: "deerling-spring",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585.png",
  },
  "5851": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 48, 62, 67, 68, 69, 70, 77, 109, 148, 149, 150,
      151, 197, 198, 202, 204, 205, 210, 233, 311, 312,
    ],
    name: "deerling-summer",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585-summer.png",
  },
  "5852": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 29, 55, 56, 78, 79, 83, 90, 95, 96, 97, 98, 100,
      101, 102, 103, 104, 105, 107, 108,
    ],
    name: "deerling-autumn",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585-autumn.png",
  },
  "5853": {
    tableIDs: [
      29, 34, 40, 42, 46, 64, 77, 83, 84, 88, 89, 90, 91, 93, 100, 108, 152,
      165, 209, 210, 214, 217, 7085,
    ],
    name: "deerling-winter",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/585-winter.png",
  },
  "5860": {
    tableIDs: [7036],
    name: "sawsbuck-spring",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586.png",
  },
  "5861": {
    tableIDs: [],
    name: "sawsbuck-summer",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586-summer.png",
  },
  "5862": {
    tableIDs: [
      7, 10, 12, 19, 20, 21, 22, 23, 24, 25, 29, 78, 83, 90, 100, 101, 103, 105,
      107, 108,
    ],
    name: "sawsbuck-autumn",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586-autumn.png",
  },
  "5863": {
    tableIDs: [
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 64,
      77, 83, 84, 88, 89, 90, 91, 92, 93, 94, 100, 107, 108, 152, 153, 154, 155,
      156, 157, 158, 159, 160, 161, 162, 165, 180, 181, 206, 207, 208, 209, 210,
      211, 212, 213, 214, 215, 216, 217, 7084, 7428,
    ],
    name: "sawsbuck-winter",
    types: [PokemonType.NORMAL, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586-winter.png",
  },
  "5900": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 32, 35, 39, 40, 43, 44, 45, 46, 47, 49, 50, 103,
      105,
    ],
    name: "foongus",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/590.png",
  },
  "5910": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25, 32, 39, 43, 50, 7467],
    name: "amoonguss",
    types: [PokemonType.GRASS, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/591.png",
  },
  "5940": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 36, 38, 41, 92, 179, 214, 215, 216, 217, 229, 237,
      263, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289,
      290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304,
      305, 306, 307, 308, 309, 310,
    ],
    name: "alomomola",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/594.png",
  },
  "6020": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 36, 38, 74, 80, 81, 82, 86, 87, 99, 129, 130, 179,
      189, 193, 195, 215, 216, 217, 219, 220, 221, 222, 226, 227, 228, 229, 231,
      237, 242, 245, 257, 260, 261, 262, 263, 264, 265, 266, 276, 277, 278, 279,
      280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 293, 294, 295,
      296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
    ],
    name: "tynamo",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/602.png",
  },
  "6030": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 36, 38, 74, 82, 86, 87, 99, 129, 130, 179, 193,
      215, 216, 217, 219, 220, 221, 222, 229, 231, 237, 242, 245, 261, 263, 264,
      265, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289,
      290, 291, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305,
      306, 307, 308, 309, 310,
    ],
    name: "eelektrik",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/603.png",
  },
  "6040": {
    tableIDs: [6032],
    name: "eelektross",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/604.png",
  },
  "6100": {
    tableIDs: [
      18, 29, 34, 40, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 100, 113, 117,
      122, 131, 133, 134, 135, 136, 138, 182, 209, 210, 224, 6062,
    ],
    name: "axew",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/610.png",
  },
  "6110": {
    tableIDs: [
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 77, 83,
      84, 88, 90, 100, 154, 181, 209,
    ],
    name: "fraxure",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/611.png",
  },
  "6130": {
    tableIDs: [
      29, 34, 40, 41, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94,
      100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165,
      180, 181, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
      7356, 7440,
    ],
    name: "cubchoo",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/613.png",
  },
  "6140": {
    tableIDs: [
      21, 31, 34, 38, 40, 41, 42, 45, 83, 91, 92, 93, 94, 100, 152, 153, 154,
      155, 156, 159, 160, 161, 162, 165, 180, 181, 206, 207, 208, 209, 211, 212,
      213, 214, 215, 216, 7357, 7432,
    ],
    name: "beartic",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/614.png",
  },
  "6150": {
    tableIDs: [157, 158, 162, 206, 207, 208, 211],
    name: "cryogonal",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/615.png",
  },
  "6240": {
    tableIDs: [
      18, 44, 45, 46, 47, 49, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 77, 118, 131, 135, 136, 147, 182, 828,
    ],
    name: "pawniard",
    types: [PokemonType.DARK, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/624.png",
  },
  "6250": {
    tableIDs: [32, 39, 43, 50, 66, 200, 828],
    name: "bisharp",
    types: [PokemonType.DARK, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/625.png",
  },
  "6270": {
    tableIDs: [
      2, 4, 5, 15, 18, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
      43, 44, 46, 47, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
      68, 69, 70, 71, 74, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93,
      95, 100, 108, 113, 114, 117, 121, 129, 130, 135, 138, 146, 152, 165, 182,
      186, 187, 192, 193, 194, 209, 210, 214, 217, 218, 219, 221, 224, 230, 231,
      242, 312, 313, 314, 451, 7193,
    ],
    name: "rufflet",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/627.png",
  },
  "6280": {
    tableIDs: [828, 7052, 7283, 7284, 7453],
    name: "braviary",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/628.png",
  },
  "6330": {
    tableIDs: [
      453, 454, 455, 469, 471, 473, 474, 477, 478, 479, 480, 481, 482, 490, 491,
      650, 651, 652, 829,
    ],
    name: "deino",
    types: [PokemonType.DARK, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/633.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "6340": {
    tableIDs: [481, 650, 652, 829],
    name: "zweilous",
    types: [PokemonType.DARK, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/634.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "6360": {
    tableIDs: [55, 56, 95, 146, 186, 187, 193, 194, 230, 231, 314, 451],
    name: "larvesta",
    types: [PokemonType.BUG, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/636.png",
  },
  "6370": {
    tableIDs: [828],
    name: "volcarona",
    types: [PokemonType.BUG, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/637.png",
  },
  // "6380": {
  //   tableIDs: [8214],
  //   name: "cobalion",
  //   types: [PokemonType.STEEL, PokemonType.FIGHTING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/638.png",
  // },
  // "6390": {
  //   tableIDs: [8215],
  //   name: "terrakion",
  //   types: [PokemonType.ROCK, PokemonType.FIGHTING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/639.png",
  // },
  // "6400": {
  //   tableIDs: [8216],
  //   name: "virizion",
  //   types: [PokemonType.GRASS, PokemonType.FIGHTING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/640.png",
  // },
  // "6430": {
  //   tableIDs: [8217],
  //   name: "reshiram",
  //   types: [PokemonType.DRAGON, PokemonType.FIRE],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/643.png",
  // },
  // "6440": {
  //   tableIDs: [8218],
  //   name: "zekrom",
  //   types: [PokemonType.DRAGON, PokemonType.ELECTRIC],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/644.png",
  // },
  // "6460": {
  //   tableIDs: [8219],
  //   name: "kyurem",
  //   types: [PokemonType.DRAGON, PokemonType.ICE],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/646.png",
  // },
  "6610": {
    tableIDs: [
      1, 2, 3, 5, 26, 27, 28, 51, 52, 53, 54, 72, 73, 110, 111, 113, 114, 115,
      116, 117, 118, 120, 121, 122, 123, 124, 125, 133, 140, 191, 352, 6039,
      7002, 7004, 7008, 7018, 7020, 7021, 7023, 7025, 7033, 7119, 7120, 7121,
      7163, 7164, 7165,
    ],
    name: "fletchling",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/661.png",
  },
  "6620": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 26, 29, 54, 73, 74, 78, 83, 90,
      100, 101, 102, 103, 104, 105, 107, 108, 111, 113, 117, 118, 120, 121, 122,
      123, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 182,
      183, 218, 7291, 7334,
    ],
    name: "fletchinder",
    types: [PokemonType.FIRE, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/662.png",
  },
  "6630": {
    tableIDs: [828],
    name: "talonflame",
    types: [PokemonType.FIRE, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/663.png",
  },
  "6670": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 70, 77, 109, 111, 113, 117, 118, 122, 131, 132,
      133, 134, 135, 136, 137, 138, 148, 149, 150, 182, 183, 196, 197, 198, 202,
      204, 205, 210, 224, 233, 311, 312, 313, 7051,
    ],
    name: "litleo",
    types: [PokemonType.FIRE, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/667.png",
  },
  "6680": {
    tableIDs: [
      29, 33, 34, 40, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 100, 207, 209,
      210, 211, 6023,
    ],
    name: "pyroar",
    types: [PokemonType.FIRE, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/668.png",
  },
  "6690": {
    tableIDs: [
      1, 2, 80, 81, 117, 118, 123, 126, 127, 128, 129, 130, 138, 186, 271,
    ],
    name: "flabebe-red-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/669.png",
  },
  "6691": {
    tableIDs: [
      1, 2, 80, 81, 117, 118, 123, 126, 127, 128, 129, 130, 138, 186, 271,
    ],
    name: "flabebe-blue-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/669-blue.png",
  },
  "6692": {
    tableIDs: [
      1, 2, 80, 81, 117, 118, 123, 126, 127, 128, 129, 130, 138, 186, 271,
    ],
    name: "flabebe-orange-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/669-orange.png",
  },
  "6693": {
    tableIDs: [
      1, 2, 80, 81, 117, 118, 123, 126, 127, 128, 129, 130, 138, 186, 271,
    ],
    name: "flabebe-white-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/669-white.png",
  },
  "6694": {
    tableIDs: [
      1, 2, 80, 81, 117, 118, 123, 126, 127, 128, 129, 130, 138, 186, 271,
    ],
    name: "flabebe-yellow-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/669-yellow.png",
  },
  "6700": {
    tableIDs: [
      2, 32, 33, 35, 36, 37, 40, 44, 50, 63, 71, 82, 85, 86, 94, 117, 118, 126,
      127, 128, 129, 130, 138, 147, 179, 180, 186, 199, 214, 217, 271, 288,
      6018,
    ],
    name: "floette-red-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/670.png",
  },
  "6701": {
    tableIDs: [
      2, 32, 33, 35, 36, 37, 40, 44, 50, 63, 71, 82, 85, 86, 94, 117, 118, 126,
      127, 128, 129, 130, 138, 147, 179, 180, 186, 199, 214, 217, 271, 288,
    ],
    name: "floette-blue-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/670-blue.png",
  },
  "6702": {
    tableIDs: [
      2, 32, 33, 35, 36, 37, 40, 44, 50, 63, 71, 82, 85, 86, 94, 117, 118, 126,
      127, 128, 129, 130, 138, 147, 179, 180, 186, 199, 214, 217, 271, 288,
    ],
    name: "floette-orange-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/670-orange.png",
  },
  "6703": {
    tableIDs: [
      2, 32, 33, 35, 36, 37, 40, 44, 50, 63, 71, 82, 85, 86, 94, 117, 118, 126,
      127, 128, 129, 130, 138, 147, 179, 180, 186, 199, 214, 217, 271, 288,
    ],
    name: "floette-white-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/670-white.png",
  },
  "6704": {
    tableIDs: [
      2, 32, 33, 35, 36, 37, 40, 44, 50, 63, 71, 82, 85, 86, 94, 117, 118, 126,
      127, 128, 129, 130, 138, 147, 179, 180, 186, 199, 214, 217, 271, 288, 828,
    ],
    name: "floette-yellow-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/670-yellow.png",
  },
  "6710": {
    tableIDs: [94, 179, 180, 214, 288],
    name: "florges-red-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/671.png",
  },
  "6711": {
    tableIDs: [94, 179, 180, 214, 288],
    name: "florges-blue-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/671-blue.png",
  },
  "6712": {
    tableIDs: [94, 179, 180, 214, 288],
    name: "florges-orange-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/671-orange.png",
  },
  "6713": {
    tableIDs: [94, 179, 180, 214, 288],
    name: "florges-white-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/671-white.png",
  },
  "6714": {
    tableIDs: [94, 179, 180, 214, 288],
    name: "florges-yellow-flower",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/671-yellow.png",
  },
  "6720": {
    tableIDs: [
      1, 2, 4, 5, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 27, 28, 29, 44, 46, 47,
      48, 49, 51, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 73, 74, 75, 76, 77, 78, 79, 80, 81, 95, 96, 97, 98, 102, 104, 109,
      113, 114, 117, 118, 119, 121, 122, 124, 126, 127, 128, 129, 130, 131, 132,
      133, 134, 135, 136, 138, 139, 140, 141, 142, 143, 144, 145, 146, 149, 150,
      151, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
      196, 197, 198, 202, 204, 205, 210, 218, 224, 230, 231, 233, 311, 312, 313,
      314, 492,
    ],
    name: "skiddo",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/672.png",
  },
  "6730": {
    tableIDs: [
      2, 7, 8, 19, 22, 23, 25, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 49, 50, 63, 64, 66, 71, 74, 76, 77, 82, 83, 84,
      85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 98, 100, 101, 102, 103, 105,
      107, 108, 129, 130, 147, 152, 153, 156, 159, 163, 165, 166, 167, 168, 172,
      176, 178, 179, 180, 181, 199, 200, 201, 207, 209, 210, 211, 213, 214, 215,
      216, 217, 219, 221, 237, 242, 289, 290, 828, 7454, 7476,
    ],
    name: "gogoat",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/673.png",
  },
  "6900": {
    tableIDs: [
      320, 467, 481, 490, 491, 539, 567, 573, 587, 588, 590, 596, 602, 603, 625,
      639, 640, 645, 646, 647, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661,
      662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676,
      677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691,
      692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706,
      707, 708, 709, 710, 711,
    ],
    name: "skrelp",
    types: [PokemonType.POISON, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/690.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "6910": {
    tableIDs: [
      320, 602, 603, 625, 639, 640, 642, 645, 646, 647, 652, 656, 657, 658, 659,
      660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 686,
      687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 698, 699, 700, 701, 702,
      703, 704, 705, 707, 708, 711,
    ],
    name: "dragalge",
    types: [PokemonType.POISON, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/691.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "6920": {
    tableIDs: [
      334, 336, 343, 361, 370, 372, 373, 374, 377, 384, 387, 388, 391, 399, 409,
      413, 418, 449, 516, 533, 534, 608, 609, 712, 713, 714, 715, 716, 717, 718,
      719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733,
      734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748,
      749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763,
      764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778,
      779, 780, 781, 782, 783, 784, 785,
    ],
    name: "clauncher",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/692.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "6930": {
    tableIDs: [
      336, 361, 370, 372, 373, 374, 413, 444, 449, 502, 515, 516, 521, 534, 608,
      609, 712, 713, 714, 718, 720, 721, 731, 732, 733, 747, 750, 751, 752, 765,
      766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780,
      781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795,
      796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808,
    ],
    name: "clawitzer",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/693.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "7000": {
    tableIDs: [12, 85, 86, 221, 242, 6037],
    name: "sylveon",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/700.png",
  },
  "7010": {
    tableIDs: [
      19, 22, 23, 25, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
      49, 50, 63, 66, 71, 92, 93, 94, 96, 98, 101, 105, 108, 147, 156, 163, 165,
      166, 167, 168, 172, 176, 178, 179, 181, 199, 200, 201, 217, 237, 289, 290,
      828, 6055, 7196,
    ],
    name: "hawlucha",
    types: [PokemonType.FIGHTING, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/701.png",
  },
  "7020": {
    tableIDs: [6, 10, 12, 29, 94, 179, 180, 214, 288],
    name: "dedenne",
    types: [PokemonType.ELECTRIC, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/702.png",
  },
  "7040": {
    tableIDs: [
      1, 4, 5, 6, 9, 40, 44, 54, 57, 59, 73, 74, 76, 111, 113, 118, 120, 122,
      123, 126, 127, 128, 130, 131, 132, 137, 152, 153, 161,
    ],
    name: "goomy",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/704.png",
  },
  "7050": {
    tableIDs: [
      7, 78, 79, 96, 98, 101, 105, 156, 163, 164, 166, 167, 168, 169, 170, 171,
      172, 173, 174, 175, 176, 177, 178, 6044, 7305,
    ],
    name: "sliggoo",
    types: [PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/705.png",
  },
  "7070": {
    tableIDs: [85, 86, 155, 158, 221, 242],
    name: "klefki",
    types: [PokemonType.STEEL, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/707.png",
  },
  "7120": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 34, 36, 38, 40, 41, 42, 45, 83, 88, 91, 92, 93,
      94, 100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162,
      163, 165, 168, 169, 175, 177, 179, 180, 181, 206, 207, 208, 209, 211, 212,
      213, 214, 215, 216, 217, 229, 237, 263, 276, 277, 278, 279, 280, 281, 282,
      283, 284, 285, 286, 287, 288, 289, 290, 291, 293, 294, 295, 296, 297, 298,
      299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 7431,
    ],
    name: "bergmite",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/712.png",
  },
  "7130": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 34, 36, 38, 40, 41, 42, 45, 83, 88, 91, 92, 93,
      94, 100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162,
      163, 165, 168, 169, 175, 177, 179, 180, 181, 206, 207, 208, 209, 211, 212,
      213, 214, 215, 216, 217, 229, 237, 263, 276, 277, 278, 279, 280, 281, 282,
      283, 284, 285, 286, 287, 288, 289, 290, 291, 293, 294, 295, 296, 297, 298,
      299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 6013, 7404,
      7405, 7406, 7407, 7414, 7415, 7416,
    ],
    name: "avalugg",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/713.png",
  },
  "7140": {
    tableIDs: [
      30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 49, 50, 55, 56, 63,
      66, 71, 78, 79, 147, 181, 199, 200, 201, 237, 290,
    ],
    name: "noibat",
    types: [PokemonType.FLYING, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/714.png",
  },
  "7150": {
    tableIDs: [
      30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 49, 50, 63, 66, 71,
      147, 181, 199, 200, 201, 237, 290,
    ],
    name: "noivern",
    types: [PokemonType.FLYING, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/715.png",
  },
  "7340": {
    tableIDs: [
      1, 2, 4, 8, 13, 14, 15, 16, 17, 18, 27, 28, 46, 47, 48, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73,
      74, 75, 76, 77, 78, 79, 80, 81, 95, 109, 113, 114, 116, 117, 118, 119,
      122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136,
      138, 139, 140, 141, 142, 143, 144, 145, 146, 149, 150, 151, 182, 183, 184,
      185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 202,
      204, 205, 210, 230, 231, 233, 311, 312, 314, 492,
    ],
    name: "yungoos",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/734.png",
  },
  "7350": {
    tableIDs: [
      2, 4, 7, 8, 9, 13, 14, 15, 16, 17, 18, 29, 34, 40, 42, 44, 45, 46, 47, 48,
      49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 73,
      74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 100, 102, 103, 104, 105, 107, 108, 109, 113, 117, 118,
      122, 126, 128, 129, 130, 131, 132, 134, 135, 136, 146, 149, 150, 151, 152,
      153, 159, 165, 180, 181, 182, 183, 186, 187, 192, 193, 196, 197, 202, 204,
      205, 207, 209, 210, 211, 213, 214, 215, 216, 217, 219, 221, 230, 231, 233,
      312, 314,
    ],
    name: "gumshoos",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/735.png",
  },
  "7390": {
    tableIDs: [
      34, 40, 41, 42, 45, 67, 75, 83, 88, 91, 92, 93, 94, 97, 98, 99, 100, 106,
      107, 108, 131, 136, 137, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
      161, 162, 165, 180, 181, 195, 202, 203, 204, 205, 206, 207, 208, 209, 211,
      212, 213, 214, 215, 216, 7347, 7348, 7349,
    ],
    name: "crabrawler",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/739.png",
  },
  "7400": {
    tableIDs: [162, 206, 207, 208, 211, 7350],
    name: "crabominable",
    types: [PokemonType.FIGHTING, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/740.png",
  },
  "7410": {
    tableIDs: [16, 17, 18, 197],
    name: "oricorio-baile",
    types: [PokemonType.FIRE, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/741.png",
  },
  "7411": {
    tableIDs: [72, 110, 113, 117, 118, 120],
    name: "oricorio-pom-pom",
    types: [PokemonType.ELECTRIC, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10123.png",
  },
  "7440": {
    tableIDs: [
      4, 5, 8, 9, 11, 15, 27, 51, 54, 73, 74, 75, 76, 80, 81, 104, 114, 117,
      121, 124, 127, 129, 130, 138, 139, 140, 141, 142, 143, 144, 145, 146, 184,
      185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 218, 311, 313,
      7056,
    ],
    name: "rockruff",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/744.png",
  },
  "7450": {
    tableIDs: [
      2, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130,
      152, 165, 209, 210, 214, 217, 219, 221, 242, 828,
    ],
    name: "lycanroc-midday",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/745.png",
  },
  "7451": {
    tableIDs: [
      2, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130,
      152, 165, 209, 210, 214, 217, 219, 221, 242, 828,
    ],
    name: "lycanroc-midnight",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10126.png",
  },
  "7470": {
    tableIDs: [
      17, 67, 69, 71, 106, 151, 202, 203, 204, 205, 223, 232, 233, 234, 235,
      236, 253, 254, 259, 267, 268, 269, 270, 271, 272, 273, 274, 275,
    ],
    name: "mareanie",
    types: [PokemonType.POISON, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/747.png",
  },
  "7480": {
    tableIDs: [6016],
    name: "toxapex",
    types: [PokemonType.POISON, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/748.png",
  },
  "7490": {
    tableIDs: [
      4, 5, 8, 9, 11, 15, 18, 27, 29, 46, 51, 64, 73, 75, 76, 77, 80, 81, 84,
      88, 89, 104, 113, 114, 117, 121, 122, 124, 127, 129, 130, 131, 135, 138,
      139, 140, 141, 142, 143, 144, 145, 146, 182, 184, 185, 186, 187, 188, 189,
      190, 191, 192, 193, 194, 195, 209, 210, 218, 224, 311, 312, 313, 7041,
      7079,
    ],
    name: "mudbray",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/749.png",
  },
  "7500": {
    tableIDs: [
      2, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74, 76,
      77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130, 152,
      165, 209, 210, 214, 217, 219, 221, 242, 7040, 7078,
    ],
    name: "mudsdale",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/750.png",
  },
  "7530": {
    tableIDs: [40, 44, 117, 118, 138, 7081],
    name: "fomantis",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/753.png",
  },
  "7540": {
    tableIDs: [
      19, 20, 21, 22, 23, 24, 25, 32, 33, 35, 36, 37, 50, 63, 71, 94, 147, 179,
      180, 199, 214, 288, 7080, 7375,
    ],
    name: "lurantis",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/754.png",
  },
  "7570": {
    tableIDs: [
      49, 54, 55, 56, 58, 60, 61, 62, 65, 66, 74, 75, 76, 77, 78, 79, 80, 81,
      82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 828, 6017, 7361, 7362,
    ],
    name: "salandit",
    types: [PokemonType.POISON, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/757.png",
  },
  "7580": {
    tableIDs: [
      41, 50, 74, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
      828, 7197, 7358,
    ],
    name: "salazzle",
    types: [PokemonType.POISON, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/758.png",
  },
  "7610": {
    tableIDs: [1, 2, 3, 4, 13, 15, 18, 110, 117, 120, 121, 7011],
    name: "bounsweet",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/761.png",
  },
  "7620": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 70, 77, 109, 148, 149, 150, 197, 198, 202, 204,
      205, 210, 233, 312, 7306,
    ],
    name: "steenee",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/762.png",
  },
  "7630": {
    tableIDs: [6003],
    name: "tsareena",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/763.png",
  },
  "7650": {
    tableIDs: [457, 461, 468, 470, 592, 604, 605, 606, 607, 650, 809],
    name: "oranguru",
    types: [PokemonType.NORMAL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/765.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "7660": {
    tableIDs: [420, 421, 438, 525, 528, 610, 611, 612, 613, 810, 811],
    name: "passimian",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/766.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "7690": {
    tableIDs: [
      67, 97, 98, 99, 106, 131, 136, 137, 151, 202, 203, 204, 205, 6001,
    ],
    name: "sandygast",
    types: [PokemonType.GHOST, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/769.png",
  },
  "7700": {
    tableIDs: [98, 178],
    name: "palossand",
    types: [PokemonType.GHOST, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/770.png",
  },
  "7750": {
    tableIDs: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 35, 40, 44, 45, 46,
      47, 48, 49, 103, 105,
    ],
    name: "komala",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/775.png",
  },
  "7780": {
    tableIDs: [35, 40, 44, 45, 49, 90, 148, 209, 6036],
    name: "mimikyu-disguised",
    types: [PokemonType.GHOST, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/778.png",
  },
  "7790": {
    tableIDs: [
      17, 69, 71, 80, 81, 87, 99, 111, 136, 137, 189, 193, 195, 203, 204, 205,
      220, 223, 225, 226, 227, 228, 229, 231, 232, 233, 234, 235, 236, 238, 239,
      240, 243, 247, 250, 252, 253, 254, 256, 257, 258, 259, 260, 261, 262, 263,
      264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275,
    ],
    name: "bruxish",
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/779.png",
  },
  // "7910": {
  //   tableIDs: [8220],
  //   name: "solgaleo",
  //   types: [PokemonType.PSYCHIC, PokemonType.STEEL],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/791.png",
  // },
  // "7920": {
  //   tableIDs: [8221],
  //   name: "lunala",
  //   types: [PokemonType.PSYCHIC, PokemonType.GHOST],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/792.png",
  // },
  // "8000": {
  //   tableIDs: [8222],
  //   name: "necrozma",
  //   types: [PokemonType.PSYCHIC],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/800.png",
  // },
  "8190": {
    tableIDs: [1, 2, 3, 26, 27, 51, 52, 53, 54, 110, 117, 120, 121, 7009, 7010],
    name: "skwovet",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/819.png",
  },
  "8200": {
    tableIDs: [
      2, 6, 7, 8, 9, 10, 11, 12, 29, 34, 35, 40, 42, 44, 45, 46, 47, 49, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 103, 105, 108,
      129, 130, 152, 165, 209, 210, 214, 217, 219, 221, 242, 7315,
    ],
    name: "greedent",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/820.png",
  },
  "8210": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 46, 47, 48, 49, 57, 58, 59, 60, 61, 62, 63, 64,
      65, 66, 67, 68, 69, 70, 77, 106, 109, 111, 113, 116, 117, 118, 119, 122,
      131, 132, 133, 134, 135, 136, 137, 138, 148, 149, 150, 151, 182, 183, 196,
      197, 198, 202, 204, 205, 210, 224, 233, 311, 312, 313, 492,
    ],
    name: "rookidee",
    types: [PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/821.png",
  },
  "8220": {
    tableIDs: [
      13, 14, 15, 16, 17, 18, 46, 47, 48, 49, 57, 58, 59, 60, 61, 62, 63, 64,
      65, 66, 67, 68, 69, 70, 77, 106, 109, 111, 113, 117, 118, 122, 131, 132,
      133, 134, 135, 136, 137, 138, 148, 149, 150, 151, 182, 183, 196, 197, 198,
      202, 204, 205, 210, 224, 233, 311, 312, 313, 7070, 7071, 7317, 7333,
    ],
    name: "corvisquire",
    types: [PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/822.png",
  },
  "8230": {
    tableIDs: [828, 6034],
    name: "corviknight",
    types: [PokemonType.FLYING, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/823.png",
  },
  "8330": {
    tableIDs: [
      1, 2, 4, 5, 8, 13, 26, 28, 44, 48, 49, 53, 54, 56, 57, 58, 59, 61, 63, 65,
      66, 67, 68, 70, 71, 73, 77, 78, 79, 96, 104, 109, 110, 111, 113, 114, 115,
      118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
      133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
      148, 149, 150, 151,
    ],
    name: "chewtle",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/833.png",
  },
  "8340": {
    tableIDs: [
      5, 6, 7, 8, 9, 13, 19, 22, 24, 25, 40, 44, 45, 48, 49, 56, 57, 58, 59, 61,
      63, 65, 66, 67, 68, 70, 71, 74, 76, 77, 78, 79, 82, 91, 93, 96, 98, 100,
      101, 103, 105, 107, 108, 109, 111, 113, 118, 120, 122, 129, 131, 135, 136,
      137, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
      160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
      175, 176, 177, 178, 6007,
    ],
    name: "drednaw",
    types: [PokemonType.WATER, PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/834.png",
  },
  "8370": {
    tableIDs: [58, 59, 60, 61, 62, 63, 65, 67, 68, 69, 7069],
    name: "rolycoly",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/837.png",
  },
  "8380": {
    tableIDs: [
      44, 46, 47, 49, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 77, 7068, 7318,
    ],
    name: "carkol",
    types: [PokemonType.ROCK, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/838.png",
  },
  "8400": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 35, 40, 44,
      45, 46, 47, 48, 49, 103, 105, 7331, 7332,
    ],
    name: "applin",
    types: [PokemonType.GRASS, PokemonType.DRAGON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/840.png",
  },
  "8430": {
    tableIDs: [
      44, 46, 47, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 77, 95, 146, 186, 187, 192, 193, 194, 230, 231, 314, 451,
    ],
    name: "silicobra",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/843.png",
  },
  "8440": {
    tableIDs: [7263, 7269, 7270, 7271],
    name: "sandaconda",
    types: [PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/844.png",
  },
  "8460": {
    tableIDs: [
      1, 2, 5, 7, 8, 13, 17, 26, 28, 44, 45, 48, 49, 53, 54, 56, 58, 61, 63, 65,
      66, 67, 68, 69, 70, 71, 72, 73, 77, 78, 79, 80, 81, 87, 96, 97, 98, 99,
      104, 106, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 120, 122, 123,
      124, 125, 126, 127, 128, 129, 130, 131, 133, 134, 135, 136, 137, 138, 139,
      140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 189, 193, 195,
      202, 203, 204, 205, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
      229, 230, 231, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243, 244,
      245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259,
      260, 261, 262, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 347, 348,
      349, 350,
    ],
    name: "arrokuda",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/846.png",
  },
  "8470": {
    tableIDs: [
      7, 8, 13, 21, 23, 25, 30, 31, 33, 36, 38, 44, 45, 49, 56, 58, 61, 63, 65,
      66, 67, 68, 69, 70, 71, 74, 77, 78, 79, 80, 81, 82, 86, 87, 91, 92, 94,
      96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 129, 130, 147, 152, 154,
      155, 156, 157, 158, 159, 160, 162, 179, 180, 189, 193, 203, 204, 205, 214,
      215, 216, 217, 219, 220, 221, 222, 226, 227, 228, 229, 230, 231, 232, 235,
      236, 237, 242, 245, 253, 254, 257, 260, 261, 262, 263, 264, 265, 266, 267,
      268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282,
      283, 284, 285, 286, 287, 288, 289, 290, 291, 293, 294, 295, 296, 297, 298,
      299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
    ],
    name: "barraskewda",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/847.png",
  },
  "8480": {
    tableIDs: [
      1, 2, 4, 5, 26, 54, 73, 74, 114, 120, 121, 123, 126, 127, 128, 129, 130,
      218, 7195,
    ],
    name: "toxel",
    types: [PokemonType.ELECTRIC, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/848.png",
  },
  "8490": {
    tableIDs: [2, 74, 76, 82, 85, 86, 87, 129, 130, 219, 221, 242],
    name: "toxtricity-amped",
    types: [PokemonType.ELECTRIC, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/849.png",
  },
  "8491": {
    tableIDs: [2, 74, 76, 82, 85, 86, 87, 129, 130, 219, 221, 242],
    name: "toxtricity-low-key",
    types: [PokemonType.ELECTRIC, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10184.png",
  },
  "8540": {
    tableIDs: [57, 64, 82, 85, 86, 221, 242],
    name: "sinistea",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/854.png",
  },
  "8560": {
    tableIDs: [1, 4, 5, 6, 9, 54, 73, 120, 123, 126, 127, 128, 130],
    name: "hatenna",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/856.png",
  },
  "8570": {
    tableIDs: [40, 44, 74, 76, 152, 153, 161],
    name: "hattrem",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/857.png",
  },
  "8590": {
    tableIDs: [35, 40, 44, 45, 46, 47, 49],
    name: "impidimp",
    types: [PokemonType.DARK, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/859.png",
  },
  "8600": {
    tableIDs: [35, 40, 44, 45, 49],
    name: "morgrem",
    types: [PokemonType.DARK, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/860.png",
  },
  "8700": {
    tableIDs: [32, 39, 43, 50, 55, 187, 188, 190, 199, 6022],
    name: "falinks",
    types: [PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/870.png",
  },
  "8710": {
    tableIDs: [
      30, 31, 41, 67, 97, 98, 99, 106, 131, 136, 137, 151, 178, 179, 202, 203,
      204, 205, 288, 289, 6030, 7449,
    ],
    name: "pincurchin",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/871.png",
  },
  "8720": {
    tableIDs: [
      29, 34, 40, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 100, 160, 162, 206,
      207, 208, 209, 210, 211,
    ],
    name: "snom",
    types: [PokemonType.ICE, PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/872.png",
  },
  "8730": {
    tableIDs: [
      21, 31, 34, 38, 40, 41, 42, 154, 159, 160, 161, 165, 180, 181, 207, 208,
      216, 828, 7430,
    ],
    name: "frosmoth",
    types: [PokemonType.ICE, PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/873.png",
  },
  "8740": {
    tableIDs: [315, 316, 323, 549, 550, 559, 566, 567, 568, 674, 812, 813, 814],
    name: "stonjourner",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/874.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "8750": {
    tableIDs: [
      444, 449, 516, 534, 608, 609, 718, 731, 732, 733, 750, 765, 766, 767, 768,
      769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783,
      784, 785, 787, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800,
      801, 802, 803, 804, 805, 806, 807, 808,
    ],
    name: "eiscue",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/875.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "8760": {
    tableIDs: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
    name: "indeedee-male",
    types: [PokemonType.PSYCHIC, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/876.png",
  },
  "8761": {
    tableIDs: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
    name: "indeedee-female",
    types: [PokemonType.PSYCHIC, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/876-female.png",
  },
  "8780": {
    tableIDs: [
      44, 46, 47, 49, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 77, 828,
    ],
    name: "cufant",
    types: [PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/878.png",
  },
  "8790": {
    tableIDs: [
      19, 22, 23, 25, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45,
      49, 50, 63, 66, 71, 74, 76, 82, 83, 85, 86, 87, 90, 91, 92, 93, 94, 96,
      98, 100, 101, 105, 108, 147, 153, 156, 159, 163, 165, 166, 167, 168, 172,
      176, 178, 179, 180, 181, 199, 200, 201, 207, 209, 213, 214, 215, 216, 217,
      219, 221, 237, 289, 290, 828, 7471,
    ],
    name: "copperajah",
    types: [PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/879.png",
  },
  "8850": {
    tableIDs: [
      331, 333, 335, 336, 337, 338, 340, 341, 342, 344, 346, 353, 355, 358, 359,
      360, 361, 363, 366, 367, 368, 371, 376, 379, 380, 381, 383, 384, 385, 387,
      388, 412, 415, 419, 420, 421, 422, 423, 425, 437, 442, 443, 446, 448, 450,
      499, 508, 509, 513, 522, 523, 524, 526, 528, 529, 530, 531, 532, 533, 715,
      729, 811, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 830,
    ],
    name: "dreepy",
    types: [PokemonType.DRAGON, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/885.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "8860": {
    tableIDs: [
      333, 336, 337, 338, 445, 447, 448, 500, 501, 502, 503, 504, 505, 506, 507,
      508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522,
      523, 531, 608, 609, 610, 611, 612, 613, 769, 790, 820, 827, 830,
    ],
    name: "drakloak",
    types: [PokemonType.DRAGON, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/886.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  // "8910": {
  //   tableIDs: [8223],
  //   name: "kubfu",
  //   types: [PokemonType.FIGHTING],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/891.png",
  // },
  // "8960": {
  //   tableIDs: [8224],
  //   name: "glastrier",
  //   types: [PokemonType.ICE],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/896.png",
  // },
  // "8970": {
  //   tableIDs: [8225],
  //   name: "spectrier",
  //   types: [PokemonType.GHOST],
  //   shinySprite:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/897.png",
  // },
  "9150": {
    tableIDs: [
      1, 2, 4, 5, 13, 14, 15, 16, 17, 18, 26, 28, 54, 72, 73, 74, 109, 110, 111,
      113, 115, 116, 117, 118, 120, 121, 122, 123, 126, 127, 128, 129, 130, 131,
      132, 133, 134, 135, 138, 148, 149, 150, 182, 183, 197, 198, 218, 233, 311,
      351, 7024,
    ],
    name: "lechonk",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/915.png",
  },
  "9160": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 29, 35, 40, 44, 45, 46,
      47, 48, 49, 55, 56, 62, 67, 68, 69, 70, 77, 78, 79, 83, 90, 95, 96, 97,
      98, 100, 101, 102, 103, 104, 105, 107, 108, 109, 111, 113, 117, 118, 122,
      131, 132, 133, 134, 135, 136, 137, 138, 148, 149, 150, 151, 182, 183, 197,
      198, 202, 204, 205, 210, 233, 311, 312,
    ],
    name: "oinkologne-male",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/916.png",
  },
  "9161": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 29, 35, 40, 44, 45, 46,
      47, 48, 49, 55, 56, 62, 67, 68, 69, 70, 77, 78, 79, 83, 90, 95, 96, 97,
      98, 100, 101, 102, 103, 104, 105, 107, 108, 109, 111, 113, 117, 118, 122,
      131, 132, 133, 134, 135, 136, 137, 138, 148, 149, 150, 151, 182, 183, 197,
      198, 202, 204, 205, 210, 233, 311, 312,
    ],
    name: "oinkologne-female",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/916-female.png",
  },
  "9170": {
    tableIDs: [
      1, 2, 4, 5, 26, 28, 54, 72, 73, 74, 110, 111, 113, 115, 116, 117, 118,
      120, 121, 122, 123, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 138,
      182, 183, 218, 351, 7007, 7022, 7026,
    ],
    name: "tarountula",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/917.png",
  },
  "9180": {
    tableIDs: [
      6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, 32, 35, 39, 40, 43, 44, 45, 46, 47, 48, 49, 50, 103, 105,
    ],
    name: "spidops",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/918.png",
  },
  "9190": {
    tableIDs: [
      8, 9, 11, 27, 51, 54, 74, 75, 76, 80, 81, 104, 124, 139, 140, 141, 142,
      143, 144, 145, 146, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
      193, 194, 195, 196, 197, 311,
    ],
    name: "nymble",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/919.png",
  },
  "9200": {
    tableIDs: [
      2, 7, 8, 9, 19, 22, 23, 25, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 55, 56, 57, 58, 59, 60, 61, 62,
      63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 76, 77, 78, 79, 82, 83, 84, 85,
      86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 101, 102, 103,
      104, 105, 107, 108, 129, 130, 147, 152, 153, 156, 159, 163, 165, 166, 167,
      168, 172, 176, 178, 179, 180, 181, 193, 199, 200, 201, 207, 209, 210, 211,
      213, 214, 215, 216, 217, 219, 221, 230, 231, 237, 242, 289, 290, 314, 828,
      6059, 7465,
    ],
    name: "lokix",
    types: [PokemonType.BUG, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/920.png",
  },
  "9210": {
    tableIDs: [
      5, 72, 73, 110, 111, 113, 115, 116, 117, 118, 119, 120, 121, 122, 132,
      133, 182, 183, 196, 198, 311, 492, 828, 7028, 7116, 7118, 7122, 7124,
      7159, 7160, 7250,
    ],
    name: "pawmi",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/921.png",
  },
  "9220": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 26, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 48, 54, 55, 56,
      60, 62, 64, 67, 68, 69, 70, 73, 74, 76, 77, 78, 79, 80, 82, 83, 84, 85,
      86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 101, 102, 103,
      104, 105, 106, 107, 108, 109, 111, 113, 114, 117, 118, 120, 121, 122, 123,
      126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 140, 142,
      144, 145, 146, 148, 149, 150, 151, 152, 165, 179, 180, 182, 183, 184, 186,
      187, 188, 190, 191, 192, 193, 194, 197, 198, 202, 204, 205, 209, 210, 214,
      217, 218, 219, 221, 224, 230, 231, 233, 242, 288, 311, 312, 313, 314, 828,
      6038, 7308, 7455,
    ],
    name: "pawmo",
    types: [PokemonType.ELECTRIC, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/922.png",
  },
  "9240": {
    tableIDs: [
      6, 10, 16, 17, 18, 28, 29, 48, 53, 57, 64, 67, 69, 97, 99, 106, 125, 151,
      197, 351, 7151, 7152, 7153, 7154, 7302,
    ],
    name: "tandemaus",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/924.png",
  },
  "9260": {
    tableIDs: [3, 26, 27, 28, 53, 118, 120, 125, 351, 7027],
    name: "fidough",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/926.png",
  },
  "9270": {
    tableIDs: [6, 10, 12, 29, 57, 64, 85, 86, 221, 242],
    name: "dachsbun",
    types: [PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/927.png",
  },
  "9280": {
    tableIDs: [1, 3, 26, 27, 51, 52, 53, 54, 7166, 7167, 7168, 7169, 7171],
    name: "smoliv",
    types: [PokemonType.GRASS, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/928.png",
  },
  "9290": {
    tableIDs: [40, 44, 82, 85, 214, 217, 271],
    name: "dolliv",
    types: [PokemonType.GRASS, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/929.png",
  },
  "9310": {
    tableIDs: [
      16, 17, 18, 28, 48, 57, 64, 67, 69, 106, 125, 151, 197, 7012, 7241,
    ],
    name: "squawkabilly-green",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/931.png",
  },
  "9311": {
    tableIDs: [16, 17, 18, 28, 48, 57, 64, 67, 69, 106, 125, 151, 197],
    name: "squawkabilly-blue",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10260.png",
  },
  "9312": {
    tableIDs: [16, 17, 18, 28, 48, 57, 64, 67, 69, 106, 125, 151, 197],
    name: "squawkabilly-yellow",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10261.png",
  },
  "9313": {
    tableIDs: [16, 17, 18, 28, 48, 57, 64, 67, 69, 106, 125, 151, 197],
    name: "squawkabilly-white",
    types: [PokemonType.NORMAL, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10262.png",
  },
  "9320": {
    tableIDs: [
      1, 2, 4, 8, 9, 13, 14, 15, 16, 17, 18, 27, 28, 29, 44, 46, 47, 48, 49, 51,
      54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 73,
      74, 75, 76, 77, 78, 79, 80, 81, 95, 96, 97, 98, 99, 102, 104, 106, 109,
      113, 116, 117, 118, 119, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131,
      132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
      149, 150, 151, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
      194, 195, 196, 197, 198, 202, 203, 204, 205, 210, 230, 231, 233, 311, 312,
      314, 492, 828, 7231, 7232, 7233,
    ],
    name: "nacli",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/932.png",
  },
  "9330": {
    tableIDs: [
      2, 7, 8, 9, 19, 22, 23, 25, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 49, 50, 63, 64, 66, 71, 74, 76, 77, 82, 83, 84,
      85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 98, 100, 101, 102, 103, 105,
      107, 108, 129, 147, 152, 153, 156, 159, 163, 165, 166, 167, 168, 172, 176,
      178, 179, 180, 181, 199, 200, 201, 207, 209, 210, 211, 213, 214, 215, 216,
      217, 219, 221, 237, 288, 289, 290, 828, 6065, 7218,
    ],
    name: "naclstack",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/933.png",
  },
  "9340": {
    tableIDs: [828],
    name: "garganacl",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/934.png",
  },
  "9350": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 27, 28, 29,
      35, 40, 44, 45, 46, 47, 48, 49, 51, 54, 55, 56, 57, 58, 59, 60, 61, 62,
      63, 64, 65, 66, 67, 68, 69, 70, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83,
      90, 95, 96, 97, 98, 100, 102, 104, 109, 113, 114, 117, 118, 119, 121, 122,
      124, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 138, 139, 140,
      141, 142, 143, 144, 145, 146, 149, 150, 151, 182, 183, 184, 185, 186, 187,
      188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 202, 204, 205, 210,
      218, 224, 230, 231, 233, 311, 312, 313, 314, 492, 7215, 7224, 7234, 7235,
      7240, 7242, 7259, 7260,
    ],
    name: "charcadet",
    types: [PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/935.png",
  },
  "9380": {
    tableIDs: [
      1, 2, 5, 7, 8, 13, 26, 28, 44, 45, 48, 49, 54, 56, 58, 61, 63, 65, 66, 67,
      68, 70, 71, 73, 77, 78, 79, 96, 98, 100, 101, 103, 104, 105, 107, 108,
      109, 114, 119, 120, 122, 123, 124, 125, 126, 128, 129, 130, 131, 133, 134,
      135, 136, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
      151, 152, 154, 155, 157, 158, 160, 162, 828, 7337, 7338, 7339,
    ],
    name: "tadbulb",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/938.png",
  },
  "9390": {
    tableIDs: [
      7, 31, 45, 74, 77, 78, 79, 82, 91, 94, 96, 98, 100, 101, 103, 105, 107,
      108, 129, 152, 154, 155, 156, 157, 158, 159, 160, 162, 168, 179, 180, 181,
      828, 6009, 7214, 7316,
    ],
    name: "bellibolt",
    types: [PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/939.png",
  },
  "9400": {
    tableIDs: [
      13, 17, 48, 62, 67, 68, 69, 70, 71, 72, 75, 80, 81, 87, 97, 98, 99, 106,
      109, 111, 115, 126, 127, 130, 131, 136, 137, 148, 149, 150, 151, 189, 193,
      195, 202, 203, 204, 205, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227,
      228, 229, 230, 231, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243,
      244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
      259, 260, 261, 262, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 350,
      7059, 7072, 7074, 7345,
    ],
    name: "wattrel",
    types: [PokemonType.ELECTRIC, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/940.png",
  },
  "9410": {
    tableIDs: [
      21, 23, 25, 30, 31, 33, 36, 38, 41, 69, 71, 80, 81, 86, 87, 92, 97, 98,
      99, 130, 166, 176, 178, 179, 193, 203, 205, 214, 215, 216, 217, 219, 220,
      221, 222, 226, 227, 228, 229, 230, 231, 232, 235, 236, 237, 242, 245, 260,
      261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275,
      276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290,
      291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305,
      306, 307, 308, 309, 310,
    ],
    name: "kilowattrel",
    types: [PokemonType.ELECTRIC, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/941.png",
  },
  "9420": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 26, 27, 28, 29, 51, 53, 54, 55, 56, 73,
      74, 78, 79, 95, 96, 97, 98, 102, 104, 114, 120, 121, 123, 124, 126, 127,
      128, 129, 130, 140, 191, 218, 352, 7180, 7181, 7182,
    ],
    name: "maschiff",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/942.png",
  },
  "9430": {
    tableIDs: [
      7, 8, 10, 12, 19, 20, 21, 22, 23, 24, 25, 29, 78, 83, 90, 100, 101, 103,
      105, 107, 108, 7478,
    ],
    name: "mabosstiff",
    types: [PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/943.png",
  },
  "9440": {
    tableIDs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 35, 40, 44,
      45, 46, 47, 48, 49, 110, 117, 120, 121, 7127, 7128, 7129,
    ],
    name: "shroodle",
    types: [PokemonType.POISON, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/944.png",
  },
  "9450": {
    tableIDs: [35, 40, 44, 45, 49, 6056, 7061, 7376, 7468],
    name: "grafaiai",
    types: [PokemonType.POISON, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/945.png",
  },
  "9460": {
    tableIDs: [
      44, 46, 47, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 77, 95, 186, 187, 193, 194, 230, 231, 314, 451, 7067, 7322,
      7323, 7324,
    ],
    name: "bramblin",
    types: [PokemonType.GRASS, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/946.png",
  },
  "9470": {
    tableIDs: [
      19, 20, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43,
    ],
    name: "brambleghast",
    types: [PokemonType.GRASS, PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/947.png",
  },
  "9480": {
    tableIDs: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 29, 35, 40, 44, 45, 46, 47, 48, 49, 54, 55, 56, 60,
      62, 67, 68, 69, 70, 73, 74, 77, 78, 79, 83, 90, 95, 96, 97, 98, 100, 101,
      102, 103, 104, 105, 106, 107, 108, 109, 111, 113, 117, 118, 120, 121, 122,
      123, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 148,
      149, 150, 151, 182, 183, 186, 193, 197, 198, 202, 204, 205, 210, 218, 230,
      231, 233, 311, 312, 314, 7060, 7310, 7311, 7312, 7340, 7341,
    ],
    name: "toedscool",
    types: [PokemonType.GROUND, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/948.png",
  },
  "9490": {
    tableIDs: [19, 20, 21, 22, 23, 24, 25],
    name: "toedscruel",
    types: [PokemonType.GROUND, PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/949.png",
  },
  "9500": {
    tableIDs: [
      18, 119, 182, 183, 196, 197, 198, 311, 7226, 7227, 7228, 7229, 7230,
    ],
    name: "klawf",
    types: [PokemonType.ROCK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/950.png",
  },
  "9510": {
    tableIDs: [
      8, 9, 11, 27, 51, 55, 56, 75, 76, 80, 81, 95, 104, 124, 139, 140, 141,
      142, 143, 144, 145, 146, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
      194, 195, 230, 231, 314, 451, 7236, 7252, 7253,
    ],
    name: "capsakid",
    types: [PokemonType.GRASS],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/951.png",
  },
  "9520": {
    tableIDs: [
      2, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130,
      152, 165, 209, 210, 214, 217, 219, 221, 242,
    ],
    name: "scovillain",
    types: [PokemonType.GRASS, PokemonType.FIRE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/952.png",
  },
  "9530": {
    tableIDs: [55, 56, 95, 186, 193, 194, 230, 231, 314],
    name: "rellor",
    types: [PokemonType.BUG],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/953.png",
  },
  "9550": {
    tableIDs: [
      2, 4, 5, 8, 9, 11, 15, 18, 29, 40, 46, 55, 56, 64, 73, 74, 76, 77, 80, 81,
      82, 83, 84, 85, 87, 88, 89, 90, 91, 93, 95, 100, 104, 108, 113, 114, 117,
      121, 124, 127, 129, 130, 135, 138, 139, 140, 142, 143, 144, 145, 146, 152,
      165, 182, 184, 186, 187, 188, 189, 190, 191, 192, 193, 194, 209, 210, 214,
      218, 219, 224, 230, 231, 311, 312, 313, 314, 451, 7254, 7256, 7257,
    ],
    name: "flittle",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/955.png",
  },
  "9560": {
    tableIDs: [
      2, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 64, 74,
      76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 100, 108, 129, 130,
      152, 165, 209, 210, 214, 217, 219, 221, 242, 828, 6011, 7267, 7268, 7274,
      7278, 7279,
    ],
    name: "espathra",
    types: [PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/956.png",
  },
  "9570": {
    tableIDs: [51, 53, 121, 135, 148, 183, 187, 188, 190, 224, 7155, 7275],
    name: "tinkatink",
    types: [PokemonType.FAIRY, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/957.png",
  },
  "9580": {
    tableIDs: [
      7, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 55, 64,
      77, 82, 83, 84, 88, 89, 90, 94, 100, 148, 209, 210, 6063, 7377,
    ],
    name: "tinkatuff",
    types: [PokemonType.FAIRY, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/958.png",
  },
  "9600": {
    tableIDs: [
      67, 75, 97, 98, 99, 106, 131, 136, 137, 151, 195, 202, 203, 204, 205,
      7130, 7135, 7136, 7137, 7138, 7139, 7140, 7456, 7457, 7458, 7459, 7460,
      7461, 7462, 7463, 7464,
    ],
    name: "wiglett",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/960.png",
  },
  "9610": {
    tableIDs: [30, 31, 41, 97, 98, 99, 178, 179, 205, 288, 289, 6031, 7450],
    name: "wugtrio",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/961.png",
  },
  "9620": {
    tableIDs: [
      2, 6, 8, 9, 10, 11, 12, 29, 74, 76, 80, 81, 82, 85, 86, 87, 99, 104, 129,
      130, 144, 145, 146, 184, 186, 187, 189, 191, 192, 193, 194, 195, 219, 220,
      221, 222, 226, 227, 228, 229, 231, 242, 245, 257, 260, 261, 262, 263, 264,
      265, 266, 7055,
    ],
    name: "bombirdier",
    types: [PokemonType.FLYING, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/962.png",
  },
  "9630": {
    tableIDs: [
      17, 21, 23, 25, 30, 31, 33, 36, 38, 69, 71, 72, 80, 81, 86, 87, 92, 97,
      98, 99, 106, 111, 115, 126, 127, 130, 131, 136, 137, 151, 189, 193, 195,
      202, 203, 204, 205, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225,
      226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
      241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255,
      256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270,
      271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285,
      286, 287, 288, 289, 290, 291, 293, 294, 295, 297, 298, 299, 301, 302, 304,
      305, 309, 310, 7299, 7300, 7301,
    ],
    name: "finizen",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/963.png",
  },
  "9650": {
    tableIDs: [
      44, 46, 47, 49, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71,
      77, 97, 99, 7063, 7064, 7320, 7325, 7326, 7327,
    ],
    name: "varoom",
    types: [PokemonType.STEEL, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/965.png",
  },
  "9660": {
    tableIDs: [
      30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 49, 83, 90, 100,
      181, 207, 209, 237, 290, 6029, 7477,
    ],
    name: "revavroom",
    types: [PokemonType.STEEL, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/966.png",
  },
  "9670": {
    tableIDs: [
      8, 13, 48, 55, 56, 62, 67, 68, 69, 70, 77, 78, 79, 95, 96, 97, 98, 109,
      148, 149, 150, 151, 6002, 7251, 7309, 7328, 7335, 7336, 7351,
    ],
    name: "cyclizar",
    types: [PokemonType.DRAGON, PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/967.png",
  },
  "9680": {
    tableIDs: [
      44, 46, 47, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 77, 95, 146, 186, 187, 192, 193, 194, 230, 231, 314, 451,
    ],
    name: "orthworm",
    types: [PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/968.png",
  },
  "9690": {
    tableIDs: [
      41, 49, 50, 55, 56, 58, 60, 61, 62, 65, 66, 74, 76, 77, 78, 79, 82, 83,
      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 828,
    ],
    name: "glimmet",
    types: [PokemonType.ROCK, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/969.png",
  },
  "9700": {
    tableIDs: [828],
    name: "glimmora",
    types: [PokemonType.ROCK, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/970.png",
  },
  "9710": {
    tableIDs: [
      7, 29, 34, 40, 41, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94,
      100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165,
      180, 181, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 828,
      7086, 7087, 7088, 7089, 7090, 7091, 7093, 7435,
    ],
    name: "greavard",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/971.png",
  },
  "9720": {
    tableIDs: [
      21, 25, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 76, 82,
      85, 86, 87, 101, 154, 159, 160, 161, 165, 180, 181, 199, 207, 208, 216,
      219, 221, 242, 828, 6050, 7092, 7352, 7364, 7437,
    ],
    name: "houndstone",
    types: [PokemonType.GHOST],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/972.png",
  },
  "9730": {
    tableIDs: [
      6, 7, 8, 9, 13, 30, 39, 40, 44, 45, 49, 56, 57, 58, 59, 61, 63, 65, 66,
      67, 68, 70, 71, 74, 76, 77, 78, 79, 82, 91, 94, 96, 98, 100, 101, 103,
      105, 107, 108, 122, 129, 131, 147, 148, 152, 153, 154, 155, 156, 157, 158,
      159, 160, 161, 162, 163, 164, 166, 167, 168, 169, 170, 171, 172, 173, 174,
      175, 176, 177, 178, 179, 180, 828, 6051, 7042, 7043, 7048, 7131, 7132,
      7133, 7134, 7141, 7142, 7143, 7144, 7145, 7146, 7147, 7148, 7149, 7150,
    ],
    name: "flamigo",
    types: [PokemonType.FLYING, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/973.png",
  },
  "9740": {
    tableIDs: [
      29, 34, 40, 41, 42, 45, 46, 64, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94,
      100, 107, 108, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165,
      180, 181, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
      7313, 7314, 7367, 7368, 7369, 7370,
    ],
    name: "cetoddle",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/974.png",
  },
  "9750": {
    tableIDs: [
      21, 31, 34, 38, 41, 154, 159, 161, 165, 180, 181, 216, 7434, 7436,
    ],
    name: "cetitan",
    types: [PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/975.png",
  },
  "9760": {
    tableIDs: [
      7, 19, 20, 21, 22, 23, 24, 25, 78, 79, 80, 81, 87, 93, 96, 98, 99, 101,
      103, 105, 108, 156, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
      174, 175, 176, 177, 178, 189, 193, 195, 216, 220, 226, 227, 228, 229, 231,
      257, 260, 261, 262, 263, 264, 265, 266, 276, 278, 280, 281, 285, 286, 287,
      6027, 7342, 7343, 7344, 7382, 7383, 7384, 7393, 7394, 7395, 7396, 7397,
      7400, 7401, 7402, 7403, 7417, 7418, 7419, 7420,
    ],
    name: "veluza",
    types: [PokemonType.WATER, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/976.png",
  },
  "9770": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
    ],
    name: "dondozo",
    types: [PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/977.png",
  },
  "9780": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
      7408, 7413,
    ],
    name: "tatsugiri-curly",
    types: [PokemonType.DRAGON, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/978.png",
  },
  "9781": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
      7409, 7412,
    ],
    name: "tatsugiri-droopy",
    types: [PokemonType.DRAGON, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10258.png",
  },
  "9782": {
    tableIDs: [
      7, 19, 22, 24, 25, 78, 79, 93, 96, 98, 101, 103, 105, 108, 156, 163, 164,
      165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
      7410, 7411,
    ],
    name: "tatsugiri-curly",
    types: [PokemonType.DRAGON, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10259.png",
  },
  "9800": {
    tableIDs: [
      5, 6, 9, 30, 39, 40, 44, 57, 59, 74, 76, 111, 113, 118, 120, 122, 131,
      137, 152, 153, 161,
    ],
    name: "clodsire",
    types: [PokemonType.POISON, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/980.png",
  },
  "9810": {
    tableIDs: [828],
    name: "farigiraf",
    types: [PokemonType.NORMAL, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/981.png",
  },
  "9820": {
    tableIDs: [828],
    name: "dudunsparce",
    types: [PokemonType.NORMAL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/982.png",
  },
  "9840": {
    tableIDs: [829],
    name: "great-tusk",
    types: [PokemonType.GROUND, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/984.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "9850": {
    tableIDs: [829],
    name: "scream-tail",
    types: [PokemonType.FAIRY, PokemonType.PSYCHIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/985.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "9860": {
    tableIDs: [829],
    name: "brute-bonnet",
    types: [PokemonType.GRASS, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/986.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "9870": {
    tableIDs: [829],
    name: "flutter-mane",
    types: [PokemonType.GHOST, PokemonType.FAIRY],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/987.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "9880": {
    tableIDs: [829],
    name: "slither-wing",
    types: [PokemonType.BUG, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/988.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "9890": {
    tableIDs: [829],
    name: "sandy-shocks",
    types: [PokemonType.ELECTRIC, PokemonType.GROUND],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/989.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "9900": {
    tableIDs: [830],
    name: "iron-treads",
    types: [PokemonType.GROUND, PokemonType.STEEL],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/990.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9910": {
    tableIDs: [830],
    name: "iron-bundle",
    types: [PokemonType.ICE, PokemonType.WATER],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/991.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9920": {
    tableIDs: [830],
    name: "iron-hands",
    types: [PokemonType.FIGHTING, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/992.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9930": {
    tableIDs: [830],
    name: "iron-jugulis",
    types: [PokemonType.DARK, PokemonType.FLYING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/993.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9940": {
    tableIDs: [830],
    name: "iron-moth",
    types: [PokemonType.FIRE, PokemonType.POISON],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/994.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9950": {
    tableIDs: [830],
    name: "iron-thorns",
    types: [PokemonType.ROCK, PokemonType.ELECTRIC],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/995.png",
    exclusiveTo: GameVersion.VIOLET,
  },
  "9960": {
    tableIDs: [
      34, 40, 41, 42, 45, 77, 83, 84, 88, 89, 90, 91, 92, 93, 94, 100, 107, 108,
      152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165, 180, 181, 206,
      207, 208, 209, 211, 212, 213, 214, 215, 216, 6026, 7439, 7443, 7444,
    ],
    name: "frigibax",
    types: [PokemonType.DRAGON, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/996.png",
  },
  "9970": {
    tableIDs: [92, 7446, 7447],
    name: "arctibax",
    types: [PokemonType.DRAGON, PokemonType.ICE],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/997.png",
  },
  "10050": {
    tableIDs: [829],
    name: "roaring-moon",
    types: [PokemonType.DRAGON, PokemonType.DARK],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1005.png",
    exclusiveTo: GameVersion.SCARLET,
  },
  "10060": {
    tableIDs: [830],
    name: "iron-valiant",
    types: [PokemonType.FAIRY, PokemonType.FIGHTING],
    shinySprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1006.png",
    exclusiveTo: GameVersion.VIOLET,
  },
}

export const paldeaMarkers: MarkerInfo[] = [
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
  {
    coords: [550, 27, 1450],
    icon: violetIcon,
    tableID: 236,
    layer: layViolet,
  },
  {
    coords: [550, 27, 1350],
    icon: violetIcon,
    tableID: 237,
    layer: layViolet,
  },
  {
    coords: [350, 27, 750],
    icon: violetIcon,
    tableID: 238,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1550],
    icon: violetIcon,
    tableID: 239,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1450],
    icon: violetIcon,
    tableID: 240,
    layer: layViolet,
  },
  {
    coords: [650, 27, 1550],
    icon: violetIcon,
    tableID: 241,
    layer: layViolet,
  },
  {
    coords: [350, 27, 850],
    icon: violetIcon,
    tableID: 242,
    layer: layViolet,
  },
  {
    coords: [350, 27, 1050],
    icon: violetIcon,
    tableID: 243,
    layer: layViolet,
  },
  {
    coords: [550, 27, 1250],
    icon: violetIcon,
    tableID: 244,
    layer: layViolet,
  },
  {
    coords: [650, 27, 1650],
    icon: violetIcon,
    tableID: 245,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1250],
    icon: violetIcon,
    tableID: 246,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1350],
    icon: violetIcon,
    tableID: 247,
    layer: layViolet,
  },
  {
    coords: [450, 27, 750],
    icon: violetIcon,
    tableID: 248,
    layer: layViolet,
  },
  {
    coords: [350, 27, 950],
    icon: violetIcon,
    tableID: 249,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1050],
    icon: violetIcon,
    tableID: 250,
    layer: layViolet,
  },
  {
    coords: [550, 27, 1550],
    icon: violetIcon,
    tableID: 251,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1150],
    icon: violetIcon,
    tableID: 252,
    layer: layViolet,
  },
  {
    coords: [450, 27, 1650],
    icon: violetIcon,
    tableID: 253,
    layer: layViolet,
  },
  {
    coords: [450, 27, 950],
    icon: violetIcon,
    tableID: 254,
    layer: layViolet,
  },
  {
    coords: [250, 27, 950],
    icon: violetIcon,
    tableID: 255,
    layer: layViolet,
  },
  {
    coords: [450, 27, 850],
    icon: violetIcon,
    tableID: 256,
    layer: layViolet,
  },
  {
    coords: [650, 27, 1450],
    icon: violetIcon,
    tableID: 257,
    layer: layViolet,
  },
  {
    coords: [350, 27, 1250],
    icon: violetIcon,
    tableID: 258,
    layer: layViolet,
  },
  {
    coords: [650, 27, 1350],
    icon: violetIcon,
    tableID: 259,
    layer: layViolet,
  },
  {
    coords: [750, 27, 1550],
    icon: violetIcon,
    tableID: 260,
    layer: layViolet,
  },
  {
    coords: [250, 27, 850],
    icon: violetIcon,
    tableID: 261,
    layer: layViolet,
  },
  {
    coords: [350, 27, 1150],
    icon: violetIcon,
    tableID: 262,
    layer: layViolet,
  },
  {
    coords: [350, 27, 1550],
    icon: violetIcon,
    tableID: 263,
    layer: layViolet,
  },
  {
    coords: [350, 27, 1650],
    icon: violetIcon,
    tableID: 264,
    layer: layViolet,
  },
  {
    coords: [750, 27, 1650],
    icon: violetIcon,
    tableID: 265,
    layer: layViolet,
  },
  {
    coords: [350, 27, 1450],
    icon: violetIcon,
    tableID: 266,
    layer: layViolet,
  },
  {
    coords: [650, 27, 1250],
    icon: violetIcon,
    tableID: 267,
    layer: layViolet,
  },
  {
    coords: [250, 27, 750],
    icon: violetIcon,
    tableID: 268,
    layer: layViolet,
  },
  {
    coords: [350, 27, 650],
    icon: violetIcon,
    tableID: 269,
    layer: layViolet,
  },
  {
    coords: [750, 27, 1350],
    icon: violetIcon,
    tableID: 270,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 350],
    icon: violetIcon,
    tableID: 271,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 450],
    icon: violetIcon,
    tableID: 272,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 450],
    icon: violetIcon,
    tableID: 273,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 450],
    icon: violetIcon,
    tableID: 274,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 450],
    icon: violetIcon,
    tableID: 275,
    layer: layViolet,
  },
  {
    coords: [1750, 27, 350],
    icon: violetIcon,
    tableID: 276,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 350],
    icon: violetIcon,
    tableID: 277,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 550],
    icon: violetIcon,
    tableID: 278,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 350],
    icon: violetIcon,
    tableID: 279,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 550],
    icon: violetIcon,
    tableID: 280,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 350],
    icon: violetIcon,
    tableID: 281,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 250],
    icon: violetIcon,
    tableID: 282,
    layer: layViolet,
  },
  {
    coords: [1750, 27, 450],
    icon: violetIcon,
    tableID: 283,
    layer: layViolet,
  },
  {
    coords: [1250, 27, 450],
    icon: violetIcon,
    tableID: 284,
    layer: layViolet,
  },
  {
    coords: [1350, 27, 650],
    icon: violetIcon,
    tableID: 285,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 550],
    icon: violetIcon,
    tableID: 286,
    layer: layViolet,
  },
  {
    coords: [1250, 27, 550],
    icon: violetIcon,
    tableID: 287,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 250],
    icon: violetIcon,
    tableID: 288,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 650],
    icon: violetIcon,
    tableID: 289,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 850],
    icon: violetIcon,
    tableID: 290,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 750],
    icon: violetIcon,
    tableID: 291,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 1150],
    icon: violetIcon,
    tableID: 292,
    layer: layViolet,
  },
  {
    coords: [1450, 27, 850],
    icon: violetIcon,
    tableID: 293,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 950],
    icon: violetIcon,
    tableID: 294,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 1150],
    icon: violetIcon,
    tableID: 295,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 850],
    icon: violetIcon,
    tableID: 296,
    layer: layViolet,
  },
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
  {
    coords: [1550, 27, 750],
    icon: violetIcon,
    tableID: 299,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 1050],
    icon: violetIcon,
    tableID: 300,
    layer: layViolet,
  },
  {
    coords: [1550, 27, 950],
    icon: violetIcon,
    tableID: 301,
    layer: layViolet,
  },
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
  {
    coords: [1750, 27, 950],
    icon: violetIcon,
    tableID: 304,
    layer: layViolet,
  },
  {
    coords: [1650, 27, 1250],
    icon: violetIcon,
    tableID: 305,
    layer: layViolet,
  },
  {
    coords: [1750, 27, 850],
    icon: violetIcon,
    tableID: 306,
    layer: layViolet,
  },
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
