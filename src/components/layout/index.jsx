import React, { Component, Fragment } from 'react'
import Header from '../Header/Header'
// import SidebarRow from '../sidebar/SidebarRow'
import Home from '../Home/Home'



export class Layout extends Component {
  render() {
    return (
      <Fragment>
          <Header />
          <main>
            <Home />
          </main>
      </Fragment>
    )
  }
}

export default Layout