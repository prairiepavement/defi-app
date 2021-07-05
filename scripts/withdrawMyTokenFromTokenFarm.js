const MyToken = artifacts.require("MyToken");
const Dachsador = artifacts.require("Dachsador");

module.exports = async function(callback) {
    const accounts = await new web3.eth.getAccounts();
    const myToken = await MyToken.deployed(); 
    const dachsador = await Dachsador.deployed(); 

    // Verify accounts[0] and dachsador balance of MyToken before and after the transfer
    balanceMyTokenBeforeAccounts0 = await myToken.balanceOf(accounts[0]);
    balanceMyTokenBeforeDachsador = await myToken.balanceOf(dachsador.address);
    console.log('*** My Token ***')
    console.log('Balance MyToken Before accounts[0] ' + web3.utils.fromWei(balanceMyTokenBeforeAccounts0.toString()))
    console.log('Balance MyToken Before TokenFarm ' + web3.utils.fromWei(balanceMyTokenBeforeDachsador.toString()))

    console.log('*** Dachsador ***')
    balanceDachsadorBeforeAccounts0 = await dachsador.balanceOf(accounts[0]);
    balanceDachsadorBeforeDachsador = await dachsador.balanceOf(dachsador.address);
    console.log('Balance Dachsador Before accounts[0] ' + web3.utils.fromWei(balanceDachsadorBeforeAccounts0.toString()))
    console.log('Balance Dachsador Before TokenFarm ' + web3.utils.fromWei(balanceDachsadorBeforeDachsador.toString()))

    // Call Deposit function from Dachsador
    console.log('Call Withdraw Function')
    await dachsador.withdraw(web3.utils.toWei('100', 'ether'));

    console.log('*** My Token ***')
    balanceMyTokenAfterAccounts0 = await myToken.balanceOf(accounts[0]);
    balanceMyTokenAfterDachsador = await myToken.balanceOf(dachsador.address);
    console.log('Balance MyToken After accounts[0] ' + web3.utils.fromWei(balanceMyTokenAfterAccounts0.toString()))
    console.log('Balance MyToken After TokenFarm ' + web3.utils.fromWei(balanceMyTokenAfterDachsador.toString()))

    console.log('*** Dachsador ***')
    balanceDachsadorAfterAccounts0 = await dachsador.balanceOf(accounts[0]);
    balanceDachsadorAfterDachsador = await dachsador.balanceOf(dachsador.address);
    console.log('Balance Dachsador After accounts[0] ' + web3.utils.fromWei(balanceDachsadorAfterAccounts0.toString()))
    console.log('Balance Dachsador After TokenFarm ' + web3.utils.fromWei(balanceDachsadorAfterDachsador.toString()))

    // End function
    callback();
}