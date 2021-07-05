const MyToken = artifacts.require('MyToken');
const Dachsador = artifacts.require("Dachsador");

module.exports = async function(callback) {
    myToken = await MyToken.deployed()
    dachsador = await Dachsador.deployed()
    balance = await myToken.balanceOf(dachsador.address)
    console.log(web3.utils.fromWei(balance.toString()))
    callback();
}