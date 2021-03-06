import React, { Component } from 'react'

// Asets & styles
import logo from './logo.svg'
import './App.css'

// Components
import Widget from './Widget'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>{'image-gallery'}</code> demo app
          </p>
          <a
            className="App-link"
            href="https://github.com/sombreroEnPuntas/image-gallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Check the code on github!'}
          </a>
        </header>

        <Widget />
      </div>
    )
  }
}

export default App
