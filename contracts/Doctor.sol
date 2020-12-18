pragma solidity >=0.7.0 <0.8.0;

import './Transplant.sol';

contract Doctor {
	address[] public  patient ;
	string public name ;
	string public email ;
	uint public phone;
	Transplant[] public transplants ;
	address public myaddress;
	string public aadhar_number ;

	constructor( string memory _name , string memory  _aadhar_number , address  _myaddress  )
	{
	    name = _name;
	    aadhar_number =_aadhar_number;
	    myaddress = _myaddress ;
	}
	function approveStage (address _contractAddress) external   {
		Transplant tr = Transplant(_contractAddress);
		tr.currentStageApproval();
	}
    function createStage ( address _contractAddress ) external {
        Transplant tr = Transplant(_contractAddress);
		tr.startNextStage();

    }
    function completecurrentStage ( address _contractAddress ) external {
        Transplant tr = Transplant(_contractAddress);
		tr.completeStage();
    }
	
}
