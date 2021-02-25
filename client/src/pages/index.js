import React from "react";
import {
  Layout,
  Production,
  Solution,
  About,
  Support,
  NotFound,
  // Header,
  Links,
} from "../components"

import { Router } from "@reach/router"

import JSONData from "../../content/locales/translation.json"

export default class Index extends React.Component {
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
    let stateLanguage = "null"
    let stateLanguageDevices = "null"
    if (this.state.handleStateLanguage) {
      stateLanguage = JSONData.ru[0]
      stateLanguageDevices = JSONData.ru[1].devices
    } else {
      stateLanguage = JSONData.en[0]
      stateLanguageDevices = JSONData.en[1].devices
    }
    console.log(stateLanguage)
    return (
      <div>
        <div>
          <Links lang={stateLanguage} />
          <Layout>
            <button onClick={this.toggeleLanguage}>Language</button>
            <Router>
              <Production path="/" lang={stateLanguage} devices={stateLanguageDevices}></Production>
              <Solution path="/solution" lang={stateLanguage}></Solution>
              <About path="/about" lang={stateLanguage}></About>
              <Support path="/support" lang={stateLanguage}></Support>
              <NotFound path="*" lang={stateLanguage}></NotFound>
            </Router>
          </Layout>
        </div>
      </div>
    )
  }
}
