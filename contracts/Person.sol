// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;



contract Person {
	struct Transplant {
		string organ ;
		uint cost ;
		uint compatibility ;
		address public doctor ;
		mapping (string => address) entity;
		mapping(address => bool) vote ;
		string status ;
	};
	string public type ;
	string public name ;
	string public email ;
	uint public phone;
	uint public email;
	address public authority ;
	Transplant[] public transplants ;
	address public myaddress;
	string public aadhar_number ;

	modifier restricted()
	{
		require(msg.sender == myaddress)
		_ ;
	}


	constructor(address _myaddress , , address _authority , string _type , string _name , string _aadhar_number ) public {
		myaddress=_myaddress ;
		name=_name ;
		type=_type ;
		aadhar_number = _aadhar_number ;
		authority =_authority ;
	}

	function requestTransplant( string _organ , address  _doctor) public restricted {
		Transplant memory newTransplant = Transplant ({
			organ: _organ ,
			doctor: _doctor,
		})
	}
	

	
}