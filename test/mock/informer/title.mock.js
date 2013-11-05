
var titleColor = "green",
    titleText  = "[informer]";

function Title()
{

};

Title.prototype = {

    getColor: function()
    {
        return titleColor;
    },

    getText: function()
    {
        return titleText;
    },

    setColor: function(colorName)
    {
        colorName.should.be.a("string");

        return this;
    },

    setText: function(title)
    {
        title.should.be.a("string");

        return this;
    }

};

module.exports = Title;