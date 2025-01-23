async function main() {
    try {
        const path =
            "https://raw.githubusercontent.com/devgiri0082/my-free-icons/refs/heads/master/svg.json";
        const res = await fetch(path);
        const data = await res.json();
        console.log(data[0]);
    } catch (err) {
        console.log(err);
    }
}

main();
