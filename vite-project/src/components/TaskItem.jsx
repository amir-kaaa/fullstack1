import styled from "styled-components"
import axios from "axios"

const TaskItem = ({ el, setData, setInput1, setInput2 }) => {

    const updateHandler = (id) => {
        setInput1(el.title)
        setInput2(el.count)

        deleteHandler(el.id)
    }

    const deleteHandler = (id) => {
        axios
            .put(`http://localhost:7000`, { id: id, deleted: true })
            .then(response => setData(response.data))
    }

    return (
        <Row>
            <Task1>{el.title}</Task1>
            <Task2>{el.count == 1 ? `${el.count} day to complete` : `${el.count} days to complete`}</Task2>
            <Buttons>
                <Btn onClick={() => updateHandler(el.id)}>Update</Btn>
                <button onClick={() => deleteHandler(el.id)}>Delete</button>
            </Buttons>
        </Row>
    )
}

export default TaskItem

const Task1 = styled.div`
    font-size: 1.2rem;
    line-height: 60px;
    background: none;
    border: none;
    margin-left: 20px;
`
const Task2 = styled.div`
    font-size: 1.2rem;
    line-height: 60px;
    background: none;
    border: none;
    left: 50%;
    position: absolute;
`
const Btn = styled.button`
    margin-right: 10px;
`
const Row = styled.li`
    display: flex;
    justify-content: space-between;
    border: 2px #303529 solid;
    border-radius: 10px;
    background-color: #b4ce98;
    margin: 30px;
`
const Buttons = styled.div`
    margin-left: 40px;
    margin-top: 20px;
    margin-right: 20px;
`