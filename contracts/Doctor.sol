// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

import './Transplant.sol';

contract Doctor {
	address[] public  patient ;
	string public name ;
	string public email ;
	uint public phone;
	address[] public transplants ;
	address public myaddress;
	string public aadhar_number ;


	//events approveStage
	//events complete stage
	//events complete current stage

	modifier isAdmin () {
		require(tx.origin == myaddress  , "Not the admin of Doctor contract ");
		_;
	}
	constructor( string memory _name , string memory  _aadhar_number , address  _myaddress  ) public
	{
	    name = _name;
	    aadhar_number =_aadhar_number;
	    myaddress = _myaddress ;
	}
	function approveStage (address _contractAddress) external isAdmin  {
		Transplant tr = Transplant(_contractAddress);
		tr.currentStageApproval();
	}
    function createStage ( address _contractAddress ) external isAdmin {
        Transplant tr = Transplant(_contractAddress);
		tr.startNextStage();

    }
    function completecurrentStage ( address _contractAddress ) external isAdmin {
        Transplant tr = Transplant(_contractAddress);
		tr.completeStage();
    }
	function addTransplant( address  _transplant) public {
		transplants.push(_transplant);
	}


}
