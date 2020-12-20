import React , { Component} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {connect} from "react-redux";

class Dashboard extends Component{

  async componentWillMount() {
    await this.loadBlockChainData();
    // await this.loadBlockchainData();
  }

  state = {
    name:'',
    aadhar_number:'',
    transaddr:[],
    transplants:[],
    opposites:[],
    type:'',
    account:null,
    address :null , 
  }


  loadBlockChainData=async()=>{
    const {contract} = this.props
    console.log(this.props.contract)
    console.log("entered");
    const accounts = await contract.web3.eth.getAccounts()
    console.log("entered" , accounts[0]);


    const name = await contract.Personal.methods.name().call();
    console.log(name);
    const aadhar_number = await contract.Personal.methods.aadhar_number().call();
    // const transplants_number = await contract.Personal.methods.count().call();

    // console.log("no" , transplants_number)

    const transaddr = await contract.Personal.methods.transplants(0).call();
    if (transaddr ) {
      this.setState({... this.state , name , account:accounts[0] , aadhar_number , transplants : this.state.transplants.push(transaddr)});

    }
    else 
    {
      this.setState({... this.state ,account:accounts[0] , name , aadhar_number });
    }

  }




  render () {


    
    return !this.props.contract.loading && (
        <div>
            <Navbar / >
            <div
        className="modal fade show"
        id="modalcreate"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Pills */}
              <ul className="nav md-pills nav-justified pills-primary">
                <li className="nav-item">
                  <a
                    className="nav-link border border-primary border-rounded active show"
                    data-toggle="tab"
                    href="#modalcreate-login"
                    role="tab"
                    aria-selected="true"
                  >
                    Create Transplant 
                  </a>
                </li>
              </ul>
              {/* Pills */}
              {/* Content */}
              <div className="tab-content py-0">
                {/* First panel */}
                <div
                  className="tab-pane fade in show active"
                  id="modalcreate-login"
                  role="tabpanel"
                >
                  {/* Login form */}
                  <form
                    id="formLoginRegister-login"
                    className="pt-2"
                    action="login"
                    method="post"
                  >
                    <div className="md-form md-outline">
                      <i className="fas fa-envelope prefix" />
                      <input
                        type="email"
                        id="formLoginRegister-email"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-email"
                      >
                        Your email
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-lock prefix" />
                      <input
                        type="password"
                        id="formLoginRegiser-password"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegiser-password"
                      >
                        Your password
                      </label>
                    </div>
                    <div className="text-center mt-4 pt-3">
                      
                      <button
                        type="submit"
                        className="btn btn-primary mb-2 waves-effect waves-light submit"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                  {/* Login form */}
                </div>
                {/* First panel */}
                
              </div>
              {/* Content */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Login / Register */}
      {/* Modal Login / Register */}
      
            <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar closed-sidebar closed-sidebar-mobile">

  <div className="ui-theme-settings">
    <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
      <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
    </button>
    <div className="theme-settings__inner">
      <div className="scrollbar-container ps ps--active-y">
        <div className="theme-settings__options-wrapper">
          <h3 className="themeoptions-heading">Layout Options</h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div className="switch has-switch switch-container-class" data-class="fixed-header">
                        <div className="switch-animate switch-on">
                          <div className="toggle btn btn-success" data-toggle="toggle" role="button" style={{width: '56.5px', height: '33.2px'}}><input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" />
                            <div className="toggle-group"><label htmlFor className="btn btn-success toggle-on">On</label><label htmlFor className="btn btn-light toggle-off">Off</label><span className="toggle-handle btn btn-light" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Header</div>
                      <div className="widget-subheading">Makes the header top fixed, always
                        visible!</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div className="switch has-switch switch-container-class" data-class="fixed-sidebar">
                        <div className="switch-animate switch-on">
                          <div className="toggle btn btn-success" data-toggle="toggle" role="button" style={{width: '56.5px', height: '33.2px'}}><input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" />
                            <div className="toggle-group"><label htmlFor className="btn btn-success toggle-on">On</label><label htmlFor className="btn btn-light toggle-off">Off</label><span className="toggle-handle btn btn-light" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Sidebar</div>
                      <div className="widget-subheading">Makes the sidebar left fixed, always
                        visible!</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div className="switch has-switch switch-container-class" data-class="fixed-footer">
                        <div className="switch-animate switch-off">
                          <div className="toggle btn btn-light off" data-toggle="toggle" role="button" style={{width: '56.5px', height: '33.2px'}}><input type="checkbox" data-toggle="toggle" data-onstyle="success" />
                            <div className="toggle-group"><label htmlFor className="btn btn-success toggle-on">On</label><label htmlFor className="btn btn-light toggle-off">Off</label><span className="toggle-handle btn btn-light" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Footer</div>
                      <div className="widget-subheading">Makes the app footer bottom fixed, always
                        visible!</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h3 className="themeoptions-heading">
            <div> Header Options </div>
            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class" data-class>
              Restore Default
            </button>
          </h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <h5 className="pb-2">Choose Color Scheme</h5>
                <div className="theme-settings-swatches">
                  <div className="swatch-holder bg-primary switch-header-cs-class" data-class="bg-primary header-text-light" />
                  <div className="swatch-holder bg-secondary switch-header-cs-class" data-class="bg-secondary header-text-light" />
                  <div className="swatch-holder bg-success switch-header-cs-class" data-class="bg-success header-text-light" />
                  <div className="swatch-holder bg-info switch-header-cs-class" data-class="bg-info header-text-light" />
                  <div className="swatch-holder bg-warning switch-header-cs-class" data-class="bg-warning header-text-dark" />
                  <div className="swatch-holder bg-danger switch-header-cs-class" data-class="bg-danger header-text-light" />
                  <div className="swatch-holder bg-light switch-header-cs-class" data-class="bg-light header-text-dark" />
                  <div className="swatch-holder bg-dark switch-header-cs-class" data-class="bg-dark header-text-light" />
                  <div className="swatch-holder bg-focus switch-header-cs-class" data-class="bg-focus header-text-light" />
                  <div className="swatch-holder bg-alternate switch-header-cs-class" data-class="bg-alternate header-text-light" />
                  <div className="divider" />
                  <div className="swatch-holder bg-vicious-stance switch-header-cs-class" data-class="bg-vicious-stance header-text-light" />
                  <div className="swatch-holder bg-midnight-bloom switch-header-cs-class" data-class="bg-midnight-bloom header-text-light" />
                  <div className="swatch-holder bg-night-sky switch-header-cs-class" data-class="bg-night-sky header-text-light" />
                  <div className="swatch-holder bg-slick-carbon switch-header-cs-class" data-class="bg-slick-carbon header-text-light" />
                  <div className="swatch-holder bg-asteroid switch-header-cs-class" data-class="bg-asteroid header-text-light" />
                  <div className="swatch-holder bg-royal switch-header-cs-class" data-class="bg-royal header-text-light" />
                  <div className="swatch-holder bg-warm-flame switch-header-cs-class" data-class="bg-warm-flame header-text-dark" />
                  <div className="swatch-holder bg-night-fade switch-header-cs-class" data-class="bg-night-fade header-text-dark" />
                  <div className="swatch-holder bg-sunny-morning switch-header-cs-class" data-class="bg-sunny-morning header-text-dark" />
                  <div className="swatch-holder bg-tempting-azure switch-header-cs-class" data-class="bg-tempting-azure header-text-dark" />
                  <div className="swatch-holder bg-amy-crisp switch-header-cs-class" data-class="bg-amy-crisp header-text-dark" />
                  <div className="swatch-holder bg-heavy-rain switch-header-cs-class" data-class="bg-heavy-rain header-text-dark" />
                  <div className="swatch-holder bg-mean-fruit switch-header-cs-class" data-class="bg-mean-fruit header-text-dark" />
                  <div className="swatch-holder bg-malibu-beach switch-header-cs-class" data-class="bg-malibu-beach header-text-light" />
                  <div className="swatch-holder bg-deep-blue switch-header-cs-class" data-class="bg-deep-blue header-text-dark" />
                  <div className="swatch-holder bg-ripe-malin switch-header-cs-class" data-class="bg-ripe-malin header-text-light" />
                  <div className="swatch-holder bg-arielle-smile switch-header-cs-class" data-class="bg-arielle-smile header-text-light" />
                  <div className="swatch-holder bg-plum-plate switch-header-cs-class" data-class="bg-plum-plate header-text-light" />
                  <div className="swatch-holder bg-happy-fisher switch-header-cs-class" data-class="bg-happy-fisher header-text-dark" />
                  <div className="swatch-holder bg-happy-itmeo switch-header-cs-class" data-class="bg-happy-itmeo header-text-light" />
                  <div className="swatch-holder bg-mixed-hopes switch-header-cs-class" data-class="bg-mixed-hopes header-text-light" />
                  <div className="swatch-holder bg-strong-bliss switch-header-cs-class" data-class="bg-strong-bliss header-text-light" />
                  <div className="swatch-holder bg-grow-early switch-header-cs-class" data-class="bg-grow-early header-text-light" />
                  <div className="swatch-holder bg-love-kiss switch-header-cs-class" data-class="bg-love-kiss header-text-light" />
                  <div className="swatch-holder bg-premium-dark switch-header-cs-class" data-class="bg-premium-dark header-text-light" />
                  <div className="swatch-holder bg-happy-green switch-header-cs-class" data-class="bg-happy-green header-text-light" />
                </div>
              </li>
            </ul>
          </div>
          <h3 className="themeoptions-heading">
            <div>Sidebar Options</div>
            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class" data-class>
              Restore Default
            </button>
          </h3>
          <div className="p-3">
            <ul className="list-group">
 
              <li className="list-group-item">
                <h5 className="pb-2">Choose Color Scheme</h5>
                <div className="theme-settings-swatches">
                  <div className="swatch-holder bg-primary switch-sidebar-cs-class" data-class="bg-primary sidebar-text-light" />
                  <div className="swatch-holder bg-secondary switch-sidebar-cs-class" data-class="bg-secondary sidebar-text-light" />
                  <div className="swatch-holder bg-success switch-sidebar-cs-class" data-class="bg-success sidebar-text-dark" />
                  <div className="swatch-holder bg-info switch-sidebar-cs-class" data-class="bg-info sidebar-text-dark" />
                  <div className="swatch-holder bg-warning switch-sidebar-cs-class" data-class="bg-warning sidebar-text-dark" />
                  <div className="swatch-holder bg-danger switch-sidebar-cs-class" data-class="bg-danger sidebar-text-light" />
                  <div className="swatch-holder bg-light switch-sidebar-cs-class" data-class="bg-light sidebar-text-dark" />
                  <div className="swatch-holder bg-dark switch-sidebar-cs-class" data-class="bg-dark sidebar-text-light" />
                  <div className="swatch-holder bg-focus switch-sidebar-cs-class" data-class="bg-focus sidebar-text-light" />
                  <div className="swatch-holder bg-alternate switch-sidebar-cs-class" data-class="bg-alternate sidebar-text-light" />
                  <div className="divider" />
                  <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-class" data-class="bg-vicious-stance sidebar-text-light" />
                  <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class" data-class="bg-midnight-bloom sidebar-text-light" />
                  <div className="swatch-holder bg-night-sky switch-sidebar-cs-class" data-class="bg-night-sky sidebar-text-light" />
                  <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-class" data-class="bg-slick-carbon sidebar-text-light" />
                  <div className="swatch-holder bg-asteroid switch-sidebar-cs-class" data-class="bg-asteroid sidebar-text-light" />
                  <div className="swatch-holder bg-royal switch-sidebar-cs-class" data-class="bg-royal sidebar-text-light" />
                  <div className="swatch-holder bg-warm-flame switch-sidebar-cs-class" data-class="bg-warm-flame sidebar-text-dark" />
                  <div className="swatch-holder bg-night-fade switch-sidebar-cs-class" data-class="bg-night-fade sidebar-text-dark" />
                  <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-class" data-class="bg-sunny-morning sidebar-text-dark" />
                  <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-class" data-class="bg-tempting-azure sidebar-text-dark" />
                  <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-class" data-class="bg-amy-crisp sidebar-text-dark" />
                  <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-class" data-class="bg-heavy-rain sidebar-text-dark" />
                  <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-class" data-class="bg-mean-fruit sidebar-text-dark" />
                  <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-class" data-class="bg-malibu-beach sidebar-text-light" />
                  <div className="swatch-holder bg-deep-blue switch-sidebar-cs-class" data-class="bg-deep-blue sidebar-text-dark" />
                  <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-class" data-class="bg-ripe-malin sidebar-text-light" />
                  <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-class" data-class="bg-arielle-smile sidebar-text-light" />
                  <div className="swatch-holder bg-plum-plate switch-sidebar-cs-class" data-class="bg-plum-plate sidebar-text-light" />
                  <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-class" data-class="bg-happy-fisher sidebar-text-dark" />
                  <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class" data-class="bg-happy-itmeo sidebar-text-light" />
                  <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class" data-class="bg-mixed-hopes sidebar-text-light" />
                  <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-class" data-class="bg-strong-bliss sidebar-text-light" />
                  <div className="swatch-holder bg-grow-early switch-sidebar-cs-class" data-class="bg-grow-early sidebar-text-light" />
                  <div className="swatch-holder bg-love-kiss switch-sidebar-cs-class" data-class="bg-love-kiss sidebar-text-light" />
                  <div className="swatch-holder bg-premium-dark switch-sidebar-cs-class" data-class="bg-premium-dark sidebar-text-light" />
                  <div className="swatch-holder bg-happy-green switch-sidebar-cs-class" data-class="bg-happy-green sidebar-text-light" />
                </div>
              </li>
              
            </ul>
          </div>
          <h3 className="themeoptions-heading">
            <div>Main Content Options</div>
            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore
              Default</button>
          </h3>
          <div className="p-3">
            <ul className="list-group">

              <li className="list-group-item">
                <h5 className="pb-2">Page Section Tabs</h5>
                <div className="theme-settings-swatches">
                  <div role="group" className="mt-2 btn-group">
                    <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class" data-class="body-tabs-line"> Line</button>
                    <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class" data-class="body-tabs-shadow"> Shadow </button>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <h5 className="pb-2">Light Color Schemes
                </h5>
                <div className="theme-settings-swatches">
                  <div role="group" className="mt-2 btn-group">
                    <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class" data-class="app-theme-white"> White Theme</button>
                    <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class" data-class="app-theme-gray"> Gray Theme</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
          <div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} />
        </div>
        <div className="ps__rail-y" style={{top: 0, height: 723, right: 0}}>
          <div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 447}} />
        </div>
      </div>
    </div>
  </div>
  <div className="app-main">
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar ps ps--active-y">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu metismenu mt-4">
            <li className="app-sidebar__heading">Navigation</li>
            <li className="mm-active">
              <a href="#" aria-expanded="true">
                <i className="metismenu-icon pe-7s-rocket" />Dashboard
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul className="mm-collapse mm-show">
                <li>
                  <a href="index.html" className="mm-active">
                    <i className="metismenu-icon" />Portfolio Performance
                  </a>
                </li>
                <li>
                  <a href="dashboards-commerce.html">
                    <i className="metismenu-icon" />Graphical Analysis
                  </a>
                </li>
                <li>
                  <a href="dashboards-sales.html">
                    <i className="metismenu-icon">
                    </i>Personal Details
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="metismenu-icon" /> Transaction History
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul className="mm-collapse">
                    <li>
                      <a href="dashboards-minimal-1.html">
                        <i className="metismenu-icon" />Variation 1
                      </a>
                    </li>
                    <li>
                      <a href="dashboards-minimal-2.html">
                        <i className="metismenu-icon" />Variation 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
          <div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} />
        </div>
        <div className="ps__rail-y" style={{top: 0, height: 663, right: 0}}>
          <div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 434}} />
        </div>
      </div>
    </div>
    <div className="app-main__outer">
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="pe-7s-car icon-gradient bg-mean-fruit" />
              </div>
              <div>Your Dashboard
                <div className="page-title-subheading">This is an example dashboard created using
                  build-in elements and components.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-animation">
          <div className="mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                Portfolio Performance
              </div>
              <div className="btn-actions-pane-right text-capitalize">
                {
                  this.props.contract.type == "User" &&
                  <a
                  href="#!"
                  data-toggle="modal"
                  data-target="#modalcreate"
                  className="nav-link waves-effect"
                >
                  Create Transplant 
                </a>
                }

              </div>
            </div>
            <div className="no-gutters row">
              <div className="col-sm-6 col-md-4 col-xl-4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-10 bg-warning" />
                    <i className="lnr-laptop-phone text-dark opacity-8" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Total Donors</div>
                    <div className="widget-numbers">1,7M</div>
                    <div className="widget-description opacity-8 text-focus">
                      <div className="d-inline text-success pr-1">
                        <i className="fa fa-angle-up" />
                        <span className="pl-1">54.1%</span>
                      </div>
                      and Increasing
                    </div>
                  </div>
                </div>
                <div className="divider m-0 d-md-none d-sm-block" />
              </div>
              <div className="col-sm-6 col-md-4 col-xl-4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-9 bg-danger" />
                    <i className="lnr-graduation-hat text-white" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Total Recipients</div>
                    <div className="widget-numbers"><span>4.2M</span></div>
                    <div className="widget-description opacity-8 text-focus">
                      Grow Rate:
                      <span className="text-info pl-1">
                        <i className="fa fa-angle-up" />
                        <span className="pl-1">14.1%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="divider m-0 d-md-none d-sm-block" />
              </div>
              <div className="col-sm-12 col-md-4 col-xl-4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-9 bg-success" />
                    <i className="lnr-apartment text-white" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Current Position</div>
                    <div className="widget-numbers text-success"><span>13</span></div>
                    <div className="widget-description text-focus">
                      Increasing
                      <span className="text-success pl-1">
                        <i className="fa fa-angle-up" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center d-block p-3 card-footer">
              <button className="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg">
                <span className="mr-2 opacity-7">
                  <i className="fas fa-angle-down" />
                </span>
                <span className="mr-1">View Personal Report</span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="mb-3 card">
                <div className="card-header-tab card-header">
                  <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i className="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo" />
                    Graphical Analysis
                  </div>
                  <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                    <div className="btn-group dropdown">
                      <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                        <i className="pe-7s-menu btn-icon-wrapper" />
                      </button>
                      <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu">
                        <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                        <button type="button" tabIndex={0} className="dropdown-item">
                          <i className="dropdown-icon lnr-inbox"> </i><span>Menus</span>
                        </button>
                        <button type="button" tabIndex={0} className="dropdown-item">
                          <i className="dropdown-icon lnr-file-empty">
                          </i><span>Settings</span>
                        </button>
                        <button type="button" tabIndex={0} className="dropdown-item">
                          <i className="dropdown-icon lnr-book"> </i><span>Actions</span>
                        </button>
                        <div tabIndex={-1} className="dropdown-divider" />
                        <div className="p-3 text-right">
                          <button className="mr-2 btn-shadow btn-sm btn btn-link">View
                            Details</button>
                          <button className="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-0 card-body">
                  <div className="p-1 slick-slider-sm mx-auto">
                    <div className="slick-slider slick-initialized slick-dotted"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
                      <div className="slick-list draggable">
                        <div className="slick-track" style={{opacity: 1, width: 2842, transform: 'translate3d(-406px, 0px, 0px)'}}>
                          <div className="slick-slide slick-cloned" data-slick-index={-1} id aria-hidden="true" tabIndex={-1} style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          Helpdesk Tickets</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <span className="text-warning">34</span>
                                          </div>
                                          <div className="widget-title ml-2 font-size-lg font-weight-normal text-dark">
                                            <span className="opacity-5 text-muted pl-2 pr-1">5%</span>
                                            increase
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id style={{minHeight: 152}}>
                                        <div id className="apexcharts-canvas apexcharts2hc15ceg" style={{width: 566, height: 152}}>
                                          <svg id width={566} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}} >
                                            <g id className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id>
                                                <clipPath id>
                                                  <rect id width={571} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id>
                                                  <rect id width={580} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id stopOpacity="0.7" stopColor="rgba(247,185,36,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id className="apexcharts-grid">
                                                <line id x1={0} y1={152} x2={566} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id className="apexcharts-area-series apexcharts-plot-series">
                                                <g id className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id d="M9.256076545411384 88.12145086318557C15.874085547515602 88.12145086318557 21.54666469217636 103.15169771890662 28.16467369428058 103.15169771890662C34.782682696384796 103.15169771890662 47.665588146764975 35.51558686816195 54.28359714886919 35.51558686816195C60.90160615097341 35.51558686816195 71.2489214800983 121.93950628855791 77.86693048220252 121.93950628855791C84.48493948430674 121.93950628855791 94.83225481343163 100.64665657628643 101.45026381553585 100.64665657628643C108.06827281764006 100.64665657628643 118.41558814676496 98.14161543366627 125.03359714886918 98.14161543366627C131.6516061509734 98.14161543366627 141.99892148009832 70.58616286484437 148.61693048220252 70.58616286484437C155.23493948430672 70.58616286484437 165.58225481343163 75.59624515008471 172.20026381553586 75.59624515008471C178.8182728176401 75.59624515008471 189.165588146765 84.36388914925531 195.7835971488692 84.36388914925531C202.4016061509734 84.36388914925531 212.74892148009832 85.61640972056541 219.36693048220255 85.61640972056541C225.98493948430678 85.61640972056541 236.3322548134317 81.85884800663514 242.9502638155359 81.85884800663514C249.5682728176401 81.85884800663514 259.915588146765 108.16178000414698 266.53359714886926 108.16178000414698C273.15160615097346 108.16178000414698 283.4989214800983 128.20210914510835 290.1169304822026 128.20210914510835C296.7349394843068 128.20210914510835 307.08225481343163 108.16178000414698 313.7002638155359 108.16178000414698C320.3182728176401 108.16178000414698 330.66558814676495 104.4042182902167 337.2835971488692 104.4042182902167C343.9016061509734 104.4042182902167 354.24892148009826 113.1718622893873 360.8669304822025 113.1718622893873C367.4849394843067 113.1718622893873 377.8322548134316 118.18194457462766 384.45026381553583 118.18194457462766C391.06827281764004 118.18194457462766 401.4155881467649 94.38405371973602 408.03359714886915 94.38405371973602C414.65160615097335 94.38405371973602 424.9989214800982 93.13153314842592 431.61693048220246 93.13153314842592C438.23493948430666 93.13153314842592 448.5822548134315 74.34372457877463 455.2002638155358 74.34372457877463C461.81827281764 74.34372457877463 472.16558814676483 84.36388914925531 478.7835971488691 84.36388914925531C485.4016061509733 84.36388914925531 495.74892148009815 105.65673886152679 502.3669304822024 105.65673886152679C508.98493948430666 105.65673886152679 519.3322548134315 118.18194457462766 525.9502638155358 118.18194457462766C532.56827281764 118.18194457462766 542.9155881467649 95.6365742910461 549.5335971488691 95.6365742910461C549.5335971488691 95.6365742910461 554.2083333333333 95.6365742910461 554.2083333333333 95.6365742910461 " fill="none" fillOpacity={1} stroke="#f7b924" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask2hc15ceg)" pathto="M 11.791666666666666 72.32887975334017C 20.045833333333334 72.32887975334017 27.120833333333334 91.07502569373072 35.375 91.07502569373072C 43.62916666666666 91.07502569373072 50.704166666666666 6.717368961973278 58.95833333333333 6.717368961973278C 67.21249999999999 6.717368961973278 74.2875 114.5077081192189 82.54166666666666 114.5077081192189C 90.79583333333332 114.5077081192189 97.87083333333332 87.95066803699896 106.12499999999999 87.95066803699896C 114.37916666666665 87.95066803699896 121.45416666666665 84.82631038026722 129.70833333333331 84.82631038026722C 137.96249999999998 84.82631038026722 145.0375 50.45837615621788 153.29166666666666 50.45837615621788C 161.54583333333332 50.45837615621788 168.62083333333334 56.70709146968139 176.875 56.70709146968139C 185.12916666666666 56.70709146968139 192.20416666666668 67.64234326824254 200.45833333333334 67.64234326824254C 208.7125 67.64234326824254 215.78750000000002 69.20452209660843 224.04166666666669 69.20452209660843C 232.29583333333335 69.20452209660843 239.37083333333337 64.51798561151078 247.62500000000003 64.51798561151078C 255.8791666666667 64.51798561151078 262.9541666666667 97.32374100719424 271.20833333333337 97.32374100719424C 279.46250000000003 97.32374100719424 286.5375 122.3186022610483 294.7916666666667 122.3186022610483C 303.04583333333335 122.3186022610483 310.12083333333334 97.32374100719424 318.375 97.32374100719424C 326.62916666666666 97.32374100719424 333.70416666666665 92.6372045220966 341.9583333333333 92.6372045220966C 350.2125 92.6372045220966 357.28749999999997 103.57245632065775 365.54166666666663 103.57245632065775C 373.7958333333333 103.57245632065775 380.8708333333333 109.82117163412127 389.12499999999994 109.82117163412127C 397.3791666666666 109.82117163412127 404.4541666666666 80.13977389516957 412.70833333333326 80.13977389516957C 420.9624999999999 80.13977389516957 428.0374999999999 78.5775950668037 436.2916666666666 78.5775950668037C 444.54583333333323 78.5775950668037 451.6208333333332 55.144912641315514 459.8749999999999 55.144912641315514C 468.12916666666655 55.144912641315514 475.20416666666654 67.64234326824254 483.4583333333332 67.64234326824254C 491.71249999999986 67.64234326824254 498.78749999999985 94.19938335046248 507.0416666666665 94.19938335046248C 515.2958333333332 94.19938335046248 522.3708333333332 109.82117163412127 530.6249999999999 109.82117163412127C 538.8791666666666 109.82117163412127 545.9541666666665 81.70195272353546 554.2083333333333 81.70195272353546" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <path id d="M9.276072536616956 152L9.276072536616956 87.9969086075668C15.906984489398127 87.9969086075668 28.74408804721883 103.05645952343343 35.375 103.05645952343343C42.00591195278117 103.05645952343343 52.32742138055216 35.28848040203357 58.95833333333333 35.28848040203357C65.58924528611449 35.28848040203357 75.9107547138855 121.88089816826673 82.54166666666666 121.88089816826673C89.17257861944782 121.88089816826673 99.49408804721882 100.54653437078898 106.12499999999999 100.54653437078898C112.75591195278115 100.54653437078898 123.07742138055215 98.03660921814455 129.70833333333331 98.03660921814455C136.33924528611448 98.03660921814455 146.6607547138855 70.42743253905572 153.29166666666666 70.42743253905572C159.92257861944782 70.42743253905572 170.24408804721884 75.4472828443446 176.875 75.4472828443446C183.50591195278116 75.4472828443446 193.82742138055218 84.23202087860014 200.45833333333334 84.23202087860014C207.0892452861145 84.23202087860014 217.41075471388552 85.48698345492235 224.04166666666669 85.48698345492235C230.67257861944785 85.48698345492235 240.99408804721887 81.7220957259557 247.62500000000003 81.7220957259557C254.2559119527812 81.7220957259557 264.5774213805522 108.07630982872232 271.20833333333337 108.07630982872232C277.83924528611453 108.07630982872232 288.1607547138855 128.15571104987782 294.7916666666667 128.15571104987782C301.42257861944785 128.15571104987782 311.74408804721884 108.07630982872232 318.375 108.07630982872232C325.00591195278116 108.07630982872232 335.32742138055215 104.31142209975565 341.9583333333333 104.31142209975565C348.5892452861145 104.31142209975565 358.91075471388547 113.09616013401119 365.54166666666663 113.09616013401119C372.1725786194478 113.09616013401119 382.4940880472188 118.11601043930007 389.12499999999994 118.11601043930007C395.7559119527811 118.11601043930007 406.0774213805521 94.27172148917788 412.70833333333326 94.27172148917788C419.3392452861144 94.27172148917788 429.6607547138854 93.01675891285566 436.2916666666666 93.01675891285566C442.92257861944773 93.01675891285566 453.2440880472187 74.19232026802237 459.8749999999999 74.19232026802237C466.50591195278105 74.19232026802237 476.82742138055204 84.23202087860014 483.4583333333332 84.23202087860014C490.08924528611436 84.23202087860014 500.41075471388535 105.56638467607786 507.0416666666665 105.56638467607786C513.6725786194477 105.56638467607786 523.9940880472187 118.11601043930007 530.6249999999999 118.11601043930007C537.255911952781 118.11601043930007 547.5774213805521 95.52668406550012 554.2083333333333 95.52668406550012C554.2083333333333 95.52668406550012 554.2083333333333 95.52668406550012 554.2083333333333 152M445.0217151479509 95.52668406550012C445.0217151479509 95.52668406550012 445.0217151479509 95.52668406550012 445.0217151479509 95.52668406550012 " fill="url(#SvgjsLinearGradient1050)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask2hc15ceg)" pathto="M 11.791666666666666 152L 11.791666666666666 72.32887975334017C 20.045833333333334 72.32887975334017 27.120833333333334 91.07502569373072 35.375 91.07502569373072C 43.62916666666666 91.07502569373072 50.704166666666666 6.717368961973278 58.95833333333333 6.717368961973278C 67.21249999999999 6.717368961973278 74.2875 114.5077081192189 82.54166666666666 114.5077081192189C 90.79583333333332 114.5077081192189 97.87083333333332 87.95066803699896 106.12499999999999 87.95066803699896C 114.37916666666665 87.95066803699896 121.45416666666665 84.82631038026722 129.70833333333331 84.82631038026722C 137.96249999999998 84.82631038026722 145.0375 50.45837615621788 153.29166666666666 50.45837615621788C 161.54583333333332 50.45837615621788 168.62083333333334 56.70709146968139 176.875 56.70709146968139C 185.12916666666666 56.70709146968139 192.20416666666668 67.64234326824254 200.45833333333334 67.64234326824254C 208.7125 67.64234326824254 215.78750000000002 69.20452209660843 224.04166666666669 69.20452209660843C 232.29583333333335 69.20452209660843 239.37083333333337 64.51798561151078 247.62500000000003 64.51798561151078C 255.8791666666667 64.51798561151078 262.9541666666667 97.32374100719424 271.20833333333337 97.32374100719424C 279.46250000000003 97.32374100719424 286.5375 122.3186022610483 294.7916666666667 122.3186022610483C 303.04583333333335 122.3186022610483 310.12083333333334 97.32374100719424 318.375 97.32374100719424C 326.62916666666666 97.32374100719424 333.70416666666665 92.6372045220966 341.9583333333333 92.6372045220966C 350.2125 92.6372045220966 357.28749999999997 103.57245632065775 365.54166666666663 103.57245632065775C 373.7958333333333 103.57245632065775 380.8708333333333 109.82117163412127 389.12499999999994 109.82117163412127C 397.3791666666666 109.82117163412127 404.4541666666666 80.13977389516957 412.70833333333326 80.13977389516957C 420.9624999999999 80.13977389516957 428.0374999999999 78.5775950668037 436.2916666666666 78.5775950668037C 444.54583333333323 78.5775950668037 451.6208333333332 55.144912641315514 459.8749999999999 55.144912641315514C 468.12916666666655 55.144912641315514 475.20416666666654 67.64234326824254 483.4583333333332 67.64234326824254C 491.71249999999986 67.64234326824254 498.78749999999985 94.19938335046248 507.0416666666665 94.19938335046248C 515.2958333333332 94.19938335046248 522.3708333333332 109.82117163412127 530.6249999999999 109.82117163412127C 538.8791666666666 109.82117163412127 545.9541666666665 81.70195272353546 554.2083333333333 81.70195272353546C 554.2083333333333 81.70195272353546 554.2083333333333 81.70195272353546 554.2083333333333 152M 554.2083333333333 81.70195272353546z" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <g id className="apexcharts-series-markers-wrap hidden">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id r={0} cx={0} cy={0} className="apexcharts-marker wvldkyxgf no-pointer-events" stroke="#ffffff" fill="#f7b924" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id x1={0} y1={0} x2={566} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id x1={0} y1={0} x2={566} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id className="apexcharts-yaxis-annotations hidden">
                                              </g>
                                              <g id className="apexcharts-xaxis-annotations hidden">
                                              </g>
                                              <g id className="apexcharts-point-annotations hidden">
                                              </g>
                                            </g>
                                            <g id className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(247, 185, 36)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 567, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" role="tabpanel" id="slick-slide00" style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          New Donors</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <span className="opacity-10 text-success pr-2">
                                              <i className="fa fa-angle-up" />
                                            </span>
                                            <span>78</span>
                                            <small className="opacity-5 pl-1">%</small>
                                          </div>
                                          <div className="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">+14</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id="dashboard-sparkline-3" style={{minHeight: 152}}>
                                        <div id="apexchartsu4yvohaq" className="apexcharts-canvas apexchartsu4yvohaq" style={{width: 406, height: 152}}>
                                          <svg id="SvgjsSvg1525" width={406} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                            <g id="SvgjsG1527" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id="SvgjsDefs1526">
                                                <clipPath id="gridRectMasku4yvohaq">
                                                  <rect id="SvgjsRect1530" width={411} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id="gridRectMarkerMasku4yvohaq">
                                                  <rect id="SvgjsRect1531" width={420} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id="SvgjsLinearGradient1538" x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id="SvgjsStop1539" stopOpacity="0.7" stopColor="rgba(58,196,125,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id="SvgjsStop1540" stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id="SvgjsStop1541" stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id="SvgjsRect1529" width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id="SvgjsG1543" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id="SvgjsG1544" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id="SvgjsG1547" className="apexcharts-grid">
                                                <line id="SvgjsLine1549" x1={0} y1={152} x2={406} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id="SvgjsLine1548" x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id="SvgjsG1533" className="apexcharts-area-series apexcharts-plot-series">
                                                <g id="SvgjsG1534" className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id="apexcharts-area-0" d="M 8.458333333333334 122.3186022610483C 14.379166666666666 122.3186022610483 19.454166666666666 97.32374100719424 25.375 97.32374100719424C 31.295833333333334 97.32374100719424 36.37083333333334 50.45837615621788 42.29166666666667 50.45837615621788C 48.212500000000006 50.45837615621788 53.28750000000001 78.5775950668037 59.20833333333334 78.5775950668037C 65.12916666666668 78.5775950668037 70.20416666666668 6.717368961973278 76.12500000000001 6.717368961973278C 82.04583333333335 6.717368961973278 87.12083333333335 64.51798561151078 93.04166666666669 64.51798561151078C 98.96250000000002 64.51798561151078 104.03750000000002 94.19938335046248 109.95833333333336 94.19938335046248C 115.87916666666669 94.19938335046248 120.9541666666667 114.5077081192189 126.87500000000003 114.5077081192189C 132.79583333333335 114.5077081192189 137.87083333333337 69.20452209660843 143.79166666666669 69.20452209660843C 149.7125 69.20452209660843 154.78750000000002 67.64234326824254 160.70833333333334 67.64234326824254C 166.62916666666666 67.64234326824254 171.70416666666668 103.57245632065775 177.625 103.57245632065775C 183.54583333333332 103.57245632065775 188.62083333333334 91.07502569373072 194.54166666666666 91.07502569373072C 200.46249999999998 91.07502569373072 205.5375 97.32374100719424 211.45833333333331 97.32374100719424C 217.37916666666663 97.32374100719424 222.45416666666665 56.70709146968139 228.37499999999997 56.70709146968139C 234.2958333333333 56.70709146968139 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 67.64234326824254 262.2083333333333 67.64234326824254C 268.12916666666666 67.64234326824254 273.20416666666665 55.144912641315514 279.125 55.144912641315514C 285.04583333333335 55.144912641315514 290.12083333333334 81.70195272353546 296.0416666666667 81.70195272353546C 301.96250000000003 81.70195272353546 307.0375 109.82117163412127 312.95833333333337 109.82117163412127C 318.8791666666667 109.82117163412127 323.9541666666667 80.13977389516957 329.87500000000006 80.13977389516957C 335.7958333333334 80.13977389516957 340.8708333333334 109.82117163412127 346.79166666666674 109.82117163412127C 352.7125000000001 109.82117163412127 357.7875000000001 84.82631038026722 363.7083333333334 84.82631038026722C 369.6291666666668 84.82631038026722 374.70416666666677 72.32887975334017 380.6250000000001 72.32887975334017C 386.54583333333346 72.32887975334017 391.62083333333345 87.95066803699896 397.5416666666668 87.95066803699896" fill="none" fillOpacity={1} stroke="#3ac47d" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMasku4yvohaq)" pathto="M 8.458333333333334 122.3186022610483C 14.379166666666666 122.3186022610483 19.454166666666666 97.32374100719424 25.375 97.32374100719424C 31.295833333333334 97.32374100719424 36.37083333333334 50.45837615621788 42.29166666666667 50.45837615621788C 48.212500000000006 50.45837615621788 53.28750000000001 78.5775950668037 59.20833333333334 78.5775950668037C 65.12916666666668 78.5775950668037 70.20416666666668 6.717368961973278 76.12500000000001 6.717368961973278C 82.04583333333335 6.717368961973278 87.12083333333335 64.51798561151078 93.04166666666669 64.51798561151078C 98.96250000000002 64.51798561151078 104.03750000000002 94.19938335046248 109.95833333333336 94.19938335046248C 115.87916666666669 94.19938335046248 120.9541666666667 114.5077081192189 126.87500000000003 114.5077081192189C 132.79583333333335 114.5077081192189 137.87083333333337 69.20452209660843 143.79166666666669 69.20452209660843C 149.7125 69.20452209660843 154.78750000000002 67.64234326824254 160.70833333333334 67.64234326824254C 166.62916666666666 67.64234326824254 171.70416666666668 103.57245632065775 177.625 103.57245632065775C 183.54583333333332 103.57245632065775 188.62083333333334 91.07502569373072 194.54166666666666 91.07502569373072C 200.46249999999998 91.07502569373072 205.5375 97.32374100719424 211.45833333333331 97.32374100719424C 217.37916666666663 97.32374100719424 222.45416666666665 56.70709146968139 228.37499999999997 56.70709146968139C 234.2958333333333 56.70709146968139 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 67.64234326824254 262.2083333333333 67.64234326824254C 268.12916666666666 67.64234326824254 273.20416666666665 55.144912641315514 279.125 55.144912641315514C 285.04583333333335 55.144912641315514 290.12083333333334 81.70195272353546 296.0416666666667 81.70195272353546C 301.96250000000003 81.70195272353546 307.0375 109.82117163412127 312.95833333333337 109.82117163412127C 318.8791666666667 109.82117163412127 323.9541666666667 80.13977389516957 329.87500000000006 80.13977389516957C 335.7958333333334 80.13977389516957 340.8708333333334 109.82117163412127 346.79166666666674 109.82117163412127C 352.7125000000001 109.82117163412127 357.7875000000001 84.82631038026722 363.7083333333334 84.82631038026722C 369.6291666666668 84.82631038026722 374.70416666666677 72.32887975334017 380.6250000000001 72.32887975334017C 386.54583333333346 72.32887975334017 391.62083333333345 87.95066803699896 397.5416666666668 87.95066803699896" pathfrom="M -1 152L -1 152L 25.375 152L 42.29166666666667 152L 59.20833333333334 152L 76.12500000000001 152L 93.04166666666669 152L 109.95833333333336 152L 126.87500000000003 152L 143.79166666666669 152L 160.70833333333334 152L 177.625 152L 194.54166666666666 152L 211.45833333333331 152L 228.37499999999997 152L 245.29166666666663 152L 262.2083333333333 152L 279.125 152L 296.0416666666667 152L 312.95833333333337 152L 329.87500000000006 152L 346.79166666666674 152L 363.7083333333334 152L 380.6250000000001 152L 397.5416666666668 152">
                                                  </path>
                                                  <path id="apexcharts-area-0" d="M 8.458333333333334 152L 8.458333333333334 122.3186022610483C 14.379166666666666 122.3186022610483 19.454166666666666 97.32374100719424 25.375 97.32374100719424C 31.295833333333334 97.32374100719424 36.37083333333334 50.45837615621788 42.29166666666667 50.45837615621788C 48.212500000000006 50.45837615621788 53.28750000000001 78.5775950668037 59.20833333333334 78.5775950668037C 65.12916666666668 78.5775950668037 70.20416666666668 6.717368961973278 76.12500000000001 6.717368961973278C 82.04583333333335 6.717368961973278 87.12083333333335 64.51798561151078 93.04166666666669 64.51798561151078C 98.96250000000002 64.51798561151078 104.03750000000002 94.19938335046248 109.95833333333336 94.19938335046248C 115.87916666666669 94.19938335046248 120.9541666666667 114.5077081192189 126.87500000000003 114.5077081192189C 132.79583333333335 114.5077081192189 137.87083333333337 69.20452209660843 143.79166666666669 69.20452209660843C 149.7125 69.20452209660843 154.78750000000002 67.64234326824254 160.70833333333334 67.64234326824254C 166.62916666666666 67.64234326824254 171.70416666666668 103.57245632065775 177.625 103.57245632065775C 183.54583333333332 103.57245632065775 188.62083333333334 91.07502569373072 194.54166666666666 91.07502569373072C 200.46249999999998 91.07502569373072 205.5375 97.32374100719424 211.45833333333331 97.32374100719424C 217.37916666666663 97.32374100719424 222.45416666666665 56.70709146968139 228.37499999999997 56.70709146968139C 234.2958333333333 56.70709146968139 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 67.64234326824254 262.2083333333333 67.64234326824254C 268.12916666666666 67.64234326824254 273.20416666666665 55.144912641315514 279.125 55.144912641315514C 285.04583333333335 55.144912641315514 290.12083333333334 81.70195272353546 296.0416666666667 81.70195272353546C 301.96250000000003 81.70195272353546 307.0375 109.82117163412127 312.95833333333337 109.82117163412127C 318.8791666666667 109.82117163412127 323.9541666666667 80.13977389516957 329.87500000000006 80.13977389516957C 335.7958333333334 80.13977389516957 340.8708333333334 109.82117163412127 346.79166666666674 109.82117163412127C 352.7125000000001 109.82117163412127 357.7875000000001 84.82631038026722 363.7083333333334 84.82631038026722C 369.6291666666668 84.82631038026722 374.70416666666677 72.32887975334017 380.6250000000001 72.32887975334017C 386.54583333333346 72.32887975334017 391.62083333333345 87.95066803699896 397.5416666666668 87.95066803699896C 397.5416666666668 87.95066803699896 397.5416666666668 87.95066803699896 397.5416666666668 152M 397.5416666666668 87.95066803699896z" fill="url(#SvgjsLinearGradient1538)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMasku4yvohaq)" pathto="M 8.458333333333334 152L 8.458333333333334 122.3186022610483C 14.379166666666666 122.3186022610483 19.454166666666666 97.32374100719424 25.375 97.32374100719424C 31.295833333333334 97.32374100719424 36.37083333333334 50.45837615621788 42.29166666666667 50.45837615621788C 48.212500000000006 50.45837615621788 53.28750000000001 78.5775950668037 59.20833333333334 78.5775950668037C 65.12916666666668 78.5775950668037 70.20416666666668 6.717368961973278 76.12500000000001 6.717368961973278C 82.04583333333335 6.717368961973278 87.12083333333335 64.51798561151078 93.04166666666669 64.51798561151078C 98.96250000000002 64.51798561151078 104.03750000000002 94.19938335046248 109.95833333333336 94.19938335046248C 115.87916666666669 94.19938335046248 120.9541666666667 114.5077081192189 126.87500000000003 114.5077081192189C 132.79583333333335 114.5077081192189 137.87083333333337 69.20452209660843 143.79166666666669 69.20452209660843C 149.7125 69.20452209660843 154.78750000000002 67.64234326824254 160.70833333333334 67.64234326824254C 166.62916666666666 67.64234326824254 171.70416666666668 103.57245632065775 177.625 103.57245632065775C 183.54583333333332 103.57245632065775 188.62083333333334 91.07502569373072 194.54166666666666 91.07502569373072C 200.46249999999998 91.07502569373072 205.5375 97.32374100719424 211.45833333333331 97.32374100719424C 217.37916666666663 97.32374100719424 222.45416666666665 56.70709146968139 228.37499999999997 56.70709146968139C 234.2958333333333 56.70709146968139 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 67.64234326824254 262.2083333333333 67.64234326824254C 268.12916666666666 67.64234326824254 273.20416666666665 55.144912641315514 279.125 55.144912641315514C 285.04583333333335 55.144912641315514 290.12083333333334 81.70195272353546 296.0416666666667 81.70195272353546C 301.96250000000003 81.70195272353546 307.0375 109.82117163412127 312.95833333333337 109.82117163412127C 318.8791666666667 109.82117163412127 323.9541666666667 80.13977389516957 329.87500000000006 80.13977389516957C 335.7958333333334 80.13977389516957 340.8708333333334 109.82117163412127 346.79166666666674 109.82117163412127C 352.7125000000001 109.82117163412127 357.7875000000001 84.82631038026722 363.7083333333334 84.82631038026722C 369.6291666666668 84.82631038026722 374.70416666666677 72.32887975334017 380.6250000000001 72.32887975334017C 386.54583333333346 72.32887975334017 391.62083333333345 87.95066803699896 397.5416666666668 87.95066803699896C 397.5416666666668 87.95066803699896 397.5416666666668 87.95066803699896 397.5416666666668 152M 397.5416666666668 87.95066803699896z" pathfrom="M -1 152L -1 152L 25.375 152L 42.29166666666667 152L 59.20833333333334 152L 76.12500000000001 152L 93.04166666666669 152L 109.95833333333336 152L 126.87500000000003 152L 143.79166666666669 152L 160.70833333333334 152L 177.625 152L 194.54166666666666 152L 211.45833333333331 152L 228.37499999999997 152L 245.29166666666663 152L 262.2083333333333 152L 279.125 152L 296.0416666666667 152L 312.95833333333337 152L 329.87500000000006 152L 346.79166666666674 152L 363.7083333333334 152L 380.6250000000001 152L 397.5416666666668 152">
                                                  </path>
                                                  <g id="SvgjsG1535" className="apexcharts-series-markers-wrap">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id="SvgjsCircle1555" r={0} cx={0} cy={0} className="apexcharts-marker wf5g2qt61 no-pointer-events" stroke="#ffffff" fill="#3ac47d" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id="SvgjsG1536" className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id="SvgjsLine1550" x1={0} y1={0} x2={406} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id="SvgjsLine1551" x1={0} y1={0} x2={406} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id="SvgjsG1552" className="apexcharts-yaxis-annotations">
                                              </g>
                                              <g id="SvgjsG1553" className="apexcharts-xaxis-annotations">
                                              </g>
                                              <g id="SvgjsG1554" className="apexcharts-point-annotations">
                                              </g>
                                            </g>
                                            <g id="SvgjsG1545" className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id="SvgjsG1546" className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(58, 196, 125)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 407, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide01" style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          Organ Trafficking</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <span>12</span>
                                            <small className="opacity-3 pr-1">%</small>
                                            <span className="text-primary pl-3">
                                              <i className="fa fa-angle-down" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id="dashboard-sparkline-1" style={{minHeight: 152}}>
                                        <div id="apexchartszjb0pq37l" className="apexcharts-canvas apexchartszjb0pq37l" style={{width: 406, height: 152}}>
                                          <svg id="SvgjsSvg1457" width={406} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                            <g id="SvgjsG1459" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id="SvgjsDefs1458">
                                                <clipPath id="gridRectMaskzjb0pq37l">
                                                  <rect id="SvgjsRect1462" width={411} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id="gridRectMarkerMaskzjb0pq37l">
                                                  <rect id="SvgjsRect1463" width={420} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id="SvgjsLinearGradient1470" x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id="SvgjsStop1471" stopOpacity="0.7" stopColor="rgba(63,106,216,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id="SvgjsStop1472" stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id="SvgjsStop1473" stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id="SvgjsRect1461" width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id="SvgjsG1475" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id="SvgjsG1476" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id="SvgjsG1479" className="apexcharts-grid">
                                                <line id="SvgjsLine1481" x1={0} y1={152} x2={406} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id="SvgjsLine1480" x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id="SvgjsG1465" className="apexcharts-area-series apexcharts-plot-series">
                                                <g id="SvgjsG1466" className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id="apexcharts-area-0" d="M 8.458333333333334 56.70709146968139C 14.379166666666666 56.70709146968139 19.454166666666666 80.13977389516957 25.375 80.13977389516957C 31.295833333333334 80.13977389516957 36.37083333333334 67.64234326824254 42.29166666666667 67.64234326824254C 48.212500000000006 67.64234326824254 53.28750000000001 103.57245632065775 59.20833333333334 103.57245632065775C 65.12916666666668 103.57245632065775 70.20416666666668 91.07502569373072 76.12500000000001 91.07502569373072C 82.04583333333335 91.07502569373072 87.12083333333335 6.717368961973278 93.04166666666669 6.717368961973278C 98.96250000000002 6.717368961973278 104.03750000000002 72.32887975334017 109.95833333333336 72.32887975334017C 115.87916666666669 72.32887975334017 120.9541666666667 92.6372045220966 126.87500000000003 92.6372045220966C 132.79583333333335 92.6372045220966 137.87083333333337 109.82117163412127 143.79166666666669 109.82117163412127C 149.7125 109.82117163412127 154.78750000000002 109.82117163412127 160.70833333333334 109.82117163412127C 166.62916666666666 109.82117163412127 171.70416666666668 78.5775950668037 177.625 78.5775950668037C 183.54583333333332 78.5775950668037 188.62083333333334 81.70195272353546 194.54166666666666 81.70195272353546C 200.46249999999998 81.70195272353546 205.5375 84.82631038026722 211.45833333333331 84.82631038026722C 217.37916666666663 84.82631038026722 222.45416666666665 69.20452209660843 228.37499999999997 69.20452209660843C 234.2958333333333 69.20452209660843 239.3708333333333 64.51798561151078 245.29166666666663 64.51798561151078C 251.21249999999998 64.51798561151078 256.28749999999997 114.5077081192189 262.2083333333333 114.5077081192189C 268.12916666666666 114.5077081192189 273.20416666666665 122.3186022610483 279.125 122.3186022610483C 285.04583333333335 122.3186022610483 290.12083333333334 94.19938335046248 296.0416666666667 94.19938335046248C 301.96250000000003 94.19938335046248 307.0375 97.32374100719424 312.95833333333337 97.32374100719424C 318.8791666666667 97.32374100719424 323.9541666666667 97.32374100719424 329.87500000000006 97.32374100719424C 335.7958333333334 97.32374100719424 340.8708333333334 87.95066803699896 346.79166666666674 87.95066803699896C 352.7125000000001 87.95066803699896 357.7875000000001 67.64234326824254 363.7083333333334 67.64234326824254C 369.6291666666668 67.64234326824254 374.70416666666677 55.144912641315514 380.6250000000001 55.144912641315514C 386.54583333333346 55.144912641315514 391.62083333333345 50.45837615621788 397.5416666666668 50.45837615621788" fill="none" fillOpacity={1} stroke="#3f6ad8" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskzjb0pq37l)" pathto="M 8.458333333333334 56.70709146968139C 14.379166666666666 56.70709146968139 19.454166666666666 80.13977389516957 25.375 80.13977389516957C 31.295833333333334 80.13977389516957 36.37083333333334 67.64234326824254 42.29166666666667 67.64234326824254C 48.212500000000006 67.64234326824254 53.28750000000001 103.57245632065775 59.20833333333334 103.57245632065775C 65.12916666666668 103.57245632065775 70.20416666666668 91.07502569373072 76.12500000000001 91.07502569373072C 82.04583333333335 91.07502569373072 87.12083333333335 6.717368961973278 93.04166666666669 6.717368961973278C 98.96250000000002 6.717368961973278 104.03750000000002 72.32887975334017 109.95833333333336 72.32887975334017C 115.87916666666669 72.32887975334017 120.9541666666667 92.6372045220966 126.87500000000003 92.6372045220966C 132.79583333333335 92.6372045220966 137.87083333333337 109.82117163412127 143.79166666666669 109.82117163412127C 149.7125 109.82117163412127 154.78750000000002 109.82117163412127 160.70833333333334 109.82117163412127C 166.62916666666666 109.82117163412127 171.70416666666668 78.5775950668037 177.625 78.5775950668037C 183.54583333333332 78.5775950668037 188.62083333333334 81.70195272353546 194.54166666666666 81.70195272353546C 200.46249999999998 81.70195272353546 205.5375 84.82631038026722 211.45833333333331 84.82631038026722C 217.37916666666663 84.82631038026722 222.45416666666665 69.20452209660843 228.37499999999997 69.20452209660843C 234.2958333333333 69.20452209660843 239.3708333333333 64.51798561151078 245.29166666666663 64.51798561151078C 251.21249999999998 64.51798561151078 256.28749999999997 114.5077081192189 262.2083333333333 114.5077081192189C 268.12916666666666 114.5077081192189 273.20416666666665 122.3186022610483 279.125 122.3186022610483C 285.04583333333335 122.3186022610483 290.12083333333334 94.19938335046248 296.0416666666667 94.19938335046248C 301.96250000000003 94.19938335046248 307.0375 97.32374100719424 312.95833333333337 97.32374100719424C 318.8791666666667 97.32374100719424 323.9541666666667 97.32374100719424 329.87500000000006 97.32374100719424C 335.7958333333334 97.32374100719424 340.8708333333334 87.95066803699896 346.79166666666674 87.95066803699896C 352.7125000000001 87.95066803699896 357.7875000000001 67.64234326824254 363.7083333333334 67.64234326824254C 369.6291666666668 67.64234326824254 374.70416666666677 55.144912641315514 380.6250000000001 55.144912641315514C 386.54583333333346 55.144912641315514 391.62083333333345 50.45837615621788 397.5416666666668 50.45837615621788" pathfrom="M -1 152L -1 152L 25.375 152L 42.29166666666667 152L 59.20833333333334 152L 76.12500000000001 152L 93.04166666666669 152L 109.95833333333336 152L 126.87500000000003 152L 143.79166666666669 152L 160.70833333333334 152L 177.625 152L 194.54166666666666 152L 211.45833333333331 152L 228.37499999999997 152L 245.29166666666663 152L 262.2083333333333 152L 279.125 152L 296.0416666666667 152L 312.95833333333337 152L 329.87500000000006 152L 346.79166666666674 152L 363.7083333333334 152L 380.6250000000001 152L 397.5416666666668 152">
                                                  </path>
                                                  <path id="apexcharts-area-0" d="M 8.458333333333334 152L 8.458333333333334 56.70709146968139C 14.379166666666666 56.70709146968139 19.454166666666666 80.13977389516957 25.375 80.13977389516957C 31.295833333333334 80.13977389516957 36.37083333333334 67.64234326824254 42.29166666666667 67.64234326824254C 48.212500000000006 67.64234326824254 53.28750000000001 103.57245632065775 59.20833333333334 103.57245632065775C 65.12916666666668 103.57245632065775 70.20416666666668 91.07502569373072 76.12500000000001 91.07502569373072C 82.04583333333335 91.07502569373072 87.12083333333335 6.717368961973278 93.04166666666669 6.717368961973278C 98.96250000000002 6.717368961973278 104.03750000000002 72.32887975334017 109.95833333333336 72.32887975334017C 115.87916666666669 72.32887975334017 120.9541666666667 92.6372045220966 126.87500000000003 92.6372045220966C 132.79583333333335 92.6372045220966 137.87083333333337 109.82117163412127 143.79166666666669 109.82117163412127C 149.7125 109.82117163412127 154.78750000000002 109.82117163412127 160.70833333333334 109.82117163412127C 166.62916666666666 109.82117163412127 171.70416666666668 78.5775950668037 177.625 78.5775950668037C 183.54583333333332 78.5775950668037 188.62083333333334 81.70195272353546 194.54166666666666 81.70195272353546C 200.46249999999998 81.70195272353546 205.5375 84.82631038026722 211.45833333333331 84.82631038026722C 217.37916666666663 84.82631038026722 222.45416666666665 69.20452209660843 228.37499999999997 69.20452209660843C 234.2958333333333 69.20452209660843 239.3708333333333 64.51798561151078 245.29166666666663 64.51798561151078C 251.21249999999998 64.51798561151078 256.28749999999997 114.5077081192189 262.2083333333333 114.5077081192189C 268.12916666666666 114.5077081192189 273.20416666666665 122.3186022610483 279.125 122.3186022610483C 285.04583333333335 122.3186022610483 290.12083333333334 94.19938335046248 296.0416666666667 94.19938335046248C 301.96250000000003 94.19938335046248 307.0375 97.32374100719424 312.95833333333337 97.32374100719424C 318.8791666666667 97.32374100719424 323.9541666666667 97.32374100719424 329.87500000000006 97.32374100719424C 335.7958333333334 97.32374100719424 340.8708333333334 87.95066803699896 346.79166666666674 87.95066803699896C 352.7125000000001 87.95066803699896 357.7875000000001 67.64234326824254 363.7083333333334 67.64234326824254C 369.6291666666668 67.64234326824254 374.70416666666677 55.144912641315514 380.6250000000001 55.144912641315514C 386.54583333333346 55.144912641315514 391.62083333333345 50.45837615621788 397.5416666666668 50.45837615621788C 397.5416666666668 50.45837615621788 397.5416666666668 50.45837615621788 397.5416666666668 152M 397.5416666666668 50.45837615621788z" fill="url(#SvgjsLinearGradient1470)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskzjb0pq37l)" pathto="M 8.458333333333334 152L 8.458333333333334 56.70709146968139C 14.379166666666666 56.70709146968139 19.454166666666666 80.13977389516957 25.375 80.13977389516957C 31.295833333333334 80.13977389516957 36.37083333333334 67.64234326824254 42.29166666666667 67.64234326824254C 48.212500000000006 67.64234326824254 53.28750000000001 103.57245632065775 59.20833333333334 103.57245632065775C 65.12916666666668 103.57245632065775 70.20416666666668 91.07502569373072 76.12500000000001 91.07502569373072C 82.04583333333335 91.07502569373072 87.12083333333335 6.717368961973278 93.04166666666669 6.717368961973278C 98.96250000000002 6.717368961973278 104.03750000000002 72.32887975334017 109.95833333333336 72.32887975334017C 115.87916666666669 72.32887975334017 120.9541666666667 92.6372045220966 126.87500000000003 92.6372045220966C 132.79583333333335 92.6372045220966 137.87083333333337 109.82117163412127 143.79166666666669 109.82117163412127C 149.7125 109.82117163412127 154.78750000000002 109.82117163412127 160.70833333333334 109.82117163412127C 166.62916666666666 109.82117163412127 171.70416666666668 78.5775950668037 177.625 78.5775950668037C 183.54583333333332 78.5775950668037 188.62083333333334 81.70195272353546 194.54166666666666 81.70195272353546C 200.46249999999998 81.70195272353546 205.5375 84.82631038026722 211.45833333333331 84.82631038026722C 217.37916666666663 84.82631038026722 222.45416666666665 69.20452209660843 228.37499999999997 69.20452209660843C 234.2958333333333 69.20452209660843 239.3708333333333 64.51798561151078 245.29166666666663 64.51798561151078C 251.21249999999998 64.51798561151078 256.28749999999997 114.5077081192189 262.2083333333333 114.5077081192189C 268.12916666666666 114.5077081192189 273.20416666666665 122.3186022610483 279.125 122.3186022610483C 285.04583333333335 122.3186022610483 290.12083333333334 94.19938335046248 296.0416666666667 94.19938335046248C 301.96250000000003 94.19938335046248 307.0375 97.32374100719424 312.95833333333337 97.32374100719424C 318.8791666666667 97.32374100719424 323.9541666666667 97.32374100719424 329.87500000000006 97.32374100719424C 335.7958333333334 97.32374100719424 340.8708333333334 87.95066803699896 346.79166666666674 87.95066803699896C 352.7125000000001 87.95066803699896 357.7875000000001 67.64234326824254 363.7083333333334 67.64234326824254C 369.6291666666668 67.64234326824254 374.70416666666677 55.144912641315514 380.6250000000001 55.144912641315514C 386.54583333333346 55.144912641315514 391.62083333333345 50.45837615621788 397.5416666666668 50.45837615621788C 397.5416666666668 50.45837615621788 397.5416666666668 50.45837615621788 397.5416666666668 152M 397.5416666666668 50.45837615621788z" pathfrom="M -1 152L -1 152L 25.375 152L 42.29166666666667 152L 59.20833333333334 152L 76.12500000000001 152L 93.04166666666669 152L 109.95833333333336 152L 126.87500000000003 152L 143.79166666666669 152L 160.70833333333334 152L 177.625 152L 194.54166666666666 152L 211.45833333333331 152L 228.37499999999997 152L 245.29166666666663 152L 262.2083333333333 152L 279.125 152L 296.0416666666667 152L 312.95833333333337 152L 329.87500000000006 152L 346.79166666666674 152L 363.7083333333334 152L 380.6250000000001 152L 397.5416666666668 152">
                                                  </path>
                                                  <g id="SvgjsG1467" className="apexcharts-series-markers-wrap">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id="SvgjsCircle1487" r={0} cx={0} cy={0} className="apexcharts-marker wkoqesvkx no-pointer-events" stroke="#ffffff" fill="#3f6ad8" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id="SvgjsG1468" className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id="SvgjsLine1482" x1={0} y1={0} x2={406} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id="SvgjsLine1483" x1={0} y1={0} x2={406} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id="SvgjsG1484" className="apexcharts-yaxis-annotations">
                                              </g>
                                              <g id="SvgjsG1485" className="apexcharts-xaxis-annotations">
                                              </g>
                                              <g id="SvgjsG1486" className="apexcharts-point-annotations">
                                              </g>
                                            </g>
                                            <g id="SvgjsG1477" className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id="SvgjsG1478" className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(63, 106, 216)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 407, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide02" style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          Helpdesk Tickets</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <span className="text-warning">34</span>
                                          </div>
                                          <div className="widget-title ml-2 font-size-lg font-weight-normal text-dark">
                                            <span className="opacity-5 text-muted pl-2 pr-1">5%</span>
                                            increase
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id="dashboard-sparkline-2" style={{minHeight: 152}}>
                                        <div id="apexcharts2hc15ceg" className="apexcharts-canvas apexcharts2hc15ceg" style={{width: 406, height: 152}}>
                                          <svg id="SvgjsSvg1491" width={406} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                            <g id="SvgjsG1493" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id="SvgjsDefs1492">
                                                <clipPath id="gridRectMask2hc15ceg">
                                                  <rect id="SvgjsRect1496" width={411} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id="gridRectMarkerMask2hc15ceg">
                                                  <rect id="SvgjsRect1497" width={420} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id="SvgjsLinearGradient1504" x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id="SvgjsStop1505" stopOpacity="0.7" stopColor="rgba(247,185,36,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id="SvgjsStop1506" stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id="SvgjsStop1507" stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id="SvgjsRect1495" width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id="SvgjsG1509" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id="SvgjsG1510" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id="SvgjsG1513" className="apexcharts-grid">
                                                <line id="SvgjsLine1515" x1={0} y1={152} x2={406} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id="SvgjsLine1514" x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id="SvgjsG1499" className="apexcharts-area-series apexcharts-plot-series">
                                                <g id="SvgjsG1500" className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id="apexcharts-area-0" d="M 8.458333333333334 72.32887975334017C 14.379166666666666 72.32887975334017 19.454166666666666 91.07502569373072 25.375 91.07502569373072C 31.295833333333334 91.07502569373072 36.37083333333334 6.717368961973278 42.29166666666667 6.717368961973278C 48.212500000000006 6.717368961973278 53.28750000000001 114.5077081192189 59.20833333333334 114.5077081192189C 65.12916666666668 114.5077081192189 70.20416666666668 87.95066803699896 76.12500000000001 87.95066803699896C 82.04583333333335 87.95066803699896 87.12083333333335 84.82631038026722 93.04166666666669 84.82631038026722C 98.96250000000002 84.82631038026722 104.03750000000002 50.45837615621788 109.95833333333336 50.45837615621788C 115.87916666666669 50.45837615621788 120.9541666666667 56.70709146968139 126.87500000000003 56.70709146968139C 132.79583333333335 56.70709146968139 137.87083333333337 67.64234326824254 143.79166666666669 67.64234326824254C 149.7125 67.64234326824254 154.78750000000002 69.20452209660843 160.70833333333334 69.20452209660843C 166.62916666666666 69.20452209660843 171.70416666666668 64.51798561151078 177.625 64.51798561151078C 183.54583333333332 64.51798561151078 188.62083333333334 97.32374100719424 194.54166666666666 97.32374100719424C 200.46249999999998 97.32374100719424 205.5375 122.3186022610483 211.45833333333331 122.3186022610483C 217.37916666666663 122.3186022610483 222.45416666666665 97.32374100719424 228.37499999999997 97.32374100719424C 234.2958333333333 97.32374100719424 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 103.57245632065775 262.2083333333333 103.57245632065775C 268.12916666666666 103.57245632065775 273.20416666666665 109.82117163412127 279.125 109.82117163412127C 285.04583333333335 109.82117163412127 290.12083333333334 80.13977389516957 296.0416666666667 80.13977389516957C 301.96250000000003 80.13977389516957 307.0375 78.5775950668037 312.95833333333337 78.5775950668037C 318.8791666666667 78.5775950668037 323.9541666666667 55.144912641315514 329.87500000000006 55.144912641315514C 335.7958333333334 55.144912641315514 340.8708333333334 67.64234326824254 346.79166666666674 67.64234326824254C 352.7125000000001 67.64234326824254 357.7875000000001 94.19938335046248 363.7083333333334 94.19938335046248C 369.6291666666668 94.19938335046248 374.70416666666677 109.82117163412127 380.6250000000001 109.82117163412127C 386.54583333333346 109.82117163412127 391.62083333333345 81.70195272353546 397.5416666666668 81.70195272353546" fill="none" fillOpacity={1} stroke="#f7b924" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask2hc15ceg)" pathto="M 8.458333333333334 72.32887975334017C 14.379166666666666 72.32887975334017 19.454166666666666 91.07502569373072 25.375 91.07502569373072C 31.295833333333334 91.07502569373072 36.37083333333334 6.717368961973278 42.29166666666667 6.717368961973278C 48.212500000000006 6.717368961973278 53.28750000000001 114.5077081192189 59.20833333333334 114.5077081192189C 65.12916666666668 114.5077081192189 70.20416666666668 87.95066803699896 76.12500000000001 87.95066803699896C 82.04583333333335 87.95066803699896 87.12083333333335 84.82631038026722 93.04166666666669 84.82631038026722C 98.96250000000002 84.82631038026722 104.03750000000002 50.45837615621788 109.95833333333336 50.45837615621788C 115.87916666666669 50.45837615621788 120.9541666666667 56.70709146968139 126.87500000000003 56.70709146968139C 132.79583333333335 56.70709146968139 137.87083333333337 67.64234326824254 143.79166666666669 67.64234326824254C 149.7125 67.64234326824254 154.78750000000002 69.20452209660843 160.70833333333334 69.20452209660843C 166.62916666666666 69.20452209660843 171.70416666666668 64.51798561151078 177.625 64.51798561151078C 183.54583333333332 64.51798561151078 188.62083333333334 97.32374100719424 194.54166666666666 97.32374100719424C 200.46249999999998 97.32374100719424 205.5375 122.3186022610483 211.45833333333331 122.3186022610483C 217.37916666666663 122.3186022610483 222.45416666666665 97.32374100719424 228.37499999999997 97.32374100719424C 234.2958333333333 97.32374100719424 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 103.57245632065775 262.2083333333333 103.57245632065775C 268.12916666666666 103.57245632065775 273.20416666666665 109.82117163412127 279.125 109.82117163412127C 285.04583333333335 109.82117163412127 290.12083333333334 80.13977389516957 296.0416666666667 80.13977389516957C 301.96250000000003 80.13977389516957 307.0375 78.5775950668037 312.95833333333337 78.5775950668037C 318.8791666666667 78.5775950668037 323.9541666666667 55.144912641315514 329.87500000000006 55.144912641315514C 335.7958333333334 55.144912641315514 340.8708333333334 67.64234326824254 346.79166666666674 67.64234326824254C 352.7125000000001 67.64234326824254 357.7875000000001 94.19938335046248 363.7083333333334 94.19938335046248C 369.6291666666668 94.19938335046248 374.70416666666677 109.82117163412127 380.6250000000001 109.82117163412127C 386.54583333333346 109.82117163412127 391.62083333333345 81.70195272353546 397.5416666666668 81.70195272353546" pathfrom="M -1 152L -1 152L 25.375 152L 42.29166666666667 152L 59.20833333333334 152L 76.12500000000001 152L 93.04166666666669 152L 109.95833333333336 152L 126.87500000000003 152L 143.79166666666669 152L 160.70833333333334 152L 177.625 152L 194.54166666666666 152L 211.45833333333331 152L 228.37499999999997 152L 245.29166666666663 152L 262.2083333333333 152L 279.125 152L 296.0416666666667 152L 312.95833333333337 152L 329.87500000000006 152L 346.79166666666674 152L 363.7083333333334 152L 380.6250000000001 152L 397.5416666666668 152">
                                                  </path>
                                                  <path id="apexcharts-area-0" d="M 8.458333333333334 152L 8.458333333333334 72.32887975334017C 14.379166666666666 72.32887975334017 19.454166666666666 91.07502569373072 25.375 91.07502569373072C 31.295833333333334 91.07502569373072 36.37083333333334 6.717368961973278 42.29166666666667 6.717368961973278C 48.212500000000006 6.717368961973278 53.28750000000001 114.5077081192189 59.20833333333334 114.5077081192189C 65.12916666666668 114.5077081192189 70.20416666666668 87.95066803699896 76.12500000000001 87.95066803699896C 82.04583333333335 87.95066803699896 87.12083333333335 84.82631038026722 93.04166666666669 84.82631038026722C 98.96250000000002 84.82631038026722 104.03750000000002 50.45837615621788 109.95833333333336 50.45837615621788C 115.87916666666669 50.45837615621788 120.9541666666667 56.70709146968139 126.87500000000003 56.70709146968139C 132.79583333333335 56.70709146968139 137.87083333333337 67.64234326824254 143.79166666666669 67.64234326824254C 149.7125 67.64234326824254 154.78750000000002 69.20452209660843 160.70833333333334 69.20452209660843C 166.62916666666666 69.20452209660843 171.70416666666668 64.51798561151078 177.625 64.51798561151078C 183.54583333333332 64.51798561151078 188.62083333333334 97.32374100719424 194.54166666666666 97.32374100719424C 200.46249999999998 97.32374100719424 205.5375 122.3186022610483 211.45833333333331 122.3186022610483C 217.37916666666663 122.3186022610483 222.45416666666665 97.32374100719424 228.37499999999997 97.32374100719424C 234.2958333333333 97.32374100719424 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 103.57245632065775 262.2083333333333 103.57245632065775C 268.12916666666666 103.57245632065775 273.20416666666665 109.82117163412127 279.125 109.82117163412127C 285.04583333333335 109.82117163412127 290.12083333333334 80.13977389516957 296.0416666666667 80.13977389516957C 301.96250000000003 80.13977389516957 307.0375 78.5775950668037 312.95833333333337 78.5775950668037C 318.8791666666667 78.5775950668037 323.9541666666667 55.144912641315514 329.87500000000006 55.144912641315514C 335.7958333333334 55.144912641315514 340.8708333333334 67.64234326824254 346.79166666666674 67.64234326824254C 352.7125000000001 67.64234326824254 357.7875000000001 94.19938335046248 363.7083333333334 94.19938335046248C 369.6291666666668 94.19938335046248 374.70416666666677 109.82117163412127 380.6250000000001 109.82117163412127C 386.54583333333346 109.82117163412127 391.62083333333345 81.70195272353546 397.5416666666668 81.70195272353546C 397.5416666666668 81.70195272353546 397.5416666666668 81.70195272353546 397.5416666666668 152M 397.5416666666668 81.70195272353546z" fill="url(#SvgjsLinearGradient1504)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask2hc15ceg)" pathto="M 8.458333333333334 152L 8.458333333333334 72.32887975334017C 14.379166666666666 72.32887975334017 19.454166666666666 91.07502569373072 25.375 91.07502569373072C 31.295833333333334 91.07502569373072 36.37083333333334 6.717368961973278 42.29166666666667 6.717368961973278C 48.212500000000006 6.717368961973278 53.28750000000001 114.5077081192189 59.20833333333334 114.5077081192189C 65.12916666666668 114.5077081192189 70.20416666666668 87.95066803699896 76.12500000000001 87.95066803699896C 82.04583333333335 87.95066803699896 87.12083333333335 84.82631038026722 93.04166666666669 84.82631038026722C 98.96250000000002 84.82631038026722 104.03750000000002 50.45837615621788 109.95833333333336 50.45837615621788C 115.87916666666669 50.45837615621788 120.9541666666667 56.70709146968139 126.87500000000003 56.70709146968139C 132.79583333333335 56.70709146968139 137.87083333333337 67.64234326824254 143.79166666666669 67.64234326824254C 149.7125 67.64234326824254 154.78750000000002 69.20452209660843 160.70833333333334 69.20452209660843C 166.62916666666666 69.20452209660843 171.70416666666668 64.51798561151078 177.625 64.51798561151078C 183.54583333333332 64.51798561151078 188.62083333333334 97.32374100719424 194.54166666666666 97.32374100719424C 200.46249999999998 97.32374100719424 205.5375 122.3186022610483 211.45833333333331 122.3186022610483C 217.37916666666663 122.3186022610483 222.45416666666665 97.32374100719424 228.37499999999997 97.32374100719424C 234.2958333333333 97.32374100719424 239.3708333333333 92.6372045220966 245.29166666666663 92.6372045220966C 251.21249999999998 92.6372045220966 256.28749999999997 103.57245632065775 262.2083333333333 103.57245632065775C 268.12916666666666 103.57245632065775 273.20416666666665 109.82117163412127 279.125 109.82117163412127C 285.04583333333335 109.82117163412127 290.12083333333334 80.13977389516957 296.0416666666667 80.13977389516957C 301.96250000000003 80.13977389516957 307.0375 78.5775950668037 312.95833333333337 78.5775950668037C 318.8791666666667 78.5775950668037 323.9541666666667 55.144912641315514 329.87500000000006 55.144912641315514C 335.7958333333334 55.144912641315514 340.8708333333334 67.64234326824254 346.79166666666674 67.64234326824254C 352.7125000000001 67.64234326824254 357.7875000000001 94.19938335046248 363.7083333333334 94.19938335046248C 369.6291666666668 94.19938335046248 374.70416666666677 109.82117163412127 380.6250000000001 109.82117163412127C 386.54583333333346 109.82117163412127 391.62083333333345 81.70195272353546 397.5416666666668 81.70195272353546C 397.5416666666668 81.70195272353546 397.5416666666668 81.70195272353546 397.5416666666668 152M 397.5416666666668 81.70195272353546z" pathfrom="M -1 152L -1 152L 25.375 152L 42.29166666666667 152L 59.20833333333334 152L 76.12500000000001 152L 93.04166666666669 152L 109.95833333333336 152L 126.87500000000003 152L 143.79166666666669 152L 160.70833333333334 152L 177.625 152L 194.54166666666666 152L 211.45833333333331 152L 228.37499999999997 152L 245.29166666666663 152L 262.2083333333333 152L 279.125 152L 296.0416666666667 152L 312.95833333333337 152L 329.87500000000006 152L 346.79166666666674 152L 363.7083333333334 152L 380.6250000000001 152L 397.5416666666668 152">
                                                  </path>
                                                  <g id="SvgjsG1501" className="apexcharts-series-markers-wrap">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id="SvgjsCircle1521" r={0} cx={0} cy={0} className="apexcharts-marker w8odwq3og no-pointer-events" stroke="#ffffff" fill="#f7b924" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id="SvgjsG1502" className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id="SvgjsLine1516" x1={0} y1={0} x2={406} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id="SvgjsLine1517" x1={0} y1={0} x2={406} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id="SvgjsG1518" className="apexcharts-yaxis-annotations">
                                              </g>
                                              <g id="SvgjsG1519" className="apexcharts-xaxis-annotations">
                                              </g>
                                              <g id="SvgjsG1520" className="apexcharts-point-annotations">
                                              </g>
                                            </g>
                                            <g id="SvgjsG1511" className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id="SvgjsG1512" className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(247, 185, 36)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 407, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide slick-cloned" data-slick-index={3} id aria-hidden="true" tabIndex={-1} style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          New Accounts since 2018</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <span className="opacity-10 text-success pr-2">
                                              <i className="fa fa-angle-up" />
                                            </span>
                                            <span>78</span>
                                            <small className="opacity-5 pl-1">%</small>
                                          </div>
                                          <div className="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">+14</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id style={{minHeight: 152}}>
                                        <div id className="apexcharts-canvas apexchartsu4yvohaq" style={{width: 566, height: 152}}>
                                          <svg id width={566} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                            <g id className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id>
                                                <clipPath id>
                                                  <rect id width={571} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id>
                                                  <rect id width={580} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id stopOpacity="0.7" stopColor="rgba(58,196,125,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id className="apexcharts-grid">
                                                <line id x1={0} y1={152} x2={566} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id className="apexcharts-area-series apexcharts-plot-series">
                                                <g id className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id d="M11.788510709005825 122.32592525007074C20.040640909181896 122.32592525007074 27.11389536647567 97.33723072381453 35.36602556665174 97.33723072381453C43.61815576682781 97.33723072381453 50.70038465746985 50.483428487084126 58.95251485764591 50.483428487084126C67.20464505782198 50.483428487084126 74.28371799080317 78.59570982912237 82.53584819097924 78.59570982912237C90.7879783911553 78.59570982912237 97.8670513241365 6.753213066135743 106.11918152431257 6.753213066135743C114.37131172448863 6.753213066135743 121.45038465746983 64.53956915810323 129.7025148576459 64.53956915810323C137.95464505782198 64.53956915810323 145.03371799080318 94.21364390803251 153.28584819097924 94.21364390803251C161.53797839115532 94.21364390803251 168.61705132413653 114.51695821061567 176.86918152431258 114.51695821061567C185.12131172448866 114.51695821061567 192.20038465746987 69.2249493817763 200.45251485764592 69.2249493817763C208.704645057822 69.2249493817763 215.7837179908032 67.66315597388527 224.03584819097927 67.66315597388527C232.28797839115535 67.66315597388527 239.36705132413655 103.58440435537858 247.6191815243126 103.58440435537858C255.8713117244887 103.58440435537858 262.9503846574699 91.09005709225048 271.20251485764595 91.09005709225048C279.454645057822 91.09005709225048 286.5337179908032 97.33723072381453 294.78584819097927 97.33723072381453C303.0379783911553 97.33723072381453 310.1170513241365 56.73060211864818 318.3691815243126 56.73060211864818C326.62131172448863 56.73060211864818 333.70038465746984 92.65185050014148 341.9525148576459 92.65185050014148C350.20464505782195 92.65185050014148 357.28371799080315 67.66315597388527 365.5358481909792 67.66315597388527C373.78797839115526 67.66315597388527 380.86705132413647 55.16880871075716 389.1191815243125 55.16880871075716C397.3713117244886 55.16880871075716 404.4503846574698 81.7192966449044 412.70251485764584 81.7192966449044C420.9546450578219 81.7192966449044 428.0337179908031 109.83157798694263 436.28584819097915 109.83157798694263C444.5379783911552 109.83157798694263 451.6170513241364 80.15750323701337 459.86918152431247 80.15750323701337C468.1213117244885 80.15750323701337 475.2003846574697 109.83157798694263 483.4525148576458 109.83157798694263C491.70464505782184 109.83157798694263 498.78371799080304 84.84288346068642 507.0358481909791 84.84288346068642C515.2879783911552 84.84288346068642 522.3670513241364 72.3485361975583 530.6191815243125 72.3485361975583C538.8713117244886 72.3485361975583 545.9503846574697 87.96647027646844 554.2025148576458 87.96647027646844C554.2025148576458 87.96647027646844 554.2083333333333 87.96647027646844 554.2083333333333 87.96647027646844 " fill="none" fillOpacity={1} stroke="#3ac47d" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMasku4yvohaq)" pathto="M 11.791666666666666 122.3186022610483C 20.045833333333334 122.3186022610483 27.120833333333334 97.32374100719424 35.375 97.32374100719424C 43.62916666666666 97.32374100719424 50.704166666666666 50.45837615621788 58.95833333333333 50.45837615621788C 67.21249999999999 50.45837615621788 74.2875 78.5775950668037 82.54166666666666 78.5775950668037C 90.79583333333332 78.5775950668037 97.87083333333332 6.717368961973278 106.12499999999999 6.717368961973278C 114.37916666666665 6.717368961973278 121.45416666666665 64.51798561151078 129.70833333333331 64.51798561151078C 137.96249999999998 64.51798561151078 145.0375 94.19938335046248 153.29166666666666 94.19938335046248C 161.54583333333332 94.19938335046248 168.62083333333334 114.5077081192189 176.875 114.5077081192189C 185.12916666666666 114.5077081192189 192.20416666666668 69.20452209660843 200.45833333333334 69.20452209660843C 208.7125 69.20452209660843 215.78750000000002 67.64234326824254 224.04166666666669 67.64234326824254C 232.29583333333335 67.64234326824254 239.37083333333337 103.57245632065775 247.62500000000003 103.57245632065775C 255.8791666666667 103.57245632065775 262.9541666666667 91.07502569373072 271.20833333333337 91.07502569373072C 279.46250000000003 91.07502569373072 286.5375 97.32374100719424 294.7916666666667 97.32374100719424C 303.04583333333335 97.32374100719424 310.12083333333334 56.70709146968139 318.375 56.70709146968139C 326.62916666666666 56.70709146968139 333.70416666666665 92.6372045220966 341.9583333333333 92.6372045220966C 350.2125 92.6372045220966 357.28749999999997 67.64234326824254 365.54166666666663 67.64234326824254C 373.7958333333333 67.64234326824254 380.8708333333333 55.144912641315514 389.12499999999994 55.144912641315514C 397.3791666666666 55.144912641315514 404.4541666666666 81.70195272353546 412.70833333333326 81.70195272353546C 420.9624999999999 81.70195272353546 428.0374999999999 109.82117163412127 436.2916666666666 109.82117163412127C 444.54583333333323 109.82117163412127 451.6208333333332 80.13977389516957 459.8749999999999 80.13977389516957C 468.12916666666655 80.13977389516957 475.20416666666654 109.82117163412127 483.4583333333332 109.82117163412127C 491.71249999999986 109.82117163412127 498.78749999999985 84.82631038026722 507.0416666666665 84.82631038026722C 515.2958333333332 84.82631038026722 522.3708333333332 72.32887975334017 530.6249999999999 72.32887975334017C 538.8791666666666 72.32887975334017 545.9541666666665 87.95066803699896 554.2083333333333 87.95066803699896" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <path id d="M9.256076545411384 152L9.256076545411384 128.20210914510835C15.874085547515602 128.20210914510835 28.75699099789578 108.16178000414698 35.375 108.16178000414698C41.993009002104216 108.16178000414698 52.34032433122911 70.58616286484437 58.95833333333333 70.58616286484437C65.57634233543754 70.58616286484437 75.92365766456244 93.13153314842592 82.54166666666666 93.13153314842592C89.15967566877087 93.13153314842592 99.50699099789577 35.51558686816195 106.12499999999999 35.51558686816195C112.7430090021042 35.51558686816195 123.0903243312291 81.85884800663514 129.70833333333331 81.85884800663514C136.32634233543752 81.85884800663514 146.67365766456246 105.65673886152679 153.29166666666666 105.65673886152679C159.90967566877086 105.65673886152679 170.2569909978958 121.93950628855791 176.875 121.93950628855791C183.4930090021042 121.93950628855791 193.84032433122914 85.61640972056541 200.45833333333334 85.61640972056541C207.07634233543754 85.61640972056541 217.42365766456248 84.36388914925531 224.04166666666669 84.36388914925531C230.6596756687709 84.36388914925531 241.00699099789583 113.1718622893873 247.62500000000003 113.1718622893873C254.24300900210423 113.1718622893873 264.59032433122917 103.15169771890662 271.20833333333337 103.15169771890662C277.8263423354376 103.15169771890662 288.1736576645625 108.16178000414698 294.7916666666667 108.16178000414698C301.4096756687709 108.16178000414698 311.7569909978958 75.59624515008471 318.375 75.59624515008471C324.9930090021042 75.59624515008471 335.3403243312291 104.4042182902167 341.9583333333333 104.4042182902167C348.5763423354375 104.4042182902167 358.9236576645624 84.36388914925531 365.54166666666663 84.36388914925531C372.15967566877083 84.36388914925531 382.50699099789574 74.34372457877463 389.12499999999994 74.34372457877463C395.74300900210415 74.34372457877463 406.09032433122906 95.6365742910461 412.70833333333326 95.6365742910461C419.32634233543746 95.6365742910461 429.67365766456237 118.18194457462766 436.2916666666666 118.18194457462766C442.9096756687708 118.18194457462766 453.2569909978957 94.38405371973602 459.8749999999999 94.38405371973602C466.4930090021041 94.38405371973602 476.840324331229 118.18194457462766 483.4583333333332 118.18194457462766C490.0763423354374 118.18194457462766 500.4236576645623 98.14161543366627 507.0416666666665 98.14161543366627C513.6596756687708 98.14161543366627 524.0069909978956 88.12145086318557 530.6249999999999 88.12145086318557C537.2430090021041 88.12145086318557 547.590324331229 100.64665657628643 554.2083333333333 100.64665657628643C554.2083333333333 100.64665657628643 554.2083333333333 100.64665657628643 554.2083333333333 152M444.15381096940285 100.64665657628643C444.15381096940285 100.64665657628643 444.15381096940285 100.64665657628643 444.15381096940285 100.64665657628643 " fill="url(#SvgjsLinearGradient1081)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMasku4yvohaq)" pathto="M 11.791666666666666 152L 11.791666666666666 122.3186022610483C 20.045833333333334 122.3186022610483 27.120833333333334 97.32374100719424 35.375 97.32374100719424C 43.62916666666666 97.32374100719424 50.704166666666666 50.45837615621788 58.95833333333333 50.45837615621788C 67.21249999999999 50.45837615621788 74.2875 78.5775950668037 82.54166666666666 78.5775950668037C 90.79583333333332 78.5775950668037 97.87083333333332 6.717368961973278 106.12499999999999 6.717368961973278C 114.37916666666665 6.717368961973278 121.45416666666665 64.51798561151078 129.70833333333331 64.51798561151078C 137.96249999999998 64.51798561151078 145.0375 94.19938335046248 153.29166666666666 94.19938335046248C 161.54583333333332 94.19938335046248 168.62083333333334 114.5077081192189 176.875 114.5077081192189C 185.12916666666666 114.5077081192189 192.20416666666668 69.20452209660843 200.45833333333334 69.20452209660843C 208.7125 69.20452209660843 215.78750000000002 67.64234326824254 224.04166666666669 67.64234326824254C 232.29583333333335 67.64234326824254 239.37083333333337 103.57245632065775 247.62500000000003 103.57245632065775C 255.8791666666667 103.57245632065775 262.9541666666667 91.07502569373072 271.20833333333337 91.07502569373072C 279.46250000000003 91.07502569373072 286.5375 97.32374100719424 294.7916666666667 97.32374100719424C 303.04583333333335 97.32374100719424 310.12083333333334 56.70709146968139 318.375 56.70709146968139C 326.62916666666666 56.70709146968139 333.70416666666665 92.6372045220966 341.9583333333333 92.6372045220966C 350.2125 92.6372045220966 357.28749999999997 67.64234326824254 365.54166666666663 67.64234326824254C 373.7958333333333 67.64234326824254 380.8708333333333 55.144912641315514 389.12499999999994 55.144912641315514C 397.3791666666666 55.144912641315514 404.4541666666666 81.70195272353546 412.70833333333326 81.70195272353546C 420.9624999999999 81.70195272353546 428.0374999999999 109.82117163412127 436.2916666666666 109.82117163412127C 444.54583333333323 109.82117163412127 451.6208333333332 80.13977389516957 459.8749999999999 80.13977389516957C 468.12916666666655 80.13977389516957 475.20416666666654 109.82117163412127 483.4583333333332 109.82117163412127C 491.71249999999986 109.82117163412127 498.78749999999985 84.82631038026722 507.0416666666665 84.82631038026722C 515.2958333333332 84.82631038026722 522.3708333333332 72.32887975334017 530.6249999999999 72.32887975334017C 538.8791666666666 72.32887975334017 545.9541666666665 87.95066803699896 554.2083333333333 87.95066803699896C 554.2083333333333 87.95066803699896 554.2083333333333 87.95066803699896 554.2083333333333 152M 554.2083333333333 87.95066803699896z" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <g id className="apexcharts-series-markers-wrap hidden">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id r={0} cx={0} cy={0} className="apexcharts-marker wb8y8mweo no-pointer-events" stroke="#ffffff" fill="#3ac47d" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id x1={0} y1={0} x2={566} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id x1={0} y1={0} x2={566} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id className="apexcharts-yaxis-annotations hidden">
                                              </g>
                                              <g id className="apexcharts-xaxis-annotations hidden">
                                              </g>
                                              <g id className="apexcharts-point-annotations hidden">
                                              </g>
                                            </g>
                                            <g id className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(58, 196, 125)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 567, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide slick-cloned" data-slick-index={4} id aria-hidden="true" tabIndex={-1} style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          Last Year Total Sales</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <small className="opacity-3 pr-1">$</small>
                                            <span>629</span>
                                            <span className="text-primary pl-3">
                                              <i className="fa fa-angle-down" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id style={{minHeight: 152}}>
                                        <div id className="apexcharts-canvas apexchartszjb0pq37l" style={{width: 566, height: 152}}>
                                          <svg id width={566} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                            <g id className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id>
                                                <clipPath id>
                                                  <rect id width={571} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id>
                                                  <rect id width={580} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id stopOpacity="0.7" stopColor="rgba(63,106,216,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id className="apexcharts-grid">
                                                <line id x1={0} y1={152} x2={566} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id className="apexcharts-area-series apexcharts-plot-series">
                                                <g id className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id d="M11.791666666666666 56.70709146968139C20.045833333333334 56.70709146968139 27.120833333333334 80.13977389516957 35.375 80.13977389516957C43.62916666666666 80.13977389516957 50.704166666666666 67.64234326824254 58.95833333333333 67.64234326824254C67.21249999999999 67.64234326824254 74.2875 103.57245632065775 82.54166666666666 103.57245632065775C90.79583333333332 103.57245632065775 97.87083333333332 91.07502569373072 106.12499999999999 91.07502569373072C114.37916666666665 91.07502569373072 121.45416666666665 6.717368961973278 129.70833333333331 6.717368961973278C137.96249999999998 6.717368961973278 145.0375 72.32887975334017 153.29166666666666 72.32887975334017C161.54583333333332 72.32887975334017 168.62083333333334 92.6372045220966 176.875 92.6372045220966C185.12916666666666 92.6372045220966 192.20416666666668 109.82117163412127 200.45833333333334 109.82117163412127C208.7125 109.82117163412127 215.78750000000002 109.82117163412127 224.04166666666669 109.82117163412127C232.29583333333335 109.82117163412127 239.37083333333337 78.5775950668037 247.62500000000003 78.5775950668037C255.8791666666667 78.5775950668037 262.9541666666667 81.70195272353546 271.20833333333337 81.70195272353546C279.46250000000003 81.70195272353546 286.5375 84.82631038026722 294.7916666666667 84.82631038026722C303.04583333333335 84.82631038026722 310.12083333333334 69.20452209660843 318.375 69.20452209660843C326.62916666666666 69.20452209660843 333.70416666666665 64.51798561151078 341.9583333333333 64.51798561151078C350.2125 64.51798561151078 357.28749999999997 114.5077081192189 365.54166666666663 114.5077081192189C373.7958333333333 114.5077081192189 380.8708333333333 122.3186022610483 389.12499999999994 122.3186022610483C397.3791666666666 122.3186022610483 404.4541666666666 94.19938335046248 412.70833333333326 94.19938335046248C420.9624999999999 94.19938335046248 428.0374999999999 97.32374100719424 436.2916666666666 97.32374100719424C444.54583333333323 97.32374100719424 451.6208333333332 97.32374100719424 459.8749999999999 97.32374100719424C468.12916666666655 97.32374100719424 475.20416666666654 87.95066803699896 483.4583333333332 87.95066803699896C491.71249999999986 87.95066803699896 498.78749999999985 67.64234326824254 507.0416666666665 67.64234326824254C515.2958333333332 67.64234326824254 522.3708333333332 55.144912641315514 530.6249999999999 55.144912641315514C538.8791666666666 55.144912641315514 545.9541666666665 50.45837615621788 554.2083333333333 50.45837615621788C554.2083333333333 50.45837615621788 554.2083333333333 50.45837615621788 554.2083333333333 50.45837615621788 " fill="none" fillOpacity={1} stroke="#3f6ad8" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskzjb0pq37l)" pathto="M 11.791666666666666 56.70709146968139C 20.045833333333334 56.70709146968139 27.120833333333334 80.13977389516957 35.375 80.13977389516957C 43.62916666666666 80.13977389516957 50.704166666666666 67.64234326824254 58.95833333333333 67.64234326824254C 67.21249999999999 67.64234326824254 74.2875 103.57245632065775 82.54166666666666 103.57245632065775C 90.79583333333332 103.57245632065775 97.87083333333332 91.07502569373072 106.12499999999999 91.07502569373072C 114.37916666666665 91.07502569373072 121.45416666666665 6.717368961973278 129.70833333333331 6.717368961973278C 137.96249999999998 6.717368961973278 145.0375 72.32887975334017 153.29166666666666 72.32887975334017C 161.54583333333332 72.32887975334017 168.62083333333334 92.6372045220966 176.875 92.6372045220966C 185.12916666666666 92.6372045220966 192.20416666666668 109.82117163412127 200.45833333333334 109.82117163412127C 208.7125 109.82117163412127 215.78750000000002 109.82117163412127 224.04166666666669 109.82117163412127C 232.29583333333335 109.82117163412127 239.37083333333337 78.5775950668037 247.62500000000003 78.5775950668037C 255.8791666666667 78.5775950668037 262.9541666666667 81.70195272353546 271.20833333333337 81.70195272353546C 279.46250000000003 81.70195272353546 286.5375 84.82631038026722 294.7916666666667 84.82631038026722C 303.04583333333335 84.82631038026722 310.12083333333334 69.20452209660843 318.375 69.20452209660843C 326.62916666666666 69.20452209660843 333.70416666666665 64.51798561151078 341.9583333333333 64.51798561151078C 350.2125 64.51798561151078 357.28749999999997 114.5077081192189 365.54166666666663 114.5077081192189C 373.7958333333333 114.5077081192189 380.8708333333333 122.3186022610483 389.12499999999994 122.3186022610483C 397.3791666666666 122.3186022610483 404.4541666666666 94.19938335046248 412.70833333333326 94.19938335046248C 420.9624999999999 94.19938335046248 428.0374999999999 97.32374100719424 436.2916666666666 97.32374100719424C 444.54583333333323 97.32374100719424 451.6208333333332 97.32374100719424 459.8749999999999 97.32374100719424C 468.12916666666655 97.32374100719424 475.20416666666654 87.95066803699896 483.4583333333332 87.95066803699896C 491.71249999999986 87.95066803699896 498.78749999999985 67.64234326824254 507.0416666666665 67.64234326824254C 515.2958333333332 67.64234326824254 522.3708333333332 55.144912641315514 530.6249999999999 55.144912641315514C 538.8791666666666 55.144912641315514 545.9541666666665 50.45837615621788 554.2083333333333 50.45837615621788" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <path id d="M11.791666666666666 152L11.791666666666666 56.70709146968139C20.045833333333334 56.70709146968139 27.120833333333334 80.13977389516957 35.375 80.13977389516957C43.62916666666666 80.13977389516957 50.704166666666666 67.64234326824254 58.95833333333333 67.64234326824254C67.21249999999999 67.64234326824254 74.2875 103.57245632065775 82.54166666666666 103.57245632065775C90.79583333333332 103.57245632065775 97.87083333333332 91.07502569373072 106.12499999999999 91.07502569373072C114.37916666666665 91.07502569373072 121.45416666666665 6.717368961973278 129.70833333333331 6.717368961973278C137.96249999999998 6.717368961973278 145.0375 72.32887975334017 153.29166666666666 72.32887975334017C161.54583333333332 72.32887975334017 168.62083333333334 92.6372045220966 176.875 92.6372045220966C185.12916666666666 92.6372045220966 192.20416666666668 109.82117163412127 200.45833333333334 109.82117163412127C208.7125 109.82117163412127 215.78750000000002 109.82117163412127 224.04166666666669 109.82117163412127C232.29583333333335 109.82117163412127 239.37083333333337 78.5775950668037 247.62500000000003 78.5775950668037C255.8791666666667 78.5775950668037 262.9541666666667 81.70195272353546 271.20833333333337 81.70195272353546C279.46250000000003 81.70195272353546 286.5375 84.82631038026722 294.7916666666667 84.82631038026722C303.04583333333335 84.82631038026722 310.12083333333334 69.20452209660843 318.375 69.20452209660843C326.62916666666666 69.20452209660843 333.70416666666665 64.51798561151078 341.9583333333333 64.51798561151078C350.2125 64.51798561151078 357.28749999999997 114.5077081192189 365.54166666666663 114.5077081192189C373.7958333333333 114.5077081192189 380.8708333333333 122.3186022610483 389.12499999999994 122.3186022610483C397.3791666666666 122.3186022610483 404.4541666666666 94.19938335046248 412.70833333333326 94.19938335046248C420.9624999999999 94.19938335046248 428.0374999999999 97.32374100719424 436.2916666666666 97.32374100719424C444.54583333333323 97.32374100719424 451.6208333333332 97.32374100719424 459.8749999999999 97.32374100719424C468.12916666666655 97.32374100719424 475.20416666666654 87.95066803699896 483.4583333333332 87.95066803699896C491.71249999999986 87.95066803699896 498.78749999999985 67.64234326824254 507.0416666666665 67.64234326824254C515.2958333333332 67.64234326824254 522.3708333333332 55.144912641315514 530.6249999999999 55.144912641315514C538.8791666666666 55.144912641315514 545.9541666666665 50.45837615621788 554.2083333333333 50.45837615621788C554.2083333333333 50.45837615621788 554.2083333333333 50.45837615621788 554.2083333333333 152M554.2083333333333 50.45837615621788C554.2083333333333 50.45837615621788 554.2083333333333 50.45837615621788 554.2083333333333 50.45837615621788 " fill="url(#SvgjsLinearGradient1019)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskzjb0pq37l)" pathto="M 11.791666666666666 152L 11.791666666666666 56.70709146968139C 20.045833333333334 56.70709146968139 27.120833333333334 80.13977389516957 35.375 80.13977389516957C 43.62916666666666 80.13977389516957 50.704166666666666 67.64234326824254 58.95833333333333 67.64234326824254C 67.21249999999999 67.64234326824254 74.2875 103.57245632065775 82.54166666666666 103.57245632065775C 90.79583333333332 103.57245632065775 97.87083333333332 91.07502569373072 106.12499999999999 91.07502569373072C 114.37916666666665 91.07502569373072 121.45416666666665 6.717368961973278 129.70833333333331 6.717368961973278C 137.96249999999998 6.717368961973278 145.0375 72.32887975334017 153.29166666666666 72.32887975334017C 161.54583333333332 72.32887975334017 168.62083333333334 92.6372045220966 176.875 92.6372045220966C 185.12916666666666 92.6372045220966 192.20416666666668 109.82117163412127 200.45833333333334 109.82117163412127C 208.7125 109.82117163412127 215.78750000000002 109.82117163412127 224.04166666666669 109.82117163412127C 232.29583333333335 109.82117163412127 239.37083333333337 78.5775950668037 247.62500000000003 78.5775950668037C 255.8791666666667 78.5775950668037 262.9541666666667 81.70195272353546 271.20833333333337 81.70195272353546C 279.46250000000003 81.70195272353546 286.5375 84.82631038026722 294.7916666666667 84.82631038026722C 303.04583333333335 84.82631038026722 310.12083333333334 69.20452209660843 318.375 69.20452209660843C 326.62916666666666 69.20452209660843 333.70416666666665 64.51798561151078 341.9583333333333 64.51798561151078C 350.2125 64.51798561151078 357.28749999999997 114.5077081192189 365.54166666666663 114.5077081192189C 373.7958333333333 114.5077081192189 380.8708333333333 122.3186022610483 389.12499999999994 122.3186022610483C 397.3791666666666 122.3186022610483 404.4541666666666 94.19938335046248 412.70833333333326 94.19938335046248C 420.9624999999999 94.19938335046248 428.0374999999999 97.32374100719424 436.2916666666666 97.32374100719424C 444.54583333333323 97.32374100719424 451.6208333333332 97.32374100719424 459.8749999999999 97.32374100719424C 468.12916666666655 97.32374100719424 475.20416666666654 87.95066803699896 483.4583333333332 87.95066803699896C 491.71249999999986 87.95066803699896 498.78749999999985 67.64234326824254 507.0416666666665 67.64234326824254C 515.2958333333332 67.64234326824254 522.3708333333332 55.144912641315514 530.6249999999999 55.144912641315514C 538.8791666666666 55.144912641315514 545.9541666666665 50.45837615621788 554.2083333333333 50.45837615621788C 554.2083333333333 50.45837615621788 554.2083333333333 50.45837615621788 554.2083333333333 152M 554.2083333333333 50.45837615621788z" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <g id className="apexcharts-series-markers-wrap">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id r={0} cx={0} cy={0} className="apexcharts-marker w2txtaa8g no-pointer-events" stroke="#ffffff" fill="#3f6ad8" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id x1={0} y1={0} x2={566} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id x1={0} y1={0} x2={566} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id className="apexcharts-yaxis-annotations">
                                              </g>
                                              <g id className="apexcharts-xaxis-annotations">
                                              </g>
                                              <g id className="apexcharts-point-annotations">
                                              </g>
                                            </g>
                                            <g id className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(63, 106, 216)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 567, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide slick-cloned" data-slick-index={5} id aria-hidden="true" tabIndex={-1} style={{width: 406}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div className="widget-chart widget-chart2 text-left p-0">
                                  <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content widget-chart-content-lg pb-0">
                                      <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase">
                                          Helpdesk Tickets</div>
                                      </div>
                                      <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                          <div>
                                            <span className="text-warning">34</span>
                                          </div>
                                          <div className="widget-title ml-2 font-size-lg font-weight-normal text-dark">
                                            <span className="opacity-5 text-muted pl-2 pr-1">5%</span>
                                            increase
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                      <div id style={{minHeight: 152}}>
                                        <div id className="apexcharts-canvas apexcharts2hc15ceg" style={{width: 566, height: 152}}>
                                          <svg id width={566} height={152} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                            <g id className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                                              <defs id>
                                                <clipPath id>
                                                  <rect id width={571} height={157} x="-2.5" y="-2.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <clipPath id>
                                                  <rect id width={580} height={166} x={-7} y={-7} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0}>
                                                  </rect>
                                                </clipPath>
                                                <linearGradient id x1={0} y1={0} x2={0} y2={1}>
                                                  <stop id stopOpacity="0.7" stopColor="rgba(247,185,36,0.7)" offset={0}>
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset="0.9">
                                                  </stop>
                                                  <stop id stopOpacity="0.9" stopColor="rgba(255,255,255,0.9)" offset={1}>
                                                  </stop>
                                                </linearGradient>
                                              </defs>
                                              <rect id width={1} height={152} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9">
                                              </rect>
                                              <g id className="apexcharts-xaxis" transform="translate(0, 0)">
                                                <g id className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                </g>
                                              </g>
                                              <g id className="apexcharts-grid">
                                                <line id x1={0} y1={152} x2={566} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                                <line id x1={0} y1={1} x2={0} y2={152} stroke="transparent" strokeDasharray={0}>
                                                </line>
                                              </g>
                                              <g id className="apexcharts-area-series apexcharts-plot-series">
                                                <g id className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                                                  <path id d="M9.256076545411384 88.12145086318557C15.874085547515602 88.12145086318557 21.54666469217636 103.15169771890662 28.16467369428058 103.15169771890662C34.782682696384796 103.15169771890662 47.665588146764975 35.51558686816195 54.28359714886919 35.51558686816195C60.90160615097341 35.51558686816195 71.2489214800983 121.93950628855791 77.86693048220252 121.93950628855791C84.48493948430674 121.93950628855791 94.83225481343163 100.64665657628643 101.45026381553585 100.64665657628643C108.06827281764006 100.64665657628643 118.41558814676496 98.14161543366627 125.03359714886918 98.14161543366627C131.6516061509734 98.14161543366627 141.99892148009832 70.58616286484437 148.61693048220252 70.58616286484437C155.23493948430672 70.58616286484437 165.58225481343163 75.59624515008471 172.20026381553586 75.59624515008471C178.8182728176401 75.59624515008471 189.165588146765 84.36388914925531 195.7835971488692 84.36388914925531C202.4016061509734 84.36388914925531 212.74892148009832 85.61640972056541 219.36693048220255 85.61640972056541C225.98493948430678 85.61640972056541 236.3322548134317 81.85884800663514 242.9502638155359 81.85884800663514C249.5682728176401 81.85884800663514 259.915588146765 108.16178000414698 266.53359714886926 108.16178000414698C273.15160615097346 108.16178000414698 283.4989214800983 128.20210914510835 290.1169304822026 128.20210914510835C296.7349394843068 128.20210914510835 307.08225481343163 108.16178000414698 313.7002638155359 108.16178000414698C320.3182728176401 108.16178000414698 330.66558814676495 104.4042182902167 337.2835971488692 104.4042182902167C343.9016061509734 104.4042182902167 354.24892148009826 113.1718622893873 360.8669304822025 113.1718622893873C367.4849394843067 113.1718622893873 377.8322548134316 118.18194457462766 384.45026381553583 118.18194457462766C391.06827281764004 118.18194457462766 401.4155881467649 94.38405371973602 408.03359714886915 94.38405371973602C414.65160615097335 94.38405371973602 424.9989214800982 93.13153314842592 431.61693048220246 93.13153314842592C438.23493948430666 93.13153314842592 448.5822548134315 74.34372457877463 455.2002638155358 74.34372457877463C461.81827281764 74.34372457877463 472.16558814676483 84.36388914925531 478.7835971488691 84.36388914925531C485.4016061509733 84.36388914925531 495.74892148009815 105.65673886152679 502.3669304822024 105.65673886152679C508.98493948430666 105.65673886152679 519.3322548134315 118.18194457462766 525.9502638155358 118.18194457462766C532.56827281764 118.18194457462766 542.9155881467649 95.6365742910461 549.5335971488691 95.6365742910461C549.5335971488691 95.6365742910461 554.2083333333333 95.6365742910461 554.2083333333333 95.6365742910461 " fill="none" fillOpacity={1} stroke="#f7b924" strokeOpacity={1} strokeLinecap="butt" strokeWidth={5} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask2hc15ceg)" pathto="M 11.791666666666666 72.32887975334017C 20.045833333333334 72.32887975334017 27.120833333333334 91.07502569373072 35.375 91.07502569373072C 43.62916666666666 91.07502569373072 50.704166666666666 6.717368961973278 58.95833333333333 6.717368961973278C 67.21249999999999 6.717368961973278 74.2875 114.5077081192189 82.54166666666666 114.5077081192189C 90.79583333333332 114.5077081192189 97.87083333333332 87.95066803699896 106.12499999999999 87.95066803699896C 114.37916666666665 87.95066803699896 121.45416666666665 84.82631038026722 129.70833333333331 84.82631038026722C 137.96249999999998 84.82631038026722 145.0375 50.45837615621788 153.29166666666666 50.45837615621788C 161.54583333333332 50.45837615621788 168.62083333333334 56.70709146968139 176.875 56.70709146968139C 185.12916666666666 56.70709146968139 192.20416666666668 67.64234326824254 200.45833333333334 67.64234326824254C 208.7125 67.64234326824254 215.78750000000002 69.20452209660843 224.04166666666669 69.20452209660843C 232.29583333333335 69.20452209660843 239.37083333333337 64.51798561151078 247.62500000000003 64.51798561151078C 255.8791666666667 64.51798561151078 262.9541666666667 97.32374100719424 271.20833333333337 97.32374100719424C 279.46250000000003 97.32374100719424 286.5375 122.3186022610483 294.7916666666667 122.3186022610483C 303.04583333333335 122.3186022610483 310.12083333333334 97.32374100719424 318.375 97.32374100719424C 326.62916666666666 97.32374100719424 333.70416666666665 92.6372045220966 341.9583333333333 92.6372045220966C 350.2125 92.6372045220966 357.28749999999997 103.57245632065775 365.54166666666663 103.57245632065775C 373.7958333333333 103.57245632065775 380.8708333333333 109.82117163412127 389.12499999999994 109.82117163412127C 397.3791666666666 109.82117163412127 404.4541666666666 80.13977389516957 412.70833333333326 80.13977389516957C 420.9624999999999 80.13977389516957 428.0374999999999 78.5775950668037 436.2916666666666 78.5775950668037C 444.54583333333323 78.5775950668037 451.6208333333332 55.144912641315514 459.8749999999999 55.144912641315514C 468.12916666666655 55.144912641315514 475.20416666666654 67.64234326824254 483.4583333333332 67.64234326824254C 491.71249999999986 67.64234326824254 498.78749999999985 94.19938335046248 507.0416666666665 94.19938335046248C 515.2958333333332 94.19938335046248 522.3708333333332 109.82117163412127 530.6249999999999 109.82117163412127C 538.8791666666666 109.82117163412127 545.9541666666665 81.70195272353546 554.2083333333333 81.70195272353546" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <path id d="M9.276072536616956 152L9.276072536616956 87.9969086075668C15.906984489398127 87.9969086075668 28.74408804721883 103.05645952343343 35.375 103.05645952343343C42.00591195278117 103.05645952343343 52.32742138055216 35.28848040203357 58.95833333333333 35.28848040203357C65.58924528611449 35.28848040203357 75.9107547138855 121.88089816826673 82.54166666666666 121.88089816826673C89.17257861944782 121.88089816826673 99.49408804721882 100.54653437078898 106.12499999999999 100.54653437078898C112.75591195278115 100.54653437078898 123.07742138055215 98.03660921814455 129.70833333333331 98.03660921814455C136.33924528611448 98.03660921814455 146.6607547138855 70.42743253905572 153.29166666666666 70.42743253905572C159.92257861944782 70.42743253905572 170.24408804721884 75.4472828443446 176.875 75.4472828443446C183.50591195278116 75.4472828443446 193.82742138055218 84.23202087860014 200.45833333333334 84.23202087860014C207.0892452861145 84.23202087860014 217.41075471388552 85.48698345492235 224.04166666666669 85.48698345492235C230.67257861944785 85.48698345492235 240.99408804721887 81.7220957259557 247.62500000000003 81.7220957259557C254.2559119527812 81.7220957259557 264.5774213805522 108.07630982872232 271.20833333333337 108.07630982872232C277.83924528611453 108.07630982872232 288.1607547138855 128.15571104987782 294.7916666666667 128.15571104987782C301.42257861944785 128.15571104987782 311.74408804721884 108.07630982872232 318.375 108.07630982872232C325.00591195278116 108.07630982872232 335.32742138055215 104.31142209975565 341.9583333333333 104.31142209975565C348.5892452861145 104.31142209975565 358.91075471388547 113.09616013401119 365.54166666666663 113.09616013401119C372.1725786194478 113.09616013401119 382.4940880472188 118.11601043930007 389.12499999999994 118.11601043930007C395.7559119527811 118.11601043930007 406.0774213805521 94.27172148917788 412.70833333333326 94.27172148917788C419.3392452861144 94.27172148917788 429.6607547138854 93.01675891285566 436.2916666666666 93.01675891285566C442.92257861944773 93.01675891285566 453.2440880472187 74.19232026802237 459.8749999999999 74.19232026802237C466.50591195278105 74.19232026802237 476.82742138055204 84.23202087860014 483.4583333333332 84.23202087860014C490.08924528611436 84.23202087860014 500.41075471388535 105.56638467607786 507.0416666666665 105.56638467607786C513.6725786194477 105.56638467607786 523.9940880472187 118.11601043930007 530.6249999999999 118.11601043930007C537.255911952781 118.11601043930007 547.5774213805521 95.52668406550012 554.2083333333333 95.52668406550012C554.2083333333333 95.52668406550012 554.2083333333333 95.52668406550012 554.2083333333333 152M445.0217151479509 95.52668406550012C445.0217151479509 95.52668406550012 445.0217151479509 95.52668406550012 445.0217151479509 95.52668406550012 " fill="url(#SvgjsLinearGradient1050)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask2hc15ceg)" pathto="M 11.791666666666666 152L 11.791666666666666 72.32887975334017C 20.045833333333334 72.32887975334017 27.120833333333334 91.07502569373072 35.375 91.07502569373072C 43.62916666666666 91.07502569373072 50.704166666666666 6.717368961973278 58.95833333333333 6.717368961973278C 67.21249999999999 6.717368961973278 74.2875 114.5077081192189 82.54166666666666 114.5077081192189C 90.79583333333332 114.5077081192189 97.87083333333332 87.95066803699896 106.12499999999999 87.95066803699896C 114.37916666666665 87.95066803699896 121.45416666666665 84.82631038026722 129.70833333333331 84.82631038026722C 137.96249999999998 84.82631038026722 145.0375 50.45837615621788 153.29166666666666 50.45837615621788C 161.54583333333332 50.45837615621788 168.62083333333334 56.70709146968139 176.875 56.70709146968139C 185.12916666666666 56.70709146968139 192.20416666666668 67.64234326824254 200.45833333333334 67.64234326824254C 208.7125 67.64234326824254 215.78750000000002 69.20452209660843 224.04166666666669 69.20452209660843C 232.29583333333335 69.20452209660843 239.37083333333337 64.51798561151078 247.62500000000003 64.51798561151078C 255.8791666666667 64.51798561151078 262.9541666666667 97.32374100719424 271.20833333333337 97.32374100719424C 279.46250000000003 97.32374100719424 286.5375 122.3186022610483 294.7916666666667 122.3186022610483C 303.04583333333335 122.3186022610483 310.12083333333334 97.32374100719424 318.375 97.32374100719424C 326.62916666666666 97.32374100719424 333.70416666666665 92.6372045220966 341.9583333333333 92.6372045220966C 350.2125 92.6372045220966 357.28749999999997 103.57245632065775 365.54166666666663 103.57245632065775C 373.7958333333333 103.57245632065775 380.8708333333333 109.82117163412127 389.12499999999994 109.82117163412127C 397.3791666666666 109.82117163412127 404.4541666666666 80.13977389516957 412.70833333333326 80.13977389516957C 420.9624999999999 80.13977389516957 428.0374999999999 78.5775950668037 436.2916666666666 78.5775950668037C 444.54583333333323 78.5775950668037 451.6208333333332 55.144912641315514 459.8749999999999 55.144912641315514C 468.12916666666655 55.144912641315514 475.20416666666654 67.64234326824254 483.4583333333332 67.64234326824254C 491.71249999999986 67.64234326824254 498.78749999999985 94.19938335046248 507.0416666666665 94.19938335046248C 515.2958333333332 94.19938335046248 522.3708333333332 109.82117163412127 530.6249999999999 109.82117163412127C 538.8791666666666 109.82117163412127 545.9541666666665 81.70195272353546 554.2083333333333 81.70195272353546C 554.2083333333333 81.70195272353546 554.2083333333333 81.70195272353546 554.2083333333333 152M 554.2083333333333 81.70195272353546z" pathfrom="M -1 152L -1 152L 35.375 152L 58.95833333333333 152L 82.54166666666666 152L 106.12499999999999 152L 129.70833333333331 152L 153.29166666666666 152L 176.875 152L 200.45833333333334 152L 224.04166666666669 152L 247.62500000000003 152L 271.20833333333337 152L 294.7916666666667 152L 318.375 152L 341.9583333333333 152L 365.54166666666663 152L 389.12499999999994 152L 412.70833333333326 152L 436.2916666666666 152L 459.8749999999999 152L 483.4583333333332 152L 507.0416666666665 152L 530.6249999999999 152L 554.2083333333333 152">
                                                  </path>
                                                  <g id className="apexcharts-series-markers-wrap hidden">
                                                    <g className="apexcharts-series-markers">
                                                      <circle id r={0} cx={0} cy={0} className="apexcharts-marker wvldkyxgf no-pointer-events" stroke="#ffffff" fill="#f7b924" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0}>
                                                      </circle>
                                                    </g>
                                                  </g>
                                                  <g id className="apexcharts-datalabels">
                                                  </g>
                                                </g>
                                              </g>
                                              <line id x1={0} y1={0} x2={566} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs">
                                              </line>
                                              <line id x1={0} y1={0} x2={566} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden">
                                              </line>
                                              <g id className="apexcharts-yaxis-annotations hidden">
                                              </g>
                                              <g id className="apexcharts-xaxis-annotations hidden">
                                              </g>
                                              <g id className="apexcharts-point-annotations hidden">
                                              </g>
                                            </g>
                                            <g id className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                                              <g id className="apexcharts-yaxis-texts-g">
                                              </g>
                                            </g>
                                          </svg>
                                          <div className="apexcharts-legend">
                                          </div>
                                          <div className="apexcharts-tooltip light">
                                            <div className="apexcharts-tooltip-series-group">
                                              <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(247, 185, 36)'}} />
                                              <div className="apexcharts-tooltip-text">
                                                <div className="apexcharts-tooltip-y-group">
                                                  <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                  <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-triggers">
                                        <div className="expand-trigger">
                                          <div style={{width: 567, height: 153}}>
                                          </div>
                                        </div>
                                        <div className="contract-trigger" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button>
                      <ul className="slick-dots" style={{}} role="tablist">
                        <li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabIndex={0} aria-selected="true">1</button></li>
                        <li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabIndex={-1}>2</button></li>
                        <li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabIndex={-1}>3</button></li>
                      </ul>
                    </div>
                  </div>
                  <h6 className="text-muted text-uppercase font-size-md opacity-5 pl-3 pr-3 pb-1 font-weight-normal">
                    Expenses</h6>
                  <ul className="list-group list-group-flush">
                    <li className="p-3 bg-transparent list-group-item">
                      <div className="widget-content p-0">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-heading">Total Orders</div>
                              <div className="widget-subheading">Last year's total expense
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers text-success">
                                <small>$</small>
                                1896
                              </div>
                            </div>
                          </div>
                          <div className="widget-progress-wrapper">
                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                              <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{width: '43%'}}>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
  <div className="card-hover-shadow-2x mb-3 card">
    <div className="card-header-tab card-header">
      <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i className="header-icon lnr-lighter icon-gradient bg-amy-crisp" />
        Personal Details
      </div>
      <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
        <div className="btn-group dropdown">
          <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
            <i className="pe-7s-menu btn-icon-wrapper" />
          </button>
          <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu">
            <h6 tabIndex={-1} className="dropdown-header">Header</h6>
            <button type="button" tabIndex={0} className="dropdown-item">
              <i className="dropdown-icon lnr-inbox"> </i><span>Menus</span>
            </button>
            <button type="button" tabIndex={0} className="dropdown-item">
              <i className="dropdown-icon lnr-file-empty">
              </i><span>Settings</span>
            </button>
            <button type="button" tabIndex={0} className="dropdown-item">
              <i className="dropdown-icon lnr-book"> </i><span>Actions</span>
            </button>
            <div tabIndex={-1} className="dropdown-divider" />
            <div className="p-3 text-right">
              <button className="mr-2 btn-shadow btn-sm btn btn-link">View
                Details</button>
              <button className="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="scroll-area-lg">
      <div className="scrollbar-container ps ps--active-y">
        <div className="p-4">
          <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
            <div className="vertical-timeline-item dot-danger vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Contact Address
                    <span>0x1b50e8779040b182cc2322079144d225b0361b75</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-warning vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <p>Active Address
                  </p>
                  <span>0x1b50e8779040b182cc4582079144d225b0361b75</span>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-success vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Doctor contact Address
                  </h4>
                  <span>0x1b50e8779040b182cc2124079144d225b0361b75</span>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-info vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Name
                  </h4>
                  <span>John Doe</span>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-dark vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Email
                  </h4>
                  <span>johndoe@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-danger vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Aadhar Number</h4>
                  <span>xxxxxxxxxxx2740</span>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-warning vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <p>Phone Number
                  </p>
                  <span>xxxxxxx458</span>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-primary vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">
                    Something not important
                    <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCABAAEADAREAAhEBAxEB/8QAhgAAAgMBAQEAAAAAAAAAAAAABAcDBQYIAgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFABAAAgEDAwMCBAUEAwAAAAAAAQIDEQQFACESMRMGQSJRQhQHYZEyIxVxgbEk0VIIEQEAAwACAgEEAgIDAAAAAAABABECIQMxEkFRIhME8JFh8YHBMv/aAAwDAQACEQMRAD8AduMyGKtOxbtGbS3kCyR27k0DrUskbEnkh6kfnrPadHsxrQq2/wA5hbXF3ZJH9Mf9R34RKWE78uJ49tvlU1AUUoNeuKznOvPn+v8AcC8j81tcX4vdSXV6Ult6w3NxGFEvcP6I1UjiXkHVhsBvrHXE9+Ktmq4fH0nP3kv3ZzmUumZJ2tMansgtYWKhgB8xHuYAfHrr2RW2e3tlBH5pcQSm57r9w7RxKdifxH/Y/H000D4iFZtMH5ZLnYIrfLXDRZFCRY3kX6kD9UevtZGNK1px66DtyJf0jOlLrX9zT4LIWlrbTW0lzci/DFblVDFIFU0bkaGvboTVdjt8NJzq/Msxn3H2fEH8ligjyEwtn+ohkNYZgeXNTuGrtWuouwrSSzqftLjIuMYifTred2XHCLtC7iYKe6X37nP9Ap1dTT466PqTlnZrkWQtjr4C5f6d2shGEYwMY5O65JLErQkkGh9B/fWIxp2Z4F/7/n1iQ+/nlC/zlv49asBFjo0jkpQ8rmReUrNQdQvFfz0IFwN6aiyu3WKKNd2I3P4n4fnohi04ln4d4rk/Jsh/rpS2jbi87CiV/D4nQ77a4IXX1OuXxHPkft7ZY3xOY24LXtsvejuPXkm7Cg9COo0rO0buO1gSgknjV5/JW2Kv+E0dnO0kGWlgNEkmanAuAahSoHIepH5svmBhTkf9w/ysxW+QjaJJIhx98MwAeNvVajYrTdSPQ6m7kNcSz9e3HMaxjuGEb2kSrHOP3O5QgUNJCqkdeNB+I1fT8Tkms8+z4kePxUsMlz3J3Fqhk5P3KrXiAxKEU1lT2uwaQ5nHHk1yuf8AuNlrlzWJ7uZhN8vBGIqB/QdNKWjiPyW0ym+lsb3ImCS6aJQ1FCo8jEn5PbsKL1OsVDghULyx7+IXtha+LSPaJFClgoSqghano++5rqNdXLAAqAeK/cmS9y0mOyl7L9FcSfSrztFEBaSoAL15KG9CRp3IWxK21PfiPcxltmLWVJWs7DMJBPGm4Qo4COQQUFRShbbfppotcwMeaJqfKoOVpE7rKsyMy/vtyk7exQtx9g9aAU2ptqb9m+GV/r8KTUWeYu4frr+Uu+Px9vG0ohUmSSR2If1O4VBSnWur82Cs4/a50nqeYfk/JbLG+JXmTvXCQiOSSU8wa92rAU9CeQG251uj7ViurX3VOUfEktcn51IsydqyuTIvaHyierAH+v6dT9imSdPpB1HTD4t45BacYLSOPfoqip/GukZ1fmV666hHjNnbzreQqtbeX2RhujcfQf8AOjzzdzNYohmLtMPbXBEVupYVHB1+YH3KwPqD6az2Jh1NcsochkL6Dy3Mpj+QtMhd2UmQtgA8VHhAndo225cI+tNhp2dWSPsKWXb3lzkrSTG20RuIZo/qTOAIgOFe1QOVaROHRwK6Hsx7ZQgdP7CaPbxNHkPtpb29tcCG9jfkUnvjPzeWW45DhLJ76AHpTj06aPONeXVyLNjMF/6GQYnAQre5INcXUtWsgW90SHcqgooXl0rrDOvbls+lRnRmrbnOOH8kvMZnEyyhfp2dBcI4rWIuCzD1DL1B07eBzXzH47HLcf1xk7qKOKdZjNYyGgMQ5NxpyBNPlKmtdcs81Ov72cT5jstiEnkdMq0Mb/qiZmoVApSMMNqfhpnqz1teJFk/LcTb3ccuPlkei+4hWYzUFOKg+5n2600OutXiB+T1EZFdY7NxXWCOVtIxkM3dTyF2fdjIAnZNCOPbACk1+I+OrM5oCcve/ZWOWDA5G3sRfrho38iNoIyyPSNmDAhCxYgKR1YDVOaC/mRJcQvjn3EyFr9zMv5XlLWa6t80DFcW0akdm2QjslA5oWj4Ls3xNNSbyuQHklX41Cpm/vJ5VF5B5DcyxzGezjjSKFzWhAFSVB3pUnRdIhzDqipgYcTPkyLS04yTt7UtwT3HIFeKgA9NUhfMGlaJr/tt53DbIPH8y/ZMTdqzmkNAtNuy5PRl9Ceo21J+x0c+xKejur7deYyJ7S04CSOYSu5AigCh2kf4A1p/f0Gphfll5pDzMT5Z5L/HX62ONuVu81FR727tivZs1qCkMNKcnJH7j+nTbfVHR1r9ycSHv7S6GMTEZXB+d2tna5i1vBfYuBHgaN1huolFCXqlFkic+8PQGvX46LtvLx4kiV8Rhr515BBcW8FoDeW8i0Rpl7UjcdiBuV2Hr66X7v1ges48GcMEndjYRuNwULOdvhUD/OrHHEM7KZ5v5JGk7h2MnFo1O9WcVGhwcw9tcyfC32bxKy5myRXiSZbW4ndt5Gb38BxKsF47Mw26eunVXMVlbuD5O0TJ/WZOObuGF6yWfINMsDEsJA1KyxxsePLcj10LrmqhU7tW2BpnpxamCN2IC0SRnYbH1IB6aH8ZdzHsaohni2Ptzb3V7eSqkXJbe1lYUrcP7iQfgiD3H0rptcQ+rrNC64PA/wCZf2b+RWd1BlRNLDeYuP6d7mOQh4FVq2/Hj8lH6dDoU4m66tZ8/EYH2/8Av1ewz/x/lPdu0lnKrl6KTCGIHGWOgDRoRsV3GheuyyDju5piP5WruFVZJHchVTpUk066JULigFqWObgaGSLk1Sp4bdBQAUGk9OrWVd/XWSX3jYngw+QxkCNHkMvPAltcvGWSK3KESydDtXj/AJ9NULQ8XUX+PQBXC/3Cp8ZjsPFDLeQBA9LOe6hJQQXzKWjuIWO/CQAh1bbl+GsTgSWYHr3WwF+f5/mYTN20Us0ctlH27mZ+1cWSLT90tQNGvpzruno3TbW8fE52jlm48i8W/gfHMVZ5S+jlykBf6awtwvbhDkd7vOBWSWg3r06a96hz8xibci/+fiEY+W8g8Wka7lUQZWOWG0t1oZ2ijRiCw6hK+6MnqAdGFEbjd5PZ4Lr/AJlL4R4tmvLMvJa4pUCx0e5vJm4wQgmlWIBJLH9KqKnSnsMnMnz1uvE//9k=" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTE2RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE1RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJENDFFMzk5RUI1NDJFOUFCNzIzNzUzMDQ3QkJEMkQ3OSIgc3RSZWY6ZG9jdW1lbnRJRD0iRDQxRTM5OUVCNTQyRTlBQjcyMzc1MzA0N0JCRDJENzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTEyRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTExRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDgzQTU0RjlFQTY4MTFFODhGMzQ4NDBBMjJGNzJDODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDgzQTU0RkFFQTY4MTFFODhGMzQ4NDBBMjJGNzJDODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYF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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEYwODFCRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEYwODFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSIxQUMwRDYxNUU3RTUxRTAwNThENTY1NENGQTYxNTZCQyIgc3RSZWY6ZG9jdW1lbnRJRD0iMUFDMEQ2MTVFN0U1MUUwMDU4RDU2NTRDRkE2MTU2QkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEYwODE3RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEYwODE2RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI1NDBBNzQ1MzA5RTU2OURFMUM5Qjk3QUIwRTVDNzYyRCIgc3RSZWY6ZG9jdW1lbnRJRD0iNTQwQTc0NTMwOUU1NjlERTFDOUI5N0FCMEU1Qzc2MkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEYwODEzRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEYwODEyRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5QTgyNDYyOTc1Rjk5RThBQTc3MDRCNDVGMkI4NDgwNyIgc3RSZWY6ZG9jdW1lbnRJRD0iOUE4MjQ2Mjk3NUY5OUU4QUE3NzA0QjQ1RjJCODQ4MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQjJCNTVFRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQjJCNTVERUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJGQTNDMzBENTkxNUNENDY3Qjg0REZERUVBM0VDRkYwMyIgc3RSZWY6ZG9jdW1lbnRJRD0iRkEzQzMwRDU5MTVDRDQ2N0I4NERGREVFQTNFQ0ZGMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQjJCNTVBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQjJCNTU5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0OEUzM0U0MzQ4NzdGOTU0QzlCM0Y3Q0VBNTBGRDM1NiIgc3RSZWY6ZG9jdW1lbnRJRD0iNDhFMzNFNDM0ODc3Rjk1NEM5QjNGN0NFQTUwRkQzNTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCABAAEADAREAAhEBAxEB/8QAggAAAgIDAQEAAAAAAAAAAAAABQYEBwACAwEIAQEBAAMBAAAAAAAAAAAAAAADAgABBAUQAAIBAgQEBQMDAgcAAAAAAAECAxEEACESBTEiEwZBUWEyB3FCI4FSFPCRobHBYoIVFhEAAgIDAQADAQAAAAAAAAAAAAERAiFBAzFRYRJx/9oADAMBAAIRAxEAPwBg2uaIXFNPO2WpsqV8TWuLAklvfyzvJDayyNq5EiFSNQPjqAyrjDAT3B3pt22MpOiTdIEZZLeBAXYnI65CQhP0FMS2NTm3kW3+Ut8vZ4ZILNrW2RVHQjYqDoyqAMuPhg22MuaC43lruIGaVluJwS2rUpGrjqNfHFUvoO/JrJxQ2nVKrOkhiJ1FpC3DMVK1/wAMIGS/5gEao8Md3GaqzAuEA9wVdRyrwJpjDDWHe90rG6iBTCaosTZDKhID1xhORk3GDbNmiW4YlpwCqAas5M6qC1eUeLYmTapIqbt8i3djZG2tYYYJplZRLHqyQDn4+76nEu4tOSkqu/3+Rrp9EdZ9YdHkzViPpiTpGrYOyO8N50XRQWlu3MkjNWinyA44K9zopwbGvuL423az7blu9quWub+2VpTBIeaUKKsuX+WDV85N9OSSwK3YXdM+/WU6yxKLi1VD1hGdTJJUDVSo1gimOyl9M83pTaGl2cDSqdQilVrmfPLCSFDOyHaUt2kuLNgVAA5uBr5jjXGjZm+X9zI0hno2kMzSFxU6c2oDX+2BG8Kj7v3G4e4hu3aqewqKBlY+FBjT9Fp4GuwBsdzdI91S4njAZ1I4N5EfXA9HB1cEmXdte4o6CONdAAoPBaelMDJ2/k77t3RY7LYSXly4ZI6ZDhUmgB9PPG0pZF4SllL9xJd9pTjdtmSWz2HfpXMcjxaehcglmgdQTSN6l4mr5g8MdNHpnndee0aRd/b6DScQXKoKsHUqCPOoOLg5v0T7X5DlVB/J26J4QSKRyipoc9OoGn64qDMEXetzuCouJW1TLIhiXKq0FRSvj+7+3HGGCPv4twCAQ8TczsOBlVqt+lGODv6Nz8Ivad09l3GkqhujKhiMg4aq1GseBxF8obhixbr9wbm1tDt9rbz/AJaCW4hOhI1rmzy0Ys3ki4JJbO1t6GXYrDph9v3pWmgvNL28k3vRl9uR/wBc8RvAkSjr8g3Fn/53ce3ZNtk6QtnmtpF0sjPCvVV1bMqy0+7FLDD6JflyUDFfRiKDRL+IiqK5IYA/bQ15V9MdNDyugNvLqzYu05YMoJaSGoJ8v20H6YUE+jU7d2u1iMqWSKiU/LIA1KerV4YOWWV18tQWN1Z2U1m6arQyF4oVAQq9KtygCtcsSxeZV+3W/wDG3WDXIejcBmRq0HAmjYx5RdMWLR7F74eCNR1XqgU9MZ0DDI0GOd0g9Hh1q1DGLcdx3DeN76b9eydogiTyyLbQKpOolpGDZn/aK43RYE9cVCu+JEnZu8NY3X/YbhZ7Vcq92utowSNXTRn5myBJY4qFKI7p1o5KgsrG1ntInEKsDmVYA0AAH9UwtTyugN3jYYmmasYVAKscwOXMDI4aoDLTurneri5Ec9QkpAULL1GBr9sXtLeIwf8ACiLcbbaSo1lCA9xKzQJM9WKRMOd2P7tXDGQbThlUdy7LNs+5PBcsXtoGpFLH7QHNQwr4HB/Q2PSLatfWNxbzW87W1yMop8miKsfa3ocZjZalPA3bf8ib4Z1sd5sYZ44SAWJNQPNTny/XEOi0NTu9hzuP5Q3QbLPs+yWkccF3EI5r0EELE451UedMs8aS+S79ZUJAbtySA7TCcxGoVZFIzVzVSCP+OEozjsjXdwonCSvzyNVaHIjj44fQD9G9r65tt11xSDQSESQCoGpSrDxNRxriNwb+z3Z7+CI3MsnKkcXKzEZEPpAz/djb+CV8iv8AJYjXbNqZaLdPbme+YUKlJZD0lp6AV+mNXSwNzcJsR7O7tZIZIDpZacqPUkU4r9MG00XS6YUtZ7BVaKF3d+EkZUN+Pyp91PLEiKDaOwuZC3SOuFjph0LnqbgAB4edcTKNwwztrIuiOgMMx/NH96Nw1EHiurG08mmpM3K0WWeNFTVKtAoAJr50w9QOiUSH0l0u0zsHiRG6TjIMxNXGfrQYxLYf0RrKeOeeWJ10xzurqyhSXCijceX35jE0KaFjf7hLue624gopcBZpXBCqv2ljQc1KYpeyU/IE+E23UXqxlgCCXB0gN4g0rhLr4Co1sk28RN1rjn1Imciu4JVRxcNTgMHEoVPPoct7uwKytAzTSygr+IsBQihchh7l9MC00MnJLs7421+qT3HU1LqUOPyMSDR2bPTSlDiI2X9BZr5gElKFdDDUSKkAZ09cdHOWgrrR/9k=" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                        <div className="avatar-icon"><i>+</i></div>
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-info vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">This dot has an info state
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-dark vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">This dot has a dark state
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-danger vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">All Hands Meeting</h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-warning vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <p>Yet another one, at <span className="text-success">15:00
                      PM</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-success vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Build the production release
                    <div className="badge badge-danger ml-2">NEW</div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-primary vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">
                    Something not important
                    <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTE2RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE1RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJENDFFMzk5RUI1NDJFOUFCNzIzNzUzMDQ3QkJEMkQ3OSIgc3RSZWY6ZG9jdW1lbnRJRD0iRDQxRTM5OUVCNTQyRTlBQjcyMzc1MzA0N0JCRDJENzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTEyRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTExRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDgzQTU0RjlFQTY4MTFFODhGMzQ4NDBBMjJGNzJDODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDgzQTU0RkFFQTY4MTFFODhGMzQ4NDBBMjJGNzJDODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYF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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEYwODFCRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEYwODFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSIxQUMwRDYxNUU3RTUxRTAwNThENTY1NENGQTYxNTZCQyIgc3RSZWY6ZG9jdW1lbnRJRD0iMUFDMEQ2MTVFN0U1MUUwMDU4RDU2NTRDRkE2MTU2QkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEYwODE3RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEYwODE2RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI1NDBBNzQ1MzA5RTU2OURFMUM5Qjk3QUIwRTVDNzYyRCIgc3RSZWY6ZG9jdW1lbnRJRD0iNTQwQTc0NTMwOUU1NjlERTFDOUI5N0FCMEU1Qzc2MkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEYwODEzRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEYwODEyRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5QTgyNDYyOTc1Rjk5RThBQTc3MDRCNDVGMkI4NDgwNyIgc3RSZWY6ZG9jdW1lbnRJRD0iOUE4MjQ2Mjk3NUY5OUU4QUE3NzA0QjQ1RjJCODQ4MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQjJCNTVFRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQjJCNTVERUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJGQTNDMzBENTkxNUNENDY3Qjg0REZERUVBM0VDRkYwMyIgc3RSZWY6ZG9jdW1lbnRJRD0iRkEzQzMwRDU5MTVDRDQ2N0I4NERGREVFQTNFQ0ZGMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQjJCNTVBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQjJCNTU5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0OEUzM0U0MzQ4NzdGOTU0QzlCM0Y3Q0VBNTBGRDM1NiIgc3RSZWY6ZG9jdW1lbnRJRD0iNDhFMzNFNDM0ODc3Rjk1NEM5QjNGN0NFQTUwRkQzNTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                        <div className="avatar-icon"><i>+</i></div>
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-info vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">This dot has an info state
                  </h4>
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-dark vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">This dot has a dark state
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
          <div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}}>
          </div>
        </div>
        <div className="ps__rail-y" style={{top: 0, height: 400, right: 0}}>
          <div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 198}}>
          </div>
        </div>
      </div>
    </div>
    <div className="d-block text-center card-footer">
      <button className="btn-shadow btn-wide btn-pill btn btn-focus">
        <span className="badge badge-dot badge-dot-lg badge-warning badge-pulse">Badge</span>
        View Full Profile
      </button>
    </div>
  </div>
</div>
</div>

          <div className="card mb-3">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"> </i>Transplant
                History
              </div>
              <div className="btn-actions-pane-right actions-icon-btn">
                <div className="btn-group dropdown">
                  <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                    <i className="pe-7s-menu btn-icon-wrapper" />
                  </button>
                  <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu">
                    <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                    <button type="button" tabIndex={0} className="dropdown-item">
                      <i className="dropdown-icon lnr-inbox"> </i><span>Menus</span>
                    </button>
                    <button type="button" tabIndex={0} className="dropdown-item">
                      <i className="dropdown-icon lnr-file-empty"> </i><span>Settings</span>
                    </button>
                    <button type="button" tabIndex={0} className="dropdown-item">
                      <i className="dropdown-icon lnr-book"> </i><span>Actions</span>
                    </button>
                    <div tabIndex={-1} className="dropdown-divider" />
                    <div className="p-3 text-right">
                      <button className="mr-2 btn-shadow btn-sm btn btn-link">View
                        Details</button>
                      <button className="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="example_length"><label>Show <select name="example_length" aria-controls="example" className="custom-select custom-select-sm form-control form-control-sm">
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select> entries</label></div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="example_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="example" /></label></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table style={{width: '100%'}} id="example" className="table table-hover table-striped table-bordered dataTable dtr-inline" role="grid" aria-describedby="example_info">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{width: '118.2px'}} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                            Doctor Name
                          </th>
                          <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{width: '190.2px'}} aria-label="Position: activate to sort column ascending">
                            Transplant</th>
                          <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{width: '84.2px'}} aria-label="Office: activate to sort column ascending">
                            City</th>
                          <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{width: '40.2px'}} aria-label="Age: activate to sort column ascending">Date Of
                            Initiation</th>
                          <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{width: '87.2px'}} aria-label="Start date: activate to sort column ascending">
                            Date Of Completion</th>
                          <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{width: '63.2px'}} aria-label="Salary: activate to sort column ascending">
                            Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="sorting_1 dtr-control">Airi Satou</td>
                          <td>Skin Transplant</td>
                          <td>Tokyo</td>
                          <td>2008/10/30</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                        </tr>
                        <tr role="row" className="even">
                          <td className="sorting_1 dtr-control">Angelica Ramos</td>
                          <td>Lung Transplant</td>
                          <td>London</td>
                          <td>2009/09/05</td>
                          <td>2009/10/09</td>
                          <td>$1,200,000</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td className="sorting_1 dtr-control">Ashton Cox</td>
                          <td>Heart Transplant</td>
                          <td>San Francisco</td>
                          <td>2009/01/20</td>
                          <td>2009/02/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr role="row" className="even">
                          <td className="sorting_1 dtr-control">Bradley Greer</td>
                          <td>Blood Transfusion</td>
                          <td>London</td>
                          <td>2012/9/25</td>
                          <td>2012/10/13</td>
                          <td>$132,000</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td className="sorting_1 dtr-control">Brenden Wagner</td>
                          <td>Bone Marrow Transplant</td>
                          <td>San Francisco</td>
                          <td>2011/05/07</td>
                          <td>2011/06/07</td>
                          <td>$206,850</td>
                        </tr>
                        <tr role="row" className="even">
                          <td className="sorting_1 dtr-control">Brielle Williamson</td>
                          <td>Liver Transplant</td>
                          <td>New York</td>
                          <td>2012/10/03</td>
                          <td>2012/12/02</td>
                          <td>$372,000</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td className="sorting_1 dtr-control">Bruno Nash</td>
                          <td>Eye Transplant</td>
                          <td>London</td>
                          <td>2011/04/02</td>
                          <td>2011/05/03</td>
                          <td>$163,500</td>
                        </tr>
                        <tr role="row" className="even">
                          <td className="sorting_1 dtr-control">Caesar Vance</td>
                          <td>Kidney Transplant</td>
                          <td>New York</td>
                          <td>2011/11/20</td>
                          <td>2011/12/12</td>
                          <td>$106,450</td>
                        </tr>
                        <tr role="row" className="odd">
                          <td className="sorting_1 dtr-control">Cara Stevens</td>
                          <td>Sales Assistant</td>
                          <td>New York</td>
                          <td>2011/11/18</td>
                          <td>2011/12/06</td>
                          <td>$145,600</td>
                        </tr>
                        <tr role="row" className="even">
                          <td className="sorting_1 dtr-control">Cedric Kelly</td>
                          <td>Eye Transplant</td>
                          <td>Edinburgh</td>
                          <td>2012/02/29</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th rowSpan={1} colSpan={1}>Doctor Name</th>
                          <th rowSpan={1} colSpan={1}>Transplant</th>
                          <th rowSpan={1} colSpan={1}>City</th>
                          <th rowSpan={1} colSpan={1}>Date Of Initiation</th>
                          <th rowSpan={1} colSpan={1}>Date Of Completion</th>
                          <th rowSpan={1} colSpan={1}>Cost</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="example_previous"><a href="#" aria-controls="example" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a>
                        </li>
                        <li className="paginate_button page-item active"><a href="#" aria-controls="example" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                        <li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li>
                        <li className="paginate_button page-item next" id="example_next"><a href="#" aria-controls="example" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</div>

            <div className="app-drawer-wrapper">
  <div className="drawer-nav-btn">
    <button type="button" className="hamburger hamburger--elastic is-active">
      <span className="hamburger-box"><span className="hamburger-inner" /></span>
    </button>
  </div>
  <div className="drawer-content-wrapper">
    <div className="scrollbar-container ps ps--active-y">
      <h3 className="drawer-heading">Servers Status</h3>
      <div className="drawer-section">
        <div className="row">
          <div className="col">
            <div className="progress-box">
              <h4>Server Load 1</h4>
              <div className="circle-progress circle-progress-gradient-xl mx-auto"><canvas width={142} height={142} style={{height: 114, width: 114}} />
                <small><span className="fsize-2">51%<span /></span></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="progress-box">
              <h4>Server Load 2</h4>
              <div className="circle-progress circle-progress-success-xl mx-auto"><canvas width={142} height={142} style={{height: 114, width: 114}} />
                <small><span className="fsize-2">16%<span /></span></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="progress-box">
              <h4>Server Load 3</h4>
              <div className="circle-progress circle-progress-danger-xl mx-auto"><canvas width={142} height={142} style={{height: 114, width: 114}} />
                <small><span className="fsize-2">51%<span /></span></small>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="mt-3" style={{position: 'relative'}}>
          <h5 className="text-center card-title">Live Statistics</h5>
          <div id="sparkline-carousel-3" style={{minHeight: 120}}>
            <div id="apexcharts4j564c3g" className="apexcharts-canvas apexcharts4j564c3g" style={{width: 402, height: 120}}><svg id="SvgjsSvg1678" width={402} height={120} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}} >
                <g id="SvgjsG1680" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)">
                  <defs id="SvgjsDefs1679">
                    <clipPath id="gridRectMask4j564c3g">
                      <rect id="SvgjsRect1683" width={405} height={123} x="-1.5" y="-1.5" rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} />
                    </clipPath>
                    <clipPath id="gridRectMarkerMask4j564c3g">
                      <rect id="SvgjsRect1684" width={410} height={128} x={-4} y={-4} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} />
                    </clipPath>
                  </defs>
                  <rect id="SvgjsRect1682" width={0} height={120} x={0} y={0} rx={0} ry={0} fill="#b1b9c4" opacity={1} strokeWidth={0} strokeDasharray={0} className="apexcharts-xcrosshairs" filter="none" fillOpacity="0.9" />
                  <g id="SvgjsG1691" className="apexcharts-xaxis" transform="translate(0, 0)">
                    <g id="SvgjsG1692" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)" />
                  </g>
                  <g id="SvgjsG1695" className="apexcharts-grid">
                    <line id="SvgjsLine1697" x1={0} y1={120} x2={402} y2={120} stroke="transparent" strokeDasharray={0} />
                    <line id="SvgjsLine1696" x1={0} y1={1} x2={0} y2={120} stroke="transparent" strokeDasharray={0} />
                  </g>
                  <g id="SvgjsG1686" className="apexcharts-line-series apexcharts-plot-series">
                    <g id="SvgjsG1687" className="apexcharts-series series-1" dataLongestseries="true" rel={1} dataRealindex={0}>
                      <path id="apexcharts-line-0" d="M 8.375 86.70092497430628C 14.2375 86.70092497430628 19.2625 53.401849948612536 25.125 53.401849948612536C 30.9875 53.401849948612536 36.0125 81.76772867420348 41.875 81.76772867420348C 47.7375 81.76772867420348 52.7625 43.53545734840698 58.625 43.53545734840698C 64.4875 43.53545734840698 69.5125 5.3031860226104754 75.375 5.3031860226104754C 81.2375 5.3031860226104754 86.2625 64.50154162384378 92.125 64.50154162384378C 97.9875 64.50154162384378 103.0125 53.401849948612536 108.875 53.401849948612536C 114.7375 53.401849948612536 119.7625 44.76875642343268 125.625 44.76875642343268C 131.4875 44.76875642343268 136.5125 90.40082219938336 142.375 90.40082219938336C 148.2375 90.40082219938336 153.2625 66.96813977389516 159.125 66.96813977389516C 164.9875 66.96813977389516 170.0125 63.26824254881809 175.875 63.26824254881809C 181.7375 63.26824254881809 186.7625 96.56731757451182 192.625 96.56731757451182C 198.4875 96.56731757451182 203.5125 76.83453237410072 209.375 76.83453237410072C 215.2375 76.83453237410072 220.2625 74.36793422404932 226.125 74.36793422404932C 231.9875 74.36793422404932 237.0125 76.83453237410072 242.875 76.83453237410072C 248.7375 76.83453237410072 253.7625 71.90133607399794 259.625 71.90133607399794C 265.4875 71.90133607399794 270.5125 39.8355601233299 276.375 39.8355601233299C 282.2375 39.8355601233299 287.2625 73.13463514902364 293.125 73.13463514902364C 298.9875 73.13463514902364 304.0125 57.10174717368962 309.875 57.10174717368962C 315.7375 57.10174717368962 320.7625 86.70092497430628 326.625 86.70092497430628C 332.4875 86.70092497430628 337.5125 69.43473792394656 343.375 69.43473792394656C 349.2375 69.43473792394656 354.2625 50.935251798561154 360.125 50.935251798561154C 365.9875 50.935251798561154 371.0125 62.03494347379239 376.875 62.03494347379239C 382.7375 62.03494347379239 387.7625 54.635149023638235 393.625 54.635149023638235" fill="none" fillOpacity={1} stroke="rgba(58,196,125,0.85)" strokeOpacity={1} strokeLinecap="butt" strokeWidth={3} strokeDasharray={0} className="apexcharts-line" index={0} clipPath="url(#gridRectMask4j564c3g)" pathto="M 8.375 86.70092497430628C 14.2375 86.70092497430628 19.2625 53.401849948612536 25.125 53.401849948612536C 30.9875 53.401849948612536 36.0125 81.76772867420348 41.875 81.76772867420348C 47.7375 81.76772867420348 52.7625 43.53545734840698 58.625 43.53545734840698C 64.4875 43.53545734840698 69.5125 5.3031860226104754 75.375 5.3031860226104754C 81.2375 5.3031860226104754 86.2625 64.50154162384378 92.125 64.50154162384378C 97.9875 64.50154162384378 103.0125 53.401849948612536 108.875 53.401849948612536C 114.7375 53.401849948612536 119.7625 44.76875642343268 125.625 44.76875642343268C 131.4875 44.76875642343268 136.5125 90.40082219938336 142.375 90.40082219938336C 148.2375 90.40082219938336 153.2625 66.96813977389516 159.125 66.96813977389516C 164.9875 66.96813977389516 170.0125 63.26824254881809 175.875 63.26824254881809C 181.7375 63.26824254881809 186.7625 96.56731757451182 192.625 96.56731757451182C 198.4875 96.56731757451182 203.5125 76.83453237410072 209.375 76.83453237410072C 215.2375 76.83453237410072 220.2625 74.36793422404932 226.125 74.36793422404932C 231.9875 74.36793422404932 237.0125 76.83453237410072 242.875 76.83453237410072C 248.7375 76.83453237410072 253.7625 71.90133607399794 259.625 71.90133607399794C 265.4875 71.90133607399794 270.5125 39.8355601233299 276.375 39.8355601233299C 282.2375 39.8355601233299 287.2625 73.13463514902364 293.125 73.13463514902364C 298.9875 73.13463514902364 304.0125 57.10174717368962 309.875 57.10174717368962C 315.7375 57.10174717368962 320.7625 86.70092497430628 326.625 86.70092497430628C 332.4875 86.70092497430628 337.5125 69.43473792394656 343.375 69.43473792394656C 349.2375 69.43473792394656 354.2625 50.935251798561154 360.125 50.935251798561154C 365.9875 50.935251798561154 371.0125 62.03494347379239 376.875 62.03494347379239C 382.7375 62.03494347379239 387.7625 54.635149023638235 393.625 54.635149023638235" pathfrom="M -1 120L -1 120L 25.125 120L 41.875 120L 58.625 120L 75.375 120L 92.125 120L 108.875 120L 125.625 120L 142.375 120L 159.125 120L 175.875 120L 192.625 120L 209.375 120L 226.125 120L 242.875 120L 259.625 120L 276.375 120L 293.125 120L 309.875 120L 326.625 120L 343.375 120L 360.125 120L 376.875 120L 393.625 120">
                      </path>
                      <g id="SvgjsG1688" className="apexcharts-series-markers-wrap" />
                      <g id="SvgjsG1689" className="apexcharts-datalabels" />
                    </g>
                  </g>
                  <line id="SvgjsLine1698" x1={0} y1={0} x2={402} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs" />
                  <line id="SvgjsLine1699" x1={0} y1={0} x2={402} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden" />
                  <g id="SvgjsG1700" className="apexcharts-yaxis-annotations" />
                  <g id="SvgjsG1701" className="apexcharts-xaxis-annotations" />
                  <g id="SvgjsG1702" className="apexcharts-point-annotations" />
                </g>
                <g id="SvgjsG1693" className="apexcharts-yaxis" rel={0} transform="translate(-35, 0)">
                  <g id="SvgjsG1694" className="apexcharts-yaxis-texts-g" />
                </g>
              </svg>
              <div className="apexcharts-legend" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="widget-chart p-0">
                <div className="widget-chart-content">
                  <div className="widget-numbers text-warning fsize-3">43</div>
                  <div className="widget-subheading pt-1">Packages</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="widget-chart p-0">
                <div className="widget-chart-content">
                  <div className="widget-numbers text-danger fsize-3">65</div>
                  <div className="widget-subheading pt-1">Dropped</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="widget-chart p-0">
                <div className="widget-chart-content">
                  <div className="widget-numbers text-success fsize-3">18</div>
                  <div className="widget-subheading pt-1">Invalid</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="text-center mt-2 d-block">
            <button className="mr-2 border-0 btn-transition btn btn-outline-danger">Escalate Issue</button>
            <button className="border-0 btn-transition btn btn-outline-success">Support Center</button>
          </div>
          <div className="resize-triggers">
            <div className="expand-trigger">
              <div style={{width: 403, height: 288}} />
            </div>
            <div className="contract-trigger" />
          </div>
        </div>
      </div>
      <h3 className="drawer-heading">File Transfers</h3>
      <div className="drawer-section p-0">
        <div className="files-box">
          <ul className="list-group list-group-flush">
            <li className="pt-2 pb-2 pr-2 list-group-item">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left opacity-6 fsize-2 mr-3 text-primary center-elem">
                    <i className="fa fa-file-alt" />
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading font-weight-normal">TPSReport.docx</div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="fa fa-cloud-download-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="pt-2 pb-2 pr-2 list-group-item">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left opacity-6 fsize-2 mr-3 text-warning center-elem">
                    <i className="fa fa-file-archive" />
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading font-weight-normal">Latest_photos.zip</div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="fa fa-cloud-download-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="pt-2 pb-2 pr-2 list-group-item">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left opacity-6 fsize-2 mr-3 text-danger center-elem">
                    <i className="fa fa-file-pdf" />
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading font-weight-normal">Annual Revenue.pdf</div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="fa fa-cloud-download-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="pt-2 pb-2 pr-2 list-group-item">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left opacity-6 fsize-2 mr-3 text-success center-elem">
                    <i className="fa fa-file-excel" />
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading font-weight-normal">Analytics_GrowthReport.xls
                    </div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="fa fa-cloud-download-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="drawer-heading">Tasks in Progress</h3>
      <div className="drawer-section p-0">
        <div className="todo-box">
          <ul className="todo-list-wrapper list-group list-group-flush">
            <li className="list-group-item">
              <div className="todo-indicator bg-warning" />
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left mr-2">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" id="exampleCustomCheckbox1266" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="exampleCustomCheckbox1266">&nbsp;</label>
                    </div>
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading">Wash the car
                      <div className="badge badge-danger ml-2">Rejected</div>
                    </div>
                    <div className="widget-subheading"><i>Written by Bob</i></div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="border-0 btn-transition btn btn-outline-success">
                      <i className="fa fa-check" />
                    </button>
                    <button className="border-0 btn-transition btn btn-outline-danger">
                      <i className="fa fa-trash-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="todo-indicator bg-focus" />
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left mr-2">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" id="exampleCustomCheckbox1666" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="exampleCustomCheckbox1666">&nbsp;</label>
                    </div>
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading">Task with hover dropdown menu</div>
                    <div className="widget-subheading">
                      <div>By Johnny
                        <div className="badge badge-pill badge-info ml-2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <div className="d-inline-block dropdown">
                      <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="border-0 btn-transition btn btn-link">
                        <i className="fa fa-ellipsis-h" />
                      </button>
                      <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                        <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                        <button type="button" disabled tabIndex={-1} className="disabled dropdown-item">Action</button>
                        <button type="button" tabIndex={0} className="dropdown-item">Another
                          Action</button>
                        <div tabIndex={-1} className="dropdown-divider" />
                        <button type="button" tabIndex={0} className="dropdown-item">Another
                          Action</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="todo-indicator bg-primary" />
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left mr-2">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" id="exampleCustomCheckbox4777" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="exampleCustomCheckbox4777">&nbsp;</label>
                    </div>
                  </div>
                  <div className="widget-content-left flex2">
                    <div className="widget-heading">Badge on the right task</div>
                    <div className="widget-subheading">This task has show on hover actions!</div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="border-0 btn-transition btn btn-outline-success">
                      <i className="fa fa-check" />
                    </button>
                  </div>
                  <div className="widget-content-right ml-3">
                    <div className="badge badge-pill badge-success">Latest Task</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="todo-indicator bg-info" />
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left mr-2">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" id="exampleCustomCheckbox2444" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="exampleCustomCheckbox2444">&nbsp;</label>
                    </div>
                  </div>
                  <div className="widget-content-left mr-3">
                    <div className="widget-content-left">
                      <img width={42} className="rounded" src="../images/1.jpg" alt />
                    </div>
                  </div>
                  <div className="widget-content-left">
                    <div className="widget-heading">Go grocery shopping</div>
                    <div className="widget-subheading">A short description ...</div>
                  </div>
                  <div className="widget-content-right widget-content-actions">
                    <button className="border-0 btn-transition btn btn-sm btn-outline-success">
                      <i className="fa fa-check" />
                    </button>
                    <button className="border-0 btn-transition btn btn-sm btn-outline-danger">
                      <i className="fa fa-trash-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="todo-indicator bg-success" />
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left mr-2">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" id="exampleCustomCheckbox3222" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="exampleCustomCheckbox3222">&nbsp;</label>
                    </div>
                  </div>
                  <div className="widget-content-left flex2">
                    <div className="widget-heading">Development Task</div>
                    <div className="widget-subheading">Finish React ToDo List App</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="badge badge-warning mr-2">69</div>
                  </div>
                  <div className="widget-content-right">
                    <button className="border-0 btn-transition btn btn-outline-success">
                      <i className="fa fa-check" />
                    </button>
                    <button className="border-0 btn-transition btn btn-outline-danger">
                      <i className="fa fa-trash-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="drawer-heading">Urgent Notifications</h3>
      <div className="drawer-section">
        <div className="notifications-box">
          <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
            <div className="vertical-timeline-item dot-danger vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">All Hands Meeting</h4>
                  <span className="vertical-timeline-element-date" />
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-warning vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
                  <span className="vertical-timeline-element-date" />
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-success vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Build the production release
                    <div className="badge badge-danger ml-2">NEW</div>
                  </h4>
                  <span className="vertical-timeline-element-date" />
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-primary vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">Something not important
                    <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/1.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/2.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/3.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/4.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/5.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/6.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/7.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src="../images/8.jpg" alt />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                        <div className="avatar-icon"><i>+</i></div>
                      </div>
                    </div>
                  </h4>
                  <span className="vertical-timeline-element-date" />
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-info vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon bounce-in" />
                <div className="vertical-timeline-element-content bounce-in">
                  <h4 className="timeline-title">This dot has an info state</h4>
                  <span className="vertical-timeline-element-date" />
                </div>
              </div>
            </div>
            <div className="vertical-timeline-item dot-dark vertical-timeline-element">
              <div>
                <span className="vertical-timeline-element-icon is-hidden" />
                <div className="vertical-timeline-element-content is-hidden">
                  <h4 className="timeline-title">This dot has a dark state</h4>
                  <span className="vertical-timeline-element-date" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
        <div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} />
      </div>
      <div className="ps__rail-y" style={{top: 0, height: 723, right: 0}}>
        <div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 373}} />
      </div>
    </div>
  </div>
</div>

            <div className="app-drawer-overlay d-none animated fadeIn" />

            <Footer />
        </div>
    )
    
  }
}

const mapStateToProps = (state) =>{
  return {
    contract : state.contract
  }
}

export default connect(mapStateToProps, {})(Dashboard);
