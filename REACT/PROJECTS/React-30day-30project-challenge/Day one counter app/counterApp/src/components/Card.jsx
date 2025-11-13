import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Num from './Num';
import { useState } from 'react';

const Card = () => {

    const [count,setCount] = useState(0);
    function handleClick(arg){
      setCount((prev) => arg === '+' ? prev + 1 : prev - 1)
    }

  return (
    <StyledWrapper>
      <div className="card" >
        
      <div className='w-screen h-screen bg-blue-950' >
      <div className='w-screen flex justify-center m-auto '>
        <Num  count={count}/>
      </div>
      <div className='flex justify-center align-middle text-blue-100 text-6xl pt-10 w-12/12'>
      <Button  onSlect={()=>handleClick('+')}>+</Button>
      <Button onSlect={()=>handleClick('-')}>-</Button>
      </div>
    </div>


      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }`;

export default Card;
