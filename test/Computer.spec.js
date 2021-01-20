const chai = require('chai')
const EDComputer = require("../EDComputer.js")

const expect = chai.expect;

describe("Computer", function(){
  it("Computer is a Class", function(){
    let Computer = new EDComputer.Computer();
    expect(Computer).to.not.be.equal(undefined);
  })
  
})

describe("ComputerEntry", function(){
  it("ComputerEntry is a Class", function(){
    let ComputerEntry = new EDComputer.ComputerEntry();
    expect(ComputerEntry).to.not.be.equal(undefined);
  })
  
})

describe("ComputerEntryStatus", function(){
  it("ComputerEntryStatus is a Class", function(){
    let ComputerEntryStatus = new EDComputer.ComputerEntryStatus();
    expect(ComputerEntryStatus).to.not.be.equal(undefined);
  })
  
})
