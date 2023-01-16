import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {
  const [input, setInput] = useState('');

  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    let url = '/catalog';
    let params = [];
    if (input.trim()) {
      params.push(`query=${input.trim().replaceAll(' ', '+')}`);
    }
    if (params.length > 0) {
      url += '?'
      let i = 0;
      url += params[i];
      i++;
      while (i < params.length) {
        url += `&${params[i]}`;
        i++;
      }
    }
    navigate(url);
  };

  return (
    <FormStyle onSubmit={ submit }>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" value={ input } placeholder="Search"/>
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 3rem 6rem 6rem 6rem;
    position: relative;

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #ffffff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #ffffff;
    }
`

export default Search