import React from 'react'
import * as reactDom from 'react-dom/client'

/* JSX разметка
  <div>
    <h1 className="title">Title</h1>
    <hr/>
    <div className="text" onClick={}>Text</div>
  </div>
* */

/* , которая компилируется в след. React код:
* React.createElement('div', {}, [
*   React.createElement('h1', {className: 'title'}, ['Title'])
*   React.createElement('hr', {}, [])
*   React.createElement('div', {className: 'text', onClick: {}}, ['Text'])
* ])
* */

import UserCard from "./UserCard";
import CounterClass from "./CounterClass";
import CounterFn from "./CounterFn"

const root = reactDom.createRoot(document.getElementById('app')) // CreateRoot is a standard since React 18.0.0 version
root.render(
  <>
    <h1>Hello, world</h1>
    <hr/>
      <h2>Class counter min=2 max=7</h2>
    <CounterClass min={2} max={7}/>
      <h2>Class counter min=-100 max=4</h2>
    <CounterClass min={-100} max={4}/>
    <hr/>
      <h2>Function counter min=1 max=6</h2>
    <CounterFn min={1} max={6}/>
    <hr/>
    <UserCard name="Alex" age="20" profession="merchant"/>
    <UserCard name="Bob" age="41" profession="clerk"/>
    <UserCard name="Sara" age="27" profession="Medic"/>
  </>
)

