import React from 'react';
import styled, { css } from 'styled-components';

import useWindowDimensions from '../hooks/useWindowDimensions';

import Profile from '../images/profile.jpg';

// Icons
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import techStack from '../constants/tech-stack';

const NavbarStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BioSectionStyled = styled.div`
  height: 15rem;
  display: flex;
  justify-content: center;

  @media (max-width: 35rem) {
    flex-direction: column;
  }
`;

const TechStackSectionStyled = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dddddd;

  @media (max-width: 35rem) {
    display: none;
  }
`;

const SectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 1rem;
  max-width: 25rem;
`;

const ProfileStyled = styled.img`
  width: 9rem;
  height: 9rem;
  border: 1px solid #dddddd;
  border-radius: 5rem;

  @media (max-width: 35rem) {
    width: 6rem;
    height: 6rem;
    margin: 1rem 0;
  }
`;

const TitleStyled = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const BioStyled = styled.div`
font-size: 0.9rem;
  color: #999999;
`;

const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  height: 1.8rem;
  width: 7rem;
  text-decoration: none;
  color: black;
  margin: 1rem 1rem 0 0;
  &:hover {
    cursor: pointer;
    background: #f8f8f8;
  }
`;

const GitHubIcon = styled(DiGithubBadge)`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const LinkedInIcon = styled(FaLinkedinIn)`
  margin-right: 0.5rem;
`;


const TwitterIcon = styled(FaTwitter)`
  margin-right: 0.5rem;
`;

const TechStackButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1rem 0.6rem;

  background-color: #ffffff;

  font-size: 1.4rem;
  margin: 0 0.5rem;
  height: 1.5rem;

  
  transition: box-shadow 100ms;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.03rem 0.09rem 0 rgba(0, 0, 0, 0.11), 0 0.16rem 0.36rem 0 rgba(0, 0, 0, 0.13);
  }

  @media (min-width: 72rem) {
    border: 1px solid #dddddd;
    border-radius: 1rem;
  }
`;

const TechTextStyled = styled.div`
  font-size: 0.7rem;
  margin: 0 0.5rem;
  @media (max-width: 72rem) {
    display: none;
  }
`;

const Navbar = () => {
  const { width } = useWindowDimensions();
  return (
    <NavbarStyled>
      <BioSectionStyled>
        <SectionStyled>
          <ProfileStyled src={Profile}></ProfileStyled>
        </SectionStyled>
        <SectionStyled>
          <TitleStyled>Aadarsh</TitleStyled>
          <BioStyled>I make programs that add 0 and 1 together, creatively.<br />Master Modern Full-Stack Web Development.</BioStyled>
          <div style={{ display: 'flex' }}>
            <ButtonStyled href='https://github.com/Itsaadarsh' target="_blank" ><GitHubIcon />GitHub</ButtonStyled>
            <ButtonStyled href='https://www.linkedin.com/in/itsaadarsh/' target="_blank" ><LinkedInIcon />LinkedIn</ButtonStyled>
            <ButtonStyled href='https://twitter.com/itsaadarsh_' target="_blank" ><TwitterIcon />Twitter</ButtonStyled>
          </div>
        </SectionStyled>
      </BioSectionStyled>
      <TechStackSectionStyled>
        {techStack.map((tech) => (
          <TechStackButton showBorder={width >= 1140}>
            <tech.icon style={{ color: tech.color, fontSize: tech.size }} />
            <TechTextStyled display={width >= 1140}>{tech.name}</TechTextStyled>
          </TechStackButton>
        ))}
      </TechStackSectionStyled>
    </NavbarStyled>
  );
};

export default Navbar;