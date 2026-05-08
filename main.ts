game.splash("Base A?")
let Base_A = game.askForNumber("")
game.splash("Base B?")
let Base_B = game.askForNumber("")
game.splash("Height?")
let Height = game.askForNumber("")
let Area = (Base_A + Base_B) / 2 * Height
game.splash("\"Here is your area.\"")
game.splash(Math.round(100 * Area) / 100)
