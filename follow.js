   if (proxy) {
        if (proxy.includes('http')) {
            agent = new HttpsProxyAgent(proxy)
        }

        if (proxy.includes('socks')) {
            agent = new SocksProxyAgent(proxy)
        }
    }

    return agent
}

export function getProxyAddress(index = 0, isRandom = false) {
    let proxy = null
    if (proxies.length) {
        if (proxies[index]) {
            if (isRandom) {
                proxy = proxies[random(0, proxies.length)]
            } else {
                proxy = proxies[index]
            }
        } else {
            proxy = proxies[0]
        }
    }

    return proxy
}

export function sortObjectByKey(obj) {
    const sortedEntries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    return Object.fromEntries(sortedEntries)
}

export const multicallAddress = '0xca11bde05977b3631167028862be2a173976ca11'

export const multicallAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getCurrentBlockTimestamp",
        "outputs": [{ "name": "timestamp", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "components": [
                    { "name": "target", "type": "address" },
                    { "name": "callData", "type": "bytes" }
                ],
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "aggregate",
        "outputs": [
            { "name": "blockNumber", "type": "uint256" },
            { "name": "returnData", "type": "bytes[]" }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLastBlockHash",
        "outputs": [{ "name": "blockHash", "type": "bytes32" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "addr", "type": "address" }],
        "name": "getEthBalance",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCurrentBlockDifficulty",
        "outputs": [{ "name": "difficulty", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCurrentBlockGasLimit",
        "outputs": [{ "name": "gaslimit", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCurrentBlockCoinbase",
        "outputs": [{ "name": "coinbase", "type": "address" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "blockNumber", "type": "uint256" }],
        "name": "getBlockHash",
        "outputs": [{ "name": "blockHash", "type": "bytes32" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
