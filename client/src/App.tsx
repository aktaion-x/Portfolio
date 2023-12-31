import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact, Skills } from './pages';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext, useEffect, useRef } from 'react';

function App() {
  const { state } = useContext(ThemeContext)!;
  const ref = useRef<HTMLDivElement>(null)


  useEffect(() => {
    ref.current?.classList.add(state.theme)
  }, [state])

  return (
    <div ref={ref} className={`${state.theme}`} id='App'>
      <BrowserRouter>
        <Navbar />
        <div className={`dark:bg-slate-950 bg-slate-300 h-auto min-h-screen `}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
