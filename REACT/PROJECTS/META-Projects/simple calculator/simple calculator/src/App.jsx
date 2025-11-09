import React from 'react'
import Display from './components/Display'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Display />
      <div>
        <Button num={1}/>
        <Button num={2}/>
        <Button num={3}/>
        <Button num={4}/>
        <Button num={5}/>
        <Button num={6}/>
        <Button num={7}/>
        <Button num={8}/>
        <Button num={9}/>
        <Button num={0}/>
      </div>
    </div>
  )
}

export default App