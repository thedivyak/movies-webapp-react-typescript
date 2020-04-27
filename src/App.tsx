import * as React from 'react'
import NavBar from './components/Banners/Navigation'
import Search from "./components/Search/Search"
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Movie from "./components/Movie/Movie"
import Crew from "./components/Crew/Crew"
import Footer from "./components/Banners/Footer"
import {ThemeProvider} from "styled-components"
import {Content} from '../src/styles/SharedStyledComponents'

function App() {
  return (

      <Router>
        <ThemeProvider theme={{ mode: 'light'}}>
        <React.Fragment>
          <NavBar/>
          <Content>
            <Switch>
              <Route path="/movie/:id" component={Movie}/>
              <Route path="/crew/:id" component={Crew}/>
              <Route path="/search" component={Search}/>
              <Route path="/" render={() => {
              return <Redirect to="/search"/>}
            }/>
              }
            </Switch>
          </Content>
          <Footer/>
        </React.Fragment>
        </ThemeProvider>
      </Router>

  )
}

export default App

