import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Catalog } from '../pages/catalog';
import { Cart } from '../pages/cart';

export function Routing() {
    return (
        <>
        <Routes>
            <Route path='/otus_react/' element={ <Home /> }/>
            <Route path='/otus_react/catalog'  element={ <Catalog /> }/>
            <Route path='/otus_react/cart' element={ <Cart /> } />
        </Routes>
        </>
    )
}