import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    // This is how to share implicit state
    return React.cloneElement(child, {
      on,
      toggle,
    })
  })
}

// Childrens does not have access to the Toggle component state here
const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleButton />
        <ToggleOff>The button is off</ToggleOff>
      </Toggle>
    </div>
  )
}

export default App
