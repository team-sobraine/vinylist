import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const check = localStorage.getItem('cache');
    if (check && false) {
      setRandom(JSON.parse(check));
    } else {
      const api = await fetch(`${process.env.REACT_APP_API_SERVER}/random`);
      const data = await api.json();
      localStorage.setItem('cache', JSON.stringify(data));
      setRandom(data);
    }
  }

  return (
    <StyledDiv>
      <h2>Menart</h2>
      <Splide options={{
        perPage: 2,
        arrows: true,
        pagination: false,
        drag: 'free',
        gap: '5rem'
      }}>
      {random.map((vinyl) => {
        return (
          <SplideSlide key={vinyl._id}>
            <Wrapper>
              <Card>
                <Link to={`/catalog/${vinyl._id}`}>
                  <p>{vinyl.Name + ' - ' + vinyl.Author}</p>
                  <img src={vinyl.CoverURL} alt={vinyl.Name + ' - ' + vinyl.Author} />
                  <Gradient />
                </Link>
              </Card>
            </Wrapper>
          </SplideSlide>
        );
      })}
      </Splide>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  h2 {
    font-size: 3rem;
    margin-left: 1rem;
  }
`

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin: 1rem;
    padding: 0;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
`

export default Random;