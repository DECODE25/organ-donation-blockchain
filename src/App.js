import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Web3 from "web3";
import DonateOrganFactory from "./abis/DonateOrganFactory.json";
import "./App.css";
import Tracking from "./components/tracking/Tracking";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import { configureBlockchain } from "./actions/contractActions";
import store from "./store";
import SIgnup from "./components/Forms/SIgnup";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/profile/profile";
import PrivateRoute from "./utils/PrivateComponent";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    // this.setState({account:accounts[0]}) ;
    const networkId = await web3.eth.net.getId();
    const networkData = DonateOrganFactory.networks[networkId];

    if (networkData) {
      const abi = DonateOrganFactory.abi;
      const factoryContract = new web3.eth.Contract(abi, networkData.address);
      store.dispatch(configureBlockchain(web3, factoryContract));
    } else {
      window.alert("Marketplace contract not deployed to the public network");
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/track">
            <Tracking />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/form">
            <SIgnup />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
