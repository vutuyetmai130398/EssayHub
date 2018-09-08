pragma solidity ^0.4.22;
import "./EssayInfo.sol";
import "./onlyStudent.sol";


contract EssayHub {
  constructor() public {
  }

  mapping (string => bool) private isExclusive;
  mapping(string => bool) private isExist;
  EssayInfo[] private essays;

  //Abstract function
  function getCost() public returns(uint);

  function printEssay(EssayInfo essay)public view {
    essay.getEssay();
  }

  function addEssayArray(EssayInfo essay) internal{
    essays.push(essay);
  }

  function checkExistAndExclusive(string hashfile) public returns (bool) {
    if(isExclusive[hashfile]==true || isExist[hashfile]==true)
      return false;
    return true;
  }

  function setExistAndExclusive(string str) internal {
    isExist[str] = true;
    isExclusive[str] = false;
  }
}

