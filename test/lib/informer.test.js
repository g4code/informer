
var should    = require("chai").should(),
    suite     = require("../suite"),
    informer  = require(suite.path("informer")),
    LogMock   = require(suite.mock("informer/log.mock")),
    TitleMock = require(suite.mock("informer/title.mock"));

describe("informer", function(){

    informer.title("informer");
    informer.titleColor("cyan");
    informer.error("aaaaaa");
    informer.info("aaaaaa");
    informer.success("aaaaaa");
    informer.warning("aaaaaa");
    informer.loading("aaaaa");

    beforeEach(function() {

        informer.titleManager  = new TitleMock();
        informer.log           = new LogMock();
        informer.log.message   = "message";
        informer.log.titleText = "title";
    });

    describe("error", function() {

        it("shoud echo error message", function() {

            informer.log.colorName = "red";
            informer.error(informer.log.message);
        });
    });

    describe("info", function() {

        it("shoud echo info message", function() {

            informer.log.colorName = "blue";
            informer.info(informer.log.message);
        });
    });

});