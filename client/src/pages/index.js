import React from "react";
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
    let stateLanguageNavigate = "null";
    let stateLanguageDevices = "null";
    if (this.state.handleStateLanguage) {
      stateLanguageNavigate = JSONData.ru[0].navigate;
      stateLanguageDevices = JSONData.ru[1].devices;
    } else {
      stateLanguageNavigate = JSONData.en[0].navigate;
      stateLanguageDevices = JSONData.en[1].devices;
    }

    return (
      <div>
        <div>
          <Links navigate={stateLanguageNavigate} />
          <Layout>
            <button onClick={this.toggeleLanguage}>Language</button>
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
              <About 
                path="/about" 
                navigate={stateLanguageNavigate}
              ></About>
              <Support path="/support" 
                navigate={stateLanguageNavigate}
              ></Support>
              <NotFound path="*" 
                navigate={stateLanguageNavigate}
              ></NotFound>
            </Router>
          </Layout>
        </div>
      </div>
    )
  }
}
