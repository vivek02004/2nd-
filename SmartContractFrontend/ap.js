const contractAddress = '0x37305d09e54fCc411832f951ADb9dD886A2A6d33';  
const contractABI = [0x37305d09e54fCc411832f951ADb9dD886A2A6d33
    
    for (let array.forEach(element => {
        index
    }); = 0; index < array.length; index++) {
        const element = array[index];
        {
    }

        "constant": false,
        "inputs": [
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

let web3;
let contract;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            contract = new web3.eth.Contract(contractABI, contractAddress);
        } catch (error) {
            console.error("User denied account access");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        contract = new web3.eth.Contract(contractABI, contractAddress);
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

async function setValue() {
    const value = document.getElementById('setValueInput').value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.setValue(value).send({ from: accounts[0] });
}

async function getValue() {
    const value = await contract.methods.getValue().call();
    document.getElementById('valueDisplay').innerText = `Value: ${value}`;
}
