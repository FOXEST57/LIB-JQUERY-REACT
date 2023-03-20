# ultime-modal

## Installation
To install, you can the command below:

    npm i --save ultime-modal

## Example

- you can return your component and the modal like this

```
    return (
        <div className="App">
            <button onClick={() => setIsOpen(true)}>Open modal</button>
            <Modal
                myModalButtonStyle={myModalButtonStyle}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <ModalTitle />
                <ModalContent />
            </Modal>
        </div>
    );
```
- OR like this

```
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
```

- let's see a full example

```
    import { useState } from 'react';
    import { Modal } from 'ultime-modal';

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
                    <li>
                        <a href="https://google.com">https://google.com</a>
                    </li>
                    <li>
                        <a href="https://google.com">https://google.com</a>
                    </li>
                    <li>
                        <a href="https://google.com">https://google.com</a>
                    </li>
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
```

## Style

- You can style your modal as you want by using these attributes:

    - `myModalStyle`  
    - `myOverlayStyle` 
    - `myModalButtonStyle` 

which are javascript objects allowing you to style each part of the modal
Note: if not set up, the default styles will be applied