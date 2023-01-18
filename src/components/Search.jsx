import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';



function Search() {
  const [input, setInput] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const previousSearch = (query) => {
      if (query) {
        query = query.replaceAll('+', ' ');
        query = query.replaceAll('%20', ' ');
        setInput(query);
      }
    };
    previousSearch(searchParams.get('query'));
  }, [searchParams]);

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
    min-width: 20rem;
    max-width: 50rem;
    margin: 6rem auto;
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