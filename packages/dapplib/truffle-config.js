require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar proof harvest force frame spread'; 
let testAccounts = [
"0xe6d3ea38bd3c575a3fd21cc47287e6c0236cd080f87d3b2bf53c797fa526ad31",
"0x50c13f2addb8c74a94c7699ae65a4502c39fe2d62dcc4abc3f9833436ae5cba6",
"0x0fb45cb9b32b439f4f6f18c557ba8785f55322cb01247007fd0f6ad686c1379c",
"0x86a4f430c82556f8f833a45653056359fd5b560568b0ba8367f56807dc46b51e",
"0x3329cba04228f27f8b36faf07068dca0d893b7320b1e4c7b241f6caa7716d650",
"0x6574b5c520a0c69d9819e274e9fb84214f5c5f7c64ff30fcec2e8719ca888f20",
"0x0aed2ab595f0593597be08695462640b5f8281a732b6434393ab1e07cc42a728",
"0xeb4e1db5d59568bb91461fa62386732795b686f8d393f57691b4ee0dc0bcb734",
"0x48e1fad7b627c119886ed14878509e5edebbf9768fed180f3e1e115de7536c2f",
"0x625ae7d5af22bfadfbe3f8a8c3c3b35c0e848bbd964d9dc4284ea0aefdc1ba0e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


