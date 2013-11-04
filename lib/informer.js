
var colors = require("colors"),
    _      = require("underscore"),
    Title  = require("./informer/title"),
    Log    = require("./informer/log");


function Informer(title) {

    this.log          = new Log();
    this.titleManager = new Title();
}

Informer.prototype = {

    error: function(msg)
    {
        this.log.title(this.titleManager.getText())
                .message("Error:"+" "+msg)
                .color("red")
                .echo();
    },

    isValidColor: function(color)
    {
        return _.indexOf(colorOptions) > -1;
    },

    info: function(msg)
    {
        this.log.title(this.titleManager.getText())
                .message("Info:"+" "+msg)
                .color("blue")
                .echo();
    },

    loading: function(msg)
    {
        this.log.title(this.titleManager.getText())
                .message(msg+"...")
                .color("white")
                .echo();
    },

    title: function(text)
    {
        this.titleManager.setText(text);

        return this;
    },

    titleColor: function(color)
    {
        this.titleManager.setColor(color);

        return this;
    },

    success: function(msg)
    {
        this.log.title(this.titleManager.getText())
                .message("Success:"+" "+msg)
                .color("green")
                .echo();
    },

    warning: function(msg)
    {
        this.log.title(this.titleManager.getText())
                .message("Warning:"+" "+msg)
                .color("yellow")
                .echo();
    }
};

module.exports = new Informer();