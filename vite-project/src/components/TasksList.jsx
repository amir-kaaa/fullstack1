import styled from "styled-components"
import TaskItem from "./TaskItem"

const TasksList = ({ data, setData, setInput1, setInput2 }) => {
    return (
        <Tasks>

            {data?.map((el, index) => (
                <TaskItem el={el} setData={setData} key={index} setInput1={setInput1} setInput2={setInput2}/>
            ))}

        </Tasks>
    )
}

export default TasksList

const Tasks = styled.ul`
    position: relative;
    list-style: none;
    text-decoration: none;
    width: 50%;
`