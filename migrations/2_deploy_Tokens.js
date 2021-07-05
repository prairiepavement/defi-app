const MyToken = artifacts.require('MyToken')
const Dachsador = artifacts.require('Dachsador')

module.exports = async function(deployer, network, accounts) {
    // Deploy MyToken
    await deployer.deploy(MyToken)
    const myToken = await MyToken.deployed()

    // Deploy Dachsador
    await deployer.deploy(Dachsador, myToken.address)
    const dachsador = await Dachsador.deployed()
}