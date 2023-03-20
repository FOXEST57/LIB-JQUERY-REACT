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

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="App">
            <button onClick={() => setIsOpen(true)}>Open modal</button>
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
