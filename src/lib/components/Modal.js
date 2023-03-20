import React, { useEffect, useState } from 'react'

const Modal = ({ myModalStyle, myOverlayStyle, myModalButtonStyle, isOpen, setIsOpen,modalTitle, modalContent, children }) => {

    const defaultOverlayStyle = {
        background: "rgba(0,0,0,0.8)",
        position: "absolute",
        inset: 0,
        width: "auto",
        height: "auto"
    }

    const defaultModalStyle = {
        background: "lightgrey",
        display: "block",
        position: "relative",
        left: 0,
        right: 0,
        top: "25%",
        bottom: "75%",
        width: "300px",
        minHeight:"100px",
        margin: "auto",
        borderRadius: "5px",
        padding: "10px"
    }

    const defaultModalButtonStyle = {
        background: "transparent",
        position: "absolute",
        right: "15px",
        top: "15px",
        border: "none",
        cursor: "pointer"
    }

    const [overlayStyle, setOverlayStyle] = useState({ ...defaultOverlayStyle })
    const [modalStyle, setModalStyle] = useState({ ...defaultModalStyle })
    const [modalButtonStyle, setModalButtonStyle] = useState({ ...defaultModalButtonStyle })


    useEffect(() => {
        myModalStyle
            ? setModalStyle(() => { return { ...myModalStyle } })
            : setModalStyle(() => { return { ...defaultModalStyle } })
        myOverlayStyle
            ? setOverlayStyle(() => { return { ...myOverlayStyle } })
            : setOverlayStyle(() => { return { ...defaultOverlayStyle } })

        myModalButtonStyle
            ? setModalButtonStyle(() => { return { ...myModalButtonStyle } })
            : setModalButtonStyle(() => { return { ...defaultModalButtonStyle } })


    }, [myModalStyle, myOverlayStyle, myModalButtonStyle])

    const handleSetIsOpen = () => {
        setIsOpen(false)
    }

    return (
        <>
            {isOpen &&
                <div style={{ ...overlayStyle }} id="modal-overlay">
                    <div style={{ ...modalStyle }} id="modal">
                        {modalTitle && modalTitle}
                        {modalContent && modalContent}
                        {children}
                        <button style={{ ...modalButtonStyle }} onClick={handleSetIsOpen} id="modal-button">X</button>
                    </div>
                </div>
            }

        </>


    )
}

export default Modal
