import 'index.css'
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from 'components/Home/Home'
//import Cart from 'components/Cart/Cart'
import About from 'components/About/About'
import Shop from 'components/Shop/Shop'
import Collections from 'components/Shop/Collections'
import ItemDetail from 'components/Shop/ItemDetail';
import RegistrationForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/Login/LoginForm';
import Checkout from 'components/Checkout/Checkout';

const App = () => {
    return (
        <Provider store={store}>
                <Router>
                    <ScrollToTop />
                    
                    <Routes>
                        <Route exact path='/' element={<LoginForm/>}/>
                        <Route exact path='/login' element={<LoginForm/>}/>
                        <Route exact path='/home' element={ <Home /> }/>
                        <Route exact path='/about' element={ <About /> } />
                        <Route exact path='/shop' element={ <Shop /> } />
                        <Route exact path='/shop/:collection' element={ <Collections /> } />
                        <Route exact path='/shop/collection/:name' element={ <ItemDetail /> } />
                        <Route exact path='/register' element={<RegistrationForm/>}/>
                        <Route exact path='/checkout' element={<Checkout/>}/>
                    </Routes>
                </Router>
        </Provider>
    )
}

export default App;