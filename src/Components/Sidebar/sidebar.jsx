// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompt,setRecentPrompt,setShowResult,setPrompt,resetPrompts } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    const newChat = () =>{
        resetPrompts(); 
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick ={ () => setExtended( prev => !prev)}className='menue' src={assets.menu_icon} alt="menu icon"/>
                <div className="new-chat">
                    <img src={assets.plus_icon} onClick={newChat} alt="" />
                    {extended ? <p onClick={newChat}>New chat</p> : null}
                </div>
                {extended ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item,index)=>{
                            return (
                                <div onClick={()=>loadPrompt(item)} key={item} className='recent-entry'>
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react</p>
                        </div>
                    </div> 
                : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
