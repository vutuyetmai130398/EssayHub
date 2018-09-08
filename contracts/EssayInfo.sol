pragma solidity ^0.4.22;


contract EssayInfo {
  string authorName;
  address AuthorAddr;
  string essayName;
  string fileHash;
  string ipfsHash;
  string fileType;
  uint32 time;

  constructor() public{
    AuthorAddr = msg.sender;
  }

  function SetEssay(string authorname, string essayname, string filehash, string ipfshash, string filetype) public{
    authorName = authorname;
    essayName = essayname;
    fileHash = filehash;
    ipfsHash = ipfshash;
    fileType = filetype;
    time = uint32(now);
  }

  function getEssay() public view returns (string Author, string Name, string FileHash, string Type, string ipfs, uint32 Time, address authoraddr) {
    return (authorName, essayName, fileHash, fileType, ipfsHash, time, AuthorAddr);
  }
}
