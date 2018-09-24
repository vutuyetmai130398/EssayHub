var web3 = require('./web3').default;
//Load contract address
var contract = "0x66144c6b829600e909dcef7e5752cf61cefc48b1";

var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCostToExclusiveView",
		"outputs": [
			{
				"name": "filehash",
				"type": "string"
			},
			{
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "votingByTeacher",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hashfile",
				"type": "string"
			}
		],
		"name": "checkEssayUploading",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getEssay",
		"outputs": [
			{
				"name": "Author",
				"type": "string"
			},
			{
				"name": "Essay",
				"type": "string"
			},
			{
				"name": "Type",
				"type": "string"
			},
			{
				"name": "Time",
				"type": "uint32"
			},
			{
				"name": "Score",
				"type": "uint32"
			},
			{
				"name": "ShareCount",
				"type": "uint32"
			},
			{
				"name": "ExclusiveCost",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "authorName",
				"type": "string"
			},
			{
				"name": "essayName",
				"type": "string"
			},
			{
				"name": "essayType",
				"type": "string"
			},
			{
				"name": "hashfile",
				"type": "string"
			},
			{
				"name": "ipfshash",
				"type": "string"
			},
			{
				"name": "ExclusiveCost",
				"type": "uint256"
			}
		],
		"name": "uploadEssay",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "essays",
		"outputs": [
			{
				"name": "authorName",
				"type": "string"
			},
			{
				"name": "essayName",
				"type": "string"
			},
			{
				"name": "essayType",
				"type": "string"
			},
			{
				"name": "hashfile",
				"type": "string"
			},
			{
				"name": "ipfshash",
				"type": "string"
			},
			{
				"name": "time",
				"type": "uint32"
			},
			{
				"name": "Score",
				"type": "uint32"
			},
			{
				"name": "ShareCount",
				"type": "uint32"
			},
			{
				"name": "ExclusiveCost",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCostToShareView",
		"outputs": [
			{
				"name": "filehash",
				"type": "string"
			},
			{
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "votingByOther",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

export default new web3.eth.contract(abi, contract);