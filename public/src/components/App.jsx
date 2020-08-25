import React from "react";
import NavBar from './NavBar'
import Notifications from './Notifications'
import Search from './Search'
import Entries from './Entries'
import Overview from './Overview'
import { Grid } from '@material-ui/core/';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const { classes } = this.props
    return (<div>
      <div>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <Notifications />
        </Grid>
        <Grid item xs={12} sm={12} md={5} >
          <Search />
        </Grid>
        <Grid item xs={12} sm={12} md={7} >
          <Entries />
        </Grid>
        <Grid item xs={12} sm={12} md={5} >
          <Overview />
        </Grid>
      </Grid>
      </div>

    </div>)
  }
}

export default App;