import { useEffect,useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap'
import Web3 from 'web3';

import {bearTokenABI} from "./contracts/ABIs";
import {bearTokenAddress} from "./contracts/contractAddress"; 

import Minitng from './Minting/index';

function App() {
  
  const [ bearContract , setBearContract] = useState(null);
  const [ account, setAccount] = useState(null);
  
  const loadWeb3 = async ()=>{
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      const web3 = window.web3;
      await window.ethereum.enable()
      
      const account = await web3.eth.getAccounts()
      console.log(account)
      setAccount(account[0])
      
      const contract  = new web3.eth.Contract(bearTokenABI,bearTokenAddress)
      setBearContract(contract)
      

    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      const web3 = window.web3;

      const account = await web3.eth.getAccounts()
      console.log(account)
      setAccount(account[0])
      
      const contract  = new web3.eth.Contract(bearTokenABI,bearTokenAddress)
      setBearContract(contract)
    
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  
  const BuyToken = async ()=>{
    console.log(account)
    const web3 = window.web3;
    const tokenTransaction = await bearContract.methods.claim('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.01', 'ether')})
    
    console.log(tokenTransaction)
    

    const tokenId = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"]["returnValues"];

    console.log(tokenId)
    window.alert('Transaction Data: '+JSON.stringify(tokenId));

}



  return (
    <div className="App">
      <header className="App-header">
        <Button className="btn btn-primary" onClick={loadWeb3}>Connect Web3</Button>
        <br/>
        <Button className="btn btn-primary" onClick={loadWeb3} style={{marginTop:"2em"}} onClick = {BuyToken}>BUY NFT</Button>

      </header>
      {/* <Minitng></Minitng> */}
    </div>
  );
}

export default App;
