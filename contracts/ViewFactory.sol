pragma solidity ^0.4.22;
import "./ViewType.sol";
import "./ViewExclusiveType.sol";
import "./ViewShareType.sol";
import "./abstractViewFactory.sol";
import "./VotingType.sol";
import "./VoteByTeacher.sol";
import "./VoteByOther.sol";

contract ViewFactory {
  constructor() public{
  }

  function getView(string typeview) public returns (ViewType){
    if (keccak256(abi.encodePacked(typeview)) == keccak256(abi.encodePacked(""))) {
      return;
    } else if(keccak256(abi.encodePacked(typeview)) == keccak256(abi.encodePacked("ExclusiveView"))){
      return new ViewExclusiveType();
    }
    else if(keccak256(abi.encodePacked(typeview)) == keccak256(abi.encodePacked("ShareView"))){
      return new ViewShareType();
    }
    return;
  }

  function getEssayByKeyWord(string keyword) public returns (ViewByKeyword) {
    
  }

  function getVote(string position) public returns (VotingType) {
    if(keccak256(abi.encodePacked(position)) == keccak256(abi.encodePacked(""))){
      return;
    }

    if(keccak256(abi.encodePacked(position)) == keccak256(abi.encodePacked("Teacher"))){
      return new VoteByTeacher();
    }
    
    if(keccak256(abi.encodePacked(position)) == keccak256(abi.encodePacked("Other"))){
      return new VoteByOther();
    }

    return;
  }
}
