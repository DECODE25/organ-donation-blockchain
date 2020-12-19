// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

import './Transplant.sol';
import './Doctor.sol';
import './Person.sol';


contract DonateOrganFactory {
    address public admin ;
    address public authority1;
    address public authority2;

    mapping( address => address) public  people ;
    mapping( address => address) public  doctors ;
    address[] public transplants ;


    modifier isDoctor() {
        require(doctors[msg.sender] != address(0));
        _;
    }
    
    
    modifier isrestricted () {
        require(msg.sender == authority1 || msg.sender == authority2);
        _;
    }
    
    constructor (address _authority1 , address _authority2) {
        admin = msg.sender ;
        authority1=_authority1;
        authority2=_authority2;
        
    }


    function createPerson( string memory _name , string memory  _aadhar_number ) public {
        Person person = new Person(_name , _aadhar_number , msg.sender);
        people[msg.sender] = address(person);
    }

    function createDoctor ( string memory _name , string memory  _aadhar_number  ) public {
        Doctor doctor = new Doctor(_name , _aadhar_number , msg.sender);
        doctors[msg.sender] = address(doctor);
    }

    function createTransplant (address _receient , address _donor , uint _organ) public  {
        Person recepient = Person(people[_receient]);
        // require(recepient.isDoctor(msg.sender));
        Person donor = Person(people[_donor]);
        // require(donor.isDoctor(msg.sender));
        Doctor doctor= Doctor(doctors[msg.sender]);

        Transplant transplant = new Transplant( _receient , _donor , authority1 , authority2 , _organ );
        transplants.push(address(transplant));
        recepient.addTransplant(address(transplant));
        donor.addTransplant(address(transplant));
        doctor.addTransplant(address(transplant));

    }
    function approveTranspantStage (address _trans) public  isrestricted {
        Transplant tr = Transplant ( _trans) ;
        tr.currentStageApproval();
    }
    
}
