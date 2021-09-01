import React from "react";
import style from "./style.module.css";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import Web3 from "web3";

import { bearTokenABI } from "../contracts/ABIs";
import { bearTokenAddress } from "../contracts/contractAddress";

import bear_1 from "../imgs/1.jpg";
import bear_2 from "../imgs/2.jpg";
import bear_5 from "../imgs/5.jpg";
import bear_10 from "../imgs/10.jpg";
import bear_20 from "../imgs/20.jpg";

import polar_logo from "../imgs/logo.png";

const SalesPage = () => {
  const [bearContract, setBearContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [saleAmount,setSaleAmount] = useState(9000);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      await window.ethereum.enable();

      const account = await web3.eth.getAccounts();
      console.log(account);
      setAccount(account[0]);

      const contract = new web3.eth.Contract(bearTokenABI, bearTokenAddress);
      setBearContract(contract);
      const tx = await contract.methods.getCurrentNFTAmount().call();
      console.log("Transaction: ", tx)
      setSaleAmount(tx);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const web3 = window.web3;

      const account = await web3.eth.getAccounts();
      console.log(account);
      setAccount(account[0]);

      const contract = new web3.eth.Contract(bearTokenABI, bearTokenAddress);
      setBearContract(contract);
      const tx = await contract.methods.getCurrentNFTAmount().call();
      console.log("Transaction: ", tx)
      setSaleAmount(tx);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const updateSale  = async ()=>{
    const tx = await bearContract.methods.getCurrentNFTAmount().call();
    console.log(tx);
    setSaleAmount(tx);
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
   await updateSale()
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
          <img className={style.logo_img} src={polar_logo} alt="logo" />
        </div>
        <div className={style.body_wrapper}>
          <h1 style={{ textAlign: "center" }}>MINT YOUR POLAR PALS</h1>
          <p className={style.polar_text} style={{ textAlign: "center" }}>
            Number of Polar Pals Left: {saleAmount}/10,000
          </p>
          <h2 style={{ textAlign: "center" }}>HOW MANY PALS DO YOU WANT?</h2>
          <div className={style.gridWrap}>
            <div className={style.grid}>
              <div className={style.img}>
                <img src={bear_1} alt="img" className={style.polar_img} onClick={()=>BuyToken(1)}/>
              </div>
            </div>
            <div className={style.grid}>
              <div className={style.img}>
                <img src={bear_2} alt="img" className={style.polar_img} onClick={()=>BuyToken(2)}/>
              </div>
            </div>
            <div className={style.grid}>
              <div className={style.img}>
                <img src={bear_5} alt="img" className={style.polar_img} onClick={()=>BuyToken(5)}/>
              </div>
            </div>
            <div className={style.grid}>
              <div className={style.img}>
                <img src={bear_10} alt="img" className={style.polar_img} onClick={()=>BuyToken(10)}/>
              </div>
            </div>
            <div className={style.grid}>
              <div className={style.img}>
                <img src={bear_20} alt="img" className={style.polar_img} onClick={()=>BuyToken(20)}/>
              </div>
            </div>
          </div>
          {/* MOBILE SECTION START */}
          <div className={style.mobileGrid}>
            <div className={style.mobileFirstChild}>
              <div className={style.grid}>
                <div className={style.img}>
                  <img src={bear_1} alt="img" className={style.polar_img} onClick={()=>BuyToken(1)}/>
                </div>
              </div>
              <div className={style.grid}>
                <div className={style.img}>
                  <img src={bear_2} alt="img" className={style.polar_img} onClick={()=>BuyToken(2)}/>
                </div>
              </div>

              <div className={style.grid}>
                <div className={style.img}>
                  <img src={bear_5} alt="img" className={style.polar_img} onClick={()=>BuyToken(5)}/>
                </div>
              </div>
            </div>
            <div className={style.mobile_child}>
              <div className={style.grid}>
                <div className={style.img}>
                  <img src={bear_10} alt="img" className={style.polar_img} onClick={()=>BuyToken(10)}/>
                </div>
              </div>
              <div className={style.grid}>
                <div className={style.img}>
                  <img src={bear_20} alt="img" className={style.polar_img} onClick={()=>BuyToken(20)}/>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile SECTION END */}

          <p className={style.address} style={{ textAlign: "center" }}>
            YOUR ADDRESS:{account}
          </p>
          <div style={{ textAlign: "center" }}>
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
