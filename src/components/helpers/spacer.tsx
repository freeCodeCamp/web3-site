import React from 'react';

const styles = { padding: '15px 0', height: '1px' };

const Comp = ({ ...props }) => (
  <div className='spacer' style={styles} {...props} />
);

const Spacer = ({ size = 1 }) =>
  size === 1 ? (
    <Comp />
  ) : (
    <>
      {Array.from(Array(size), (_, i) => (
        <Comp key={`spacer_${i}`} />
      ))}
    </>
  );

export default Spacer;
