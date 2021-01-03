// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

//complete the transplant function is left

contract Transplant {

		struct doc {
		    address uploader ;
		    string hexCode ;
		}

		struct Stage {
		    bool started ;
		    bool completed ;
		    uint voteCount ;
		}


    	uint organ ;
		uint cost ;
		string status ;

		address public doctor ;
		address public recepient ;
		address public donor ;
		address  approval_authority1;
		address  approval_authority2;

		uint256 public stageNo ;
		Stage[] public stages ;

		//mapping user address => stage no => bool
		mapping (address => bool) entity ;
		mapping ( uint256 => mapping ( address => bool )) public approval ;
		mapping (uint256 => doc[]) docs ;

		modifier onlyDoctor() {
		    require(tx.origin == doctor , "is not the doctor of this transplant --> transplant contract");
		    _;
		}
		modifier belongs () {
		    require (tx.origin == donor || tx.origin == recepient || tx.origin == doctor || tx.origin == approval_authority1 || tx.origin == approval_authority2 , "is not an verified entity of the transplant --> Transplant contract");
		    _;
		}


		constructor ( address _receient , address _donor , address _approval_authority1 , address _approval_authority2 , uint _organ ) public  {
		    recepient =_receient;
		    donor =_donor;
		    doctor= tx.origin ;
		    approval_authority1 = _approval_authority1;
		    approval_authority2 = _approval_authority2;
		    organ =_organ;
		    Stage memory newStage = Stage({
		        completed:false,
		        voteCount:0,
		        started:true
		    });
		    stages.push(newStage);
		    stageNo=0;


		}

		function startNextStage () public onlyDoctor {
			require(stages[stageNo].voteCount == 5 , "Not Enough Votes --> Transplant contract");
			require(stages[stageNo].completed == true , "Stage Not completed yet --> Transplant contract");
		    stageNo = stageNo+1;
		    Stage memory newStage = Stage({
		        completed:false,
		        voteCount:0,
		        started:true
		    });
		    stages.push(newStage);
		}
		function currentStageApproval () public belongs  { //upload ipfs docs here pending functionality
		//check the stage has been started and the user has not already applied
			require(!approval[stageNo][tx.origin]);
			approval[stageNo][tx.origin]= true ;
			stages[stageNo].voteCount ++ ;
		}
		function completeStage () public onlyDoctor {
			require(stages[stageNo].voteCount == 5);
			require(approval[stageNo][donor] == true );
			require(approval[stageNo][recepient] == true );
			require(approval[stageNo][doctor] == true );
			require(approval[stageNo][approval_authority2] == true );
			require(approval[stageNo][approval_authority1] == true );
			stages[stageNo].completed =true ;
		}
		function getmapppingvalue (uint256 _stage , address _addr ) public view returns (bool) {
		    return (approval[_stage][_addr]);
		}

}
