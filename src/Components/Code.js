import React, { useState, useEffect } from 'react'
import setupText from './Code/setupText'
import setupLinesArray from './Code/setupLinesArray'

export default function Code() {
    const [text] = useState(`function mostFrequentDays(year) {
        \xa0 \xa0 \xa0 \xa0var days = [
        \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0new Date(year, 0, 1).getDay(),
        \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0new Date(year, 11, 31).getDay()
        \xa0 \xa0 \xa0 \xa0];

        \xa0 \xa0 \xa0 \xa0if (days[0] === days[1]) {
        \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0days.pop();
        \xa0 \xa0 \xa0 \xa0} else if (!days[0] || days[0] > days[1] && days[1]) {
        \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0days.reverse();
        \xa0 \xa0 \xa0 \xa0}

        \xa0 \xa0 \xa0 \xa0return days.map(n => ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][n] + 'day');\n}`
        )
    const [newText, setNewText] = useState()
    const [typing, setTyping] = useState(false)
    
    useEffect(() => {
        const linesArray = setupLinesArray(text)
        setNewText(setupText(linesArray))
    }, [text])

    function handleKeyPress(e) {
        console.log(e.key)
    }

    function startTyping(e) {
        e.preventDefault()
        setTyping(true)
    }

    return (
        <>
            <div className='place-content-center w-2/3 m-auto mt-32 bg-gray-700' onKeyDown={e => handleKeyPress(e)} tabIndex="0">
                {newText}
            </div>
            {!typing &&
                <button className='place-content-center w-2/3 m-auto' onClick={e => startTyping(e)}>Start typing</button>
            }
        </>
    )
}
