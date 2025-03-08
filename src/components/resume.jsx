import React from 'react';
import styled from 'styled-components';

const ResumeButton = () => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <span className="svgContainer">
          <svg fill="white" className="svgIcon" viewBox="0 0 384 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm80 273.6v19.2c0 10.61-10.03 19.2-22.4 19.2H102.4c-12.37 0-22.4-8.6-22.4-19.2v-19.2c0-10.61 10.03-19.2 22.4-19.2h179.2c12.37 0 22.4 8.6 22.4 19.2zm0-96v19.2c0 10.61-10.03 19.2-22.4 19.2H102.4c-12.37 0-22.4-8.6-22.4-19.2v-19.2c0-10.61 10.03-19.2 22.4-19.2h179.2c12.37 0 22.4 8.6 22.4 19.2zm0-96v19.2c0 10.61-10.03 19.2-22.4 19.2H102.4c-12.37 0-22.4-8.6-22.4-19.2v-19.2c0-10.61 10.03-19.2 22.4-19.2h179.2c12.37 0 22.4 8.6 22.4 19.2zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
          </svg>
        </span>
        <span className="BG" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
  }
  
  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all .3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }
  
  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #2E8B57;
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all .3s;
  }
  
  .Btn:hover {
    transform: scale(1.1);
  }
  
  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }
`;

export default ResumeButton;