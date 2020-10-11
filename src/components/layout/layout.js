import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../navigation/toolbar/toolbar';
import SideDrawer from '../navigation/side-drawer/side-drawer';
import classes from './layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;