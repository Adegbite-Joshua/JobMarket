import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" Component={Dashboard} />
          {/* <Route path="/about" component={About} />  */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
