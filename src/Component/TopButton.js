import React from 'react';

const TopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1100,
      }}
    >
      TOP
    </div>
  );
};

export default TopButton;
