import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import server_url from "../config";

async function getData(params, setter) {
  const api = await fetch(`${server_url}/id/${params.id}`);
  const data = await api.json();
  console.log(data);
  setter(data);
}

function Vinyl() {
  let params = useParams();

  const [vinyl, setVinyl] = useState({});

  useEffect(() => {
    getData(params, setVinyl);
  }, [params]);

  return (
    <div>
      <WrapperMain>
        <img src={vinyl.Image} alt="" />
        <About>
          <h2>{vinyl.Ime}</h2>
          <h3>{vinyl.Autor}</h3>
          <Price>
            <h3>Price: {vinyl.PriceEUR} EUR</h3>
          </Price>
        </About>
      </WrapperMain>
      <WrapperDetails>
        <h2>Prodavaonica: {vinyl.Shop?.name}</h2>
          <RowDark>
            <h3>Adresa: </h3>
            <ItemContainer>
              {vinyl.Shop?.address.map((item) => {
                return (
                  <h4 key={item}>{item}</h4>
                );
              })}
            </ItemContainer>
          </RowDark>
          <RowLight>
            <h3>ePošta: </h3>
            <ItemContainer>
              {vinyl.Shop?.email.map((item) => {
                return (
                  <h4 key={item}>{item}</h4>
                );
              })}
            </ItemContainer>
          </RowLight>
          <RowDark>
            <h3>Telefon: </h3>
            <ItemContainer>
              {vinyl.Shop?.phone.map((item) => {
                return (
                  <h4 key={item}>{item}</h4>
                );
              })}
            </ItemContainer>
          </RowDark>
          <RowLight>
            <h3>Web: </h3>
            <ItemContainer>
              {vinyl.Shop?.web.map((item) => {
                return (
                  <h4 key={item}><a target='_blank' href={item}>{item}</a></h4>
                );
              })}
            </ItemContainer>
          </RowLight>
      </WrapperDetails>
    </div>
  );
}

const WrapperMain = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 2rem;

  img {
    max-width: 500px;
    max-height: 500px;
    border-radius: 1rem;
    margin-right: 2.5rem;
    object-fit: contain;
  }
`

const WrapperDetails = styled.div`
  margin-top: 3rem;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(35deg, #494949, #313131);
  /* background-color: #404040; */
  border-radius: 2rem;
  
  h2 {
    margin-bottom: 1rem;
  }
`

const Price = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #f27121, #e94057);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: fit-content;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
`

const RowDark = styled.div`
  padding: 1rem;
  background-color: #444;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background: linear-gradient(#494949, #494949) padding-box,
              linear-gradient(to right, #f27121, #e94057) border-box;
  border: 1px solid transparent;

  h3 {
    margin-left: 1rem;
    min-width: 5rem;
  }
`

const RowLight = styled.div`
  padding: 1rem;
  background-color: #555;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background: linear-gradient(#494949, #494949) padding-box,
              linear-gradient(to right, #f27121, #e94057) border-box;
  border: 1px solid transparent;

  h3 {
    margin-left: 1rem;
    min-width: 5rem;
  }
`

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
  margin: 0rem 2rem;

  h4 {
    line-height: 2.5rem
  }
`

export default Vinyl;