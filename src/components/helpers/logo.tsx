import React from 'react';
import Web3Logo from '../logos/web3-logo';
import SolanaLogo from '../logos/solana-logo';
import NearLogo from '../logos/near-logo';
import { courseNames } from '../../static/courses';

const Logo = ({ name = courseNames.web3 }) => {
  switch (name) {
    case courseNames.web3:
      return <Web3Logo />;
    case courseNames.solana:
      return <SolanaLogo />;
    case courseNames.near:
      return <NearLogo />;
    default:
      return <Web3Logo />;
  }
};

export default Logo;
