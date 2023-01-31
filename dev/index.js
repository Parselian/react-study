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

import App from "./App"


const root = reactDom.createRoot(document.getElementById('app')) // CreateRoot is a standard since React 18.0.0 version
root.render(
  <App/>
)

