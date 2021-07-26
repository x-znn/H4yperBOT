const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "";
        this.colorTitle = "#03A9F4";
    }
};