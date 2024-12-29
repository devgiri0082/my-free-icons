const fs = require("node:fs/promises")
async function main() {
    const final = []
    const svgs = "./svgs"
    try {
        const content = await fs.readdir(svgs)
        const types = new Set()
        const chunk= []
        content.forEach(icon => {
            if(!icon.includes("brand")) {
                if(chunk.length === 100) {
                    final.push([...chunk])
                    chunk.length = 0
                }
                chunk.push({
                    title: icon.split(".")[0],
                    link: `https://raw.githubusercontent.com/free-icons/free-icons/refs/heads/master/svgs/${icon}`
                })
            }
        })
        
        fs.writeFile("./svg.json", JSON.stringify(final))
    } catch (err) {
        console.log(err)
    }
main()
