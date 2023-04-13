import RoutesComponent from './routes/config'
import { Link } from 'react-router-dom'

const App = () => {
    return <>
        <Link to='/test'>跳转test</Link>
        <RoutesComponent/> 
    </>
}

export default App