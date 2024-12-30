import React from 'react';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import './ContactBody.css';




function ContactBody() {

    const [borColor, setBorColor] = useState('');
    // change border color of input fields for name
    function borderChange() {
        return setBorColor('2px solid #d4a665');
    }

    const [borColor2, setBorColor2] = useState('');
    // change border color of input fields for email
    function borderChange2() {
        return setBorColor2('2px solid #d4a665');
    }


    // BG color would be change when click in textarea, when click outside it will reset
    const [bgColor, setbgColor] = useState(false);
    const textAreaRef = useRef(null);



    function changeBGColor() {
        return setbgColor(true)

    }

    useEffect(() => {
        // This function will check if the click is outside the textarea
        function handleClickOutside(event) {
            if (textAreaRef.current && !textAreaRef.current.contains(event.target)) {
                setbgColor(false);  // Reset background color to default (white)
            }
        }

        // Add event listener to the window
        window.addEventListener('click', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []); 


    const [bgColorSelect, setbgColorselect] = useState(false);

    function changeBGColorSelect() {
        return setbgColorselect(true) 
    }

    const selectArea = useRef(null)
    useEffect(() => {
        // This function will check if the click is outside the textarea
        function handleClickOutside(event) {
            if (selectArea.current && !selectArea.current.contains(event.target)) {
                setbgColorselect(false);  // Reset background color to default (white)
            }
        }

        // Add event listener to the window
        window.addEventListener('click', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []); 



  return (
    <>
        <section className="contactBody">
            <div className="contactBodyMain">
                <div className="contactBodyContent">
                    <h5>CONTACT ME</h5>
                    <h2>Let's talk about <br /> your dream <br /> project</h2>
                    <p>Don't hesitate to contact me because it's free to chat and talk about your ideas. I'm always open for freelance work and can give you an accurate quote and timeline based off the scope of work you're looking to get designed. </p>
                </div>
                <div className="contactForm">
                    <form className='submitForm' action="">
                        <div className="fields">
                            <input type="text" onClick={borderChange} placeholder='Name' style={{border: borColor}}/>
                        </div>
                        <div className="fields">
                            <input type="email" onClick={borderChange2} placeholder='Email' style={{border: borColor2}}/>
                        </div>
                        <div className="fields">
                            <select name="" id="" ref={selectArea} onClick={changeBGColorSelect} style={{backgroundColor: bgColorSelect ? '#d4a665' : 'white' }}>
                                <option value="branding">Branding</option>
                                <option value="webDesigning">Web Design</option>
                                <option value="socialMedia">Social Media</option>
                                <option value="mixWork">A Mix of Work</option>
                            </select>
                        </div>
                        <div className="fields">
                            <textarea ref={textAreaRef} name="" id="" placeholder="Type your message here ..." rows="4" onClick={changeBGColor} style={{backgroundColor: bgColor ? '#d4a665' : 'white' }}></textarea>
                        </div>
                        <div className="contactBtn">
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactBody;