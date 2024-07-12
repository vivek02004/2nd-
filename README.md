# Smart Contract Interaction with Web3.js

This project demonstrates how to interact with a smart contract using Web3.js. It allows users to set and get a value stored in the smart contract through a simple web interface.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract](#smart-contract)
- [Web Interface](#web-interface)
- [License](#license)

## Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Open the project folder**

3. **Install dependencies**
    
    npm install


4. **Run the local server**
   
start
    ```

## Usage

1. **Deploy your Smart Contract**

   Ensure that you have a deployed smart contract with the following ABI and address:

   ```json
   const contractAddress = '0x37305d09e54fCc411832f951ADb9dD886A2A6d33';  
   const contractABI = [
       {
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
   ```

2. **Open the Web Interface**

   Open the `index.html` file in your web browser.

3. **Connect to MetaMask**

   The web interface will automatically prompt you to connect to MetaMask. Ensure you have MetaMask installed and set up in your browser.

4. **Set and Get Values**

   - **Set Value**: Enter a value in the input field and click the "Set Value" button. Confirm the transaction in MetaMask.
   - **Get Value**: Click the "Get Value" button to retrieve and display the current value stored in the smart contract.

## Smart Contract

The smart contract used in this project has two functions: `setValue` and `getValue`.

- **setValue**: Stores a `uint256` value on the blockchain.
- **getValue**: Retrieves the stored `uint256` value from the blockchain.

Example of the smart contract in Solidity:


pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;

    function setValue(uint256 _value) public {
        value = _value;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
```

## Web Interface

The web interface uses Web3.js to interact with the smart contract. It includes two main functions: `setValue` and `getValue`.

- **setValue()**: Retrieves the value from an input field and sends a transaction to store it in the smart contract.
- **getValue()**: Calls the smart contract to retrieve the stored value and displays it on the web page.

Example code snippet:

```javascript
async function setValue() {
    const value = document.getElementById('setValueInput').value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.setValue(value).send({ from: accounts[0] });
}

async function getValue() {
    const value = await contract.methods.getValue().call();
    document.getElementById('valueDisplay').innerText = `Value: ${value}`;
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
