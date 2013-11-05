
var should = require("chai").should();

function Log()
{

};

Log.prototype = {

    colorName: null,

    message: null,

    titleText: null,


    color: function(colorName)
    {
        colorName.should.be.a("string");
        colorName.should.equal(this.colorName);

        return this;
    },

    echo: function()
    {
        "test".should.be.ok;
    },

    message: function(message)
    {
        message.should.be.a("string");
        message.should.equal(this.message);

        return this;
    },

    title: function(title)
    {
        console.log(title);
        title.should.be.a("string");
        title.should.equal(this.titleText);

        return this;
    }
};

module.exports = Log;