import React ,{Component} from 'react';
import Web3 from 'web3';
import DonateOrganFactory from './abis/DonateOrganFactory.json'
import './App.css';
import Tracking from "./components/tracking/Tracking";

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }


  constructor(props)
  {
    super(props)
    this.state ={
      account:'',
      loading:true
    }
    // this.createProduct= this.createProduct.bind(this)
    // this.purchaseProduct= this.purchaseProduct.bind(this)
  }


  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3 ;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    this.setState({account:accounts[0]}) 


    const networkId = await web3.eth.net.getId() 
    const networkData = Marketplace.networks[networkId]

    if (networkData) 
    {
      const abi = DonateOrganFactory.abi
      const factoryContract = new  web3.eth.Contract(abi,networkData.address );
      // const authAddress = await factoryContract.methods.people(this.state.account).call();
      // if (address === "0x0000000000000000000000000000000000000000") 
      // {
        
      // } 
    }


  }

  render( ) {
    return (
      <div className="App">
        <Tracking />














        
      </div>
    );
  }
}
 

export default App;
