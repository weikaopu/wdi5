const { baseConfig } = require("./wdio.base.conf")
const merge = require("deepmerge")

const _config = {
    specs: ["../webapp/test/e2e/basic.test.js"],
    baseUrl: "http://localhost:8888"
}

exports.config = merge(baseConfig, _config)
