const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "SUCCESS VERIFY";
        this.colorTitle = "#03A9F4";
    }
};