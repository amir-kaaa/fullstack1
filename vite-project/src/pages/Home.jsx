import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TasksList from '../components/TasksList'

function Home() {

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const changeHandler1 = (e) => {
    setInput1(e.target.value)
  }
  const changeHandler2 = (e) => {
    setInput2(e.target.value)
  }

  useEffect(() => {
    if (fetching) {
      axios
        .get(`http://localhost:7000?limit=8&page=${currentPage}`)
        .then(load => load.data)
        .then(load => {
          setData([...data, ...load.rows])
          setCurrentPage(prevState => prevState + 1)
          setTotalCount(load.count)
          console.log(totalCount)
        })
        .catch(e => console.log(e))
        .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [fetching])

  const createHandler = (e) => {
    e.preventDefault()
    setInput1('')
    setInput2('')
    axios
      .post(`http://localhost:7000`, { title: input1, count: input2 })
      .then(res => setData(prevState => [res.data, ...prevState]))
  }

  const scrollHandler = (e) => {
    if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && (data.length < totalCount)) {
      setFetching(true)
    }
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