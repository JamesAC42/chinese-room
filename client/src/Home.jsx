import React, {Component} from "react";

import "./css/home.scss";

import {BsFillPlayFill} from 'react-icons/bs';
import {FaBrain} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';

import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
        return(
            <>
            <div className="article-container">
                <div className="article-inner">
                    <div className="home-header">
                        <h1>
                            <FaBrain style={{verticalAlign:"middle"}} />
                            The Chinese Room: An Interactive Demonstration
                            <FaBrain style={{verticalAlign:"middle"}} />
                        </h1>
                        <h3>James Crovo</h3>
                        <h4>Cognitive Science Final Project 2021</h4>

                        <div 
                            className="link-outer"
                            title="View Repo">
                            <a href="https://github.com/JamesAC42/chinese-room">
                                <AiOutlineGithub style={{verticalAlign:"middle"}}/>
                            </a>
                        </div>
                    </div>
                    <div className="article-body">
                        <p>
                        What is consciousness? This simple question has plagued philosophers for millennia. Despite the many advances made in fields such as neuroscience, psychology, and computer science within the past century, the answer still eludes us to this day. However, solving this puzzle is crucial for the creation of a true human level artificial intelligence. In pursuing this endeavor, the eclectic nature of cognitive science makes its mark, combining the efforts of philosophy, neuroscience, psychology, linguistics, computer science, robotics, and more, so that we may gain a fuller understanding of what cognition really is.
                        </p>
                        <p>
                        The nature of consciousness and the question of whether it can manifest within a program has gone hand in hand with the development of increasingly advanced computational methods. Alan Turing, a pioneer of computer science, proposed a semi-serious methodology to test whether a program exhibits human level intelligence. The test goes as follows: If a computer program can fool a human via chat into thinking that they are communicating with another human, then the program is conscious, or at least possesses a level of intelligence comparable to a human. [1]
                        </p>
                        <p>
                        As we have seen through technological advancements in AI such as Siri, Alexa, and language models such as GPT-3, sufficiently advanced artificial intelligence programs may seem to have some level of consciousness. However, under the hood of this complex computation, are they truly comparable to what human beings perform when engaging with the environment? Philosopher John Searle thinks not. His theory of mind proposes that the human brain is the key to housing the conscious awareness and purely responsible for the agency and intentionality that any program would necessarily lack. To refute the notion that programs can be conscious, he devised a thought experiment called the Chinese Room Argument. It goes as follows:
                        </p>
                        <p>
                        Imagine an English speaker who does not know any Chinese, locked in a room filled with boxes of Chinese symbols and a rule book on how to manipulate these symbols. Outside the room, unsuspecting people send in Chinese symbols as input expecting a response from the room in Chinese. The rule book provided to the person in the room allows them to manipulate the perfect response in Chinese without requiring actual knowledge of the language. They then send this response back out. The people outside the room have no idea that the person inside the room does not understand the conversation, yet they engage nonetheless. If the room were a computer program, this program would pass the Turing Test. [2]
                        </p>
                        <p>
                        With this argument, Searle offers a compelling point against the validity of Turing's initial test for consciousness. In addition, Searle's overall conclusion is certainly polarizing in that he claims that no program, no matter how advanced, can ever possibly fully emulate human consciousness. To achieve awareness, the program would have to work in tandem with a machine that can emulate the unique chemical makeup and processes that the human brain executes. Like the man in the room, a program can merely manipulate symbols with no fundamental understanding of the actual meaning behind these symbols. It cannot generate unique thoughts of its own free will, it cannot experience emotions, it cannot have desires or aspirations, or feel guilt or shame, all of which are intrinsic properties of being a human being. Syntax does not equal semantics, and the brain is doing much more than simply processing heaps of data in response to stimuli.
                        </p>
                        <p>
                        Scientists, researchers, and philosophers alike yearn to understand what makes the human mind unique. Countless theories of mind have been proposed and debated throughout history. While Searle may make some compelling points, his ideas are certainly not the scientific consensus. In fact, there is no scientific consensus at all. Perhaps the beauty of the field of cognitive science is the culmination of various specialties from all parts of the world towards one collective goal. As humanity strives to improve our understanding of what consciousness really is, new advances in technology and neuroscience are being made constantly, improving the lives of many.
                        </p>
                        <p>
                        To get a better feel for what it would be like to be the person inside the Chinese room, click the button below labeled "Continue to Game".
                        </p>
                        <div className="game-link">
                            <Link to="/chineseroom/play/" className="game-link-button">
                                Continue to Game
                                <BsFillPlayFill style={{verticalAlign:"middle"}}/>
                            </Link>
                        </div>
                    </div>
                    <div className="bibliography">
                        <h3>Bibliography</h3>
                        <div className="citation">
                            <li>
                        [1] Cole, David, "The Chinese Room Argument", The Stanford Encyclopedia of Philosophy (Winter 2020 Edition), Edward N. Zalta (ed.), <a href="https://plato.stanford.edu/archives/win2020/entries/chinese-room">Link</a> 
                            </li>
                        </div>
                        <div className="citation">
                            <li>
                        [2] Searle, J., 1980, ‘Minds, Brains and Programs’, Behavioral and Brain Sciences, 3: 417–57 <a href="http://cogprints.org/7150/1/10.1.1.83.5248.pdf">Online PDF</a>
                            </li>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="stripe"></div>
            </>
        )
    }

}

export default Home;