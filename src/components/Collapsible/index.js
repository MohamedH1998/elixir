import React, {useState, useRef} from 'react'

import './Collapsible.css'
const Collapsible = ({id,label, children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const parentRef = useRef()
    if (parentRef.current) console.log(parentRef)
    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}><i className="collapsible-id">{id}.</i>{label}</button>
           <div className="content-parent" ref={parentRef}
           style={isOpen ? {
               height: parentRef.current.scrollHeight + "px"
           } : {
               height: "0px"
           }}
           >
           <div className="content">
            {children}
           </div>
           </div>
        </div>
    )
}

export default Collapsible
