pragma solidity ^0.4.22;
import "./onlyStudent.sol";
import "./ViewType.sol";

contract ViewShareType is onlyStudent, ViewType {
  constructor() public{
  }

  uint costValue = 0;

  function ViewProcess(EssayInfo essay) external view returns (uint, string){
    string memory str;
    (,,str,,,,) = essay.getEssay();

    return (costValue, str);  
  }
  
  function setCost(EssayInfo essay, uint cost) public onlyStudents(essay) {
    costValue = cost;
  }

}
