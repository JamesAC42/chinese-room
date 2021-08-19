import React, {Component} from 'react';

import {rules} from './rules';

import arrowRight from '../images/arrow right.png';
import arrowLeft from '../images/arrow left.png';
import book from '../images/book.png';

class RulebookState {
    constructor() {
        this.currentPage = 0;
    }
}

class Rulebook extends Component {
    constructor(props) {
        super(props);
        this.state = new RulebookState();
    }
    /**
     * Turns the page.
     * direction: Direction to move the page, -1 or 1
     */ 
    turnPage(direction) {
        let nextPage = (this.state.currentPage + direction) % rules.length;
        if(nextPage < 0) nextPage = rules.length - 1;
        this.setState({currentPage: nextPage});
    }
    render() {
        return(
            <div class={`rulebook-outer ${this.props.visible ? "book-visible" : ""}`}>
                <div class="rulebook-text">
                    <div class="rulebook-text-page">
                        <div class="rulebook-text-header">
                            If you see:
                        </div>
                        <div class="rulebook-text-body">
                            {
                                rules[this.state.currentPage].prompt
                            }
                        </div>
                    </div>
                    <div class="rulebook-text-page">
                        <div class="rulebook-text-header">
                            Respond with:
                        </div>
                        <div 
                            class="rulebook-text-body body-response"
                            onMouseEnter={() => this.props.updateFocusMessage(rules[this.state.currentPage].response)}
                            onMouseLeave={() => this.props.updateFocusMessage("")}>
                            {
                                rules[this.state.currentPage].response
                            }
                        </div>
                    </div>
                    {
                        this.state.currentPage !== 0 ?
                        <div 
                            class="page-nav left"
                            onClick={() => this.turnPage(-1)}>
                            <img src={arrowLeft} alt="arrow left"/>
                        </div> : null
                    }
                    {
                        this.state.currentPage < rules.length - 1 ?
                        <div 
                            class="page-nav right"
                            onClick={() => this.turnPage(1)}>
                            <img src={arrowRight} alt="arrow right"/>
                        </div> : null
                    }
                </div>
                <img class="bookimg" src={book} alt="book" />
            </div>
        )
    }
}

export default Rulebook;