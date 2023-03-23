import { useState } from 'react';
import './App.css';
import { Modal } from './lib';

const ModalTitle = () => {
    return (
        <>
            <h2>Super Title</h2>
        </>
    )
}

const ModalContent = () => {
    return (
        <>
            <ul>
                <p>pdb-modal</p>
            </ul>
        </>
    )
}
function App() {
    // Customisation du style en objet
    const myModalStyle = {
        background: "blue"
    }

    const myOverlayStyle = {
        background: "rgba(0,0,0,0.8)",
        position: "absolute",
        inset: 0,
        width: "auto",
        height: "auto"
    }

    const myModalButtonStyle = {
        color: "black",
        fontWeight: "bold",
        position: "absolute",
        right: "10px",
        top: "10px",
        border: "2px solid black",
        cursor: "pointer"
    }
    // Ajout du hook state pour l'ouverture et la fermeture du modal lors du clique sur le bouton
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="App">
            {/* Quand on clique sur le bouton on appele le state qui va changer la valeur false en true pour ouvrir le modal */}
            <button onClick={() => setIsOpen(true)}>Open modal</button>
            {/* Modal component avec 5 props, style, est ouvert, son titre et son contenu */}
            <Modal
                myModalButtonStyle={myModalButtonStyle}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalTitle={<ModalTitle />}
                modalContent={<ModalContent />}
            />
        </div>
    );
}

export default App;
