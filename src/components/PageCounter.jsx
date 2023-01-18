import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function PageCounter({ lastPage }) {
  const { search } = useLocation();
  const navigate = useNavigate();
  let page;
  let notInUrl = false;
  try {
    page = parseInt(search.split('page=')[1].split('&')[0]);
  } catch (TypeError) {
    page = 1;
    notInUrl = true;
  }

  const switchPage = (offset) => {
    page += offset;
    if (lastPage && offset > 0) {
      return;
    }
    if (page < 1) {
      return;
    }
    let new_url;
    if (notInUrl) {
      let i = search.length;
      let count = 0;
      while (i--) {
        if (search[i] === '?') {
          count++;
        }
      }
      if (count === 0) {
        new_url = `${search}?page=${page}`;
      } else {
        new_url = `${search}&page=${page}`;
      }
    } else {
      new_url = search.split('page=')[0] + `page=${page}`;
      if (search.split('page=')[1].split('&')[1]) {
        let [_, ...rest] = search.split('page=')[1].split('&')
        rest = rest.join('&')
        new_url += '&' + rest;
      }
    }
    navigate(`${new_url}`);
  };

  return (
    <Wrapper>
      <Container>
          <Button onClick={ () => {switchPage(-1)} }>
            <BsArrowLeft />
          </Button>
          <h4>Page: { page }</h4>
          <Button onClick={ () => {switchPage(1)} }>
            <BsArrowRight />
          </Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 1rem;
  text-decoration: none;
  background-color: #494949;
  width: 3rem;
  height: 3rem;

  svg {
    color: #ffffff;
    font-size: 1.5rem;
  }
`

const Container = styled.div`
  width: fit-content;
  padding: 1rem;
  background-color: #444;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background: linear-gradient(#333, #333) padding-box,
              linear-gradient(to right, #f27121, #e94057) border-box;
  border: 1px solid transparent;

  h4 {
    line-height: 3rem;
    font-size: 1.5rem;
  }
`


export default PageCounter;