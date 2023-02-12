import styled from 'styled-components';

function Navbar() {
  return (
    <Wrapper>
      <img src={process.env.PUBLIC_URL + '/textlogo.png'} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 50px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 70%;
  }
`

export default Navbar;