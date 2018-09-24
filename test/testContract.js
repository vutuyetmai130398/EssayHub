var EssayHub = artifacts.require("../contracts/EssayHub.sol");

contract ('EssayHub', function(accounts) {
    var essayHubInstance;

    it("Initializes no essays", function(){
        return EssayHub.deployed(). then(function(instance){
            return instance.count();
        }).then(function(count){
            assert.equal(count, 0)
        })
    })

    it("Uploading File", function(){
        return EssayHub.deployed().then(function(instance){
           instance.uploadEssay("Nguyen Van a", "abc", "Culture", "eihighi", "ihurfhiw", 8);
           return instance.count();
        }).then(function(count){
            assert.equal(count, 1);
        })
    })
})

