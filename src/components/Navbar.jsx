import { AiOutlineHome, AiOutlineQuestion } from 'react-icons/ai';
import { BsFillVinylFill } from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <List>
      <SLink to={'/'}>
        <AiOutlineHome />
        <h4>Početna</h4>
      </SLink>
      <SLink to={'/catalog'}>
        <BsFillVinylFill />
        <h4>Katalog</h4>
      </SLink>
      {/* <SLink to={'/api'}>
        <AiOutlineApi />
        <h4>API</h4>
      </SLink> */}
      <SLink to={'/about'}>
        <AiOutlineQuestion />
        <h4>O Nama</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  min-width: 6rem;
  min-height: 6rem;
  
  h4 {
    color: #ffffff;
    font-size: 0.8rem;
  }

  svg {
    color: #ffffff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #ffffff;
    }

    h4 {
      color: #ffffff;
    }
  }
`

export default Navbar;