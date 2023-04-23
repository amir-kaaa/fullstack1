import styled from "styled-components"
import DeletedTaskItem from "./DeletedTaskItem"

const DeletedTasksList = ({ data, setData }) => {
    return (
        <Tasks>

            {data?.map((el, index) => (
                <DeletedTaskItem el={el} setData={setData} key={index} />
            ))}

        </Tasks>
    )
}

export default DeletedTasksList

const Tasks = styled.ul`
    position: relative;
    list-style: none;
    text-decoration: none;
    width: 50%;
`