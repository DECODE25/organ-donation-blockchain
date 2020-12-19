import React , {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Footer from '..//Footer/Footer'
import image1 from '../../images/features.jpg'


const Signup = ( { contracts }) => {

    const [formData, setformData] = useState({
        name:"",
        aadharNo:""
    })

    const handleChange = async (e) => {
        setformData({ ...formData , [e.target.name]:e.target.value })
    }
    const handleSubmit = async (e) => {
        setformData({ ...formData , [e.target.name]:e.target.value })
    }

    return (
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



                            <form className="rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" noValidate="novalidate">
                            <div className="range range-sm-bottom range-20">
                                <div className="cell-sm-6">
                                <div className="form-wrap">
                                    <input className="form-input form-control-has-validation" id="contact2-first-name" type="text" name="first-name" data-constraints="@Required" /><span className="form-validation" />
                                    <label className="form-label rd-input-label" htmlFor="contact2-first-name">First
                                    name</label>
                                </div>
                                </div>
                                <div className="cell-sm-6">
                                <div className="form-wrap">
                                    <input className="form-input form-control-has-validation" id="contact2-last-name" type="text" name="last-name" data-constraints="@Required" /><span className="form-validation" />
                                    <label className="form-label rd-input-label" htmlFor="contact2-last-name">Last name</label>
                                </div>
                                </div>
                                <div className="cell-xs-12">
                                <div className="form-wrap">
                                    <label className="form-label rd-input-label" htmlFor="contact2-message">Your Message</label>
                                    <textarea className="form-input form-control-has-validation form-control-last-child" id="contact2-message" name="message" data-constraints="@Required" defaultValue={""} /><span className="form-validation" />
                                </div>
                                </div>
                                <div className="cell-sm-6">
                                <div className="form-wrap">
                                    <input className="form-input form-control-has-validation" id="contact2-email" type="email" name="email" data-constraints="@Email @Required" /><span className="form-validation" />
                                    <label className="form-label rd-input-label" htmlFor="contact2-email">E-mail</label>
                                </div>
                                </div>
                                <div className="cell-sm-7">
                                <div className="form-wrap form-wrap-recaptcha">
                                    {/* Google captcha*/}
                                    <div className="recaptcha" id="captcha1" data-sitekey="6LfZlSETAAAAAC5VW4R4tQP8Am_to4bM3dddxkEt">
                                    <div style={{width: 304, height: 78}}>
                                        <div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=2&k=6LfZlSETAAAAAC5VW4R4tQP8Am_to4bM3dddxkEt&co=aHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tOjQ0Mw..&hl=en&v=qc5B-qjP0QEimFYUxcpWJy5B&theme=light&size=normal&cb=a7bsc2llfb8a" width={304} height={78} role="presentation" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                                        </div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}} defaultValue={""} />
                                    </div><iframe style={{display: 'none'}} />
                                    </div><span className="form-validation" />
                                </div>
                                </div>
                                <div className="cell-sm-6">
                                <button className="button button-block button-primary" type="submit">Send Message</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </section>

            <Footer />
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        contracts : state.contract ,
    }
}

export default connect() (Signup)
