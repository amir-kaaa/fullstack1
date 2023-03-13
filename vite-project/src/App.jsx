import { Routes, Route } from 'react-router-dom'
import Tasks from './pages/Home'
import DeletedTasks from './pages/DeletedTasks'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Tasks />} />
      <Route path='/deleted' element={<DeletedTasks />} />
    </Routes>
  )
}

export default App
