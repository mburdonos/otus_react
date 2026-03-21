import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Catalog } from '../pages/catalog';
import { Cart } from '../pages/cart';

export function Routing() {
    return (
        <>
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/catalog'  element={ <Catalog /> }/>
            <Route path='/cart' element={ <Cart /> } />
        </Routes>
        </>
    )
}