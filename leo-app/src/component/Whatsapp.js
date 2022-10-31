import React from 'react'
import { ImWhatsapp } from "react-icons/im";
import { IconContext } from "react-icons";


const Whatsapp = () => {
    return (
        <>
            <div>
                <a
                    href="https://wa.me/2348100000000"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconContext.Provider value={{ color: "White", className: "whatsapp-icon" }}>
                        <div>
                            <ImWhatsapp />
                        </div>
                    </IconContext.Provider>
                </a>
            </div>
        </>
    )
}

export default Whatsapp