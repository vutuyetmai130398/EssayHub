pragma solidity ^0.4.22;
import "./VotingType.sol";

contract VoteByTeacher is VotingType{
  constructor() {
  }

  function getVote() external returns (uint){
    return 5;
  }
}
