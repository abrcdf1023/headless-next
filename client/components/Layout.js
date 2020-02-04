/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { withStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { children, classes } = this.props;
    const title = "Welcome to Nextjs";
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Link href="/">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="/signin">
              <Button color="inherit">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button color="inherit">Sign Up</Button>
            </Link>
            
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </div>
    );
  }
}

export default withStyles(styles, { name: 'Layout' })(Layout);