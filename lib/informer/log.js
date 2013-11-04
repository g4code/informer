
var color = require("./color");

var logTitle   = '',
    logMessage = '',
    logColor   = '';

function Log()
{

};

Log.prototype = {

    color: function(colorName)
    {
        logColor = color.getValid(colorName);

        return this;
    },

    echo: function()
    {
        console.log(logTitle + " " + logMessage[logColor]);
    },

    message: function(message)
    {
        logMessage = message;

        return this;
    },

    title: function(title)
    {
        logTitle = title;

        return this;
    }
};

module.exports = Log;