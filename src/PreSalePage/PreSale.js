import React from 'react';
import style from './style.module.css';
import { useEffect,useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap'
import Web3 from 'web3';

import {bearTokenABI} from "../contracts/ABIs";
import {bearTokenAddress} from "../contracts/contractAddress"; 

import bear_1 from '../imgs/1.jpg';
import bear_2 from '../imgs/2.jpg';
import bear_5 from '../imgs/5.jpg';



import { ethers } from 'ethers';

const PreSale = () => {

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
  


    useEffect(()=>{
        loadWeb3();
    },[])


    function web3StringToBytes32(text) {
      var result = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(text));
      while (result.length < 66) { result += '0'; }
      if (result.length !== 66) { throw new Error("invalid web3 implicit bytes32"); }
      return result;
  }


    
    const BuyToken = async (numberOfTokens)=>{
      console.log(account)
      const web3 = window.web3;
      let tokenTransaction
      let tokenId = null; 
      let transactionData
      let tokenIdArray = [];
      if(numberOfTokens === 1){
        tokenTransaction = await bearContract.methods.claim('ipfs://QmX8gVWKGVdHWM1ntNu5UWuoYiCTh2n1c74Ee9t1Am4kaa').send({from:account, gas: 3000000, value: web3.utils.toWei('0.069', 'ether')})
        console.log(bearTokenABI)
  
        tokenId = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"]["returnValues"];
      }
      if(numberOfTokens === 2){
        tokenTransaction = await bearContract.methods.claim_2("QmX8gVWKGVdHWM1ntNu5UWuoYiCTh2n1c74Ee9t1Am4kaa00").send({from:account, gas: 3000000, value: web3.utils.toWei('0.138', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
        
        for(let i=0 ;i <transactionData.length;i++){
         let token = transactionData[i]['returnValues']['tokenId']
         tokenIdArray.push(token)
        }
        
      }
      if(numberOfTokens === 5){
        tokenTransaction = await bearContract.methods.claim_5('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.345', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
  
        for(let i=0 ;i <transactionData.length;i++){
          let token = transactionData[i]['returnValues']['tokenId']
          tokenIdArray.push(token)
         }
      }
      if(numberOfTokens === 10){
        tokenTransaction = await bearContract.methods.claim_10_GiveAway('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.69', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
  
        for(let i=0 ;i <transactionData.length;i++){
          let token = transactionData[i]['returnValues']['tokenId']
          tokenIdArray.push(token)
         }
      }
      if(numberOfTokens === 20){
        tokenTransaction = await bearContract.methods.claim_20('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('1.38', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
  
        for(let i=0 ;i <transactionData.length;i++){
          let token = transactionData[i]['returnValues']['tokenId']
          tokenIdArray.push(token)
         }
      }
        
  
     if(tokenId !== null) window.alert('Token ID: '+JSON.stringify(tokenId));
     else window.alert('Token IDS: '+JSON.stringify(tokenIdArray));
  
  }
  
  
  return (
    <div className={style.wrap}>
        <h3 style={{textAlign:"center"}}>Pre Sale</h3>
      <div className={style.gridWrap}>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src={bear_1}
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 1</div>
          <button onClick={()=>BuyToken(1)}>Mint Now</button>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src={bear_2}
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 2</div>
          <button onClick={()=>BuyToken(2)}>Mint Now</button>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <img
              src={bear_5}
              alt='img'
            />
          </div>
          <div className={style.mintTitle}>Mint 5</div>
          <button onClick={()=>BuyToken(5)}>Mint Now</button>
        </div>
      </div>
    </div>
  );
};

export default PreSale;