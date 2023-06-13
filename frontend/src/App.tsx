import { Routes, Route } from 'react-router-dom'
import Igreja from "./pages/igreja"
import Igrejas from "./pages/igrejas"
import Paineladmigreja from "./pages/paineladmigreja"
import Paineladm from "./pages/paineladm"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Igrejas />} />
        <Route path='/igrejas' element={<Igrejas />} />
        <Route path='/igreja/:id?' element={<Igreja />} />
        <Route path='/paineladmigreja/:id?' element={<Paineladmigreja />} />
        <Route path='/paineladm' element={<Paineladm />} />
      </Routes>

    </div>
  )

}

export default App
