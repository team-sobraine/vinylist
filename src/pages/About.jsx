import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AvatarDorotea } from '../avatars/AvatarDorotea.svg';
import { ReactComponent as AvatarJan } from '../avatars/AvatarJan.svg';
import { ReactComponent as AvatarFrane } from '../avatars/AvatarFrane.svg';
import { GoLocation, GoMarkGithub, GoLogoGithub } from 'react-icons/go';

function About() {
  return (
    <div>
      <Wrapper>
        <h1>O nama</h1>
        <p>
          Vinylist Vam pomaže lako doći do ploča.
          Ne morate više satima hodati od trgovine do trgovine
          ili satima surfati razne webshop-ove.
          Radi tako da umjesto Vas pretražuje kataloge
          kako bi vi u minutama znali kako do Vaše željene ploče.
        </p>
      </Wrapper>
      <Wrapper>
        <h1>Team Sobraine</h1>
        <List>
          <Card>
            <AvatarDorotea />
            <h3>Dorotea</h3>
          </Card> 
          <Card>
            <AvatarJan />
            <h3>Jan</h3>
          </Card>
          <Card>
            <AvatarFrane />
            <h3>Frane</h3>
          </Card>
        </List>
        <Info>
          <Row>
            <GoLocation />
            <h3>Tehnička Škola Ruđera Boškovića, Zagreb</h3>
          </Row>
          <Row>
            <a href='https://github.com/team-sobraine/' target='_blank' rel='noreferrer'>
              <GoMarkGithub />
            </a>
            <a href='https://github.com/team-sobraine/' target='_blank' rel='noreferrer'>
              <GoLogoGithub className='bigger'/>
            </a>
          </Row>
        </Info>
      </Wrapper>
    </div>
  );
}

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    font-size: 2rem;
    margin: 0 0.5rem;
  }

  .bigger {
    font-size: 5rem; 
  }

  h3 {
    margin-right: 1rem;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Card = styled.div`
  padding: 1rem;
  background-color: #444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  border-radius: 2rem;
  background: linear-gradient(#333, #333) padding-box,
              linear-gradient(to right, #f27121, #e94057) border-box;
  border: 1px solid transparent;

`

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  margin: 1rem auto;
  background: linear-gradient(35deg, #494949, #313131);
  padding: 2rem;
  border-radius: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
  }
`

export default About;