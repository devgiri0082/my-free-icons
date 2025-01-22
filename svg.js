const fs = require("node:fs/promises");
async function main() {
    const svgs = "./svgs";
    try {
        const collections = await fs.readdir(svgs);
        const icons_collection = {};
        for (const collection of collections) {
            if (collection.startsWith(".")) continue;
            const icons = await fs.readdir(`${svgs}/${collection}`);
            const each_col = {
                name: collection,
                icons: [],
            };
            icons.forEach((icon) => {
                if (icon.startsWith(".")) return;
                each_col.icons.push({
                    title: icon.split(".")[0],
                    link:
                        `https://raw.githubusercontent.com/devgiri0082/my-free-icons/refs/heads/master/svgs/${collection}/${icon}`,
                });
            });
            console.log(collection);
            icons_collection[collection] = each_col;
        }
        //console.log(icons_collection);
        fs.writeFile("./svg.json", JSON.stringify(icons_collection));
    } catch (err) {
        console.log(err);
    }
}
main();
