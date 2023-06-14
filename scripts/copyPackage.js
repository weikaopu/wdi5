const fs = require("fs")

fs.copyFile("./package.json", "./dist/cjs/package.json", (err) => {
    if (err) throw err
    console.log("package.json was copied successfully to cjs")
})

fs.copyFile("./package.json", "./dist/esm/package.json", (err) => {
    if (err) throw err
    console.log("package.json was copied successfully esm")
})
