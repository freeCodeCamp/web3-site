import React from 'react';
import Web3Logo from '../logos/web3-logo';
import SolanaLogo from '../logos/solana-logo';
import NearLogo from '../logos/near-logo';
import { courseNames } from '../../static/courses';

const Logo = ({ name = courseNames.web3, jumbotron = false }) => {
  switch (name) {
    case courseNames.web3:
      return <Web3Logo jumbotron={jumbotron} />;
    case courseNames.solana:
      return <SolanaLogo jumbotron={jumbotron} />;
    case courseNames.near:
      return <NearLogo jumbotron={jumbotron} />;
    default:
      return <Web3Logo jumbotron={jumbotron} />;
  }
};

export default Logo;
