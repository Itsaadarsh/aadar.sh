import React from 'react';
import styled from 'styled-components';

const BottombarStyled = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ececec;
  border-top: 2px solid #29c7ac;
`;

const Bottombar = () => (
  <BottombarStyled>
    More stuff coming soon. Made by @itsaadarsh
  </BottombarStyled>
);

export default Bottombar;