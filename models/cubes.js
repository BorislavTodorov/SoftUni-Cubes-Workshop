const { v4 } = require("uuid")
const fs = require("fs")
const path = require('path')
const dataBaseFile = path.join(__dirname, "..", '/config/database.json')
class Cube {

    constructor(name, description, imageurl, difficulty) {
        this.id = v4()
        this.name = name || "No name"
        this.description = description
        this.imageurl = imageurl || "placeholder"
        this.difficulty = difficulty || 0
    }

    //saveCube
    save() {
            const data = {
                id: this.id,
                name: this.name,
                description: this.description,
                imageurl: this.imageurl,
                difficulty: this.difficulty
            }

            fs.readFile(dataBaseFile, (err, dbData) => {
                if (err) {
                    throw err
                }
                const cubes = JSON.parse(dbData)
                console.log(cubes)
                cubes.push(data)
                fs.writeFile(path.join(__dirname, "..", '/config/database.json'), JSON.stringify(cubes), error => {
                    if (error) {
                        throw error
                    }
                    console.log('New cube is succesfully stored')
                })

            })
        }
        //getCube

}

module.exports = Cube