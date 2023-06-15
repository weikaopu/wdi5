import fs from "fs"

fs.copyFile("./package.json", "./dist/cjs/package.json", (err) => {
    if (err) throw err
    console.log("package.json was copied successfully to cjs")
})

fs.copyFile("./package.json", "./dist/mjs/package.json", (err) => {
    if (err) throw err
    console.log("package.json was copied successfully esm")
})
