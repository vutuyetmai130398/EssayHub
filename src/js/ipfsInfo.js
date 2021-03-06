import React, {Component} from 'react';
import {web3, account} from './web3';
import ipfs from './ipfs';
import storehash from './storehash';
import storeEssayInfo from './storeEssayInfo'

class ipfsCreation extends Component{
    state = {
        ipfsHash: null,
        buffer: '',
        hashfile:'',
        authorName: '',
        essayName: '',
        cost: '',
        time: '',
        type: ''
    }

    captureFile = (event) => {
        event.stopPropagation()
        event.preventDefault()

        const file = event.target.files[0]
        let reader = new window.FileReader()

        reader.readAsArrayBuffer(file)
        reader.onloadend = () =>{
            this.SaveFileInfo()
            this.convertToBuffer(reader)
            this.HashFile(file)
        }
    };

    SaveFileInfo = async() =>{
        this.setState({authorName: $("#authorName")})
        this.setState({essayName: $("#essayName")})
        this.setState({type: $("#type")})
        this.setState({cost: $("#cost")})
        this.setState({time: $("#ShareCount")})

    };

    HashFile = async(file)=> {
        const crypto = require('crypto')
        const fs=require("fs");
        const hash = crypto.createHash('sha256');
        const input = fs.createReadStream(file);

        input.on('readable',() =>{
            const data = input.read();

            if(data)
                hash.update(data);
            this.setState({hashfile: hash})

        })
    };

    convertToBuffer = async(reader)=>{
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
    };
    
    onSubmit = async(event) =>{
        event.preventDefault()

        account = await web3.eth.getAccounts()

        await ipfs.add(this.state.buffer, (err, ipfsHash)=>{
            console.log(err, ipfsHash);
            this.setState({ipfsHash: ipfsHash[0].hash});
            
            storeEssayInfo.methods.uploadEssay(this.state.authorName, this.state.essayName, this.state.type, this.state.HashFile, this.state.ipfsHash, this.state.cost).send({
                from: storeEssayInfo.options.account
                }
            );
        })
    };

    onVoteSubmit = async(event, id) =>{
        event.preventDefault()
        if(true){
            storeEssayInfo.methods.votingByTeacher(id).send({
                from: storeEssayInfo.options.account
            });
        }
        else{
            storeEssayInfo.methods.votingByOther(id).send({
                from: storeEssayInfo.options.account
            });
        }
    };

    onShareViewSubmit = async(event, id) => {
        event.preventDefault()
        document.getElementById("btnShare").disabled = true;
        storeEssayInfo.methods.getCostToShareView(id).send({
            from: storeEssayInfo.options.account
        }).then(function(instance){
            this.getFileByIPFS(instance[0], instance[1])
        });
    };

    onExclusiveViewSubmit = async(event, id) =>{
        event.preventDefault()
        document.getElementById("btnExclusive").disabled = true;
        storeEssayInfo.methods.getCostToExclusiveView(id).send({
            from:  storeEssayInfo.options.account
        }).then(function(instance){
            this.getFileByIPFS(instance[0], instance[1])
        })
    };

    getFileByIPFS = async(hashfile, ipfshash) =>{
        return (
            <div id="GetFileByIPFS">
                <label>
                    Hash of your file: ${hashfile}
                </label>
                <a href='http://ipfs.io/ipfs/${ipfshash}'>
                    Read File
                </a>
            </div>
        )
    };

    displayEssay = async(hashfile) => {
        $("#essays").empty();
        essayInstance.getEssay(hashfile).then(function(essay){
            $("#essays").append(`<div class = "essay">
                <ul>
                    <li> Author Name: ${essay[0]} </li>
                    <li> Essay Name: ${essay[1]} </li>
                    <li> Type: ${essay[2]}</li>
                    <li> Time: ${essay[3]}</li>
                    <li> Score: ${essay[4]}</li>
                    <li> Share Count: ${essay[5]}</li>
                    <li> Exclusive Cost: ${essay[6]}</li>
                    <li> File Hash: ${essay[7]}</li>
                </ul>
            `)
        })
    };

    render(){
        return(
            <div className = "UploadFile">
                <header className ="UploadFile-Header">
                    <h1>
                        Choose File
                    </h1>
                </header>
                <hr/>
                    <form onSubmit={this.onSubmit}>
                        <input type = "file" onChange={this.captureFile}>
                        </input>
                        <button bsStype = "primary" type ="Submit">
                            Upload
                        </button>
                    </form> 
                <hr/>
            </div>
        )
    }
}

export default ipfsCreation;