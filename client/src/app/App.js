import React from "react"
import { Layout, Links, Navigate } from "../components"
import {
  Production,
  Solution,
  Catalog,
  About,
  Support,
  NotFound,
} from "../modules"
import { Router } from "@reach/router"
import Switch from "@material-ui/core/Switch"
import JSONData_ru from "../../content/locales/ru/translation_ru.json"
import JSONData_en from "../../content/locales/en/translation_en.json"

export default class App extends React.Component {
  state = {
    language: true,
  }

  toggeleLanguage = () => {
    this.setState(prevState => {
      return { language: !prevState.language }
    })
  }
  render() {
    let navigate,
      devices,
      notFound = null

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
            <div>
              {this.state.language ? <>Rus</> : <>Eng</>}
              <Switch
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                size="small"
                checked={this.state.language}
                name="checkedC"
                onChange={this.toggeleLanguage}
              ></Switch>
            </div>
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
