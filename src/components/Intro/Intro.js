import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import { setTypeOfUser } from "../../actions/contractActions";
import img29 from "../../images/img29.jpg";
import doc from "../../images/doc.jpg";
import Person from '../../abis/Person.json'
import Doctor from '../../abis/Doctor.json'
import {setAuthentication} from '../../actions/contractActions'



const Intro = ({ contract , setTypeOfUser , setAuthentication , history}) => {
  const handleClick = async (e) => {
      setTypeOfUser(e.target.id);
      const accounts = await contract.web3.eth.getAccounts()
      if(e.target.id === "User")
      {
        console.log("persowwwwwwwwwn"  )
        const perso = await contract.Factory.methods.people(accounts[0]).call();
        console.log("person" ,perso )
        if (perso === "0x0000000000000000000000000000000000000000" )
        {
          history.push("/form");
        }
        else {
        const personContract = new contract.web3.eth.Contract(Person.abi , perso);
        setAuthentication(personContract)
        history.push('/dashboard')

        }
      }
      if(e.target.id === "Doctor")
      {
        const perso = await contract.Factory.methods.doctors(accounts[0]).call();
        if (perso === "0x0000000000000000000000000000000000000000" )
        {
          history.push("/form");
        }
        else {
        const personContract = new contract.web3.eth.Contract(Doctor.abi , perso);
        setAuthentication(personContract);
        history.push('/dashboard');
        }
      }
  }
  return (
    <div class="skin-light">
      {/* Main Navigation */}
      <div className="view zoom z-depth-2 split left">
        <img className="img-fluid w-100" src={img29} alt="Sample" />
        <a href="#!" onClick={handleClick}>
          <div className="mask waves-effect waves-light" />
          <div className="overlay centered text-white">
            <h1 id="User">User</h1>
          </div>
        </a>
      </div>
      <div className="view zoom z-depth-2 split right">
        <img className="img-fluid w-100" src={doc} alt="Sample" />
        <a href="#!" onClick={handleClick}>
          <div className="mask waves-effect waves-light" />
          <div className="overlay centered text-white">
            <h1 id="Doctor">Doctor</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return {
    contract : state.contract
  }
}

export default connect(mapStateToProps, {setTypeOfUser , setAuthentication})(withRouter(Intro));
