import React from 'react';
import styled from 'styled-components';

import Home from '../pages/Home';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #cffffe;
`;

function App() {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
