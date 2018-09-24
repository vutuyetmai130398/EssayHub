import React, { Component } from 'react';
import web3 from './web3'
import './App.css';
import ipfs from './ipfs';
import storeEssayInfo from './storeEssayInfo';

class App extends Component{

    state = {
        ipfsHash: '',
        buffer: null,
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
        //    this.SaveFileInfo()
            this.convertToBuffer(reader)
       //     this.HashFile(reader)
        }
    };

 /*   SaveFileInfo = async() =>{
        this.setState({authorName: $("#authorName")})
        this.setState({essayName: $("#essayName")})
        this.setState({type: $("#type")})
        this.setState({cost: $("#cost")})
        this.setState({time: $("#ShareCount")})

    };*/

    HashFile = async(file)=> {
        
    };

    convertToBuffer = async(reader)=>{
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
        console.log(this.state.buffer)
    };
    
    onSubmit = async(event)=> {
        event.preventDefault()
        ipfs.files.add(this.state.buffer, (error, result) => {
          if(error) {
            console.error(error)
            return;}
            
            console.log('abc');
          console.log(result[0].hash);
         /* this.simpleStorageInstance.set(result[0].hash, { from: this.state.account }).then((r) => {
            return this.setState({ ipfsHash: result[0].hash })
            console.log('ifpsHash', this.state.ipfsHash)
          })*/
        })
      }

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
        // event.preventDefault()
        // document.getElementById("btnShare").disabled = true;
        // storeEssayInfo.methods.getCostToShareView(id).send({
        //     from: storeEssayInfo.options.account
        // }).then(function(instance){
        //     this.getFileByIPFS(instance[0], instance[1])
        // });
    };

    onExclusiveViewSubmit = async(event, id) =>{
        // event.preventDefault()
        // document.getElementById("btnExclusive").disabled = true;
        // storeEssayInfo.methods.getCostToExclusiveView(id).send({
        //     from:  storeEssayInfo.options.account
        // }).then(function(instance){
        //     this.getFileByIPFS(instance[0], instance[1])
        // })
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
    handleFiles = files => {
      console.log(files.base64)
    }
     
    
  /*  displayEssay = async(hashfile) => {
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
    };*/

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
                        <button bsStype = "primary" type ="submit">
                            Upload
                        </button>
                      
                    </form> 
                <hr/>
                
            </div>
        )
    }
}
export default App;
