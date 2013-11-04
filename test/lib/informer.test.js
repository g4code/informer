
var should   = require("chai").should(),
    suite    = require("../suite"),
    informer = require(suite.path("informer"));

describe("informer", function(){

    informer.title("aaaaaaaa");
    informer.titleColor("cyan");
    informer.error("aaaaaa");
    informer.info("aaaaaa");
    informer.success("aaaaaa");
    informer.warning("aaaaaa");
    informer.loading("aaaaa");

    describe("init", function(){

        it("shoud call check for config", function(){

        });
    });

});