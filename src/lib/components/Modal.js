import React, { useEffect, useState } from 'react'

// Composant Modal avec
/**
 * Composant Modal
 * Props myModalStyle: style du modal en objet
 * Props myOverlayStyle: style de l'overlay modal en objet
 * Props myModalButtonStyle: style button du modal en objet 
 * Props isOpen: state boolean pour l'ouverture du modal
 * Props setIsOpen: setState pour modifier l'état du state open 
 * Props modalTitle: titre du modal  
 * Props modalContent: contenu du modal 
 * Props children: d'autre contenu html
 */
const Modal = ({ myModalStyle, myOverlayStyle, myModalButtonStyle, isOpen, setIsOpen, modalTitle, modalContent, children }) => {
    // style définie par default si aucun style n'est donnée en props
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
    // state overlay style 
    const [overlayStyle, setOverlayStyle] = useState({ ...defaultOverlayStyle })
     // state global modal style 
    const [modalStyle, setModalStyle] = useState({ ...defaultModalStyle })
    // state button  modal style
    const [modalButtonStyle, setModalButtonStyle] = useState({ ...defaultModalButtonStyle })

    // use effect pour initialiser lorsque le composant se crée
    // on va initialiser les states en fonction des props recu, si les props modalStylen overlayStyle, buttonStyle sont définie
    // nos states seront inialisé avec sinon on prendra le style par default définie au dessus
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
    // function constante pour ferme le modal
    const handleSetIsOpen = () => {
        setIsOpen(false)
    }

    // si notre modal est ouvert on affiche la div du modal sinon nous n'affichons rien
    // avec le onClick lors du clique sur le boutton X le modal se fermera
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
