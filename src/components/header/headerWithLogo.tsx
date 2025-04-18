import styled from 'styled-components';
import planeLogo from './planeLogo.svg'

const HeaderWrapper = styled.div<{ $isExpanded: boolean }>`
  width: 100%;
  height: 60px;
  padding: 50px 0; 

  img {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderWithLogo = () => {
  return (
    <HeaderWrapper $isExpanded={false}> 
      <img src={planeLogo} alt="Plane logo" />
    </HeaderWrapper>
  );
};