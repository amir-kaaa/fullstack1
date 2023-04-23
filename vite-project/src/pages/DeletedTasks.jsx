import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DeletedTasksList from '../components/DeletedTasksList'
import styled from 'styled-components'

function DeletedTasks() {

  const [data, setData] = useState([])

  useEffect(() => {

    const getData = () => {
      axios
        .get(`http://localhost:7000/deleted`)
        .then(res => res.data)
        .then(data => setData(data))
        .catch(e => console.log(e))
    }

    getData()
  }, [])
  return (
    <>
      <Navbar />
      <Init>
        <DeletedTasksList data={data} setData={setData} />
      </Init>
    </>
  )
}

export default DeletedTasks

const Init = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 80px;
  z-index: 100;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 0;
`