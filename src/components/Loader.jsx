import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinning-number">
        <div 
          className="wheel"
          style={{
            '--color': 'hwb(240 0% 0%)', 
            '--l': '3em', 
            '--m': 22, 
            '--t': '22s', 
            '--r1': 'normal', 
            '--s': 1
          }}
        >
          <div style={{'--a': '0deg', '--i': 0}} className="number" />
          <div style={{'--a': '16deg', '--i': 1, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '32deg', '--i': 2, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '49deg', '--i': 3}} className="number" />
          <div style={{'--a': '65deg', '--i': 4, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '81deg', '--i': 5, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '98deg', '--i': 6, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '114deg', '--i': 7, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '130deg', '--i': 8, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '147deg', '--i': 9}} className="number" />
          <div style={{'--a': '163deg', '--i': 10, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '180deg', '--i': 11}} className="number" />
          <div style={{'--a': '196deg', '--i': 12, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '212deg', '--i': 13}} className="number" />
          <div style={{'--a': '229deg', '--i': 14}} className="number" />
          <div style={{'--a': '245deg', '--i': 15}} className="number" />
          <div style={{'--a': '261deg', '--i': 16, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '278deg', '--i': 17}} className="number" />
          <div style={{'--a': '294deg', '--i': 18, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '310deg', '--i': 19, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '327deg', '--i': 20}} className="number" />
          <div style={{'--a': '343deg', '--i': 21, '--r': 'reverse'}} className="number" />
        </div>
        <div 
          className="wheel"
          style={{
            '--color': 'hwb(243 0% 0%)', 
            '--l': '4em', 
            '--m': 29, 
            '--t': '29s', 
            '--r1': 'reverse', 
            '--s': '0.9977810650887574'
          }}
        >
          <div style={{'--a': '0deg', '--i': 0}} className="number" />
          <div style={{'--a': '12deg', '--i': 1}} className="number" />
          <div style={{'--a': '24deg', '--i': 2, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '37deg', '--i': 3, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '49deg', '--i': 4, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '62deg', '--i': 5, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '74deg', '--i': 6}} className="number" />
          <div style={{'--a': '86deg', '--i': 7}} className="number" />
          <div style={{'--a': '99deg', '--i': 8, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '111deg', '--i': 9, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '124deg', '--i': 10}} className="number" />
          <div style={{'--a': '136deg', '--i': 11, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '148deg', '--i': 12, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '161deg', '--i': 13, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '173deg', '--i': 14}} className="number" />
          <div style={{'--a': '186deg', '--i': 15}} className="number" />
          <div style={{'--a': '198deg', '--i': 16, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '211deg', '--i': 17}} className="number" />
          <div style={{'--a': '223deg', '--i': 18}} className="number" />
          <div style={{'--a': '235deg', '--i': 19}} className="number" />
          <div style={{'--a': '248deg', '--i': 20}} className="number" />
          <div style={{'--a': '260deg', '--i': 21, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '273deg', '--i': 22, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '285deg', '--i': 23}} className="number" />
          <div style={{'--a': '297deg', '--i': 24, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '310deg', '--i': 25, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '322deg', '--i': 26, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '335deg', '--i': 27}} className="number" />
          <div style={{'--a': '347deg', '--i': 28, '--r': 'reverse'}} className="number" />
        </div>
        <div 
          className="wheel"
          style={{
            '--color': 'hwb(247 0% 0%)', 
            '--l': '5em', 
            '--m': 36, 
            '--t': '36s', 
            '--r1': 'normal', 
            '--s': '0.9911242603550295'
          }}
        >
          <div style={{'--a': '0deg', '--i': 0}} className="number" />
          <div style={{'--a': '10deg', '--i': 1}} className="number" />
          <div style={{'--a': '20deg', '--i': 2}} className="number" />
          <div style={{'--a': '30deg', '--i': 3, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '40deg', '--i': 4}} className="number" />
          <div style={{'--a': '50deg', '--i': 5, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '60deg', '--i': 6}} className="number" />
          <div style={{'--a': '70deg', '--i': 7, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '80deg', '--i': 8}} className="number" />
          <div style={{'--a': '90deg', '--i': 9, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '100deg', '--i': 10}} className="number" />
          <div style={{'--a': '110deg', '--i': 11}} className="number" />
          <div style={{'--a': '120deg', '--i': 12, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '130deg', '--i': 13}} className="number" />
          <div style={{'--a': '140deg', '--i': 14, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '150deg', '--i': 15}} className="number" />
          <div style={{'--a': '160deg', '--i': 16, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '170deg', '--i': 17}} className="number" />
          <div style={{'--a': '180deg', '--i': 18, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '190deg', '--i': 19}} className="number" />
          <div style={{'--a': '200deg', '--i': 20, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '210deg', '--i': 21}} className="number" />
          <div style={{'--a': '220deg', '--i': 22, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '230deg', '--i': 23}} className="number" />
          <div style={{'--a': '240deg', '--i': 24, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '250deg', '--i': 25}} className="number" />
          <div style={{'--a': '260deg', '--i': 26, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '270deg', '--i': 27}} className="number" />
          <div style={{'--a': '280deg', '--i': 28, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '290deg', '--i': 29}} className="number" />
          <div style={{'--a': '300deg', '--i': 30, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '310deg', '--i': 31}} className="number" />
          <div style={{'--a': '320deg', '--i': 32, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '330deg', '--i': 33}} className="number" />
          <div style={{'--a': '340deg', '--i': 34, '--r': 'reverse'}} className="number" />
          <div style={{'--a': '350deg', '--i': 35}} className="number" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .spinning-number {
    position: relative;
    font-size: 1em;
    width: 10em;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinning-number .wheel {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: spinning-number-spin var(--t) linear infinite var(--r1);
    color: var(--color);
  }

  @keyframes spinning-number-spin {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinning-number .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(var(--a))
      translateY(calc(var(--l) * -1)) scale(var(--s));
  }

  .spinning-number .number::before {
    content: "1";
    --z: 1.9;
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -50%);
    animation: spinning-number-changing calc(var(--t) * var(--z))
      calc(-1 * var(--z) * var(--t) * var(--i) / var(--m) - 60s) linear infinite
      var(--r);
  }

  @keyframes spinning-number-changing {
    0% {
      content: "1";
    }
    to {
      content: "0";
    }
  }
`;

export default Loader;