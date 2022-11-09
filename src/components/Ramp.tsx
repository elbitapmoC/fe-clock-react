import React from 'react'
import Clock from './Clock'
const Ramp = ({ input }: any) => {

  function setComponent() {
    if (!input) {
      return <Clock />
    }
    else if (Array.isArray(input)) {
      return input.map((el, idx) => {
        return <aside key={idx}>{el}</aside>
      });
    }
    else {
      return <>{input}</>
    }
  }

  return (
    <span className="text-4xl font-light">{setComponent()}</span>
  )
}

export default Ramp