import React from 'react';
import styled from 'styled-components';

import { DiGithubBadge } from 'react-icons/di';
import { FaGooglePlay } from 'react-icons/fa';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: #ffffff;
  border-radius: 0.2rem;

  transition: box-shadow 200ms;
  box-shadow: 0 0.16rem 0.36rem 0 rgba(0, 0, 0, 0.13), 0 0.03rem 0.09rem 0 rgba(0, 0, 0, 0.11);
  &:hover {
    box-shadow: 0 0.06rem 0.18rem 0 rgba(0, 0, 0, 0.11), 0 0.32rem 0.72rem 0 rgba(0, 0, 0, 0.13);
  }
`;

const BodyStyled = styled.div`
  display: flex;
  height: 6.5rem;
`;

const ImageStyled = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  border-radius: 0.3rem 0 0 0;
  border-right: 1px solid #dddddd;
`;

const CaptionStyled = styled.div`
  height: 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  border-top: 1px solid #dddddd;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0.5rem;
`;

const InfoContainerStyled = styled.div`
  height: 3rem;
  font-size: 0.75rem;
  cursor: default;
`;

const ButtonContainerStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.5rem;
  padding: 0 0.5rem;
  margin-left: 0.5rem;

  font-size: 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid #dddddd;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    background: #f8f8f8;
  }
`;

const GithubIcon = styled(DiGithubBadge)`
  font-size: 1.2rem;
  margin-right: 0.2rem;
`;

const GooglePlayIcon = styled(FaGooglePlay)`
  font-size: 0.7rem;
  margin-right: 0.5rem;
`;

const Card = ({ card }) => {
  const { title, cover, github, live, visit, time, info } = card;
  return (
    <CardStyled>
      <BodyStyled>
        <ImageStyled src={cover} />
        <ContainerStyled>
          <InfoContainerStyled>
            {
              info
            }
          </InfoContainerStyled>
          <ButtonContainerStyled>
            {
              live && <ButtonStyled href={live} target="_blank">Live Demo</ButtonStyled>
            }
            {
              github && <ButtonStyled href={github} target="_blank"><GithubIcon />GitHub</ButtonStyled>
            }
            {
              visit && <ButtonStyled href={visit} target="_blank"><GooglePlayIcon />Play Game</ButtonStyled>
            }
          </ButtonContainerStyled>
        </ContainerStyled>
      </BodyStyled>
      <CaptionStyled>
        <p style={{ fontSize: 12 }}> {title}</p>
        <p style={{ fontSize: 10, color: '#bbbbbb' }}>{time}</p>
      </CaptionStyled>
    </CardStyled >
  );
};

export default Card;