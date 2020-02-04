import React, { Component } from "react";
import PropTypes from "prop-types";
import marked from "marked";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    lineHeight: "2.2rem",
    "& img": {
      margin: "20px 0",
      boxShadow:
        "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"
    },
    "& hr": {
      height: "1px",
      margin: 0,
      border: "none",
      flexShrink: 0,
      backgroundColor: "rgba(0, 0, 0, 0.12)"
    },
    "& a": theme.link,
    "& h1": theme.typography.h5,
    "& h2": theme.typography.h6,
    "& h3": {
      marginBottom: "0.35em",
      ...theme.typography.subtitle1,
      fontWeight: 500
    },
    "& .table-container": {
      overflowX: "scroll"
    },
    "& table": {
      display: "table",
      whiteSpace: "nowrap",
      width: "100%",
      borderCollapse: "collapse",
      borderSpacing: 0,
      // customize table style
      marginBottom: "30px"
    },
    "& tbody": {
      display: "table-row-group",
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular
    },
    "& thead": {
      display: "table-header-group",
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium
    },
    "& tfoot": {
      display: "table-footer-group",
      borderBottom: 0,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(14)
    },
    "& tr": {
      color: "inherit",
      display: "table-row",
      height: 48,
      verticalAlign: "middle",
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: "none"
    },
    "& td,th": {
      display: "table-cell",
      verticalAlign: "inherit",
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid rgba(224, 224, 224, 1)",
      textAlign: "left",
      padding: "4px 56px 4px 24px",
      "&:last-child": {
        paddingRight: 24
      }
    },
    // inner table style fixed
    "& table table tbody tr:last-child td": {
      borderBottom: 0
    },
    "& table table": {
      marginBottom: 0
    },
    "& table table td": {
      padding: 0
    }
  }
});

const renderer = new marked.Renderer();

renderer.table = (header, body) => {
  return `
    <div class="table-container">
      <table>
        <thead>${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
};

renderer.image = (href, title, text) => {
  return `<img src="http://localhost:1337/${href}" alt="${text}">`;
};

const markedOptions = {
  renderer,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
};

class MarkdownElement extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  render() {
    const { classes, className, text, ...other } = this.props;
    return (
      <div
        ref={this.containerRef}
        className={clsx(classes.root, "markdown-body", className)}
        dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
        {...other}
      />
    );
  }
}

export default withStyles(styles, { flip: false })(MarkdownElement);
