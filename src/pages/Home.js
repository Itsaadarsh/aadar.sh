import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Bottombar from '../components/Bottombar';

import section_1 from '../constants/section_1';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 68rem;
  @media (max-width: 72rem) {
    width: 48rem;
  }
  @media (max-width: 51rem) {
    width: 32rem;
  }
  @media (max-width: 35rem) {
    width: 21rem;
  }
`;

const TitleWrapper = styled.div`
  height: 4rem;
  color: #ececec;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  margin: 1.5rem 0 0 0;
  @media (max-width: 35rem) {
    margin: 5.5rem 0 0 0;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1.9rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 0 3rem 0;
  @media (max-width: 72rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 51rem) {
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <TitleWrapper>Projects 🖥️</TitleWrapper>
      <GridWrapper>
        {section_1.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </GridWrapper>
      <Bottombar />
    </HomeWrapper>
  );
};

export default Home;
