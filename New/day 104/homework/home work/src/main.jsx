import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter.jsx'
import Header from './Header.jsx'
import './style.css';
import Content from './Content.jsx';
import MoviesList from './moviesList.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Header/>
      <Content/>
      <Counter/>
      <MoviesList/>
    </div>
 
  </StrictMode>,
)
