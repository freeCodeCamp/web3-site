import React, { SVGProps } from 'react';
import Spacer from '../helpers/spacer';

function NearLogo({ jumbotron }: { jumbotron: boolean }) {
  const logoText = jumbotron ? <h1>NEAR</h1> : <h2>NEAR</h2>;
  return (
    <div className='logo-wrap'>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 108 108'
        width='100%'
        height='100%'
      >
        <path d='M86.69,5.49,64.11,39a2.4,2.4,0,0,0,3.56,3.15L89.9,22.89a.9.9,0,0,1,1.48.68V83.92a.9.9,0,0,1-1.59.57L22.64,4.07A11.53,11.53,0,0,0,13.85,0H11.51A11.51,11.51,0,0,0,0,11.51v85A11.51,11.51,0,0,0,11.51,108h0a11.49,11.49,0,0,0,9.8-5.49L43.89,69a2.4,2.4,0,0,0-3.56-3.15L18.1,85.11a.9.9,0,0,1-1.48-.68V24.08a.9.9,0,0,1,1.59-.57l67.15,80.42A11.53,11.53,0,0,0,94.15,108h2.34A11.51,11.51,0,0,0,108,96.49v-85A11.51,11.51,0,0,0,96.49,0h0A11.49,11.49,0,0,0,86.69,5.49Z' />
      </svg>
      {logoText}
    </div>
  );
}

NearLogo.displayName = 'NearLogo';

export default NearLogo;
