pragma solidity >=0.7.0 <0.8.0;

import './Transplant.sol';

contract Person {
	address[] public  doctor ;
	string public name ;
	string public email ;
	uint public phone;
	address public authority ;
	address[] public transplants ;
	address public myaddress;
	string public aadhar_number ;

	constructor( string memory _name , string memory  _aadhar_number , address  _myaddress  )
	{
	    name = _name;
	    aadhar_number =_aadhar_number;
	    myaddress = _myaddress ;
	}
	function addTransplant( address  _transplant) public {
		transplants.push(_transplant);
	}
	function addDoctor( address  _doc) public {
		doctor.push(_doc);
	}
	function approveStage (address _contractAddress) public   {
		Transplant tr = Transplant(_contractAddress);
		tr.currentStageApproval();
	}
	
}
