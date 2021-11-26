require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strike rival place concert grace lobster equal giant'; 
let testAccounts = [
"0x472dfcb5c8d12d1b685b8b501e417325a4f70ca8a46f89d2a64aeb3e3a8e2c16",
"0xbe9426b076c33671b374eeb14a2fa284a7bb6a0ce1a0251ed99f99f10037d7af",
"0xd03ae6854d99a7e66b30e894e0e35b5d2d1e05227433477ec72f5f3ee9bd777e",
"0x718e8c1a7b774acdc89c334a2fab9333cf0ef9c0df0161aeafb4fbdcf67baf43",
"0x5d005f86c2a3480e2c3b8f485fbbf8d44b69eb32a8012a8aac0d79ed67f29573",
"0x132430c791d4eaebf4ed5068cfed2fcaaeb4d54528b5abc54fe0993f7cbffc7f",
"0xe093b2660793965afa8f376baf666f7aa7e99e4964a57575bfa00e0a313164f1",
"0xe7c62f495882202fe1061e0619b6d200fb2ab7e032a3004f8a418764d285eeba",
"0xf6e17ce5b96620429a30342ab552bfc6662b493e66d095c6a950c9739fbb3295",
"0x0fd9228c6bb20b9056b79b4bf3a6a162b1b9acf8f5c081b5a4845074052d5990"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

