const fs = require("node:fs/promises");
async function main() {
    const final = [];
    const svgs = "./svgs";
    try {
        const collections = await fs.readdir(svgs);
        const icons_collection = {};
        collections.forEach(async (collection) => {
            if (collection.startsWith(".")) return;
            const icons = await fs.readdir(`${svgs}/${collection}`);
            const each_col = {
                name: collection,
                icons: [],
            };
            icons.forEach(icon => {
                if (icon.startsWith(".")) return;
                each_col.icons.push({
                    title: icon.split(".")[0],
                    link: `https://raw.githubusercontent.com/devgiri0082/my-free-icons/refs/heads/master/svgs/${icon}`
                })
            }
        });

        fs.writeFile("./svg.json", JSON.stringify(final));
    } catch (err) {
        console.log(err);
    }
}
main();
