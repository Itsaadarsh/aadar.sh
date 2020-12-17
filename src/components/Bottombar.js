import React from 'react';
import styled from 'styled-components';

const BottombarStyled = styled.div`
  font-size: medium;
  padding: 2rem 0;
  text-align: center;
  color: #ececec;
  border-top: 2px solid #29c7ac;
`;

const Bottombar = () => (
  <BottombarStyled>
    Stay Tuned For More. Made by <span style={{ color: '#29c7ac', padding: '0 0.5rem' }}> @itsaadarsh</span>with ❤️
  </BottombarStyled>
);

export default Bottombar;