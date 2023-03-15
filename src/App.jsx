import './App.css'
import HomePage from './HomePage.jsx';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import User from './User.jsx'
import Image from './Image.jsx'


export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/images/:image_id" element={<Image />} />
      </Routes>
    </BrowserRouter>
  )
}

