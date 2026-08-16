import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Counselors from './pages/Counselors.jsx'
import Monsters from './pages/Monsters.jsx'
import Mechanics from './pages/Mechanics.jsx'
import Strategies from './pages/Strategies.jsx'
import Campers from './pages/Campers.jsx'
import Guide from './pages/Guide.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="counselors" element={<Counselors />} />
        <Route path="monsters" element={<Monsters />} />
        <Route path="mechanics" element={<Mechanics />} />
        <Route path="strategies" element={<Strategies />} />
        <Route path="campers" element={<Campers />} />
        <Route path="guide" element={<Guide />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>
    </>
  )
}
