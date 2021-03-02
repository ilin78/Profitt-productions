import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer, List } from "@material-ui/core/"
import Links from "../Links"

export default function Navigate(props) {
  const [state, setState] = React.useState({
    top: false,
  })
  const toggleDrawer = (anchor, open) => event => {
    setState({ ...state, [anchor]: open })
  }
  const list = anchor => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul>
          <Links navigate={props.navigate} />
        </ul>
      </List>
    </div>
  )

  return (
    <div>
      <div>
        {["top"].map(anchor => (
          <React.Fragment key={anchor}>
            <MenuIcon onClick={toggleDrawer(anchor, true)} /> {/* true */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <div className="App__header_mob-list">
              {list(anchor)}
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
