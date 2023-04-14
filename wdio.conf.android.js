const path = require('path');
const { config } = require("./wdio.conf");

config.specs = [
    './test/android/specs/login-screen.spec.js'
    // ToDo: define location for spec files here
],

config.capabilities = [
    {
        platformName: "Android",
        "appium:udid": "TMF4C19719002214",
        "appium:deviceName": "PTCL-BP",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity",
        "appium:app": path.join(process.cwd(),"./app/android/ApiDemos-debug.apk"),
        "appium:noReset": true
    }
]

exports.config = config