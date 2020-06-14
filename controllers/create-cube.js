const Cube = require("../models/cubes")
const newCube = new Cube("Default", "this is the default cube", 'https://google.com', 1)

newCube.save()
console.log(newCube)