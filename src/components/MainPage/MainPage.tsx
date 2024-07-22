import { useState } from "react"
import Header from "../Header"
import AllToDo from "../ToDoListAll"
import ModalWindow from "../ModalWindow"


const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {isOpen && <ModalWindow onClose={() => setIsOpen(!isOpen)}>
                <h1>Instruction</h1>
                <p>1. Click the "Add ToDo" button.</p>
                <p>2. Fill in all the fields and click "Confirm".</p>
                <p>3. If the ToDo is completed, click the square, and your ToDo will be crossed out.</p>
                <p>4. To delete the ToDo, click the cross next to it.</p>
                </ModalWindow>}

            <Header onClick={() => setIsOpen(!isOpen)} color="transparent" />
            <AllToDo />
        </>
    )
}

export default MainPage
