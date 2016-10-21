import React from "react";
import Radium from "radium";
// import Flex from "./framework/flex";
import globalStyles from "../../globalStyles";

@Radium
class HeaderFont extends React.Component {

  static propTypes = {
    /* react */

    style: React.PropTypes.object,
    size: React.PropTypes.string
  }
  static defaultProps = {
    size: "small"
  }
  getStyles() {
    return {
      base: {
        fontFamily: globalStyles.sans,
        fontSize: this.props.size === "large" ? 76 : 28,
        lineHeight: "68px",
        letterSpacing: -1.8,
        margin: 0
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <span style={[
        styles.base,
        this.props.style
      ]}>{this.props.children}</span>
    );
  }
}

export default HeaderFont;