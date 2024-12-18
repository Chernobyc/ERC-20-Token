const ClownToken = artifacts.require("ClownToken");

module.exports = function(deployer) {
    deployer.deploy(ClownToken, 1000); // Здесь укажите начальное количество токенов
};
