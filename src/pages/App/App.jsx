import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import { HomePage, NotFound, MyOrders, DetailProduct, CartShoppingPage, OrderPage, LastOrderPage, Signin, Account } from '../';
import { NavBar, Footer, CheckoutSideMenu } from '../../components';
import './App.css';
import { ProductPage } from '../ProductPage';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/products', element: <ProductPage /> },
        { path: '/products/laptops', element: <ProductPage /> },
        { path: '/products/tablets', element: <ProductPage /> },
        { path: '/products/cameras', element: <ProductPage /> },
        { path: '/products/headphones', element: <ProductPage /> },
        { path: '/products/cellphones', element: <ProductPage /> },
        { path: '/products/accessories', element: <ProductPage /> },
        { path: '/account', element: <Account /> },
        { path: '/cart-shopping', element: <CartShoppingPage /> },
        { path: '/my-orders/last', element: <LastOrderPage /> },
        { path: '/my-orders/:id', element: <OrderPage /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/sign-in', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
        { path: '/product/:id', element: <DetailProduct /> }
    ]);

    return routes;
}

export const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <NavBar />
                <Footer />
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
};