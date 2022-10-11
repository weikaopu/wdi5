const { join } = require("path")
const { baseConfig } = require("./wdio.base.conf")
const merge = require("deepmerge")

const _config = {
    wdi5: {
        url: "#"
    },
    specs: [join("webapp", "test", "e2e", "**/*.test.js")],
    exclude: [join("webapp", "test", "e2e", "ui5-late.test.js"), join("webapp", "test", "e2e", "multiremote.test.js")],
    // baseUrl: "https://davinci.cpp.cfapps.eu10.hana.ondemand.com/474a7c0c-c364-4075-b53e-983472d76120.basicservice.testSample-1.0.0/index.html",
    baseUrl: "http://localhost:8888",
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    services: [
        [
            "browserstack",
            {
                browserstackLocal: true
            }
        ]
    ]
}

// browsers
const chrome = {
    browserName: "Chrome",
    browserVersion: "latest",
    "bstack:options": {
        os: "OS X",
        osVersion: "Monterey"
    }
}

const firefox = {
    browserName: "Firefox",
    browserVersion: "latest",
    "bstack:options": {
        os: "Windows",
        osVersion: "10"
    }
}

const edge = {
    browserName: "Edge",
    browserVersion: "latest",
    "bstack:options": {
        os: "Windows",
        osVersion: "11"
    }
}

const conf = merge(baseConfig, _config)

// add browsers
conf.capabilities = []
// conf.capabilities.push(chrome)
conf.capabilities.push(firefox)
// conf.capabilities.push(edge)
// override, not merge
conf.services = [["browserstack", { browserstackLocal: true }], "ui5"]

exports.config = conf
