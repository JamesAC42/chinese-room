import React, {Component} from "react";

import '../css/play.scss';

import Rulebook from './Rulebook';
import Chat from './Chat';

import { sequence } from './sequence';

import {Link} from 'react-router-dom';

import {
    IoIosCloseCircle
} from 'react-icons/io';
import { 
    BiUndo,
    BiHomeAlt
} from 'react-icons/bi';
import {
    FaBook
} from 'react-icons/fa';

class Play extends Component {

    constructor(props) {
        super(props);

        this.state = {
            focusMessage: '',
            showIntroMessage: true,
            showFailMessage: false,
            showWinMessage: false,
            
            chatlog: [sequence[0]],
            currentMessage: 0,

            disableInput: false,

            showRuleBook: false
        }
    }
    restart() {
        this.setState({
            chatlog:[sequence[0]],
            currentMessage: 0,
            showIntroMessage: false,
            showFailMessage: false,
            showWinMessage: false,
            disableInput: false
        })
    }
    toggleShowRuleBook() {
        this.setState({showRuleBook:!this.state.showRuleBook});
    }
    addMessage(message) {
        if(this.state.disableInput) return;
        let current = this.state.currentMessage;
        let chatlog = [...this.state.chatlog];
        chatlog.push(message);
        this.setState({
            chatlog,
            disableInput: true,
            currentMessage: current + 1
        }, () => {
            let tempChat = [...chatlog, "..."];
            setTimeout(() => {
            this.setState({
                chatlog:tempChat
            }, () => {
                setTimeout(() => {

                if(message !== sequence[current + 1]) {
                    this.setState({showFailMessage:true});
                    return;
                } else {
                    current += 2;
                    chatlog.push(sequence[current]);
                    this.setState({
                        chatlog,
                        currentMessage:current,
                        disableInput:false
                    });
                    if(current === 8) {
                        setTimeout(() => {
                        this.setState({ 
                            showWinMessage:true
                        })
                        }, 1000)
                    }
                } 

                }, 2000)
            })
            }, 800);
        });
    }
    updateFocusMessage(message) {
        this.setState({focusMessage: message});
    }
    closeModal(m) {
        this.setState({
            ...this.state,
            [m]: false
        });
    }
    render() {
        return(
            <div class="container">

                <Link to="/chineseroom/" className="home">
                    Back to Intro
                </Link>

                <div 
                    className="toggle-rulebook"
                    title="Toggle Rulebook"
                    onClick={() => this.toggleShowRuleBook()}>
                    <FaBook />
                </div>

                {
                    this.state.showIntroMessage ? 
                    <div className="modal-outer">
                        <div className="modal intro">
                            <div className="modal-header">
                                How to Play
                            </div>
                            <div className="modal-body">
                                You are a test subject stuck inside a box that your captors call the "Chinese Room". Your task is to interact with a Chinese person outside of the box via text messages and convince them that you are capable of speaking Chinese at a native level. Don't worry, you don't actually need to learn Chinese. Instead, use the 100% comprehensive rulebook that has been provided to you in order to determine what the appropriate response is. It tells you exactly what to say based on the message that your penpal has sent you. Use the arrow buttons on the bottom of the pages to flip through the book. Use the conversation buttons beneath the chat log to send a message. Hovering over the text on the response page of the rulebook will highlight the matching button on the control panel to make it easier to find. Sending an incorrect response will reveal that you don't in fact know what you're saying, and you will fail the mission. Good luck!
                            </div>

                            <div 
                                className="close-modal"
                                onClick={() => this.closeModal("showIntroMessage")}>
                                <IoIosCloseCircle />
                            </div>
                        </div>
                    </div> : null
                }
                {
                    this.state.showFailMessage ?
                    <div className="modal-outer">
                        <div className="modal fail">
                            <div className="modal-header">
                                You Lose...
                            </div>
                            <div className="modal-body">
                                You sent something that didn't really make any sense, given the context. The tester realized you are merely an automaton, a husk of a consciousness. Fail.
                            </div>

                            <div className="buttons">
                                <div 
                                    className="restart-button"
                                    onClick={() => this.restart()}>
                                    RESTART
                                    <BiUndo style={{verticalAlign:"middle"}}/>
                                </div>
                                <Link to="/chineseroom/" className="back-home">
                                    HOME
                                    <BiHomeAlt style={{verticalAlign:"middle"}}/>
                                </Link>
                            </div>

                        </div>
                    </div> : null
                }
                {
                    this.state.showWinMessage ?
                    <div className="modal-outer">
                        <div className="modal win">
                            <div className="modal-header">
                                Good Job!
                            </div>
                            <div className="modal-body">
                                Nice! You just had a full, coherent conversation in Chinese without even knowing the language. The person outside is none the wiser. Clearly, the setup here - you, the rulebook, and the buttons - are no different than a real native Chinese person engaging in thought, experience, and emotion. Or maybe this is silly to think, as Searle himself posits.  There seems to be something lacking here that would make this a truly intelligent and conscious system. The question is, what is this missing element? What makes this routine, ignoring speed, different from what goes on inside your brain when you speak to a friend?
                            </div>

                            <div className="buttons">
                                <div 
                                    className="restart-button"
                                    onClick={() => this.restart()}>
                                    RESTART
                                    <BiUndo style={{verticalAlign:"middle"}}/>
                                </div>
                                <Link to="/chineseroom/" className="back-home">
                                    HOME
                                    <BiHomeAlt style={{verticalAlign:"middle"}}/>
                                </Link>
                            </div>
                            
                        </div>
                    </div> : null
                }


                <Rulebook 
                    visible={this.state.showRuleBook}
                    updateFocusMessage={(message) => this.updateFocusMessage(message)}/>
                <Chat 
                    chatlog={this.state.chatlog}
                    currentMessage={this.state.currentMessage}
                    focusMessage={this.state.focusMessage}
                    toggle
                    addMessage={(message) => this.addMessage(message)}/>
            </div>
        )
    }

}

export default Play;