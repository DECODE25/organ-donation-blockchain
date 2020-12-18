pragma solidity >=0.7.0 <0.8.0;

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
		address public approval_authority1;
		address public approval_authority2;

		uint256 public stageNo ;
		Stage[] public stages ;
		
		//mapping user address => stage no => bool
		mapping (address => bool) entity ;
		mapping ( uint256 => mapping ( address => bool )) approval ;
		mapping (uint256 => doc[]) docs ;

		modifier onlyDoctor() {
		    require(msg.sender == doctor);
		    _;
		}
		modifier belongs () {
		    require (msg.sender == donor || msg.sender == recepient || msg.sender == doctor || msg.sender == approval_authority1 || msg.sender == approval_authority2 );
		    _;
		}
		

		constructor ( address _receient , address _donor , address _approval_authority1 , address _approval_authority2 , uint _organ ) public {
		    recepient =_receient;
		    donor =_donor;
		    doctor= msg.sender ;
		    approval_authority1 = _approval_authority1;
		    approval_authority2 = _approval_authority2;
		    organ =_organ;
		    stageNo=0;
		    
		}
		
		function startNextStage () public onlyDoctor {
		    if(stageNo != 0)
		    {
		        require(stages[stageNo -1].completed == true);
		    }
		    stageNo = stageNo+1;
		    Stage memory newStage = Stage({
		        completed:false,
		        voteCount:0,
		        started:true 
		    });
		    stages.push(newStage);
		}
		function currentStageApproval () public belongs  { //upload ipfs docs here pending functionality  
			require(!approval[stageNo][msg.sender]);
			approval[stageNo][msg.sender]= true ;
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
		
}