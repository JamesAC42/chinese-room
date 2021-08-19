import React, { Component } from "react";

import chatSmall from "../images/chat small.png";
import chatMedium from "../images/chat medium.png";
import chatLarge from "../images/chat large.png";

import ChatButton from './ChatButton';
import { phrases } from "./phrases";

class Chat extends Component {
  bottom;
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }
  addMessage(message) { 
    this.props.addMessage(message);
    if(this.bottom.current) {
      setTimeout(() => {
        this.bottom.current.scrollIntoView();
      }, 200);
    }
  }
  render() {
    return (
      <div class="context-wrapper">
        <div class="prompt">
          Messages
          {
            this.props.currentMessage % 2 === 0 ?
            <div className="your-turn">
              Your Turn
            </div> : null
          }  
        </div>
        <div class="chatlog">
          {
            this.props.chatlog.map((message, index) => 
              <div class="chatlog-row">
                <div class={`chat-bubble ${index % 2 === 0 ? "receiver" : "sender"}`}>
                  <img src={chatLarge} alt="" />
                  <div class="chat-bubble-message">{message}</div>
                </div>
              </div>
            )
          }
          <div className="bottom" ref={this.bottom}></div>
        </div>
        <div class="input-wrapper">
          {phrases.map((message) => (
            <ChatButton 
              message={message} 
              focusMessage={this.props.focusMessage}
              onClick={(message) => this.addMessage(message)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Chat;
