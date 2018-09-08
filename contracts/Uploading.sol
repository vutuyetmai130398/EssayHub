pragma solidity ^0.4.22;
import "./EssayHub.sol";
import "./EssayInfo.sol";
import "./onlyStudent.sol";


contract Uploading is EssayHub, onlyStudent {
  constructor() public{
  }

  uint private costValue;

  function setCost(uint cost) private {
    costValue = cost;
  }

  function getCost() public returns (uint) {
    return costValue;
  }

  function addEssayInfo(string authorname, string Essayname, string hashfile, string ipfshash, string filetype) public checkStudent(costValue) returns (bool){
    if(checkExistAndExclusive(hashfile)==true){
      return false;
    }
    //Declare the EssayInfo variable
    EssayInfo essayinfo;
  
    //Set essay
    essayinfo.SetEssay(authorname, Essayname, hashfile, ipfshash, filetype);
    setExistAndExclusive(hashfile);
    addEssayArray(essayinfo);    

    return true;
  }

}
