import React from "react"
import { Link } from "gatsby"
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
import JSONData_ru from "../../content/locales/ru/translation_ru.json"
import JSONData_en from "../../content/locales/en/translation_en.json"
import { Button } from "@material-ui/core"

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
      solution,
      notFound = null

    if (this.state.language) {
      navigate = JSONData_ru.ru[0].navigate
      devices = JSONData_ru.ru[1].devices
      solution = JSONData_ru.ru[1].solution
      notFound = JSONData_ru.ru[2].notfound
    } else {
      navigate = JSONData_en.en[0].navigate
      devices = JSONData_en.en[1].devices
      solution = JSONData_en.en[1].solution
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
            <div className="App__header_logo">PROFITT</div>
            <div className="App__header_langBtn">
              <Button className="btn__lang" onClick={this.toggeleLanguage}>
                {this.state.language ? <>Rus</> : <>Eng</>}
              </Button>
            </div>
          </header>
          <div className="App__content">
          <Layout>
            {/* <Link to="/">Home</Link> */}
            <Router basepath="/app">
              <Production path="/" devices={devices} />
              <Solution path="/solution" solution={solution}>
                <Solution path=":solutionId" solution={solution}/>
              </Solution>
              <Catalog path="/catalog" />
              <About path="/about" navigate={navigate} />
              <Support path="/support" />
              <NotFound path="*" notfound={notFound} />
            </Router>
          </Layout>
          </div>
        </div>
      </div>
    )
  }
}
