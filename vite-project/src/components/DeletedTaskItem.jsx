import styled from "styled-components"
import axios from "axios"

const DeletedTaskItem = ({ el, setData }) => {

    const updateHandler = (id) => {
        axios
            .put(`http://localhost:7000/deleted`, { id: id })
            .then(response => setData(response.data))
    }

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:7000/deleted`, { data: { id: id } })
            .then(response => setData(response.data))
    }

    return (
        <Row>
            <Task1>{el.title}</Task1>
            <Task2>{el.count}</Task2>
            <Buttons>
                <Btn onClick={() => updateHandler(el.id)}>Recover</Btn>
                <button onClick={() => deleteHandler(el.id)}>Delete</button>
            </Buttons>
        </Row>
    )
}

export default DeletedTaskItem

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
    margin-left: 20px;
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