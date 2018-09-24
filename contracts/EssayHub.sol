pragma solidity ^0.4.22;

contract hasPermission{
  constructor(){
    
  }

  address student;
  address teacher;

  function setStudent() private {
    student = msg.sender;
  }

  function setTeacher() private {
    teacher = msg.sender;
  }

  modifier onlyStudent{
    setStudent();
    require(student == msg.sender, "Incorrect Address");
    _;
  }

  modifier onlyTeacher{
    setTeacher();
    require(teacher==msg.sender, "Incorrect Address");
    _;
  }
}

contract EssayHub is hasPermission {
  constructor() {
  }

  struct EssayInfo{
    string authorName;
    string essayName;
    string essayType;
    string hashfile;
    string ipfshash;
    uint32 time;
    uint32 Score;
    uint32 ShareCount;
    uint ExclusiveCost;
  }

  struct checkEssay{
    bool checkExistFile;
    bool checkExclusiveFile;
  }

  EssayInfo[] public essays;
  uint public count;
  mapping (string => checkEssay) private verifyEssay;

  // The upload file system
  function uploadEssay(string authorName, string essayName, string essayType, string hashfile, string ipfshash, uint ExclusiveCost) public onlyStudent onlyTeacher returns(bool) {
    if (verifyEssay[hashfile].checkExistFile == false && verifyEssay[hashfile].checkExclusiveFile == false) {
      essays.push(EssayInfo(authorName, essayName, essayType, hashfile, ipfshash, uint32(now), 0, 0, ExclusiveCost));
      verifyEssay[hashfile].checkExistFile = true;
      verifyEssay[hashfile].checkExclusiveFile = false;
      count++;
      return true;
    } 
    return false;
  }

  function checkEssayUploading(string hashfile) public returns (bool) {
    if (verifyEssay[hashfile].checkExistFile) {
      return false;
    } else if(verifyEssay[hashfile].checkExclusiveFile==true) {
      return false;
    }
    return true;
  }

  //Set id essay
  function getEssay(uint id) public view returns (string Author, string Essay, string Type, uint32 Time, uint32 Score, uint32 ShareCount, uint ExclusiveCost) {
    return (essays[id].authorName, essays[id].essayName, essays[id].essayType, essays[id].time, essays[id].Score, essays[id].ShareCount, essays[id].ExclusiveCost);
  }

  // Voting system
  function votingByTeacher(uint id) public onlyTeacher{
    essays[id].Score += 5;
  }
  function votingByOther(uint id) public {
    essays[id].Score += 1;
  }

  // Classify view
  function getCostToShareView(uint id) public returns (string filehash, string ipfsHash) {
    string memory hashfile = essays[id].hashfile;
    require(verifyEssay[hashfile].checkExistFile == true && verifyEssay[hashfile].checkExclusiveFile == false, "Not Access");
    essays[id].ShareCount++;
    return (hashfile, essays[id].ipfshash);
  }

  function getCostToExclusiveView(uint id) public payable returns (string filehash, string ipfsHash){
    string memory hashfile = essays[id].hashfile;
    require(verifyEssay[hashfile].checkExistFile == true && verifyEssay[hashfile].checkExclusiveFile == false && msg.value >= essays[id].ExclusiveCost, "Not Access");
    verifyEssay[hashfile].checkExclusiveFile = true;
    return (hashfile, essays[id].ipfshash);
  }

}
