const fs = require("node:fs/promises");

async function main() {
    path = "./svg.json"
    try {
        const data= await fs.readFile(path)
        const iconArr =  JSON.parse(data.toString())
        console.log(iconArr[0])
    } catch(err) {
        console.log(err)
    }
}

main()
