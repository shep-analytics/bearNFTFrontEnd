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
import bear_10 from '../imgs/10.jpg';
import bear_20 from '../imgs/20.jpg';

import polar_logo from '../imgs/logo.png';


  
 

const SalesPage = () => {

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
    
    const BuyToken = async (numberOfTokens)=>{
      console.log(account)
      const web3 = window.web3;
      let tokenTransaction
      let tokenId = null; 
      let transactionData
      let tokenIdArray = [];
      if(numberOfTokens === 1){
        tokenTransaction = await bearContract.methods.claim('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.01', 'ether')})
        console.log(bearTokenABI)
  
        tokenId = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"]["returnValues"];
      }
      if(numberOfTokens === 2){
        tokenTransaction = await bearContract.methods.claim_2('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.02', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
        
        for(let i=0 ;i <transactionData.length;i++){
         let token = transactionData[i]['returnValues']['tokenId']
         tokenIdArray.push(token)
        }
        
      }
      if(numberOfTokens === 5){
        tokenTransaction = await bearContract.methods.claim_5('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.05', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
  
        for(let i=0 ;i <transactionData.length;i++){
          let token = transactionData[i]['returnValues']['tokenId']
          tokenIdArray.push(token)
         }
      }
      if(numberOfTokens === 10){
        tokenTransaction = await bearContract.methods.claim_10('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.10', 'ether')})
        transactionData = JSON.parse(JSON.stringify(tokenTransaction))["events"]["Transfer"];
  
        for(let i=0 ;i <transactionData.length;i++){
          let token = transactionData[i]['returnValues']['tokenId']
          tokenIdArray.push(token)
         }
      }
      if(numberOfTokens === 20){
        tokenTransaction = await bearContract.methods.claim_20('www.google.com/test').send({from:account, gas: 3000000, value: web3.utils.toWei('0.20', 'ether')})
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
    // <div className={style.wrap}>
    //             <h3 style={{textAlign:"center"}}>Sales Page</h3>

    //   <div className={style.gridWrap}>
    //     <div className={style.grid}>
    //       <div className={style.img}>
    //         <img
    //           src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
    //           alt='img'
    //         />
    //       </div>
    //       <div className={style.mintTitle}>Mint 1</div>
    //       <button onClick={()=>BuyToken(1)}>Mint Now</button>
    //     </div>
    //     <div className={style.grid}>
    //       <div className={style.img}>
    //         <img
    //           src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
    //           alt='img'
    //         />
    //       </div>
    //       <div className={style.mintTitle}>Mint 2</div>
    //       <button onClick={()=>BuyToken(2)}>Mint Now</button>
    //     </div>
    //     <div className={style.grid}>
    //       <div className={style.img}>
    //         <img
    //           src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
    //           alt='img'
    //         />
    //       </div>
    //       <div className={style.mintTitle}>Mint 5</div>
    //       <button onClick={()=>BuyToken(5)}>Mint Now</button>
    //     </div>
    //     <div className={style.grid}>
    //       <div className={style.img}>
    //         <img
    //           src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
    //           alt='img'
    //         />
    //       </div>
    //       <div className={style.mintTitle}>Mint 10</div>
    //       <button onClick={()=>BuyToken(10)}>Mint Now</button>
    //     </div>
    //     <div className={style.grid}>
    //       <div className={style.img}>
    //         <img
    //           src='https://uploads-ssl.webflow.com/60a2950b08beb715e850d8a5/611a726e05800e74d68787c5_326%20copy.png'
    //           alt='img'
    //         />
    //       </div>
    //       <div className={style.mintTitle}>Mint 20</div>
    //       <button onClick={()=>BuyToken(20)}>Mint Now</button>
    //     </div>
    //   </div>
    // </div>
    <>
    <div className={style.wrap}>
      <div className={style.header_logo}>
      <img className={style.logo_img}
              src={polar_logo}
              alt='logo'
            />
      </div>
      <div className={style.body_wrapper}>
        <h1 style={{textAlign:"center"}}>MINT YOUR POLAR PALS</h1>
        <p className={style.polar_text} style={{textAlign:"center"}}>Number of Polar Pals Left: 10,000/10,000</p>
        <h2 style={{textAlign:"center"}}>HOW MANY PALS DO YOU WANT?</h2>
      <div className={style.gridWrap}>
        <div className={style.grid}>
          <div className={style.img}>
            <a>
            <img
              src={bear_1}
              alt='img'
            />
            </a>
          </div>
        </div>
        <div className={style.grid} >
          <div className={style.img}>
            <a>
            <img
              src={bear_2}
              alt='img'
            />
            </a>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <a>
            <img
              src={bear_5}
              alt='img'
            />
            </a>
          </div> 
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <a>
            <img
              src={bear_10}
              alt='img'
            />
            </a>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.img}>
            <a>
            <img
              src={bear_20}
              alt='img'
            />
            </a>
          </div>
        </div>
      </div>
      <p className={style.polar_text} style={{textAlign:"center"}}>You haven't selected any pals yet =(</p>
      <p className={style.address} style={{textAlign:"center"}}>YOUR ADDRESS:{account}</p>
      <div style={{textAlign:"center"}}>
        <div className={style.wallet_btn}>
      <Button onClick={loadWeb3}>CONNECT WALLET</Button>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SalesPage;
