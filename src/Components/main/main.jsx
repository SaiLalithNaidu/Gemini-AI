import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';
import Dropdown from '../Dropdown/Dropdown';



const Main = () => {
    const {
        prevPrompt, setPrevPrompt, onSent, setRecentPrompt,
        recentPrompt, showResult, loading, resultData, input, setInput
    } = useContext(Context);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSent(input);
        }
    };

    const handleCardClick = (prompt) => {
        setRecentPrompt(prompt);
        setInput(prompt);
        onSent(prompt);
    };
    
    return (
        <div className="main">
            <ToastContainer />
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                {!showResult ? 
                <>
                    <div className="greet">
                        <p><span>Hello, Sai Lalith.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="Compass Icon" />
                        </div>
                        <div className="card" onClick={() => handleCardClick("Briefly summarize this concept: urban planning")}>
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="Bulb Icon" />
                        </div>
                        <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}>
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="Message Icon" />
                        </div>
                        <div className="card" onClick={() => handleCardClick("Improve the readability of the following code")}>
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="Code Icon" />
                        </div>
                    </div>
                </> 
                : 
                <div className='result'>
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="User Icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini Icon" />
                            {loading ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{__html: resultData}}></p>}
                        </div>
                    </div>
                </div>}
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="search"
                            placeholder='Enter a prompt here'
                            onKeyPress={handleKeyPress}
                        />
                        <div className="icon-container">
                            <img onClick={() => toast.info("Gallery icon clicked!")} src={assets.gallery_icon} alt="Gallery Icon" />
                            <img onClick={() => toast.info("Mic icon clicked!")} src={assets.mic_icon} alt="Mic Icon" />
                            {input ? <img onClick={() => onSent(input)} src={assets.send_icon} alt="Send Icon" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
