pragma solidity ^0.4.22;


contract ipfs {
  string private ipfshash;
  string private hashfile;
  constructor() {
  }

  function getIPFS() public returns (string IPFSHash) {
    return ipfshash;
  }

  function setIPFS(string x) public {
    ipfshash = x;
  }

  function getHashFile() public returns (string Hash) {
    return hashfile;
  }

  function setHashFile(string filehash) public{
    hashfile = filehash;
  }
}
