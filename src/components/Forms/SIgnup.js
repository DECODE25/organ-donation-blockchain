import React , {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Footer from '..//Footer/Footer'
import image1 from '../../images/features.jpg'
import Person from '../../abis/Person.json'
import Doctor from '../../abis/Doctor.json'
import {setAuthentication} from '../../actions/contractActions'

const Signup = ( { contracts , setAuthentication ,history}) => {

    const [loading, setLoading] = useState(false);

    const [formData, setformData] = useState({
        name:"",
        aadharNo:""
    })

    const handleChange = async (e) => {
        setformData({ ...formData , [e.target.name]:e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const accounts = await contracts.web3.eth.getAccounts()
        const {name , aadhar } = formData ;
        if( contracts.Type == "User") {
            setLoading(true);
            const perso = await contracts.Factory.methods.createPerson(name , aadhar).send({ from: accounts[0]})
            const addressContract = await contracts.Factory.methods.people(accounts[0]).call();
            const personContract = new contracts.web3.eth.Contract(Person.abi , addressContract);
            setAuthentication(personContract)
            setLoading(false);
            history.push('/dashboard')
        }
        if( contracts.Type == "User") {
            setLoading(true);
            const perso = await contracts.Factory.methods.createPerson(name , aadhar).send({ from: accounts[0]})
            const addressContract = await contracts.Factory.methods.doctors(accounts[0]).call();
            const personContract = new contracts.web3.eth.Contract(Doctor.abi , addressContract);
            setAuthentication(personContract)
            setLoading(false);
            history.push('/dashboard')

        }

    }

    return !loading ? (
        <div>
            <Navbar />

            <div className="jumbotron color-grey-light mt-70 mb-0">
  <div className="d-flex align-items-center h-50" style={{backgroundImage: `url(${image1})`}}>
    <div className="container text-center py-5">
      {/*Grid row*/}
      <h2 className="font-weight-bold text-white mb-0 text-center text-md-left">Form</h2>
      {/*Grid row*/}
    </div>
  </div>
</div>
{/* Main Navigation */}



                <section className="section section-sm section-sm-mod-1 bg-white text-center">
                    <div className="shell">
                        <div className="range range-sm-center">
                        <div className="cell-sm-10 cell-md-7 cell-lg-6">
                            <h4>Contact Us (with reCAPTCHA)</h4>
                            {/* RD Mailform*/}



                            <form className="rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" noValidate="novalidate"
                            onSubmit={(e)=>{handleSubmit(e)}}>
                            <div className="range range-sm-bottom range-20">
                                <div className="cell-sm-6">
                                <div className="form-wrap">
                                    <input className="form-input form-control-has-validation" id="contact2-first-name" type="text" name="name" 
                                    onchange= {(e)=> handleChange(e)}
                                    value= {formData.name} data-constraints="@Required" /><span className="form-validation" />
                                    <label className="form-label rd-input-label" htmlFor="contact2-first-name">Name</label>
                                </div>
                                </div>
                                {/* <div className="cell-sm-6">
                                <div className="form-wrap">
                                    <input className="form-input form-control-has-validation" id="contact2-last-name" type="text" name="last-name" data-constraints="@Required" /><span className="form-validation" />
                                    <label className="form-label rd-input-label" htmlFor="contact2-last-name">Last name</label>
                                </div>
                                </div> */}
                                <div className="cell-xs-12">
                                <div className="form-wrap">
                                    <label className="form-label rd-input-label" htmlFor="contact2-message">Aadhar Number</label>
                                    <input className="form-input form-control-has-validation" id="contact2-first-name" type="text" name="aadhar" 
                                    onchange= {(e)=> handleChange(e)}
                                    value= {formData.name} data-constraints="@Required" />
                                </div>
                                </div>
                                <div className="cell-sm-6">
                                <button className="button button-block button-primary submit" type="submit">Register</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </section>

            <Footer />
            
        </div>
    ) : "loading"
}

const mapStateToProps = (state) =>{
    return {
        contracts : state.contract ,
    }
}

export default connect(mapStateToProps , {setAuthentication}) (Signup)
