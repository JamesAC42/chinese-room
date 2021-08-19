import React, { Component } from "react";

import buttonSmall from "../images/button small.png";
import buttonMedium from "../images/button medium.png";
import buttonLarge from "../images/button large.png";
import buttonBgSmall from "../images/button small background.png";
import buttonBgMedium from "../images/button medium background.png";
import buttonBgLarge from "../images/button large background.png";

class ChatButton extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        pressed: false,
      };
    }
  
    getImage() {
      if (this.props.message.length < 5) {
        return {
          fg: buttonSmall,
          bg: buttonBgSmall,
          className: 'small'
        };
      } else if (this.props.message.length < 10) {
        return {
          fg: buttonMedium,
          bg: buttonBgMedium,
          className: 'medium'
        };
      } else {
        return {
          fg: buttonLarge,
          bg: buttonBgLarge,
          className: 'large'
        };
      }
    }
    press() {
      this.setState({ pressed: true });
    }
    release() {
      this.setState({ pressed: false });
    }
    render() {
      const { fg, bg, className } = this.getImage();
      let pressed = this.state.pressed ? "pressed" : "";
      let focused = this.props.message === this.props.focusMessage ? "focus" : "";
      return (
        <div
          class={`input-button ${pressed} ${focused} ${className}`}
          onMouseDown={() => this.press()}
          onMouseUp={() => this.release()}
          onClick={() => this.props.onClick(this.props.message)}
        >
          <div class={`input-foreground`}>
            <img src={fg} alt="" />
          </div>
          <div class="input-background">
            <img src={bg} alt="" />
          </div>
          <div class={`input-text`}>{this.props.message}</div>
        </div>
      );
    }
  }

  export default ChatButton;