import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/Search';
import PageCounter from '../components/PageCounter';
import Navbar from "../components/Navbar";

function Catalog() {
  const [response, setCatalog] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getCatalog = async () => {
      const api = await fetch(`${process.env.REACT_APP_API_SERVER}/search${search}`);
      const data = await api.json();
      setCatalog(data);
    };
    getCatalog();
  }, [search])

  return (
    <Wrapper>
      <Navbar />
      <Search/>
      <Grid>
        {response.vinyls?.map((item) => {
          return ( 
            <Card key={item._id}>
              <Link to={`/catalog/${item._id}`}>
                <img src={item.CoverURL} alt="" />
                <h4>{item.Name}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
      <PageCounter lastPage={ response.lastPage }/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
  } 
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`

const Card = styled.div`
  margin-bottom: -40%;
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 2rem;
  }
  
  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Catalog;