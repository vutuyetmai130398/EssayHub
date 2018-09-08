pragma solidity ^0.4.22;
import "./EssayInfo.sol";
import "./EssayHub.sol";

contract onlyStudent {
  constructor() public {
    stuaddr = msg.sender;
  }
  address public stuaddr;

  modifier onlyStudents(EssayInfo essay){
    address addr;
    (,,,,,,addr) = essay.getEssay();

    require(
      stuaddr == addr,
      "That is incorrect the address"
    );
    _;
  }

  modifier checkStudent(uint cost){
    require(stuaddr == msg.sender && msg.value >= cost,
    "Incorrect");
    _;
  }
}
