import React from "react"
import { Layout, Production, Solution, Catalog, About, Support, NotFound, Links, Navigate } from "../components"
import { Router } from "@reach/router"
import JSONData_ru from "../../content/locales/ru/translation_ru.json"
import JSONData_en from "../../content/locales/en/translation_en.json"

export default class App extends React.Component {
  state = { language: true }
  toggeleLanguage = () => {
    this.setState(prevState => {
      return { language: !prevState.language }
    })
  }
  render() {

    let navigate, devices, notFound = null

    if (this.state.language) {
      navigate = JSONData_ru.ru[0].navigate
      devices = JSONData_ru.ru[1].devices
      notFound = JSONData_ru.ru[2].notfound
    } else {
      navigate = JSONData_en.en[0].navigate
      devices = JSONData_en.en[1].devices
      notFound = JSONData_en.en[2].notfound
    }
    return (
      <div>
        <div className="App">
          <header className="App__header">
            <div className="App__header_mob">
              <Navigate navigate={navigate} />
            </div>
            <div className="App__header_desk">
              <div>
                <Links navigate={navigate} />
              </div>
            </div>
            <div className="App__logo">PROFITT</div>
            <button className="btn_lang" onClick={this.toggeleLanguage}>
              {this.state.language ? <>RU</> : <>EN</>}
            </button>
          </header>
          <Layout>
            <Router>
              <Production path="/" devices={devices} />
              <Solution path="/solution" />
              <Catalog path="/catalog" />
              <About path="/about" navigate={navigate} />
              <Support path="/support" />
              <NotFound path="*" notfound={notFound} />
            </Router>
          </Layout>
        </div>
      </div>
    )
  }
}