import React from 'react'
import App from "../app/App"

import "../assets/style.scss"

export default function index() {
  return(
    <App />
  )
}


/*
import React from "react"
import {
  Layout,
  Production,
  Solution,
  Catalog,
  About,
  Support,
  NotFound,
  Links,
} from "../components"
import { Router } from "@reach/router"
import JSONData from "../../content/locales/translation.json"


export default class App extends React.Component {
  state = {
    handleStateLanguage: true,
  }

  toggeleLanguage = () => {
    this.setState(prevState => {
      return {
        handleStateLanguage: !prevState.handleStateLanguage,
      }
    })
  }

  render() {
    let stateLanguageNavigate = "null"
    let stateLanguageDevices = "null"
    let stateLanguageNotFound = "null"
    if (this.state.handleStateLanguage) {
      stateLanguageNavigate = JSONData.ru[0].navigate
      stateLanguageDevices = JSONData.ru[1].devices
      stateLanguageNotFound = JSONData.ru[2].notfound
    } else {
      stateLanguageNavigate = JSONData.en[0].navigate
      stateLanguageDevices = JSONData.en[1].devices
      stateLanguageNotFound = JSONData.en[2].notfound
    }

    return (
      <div>
        <div>
          <div className="wrapper">
            <Links navigate={stateLanguageNavigate} />
            <button onClick={this.toggeleLanguage}>Language</button>
          </div>
          <Layout>
            <Router>
              <Production
                path="/"
                navigate={stateLanguageNavigate}
                devices={stateLanguageDevices}
              ></Production>
              <Solution
                path="/solution"
                navigate={stateLanguageNavigate}
              ></Solution>
              <Catalog
                path="/catalog"
                navigate={stateLanguageNavigate}
              ></Catalog>
              <About path="/about" navigate={stateLanguageNavigate}></About>
              <Support
                path="/support"
                navigate={stateLanguageNavigate}
              ></Support>
              <NotFound path="*" notfound={stateLanguageNotFound}></NotFound>
            </Router>
          </Layout>
        </div>
      </div>
    )
  }
}

*/
   