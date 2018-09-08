pragma solidity ^0.4.22;
import "./VotingType.sol";

contract VoteByOther is VotingType {
  constructor() {
  }
  function getVote() external returns (uint){
    return 1;
  }
}
