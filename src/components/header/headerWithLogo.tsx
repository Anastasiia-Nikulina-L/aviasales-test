import styled from 'styled-components';
import planeLogo from './planeLogo.svg'

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 50px 0; 

  img {
    margin-left: auto;
    margin-right: auto;
    filter: drop-shadow(0 8px 11px rgba(55, 104, 142, 0.25));
  }
`;

export const HeaderWithLogo = () => {
  return (
    <HeaderWrapper> 
      <img src={planeLogo} alt="Plane logo" />
    </HeaderWrapper>
  );
};