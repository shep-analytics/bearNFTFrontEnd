import { useEffect,useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap'
import Web3 from 'web3';

import {bearTokenABI} from "./contracts/ABIs";
import {bearTokenAddress} from "./contracts/contractAddress"; 

import PreSale from "./PreSalePage/PreSale"
// import SalesPage from './SalePage/SalePage';

function App() {

  return <PreSale></PreSale>
  // return <SalesPage></SalesPage>
}

export default App;
