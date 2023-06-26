"use client";
import styles from './page.module.css'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Main from './pages/Main';
import MeDisc from './pages/MeDisc';
import { HashRouter } from 'react-router-dom'



export default function Home() {
  return (<>
  <HashRouter>
      <div className={styles.navbar}>
        <header className={styles.navbar_components}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/work">Work Experience</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/other">Other</Link></li>
            <li><Link to="/meDisc">MeDisc</Link></li>
          </ul>  
        </header>
      </div>
      <main className={styles.main}>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/projects" element={<> </>} />
          <Route path="/work" element={<> </>} />
          <Route path="/education" element={<> </>} />
          <Route path="/other" element={<> </>} />
          <Route path="/meDisc" element={<MeDisc />} />
        </Routes>
      </main>
  </HashRouter>
  </>)
}

