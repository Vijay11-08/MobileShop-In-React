import { Button } from '@material-tailwind/react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
