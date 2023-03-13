import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/TasksList'
import TasksList from '../components/TasksList'

function Home() {

  const [data, setData] = useState()

  useEffect(() => {
    axios.get("http://localhost:7000")
      .then(res => JSON.stringify(res.data))
      .then(data => setData(data))
  }, [])


  return (
    <Init>
      <Navbar />
      <TasksList data={data} />
    </Init>
  )
}

export default Home

const Init = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 80px;
`