import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TasksList from '../components/TasksList'

function Home() {

  const [data, setData] = useState([])
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  useEffect(() => {

    const getData = () => {
      axios
        .get(`http://localhost:7000`)
        .then(res => res.data)
        .then(data => setData(data))
        .catch(e => console.log(e))
    }

    getData()
  }, [])

  const createHandler = (e) => {
    e.preventDefault()
    setInput1('')
    setInput2('')

    axios
      .post(`http://localhost:7000`, { title: input1, count: input2 })
      .then(response => setData(prevState => [response.data, ...prevState]))
  }
  const changeHandler1 = (e) => {
    setInput1(e.target.value)
  }
  const changeHandler2 = (e) => {
    setInput2(e.target.value)
  }


  return (
    <>
      <Navbar />
      <Init>
        <Form onSubmit={createHandler}>
          <Input1 required placeholder='set your task' value={input1} onChange={changeHandler1} />
          <Input2 required placeholder='set days' type='number' value={input2} onChange={changeHandler2} />
          <Btn type='submit'>Create</Btn>
        </Form>
        <TasksList data={data} setData={setData} setInput1={setInput1} setInput2={setInput2} />
      </Init>
    </>
  )
}

export default Home

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
const Btn = styled.button`
  line-height: 30px;
`
const Input1 = styled.input`

`
const Input2 = styled.input`

`
const Form = styled.form`
  display: flex;
  position: relative;
`