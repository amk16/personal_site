import React from 'react';
import styled from 'styled-components';

const LinkedInButton = () => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <span className="svgContainer">
          <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
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
    background: #0077b5;
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

export default LinkedInButton;