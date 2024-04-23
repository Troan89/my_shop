import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductPage from "../features/Products/product/ProductPage";
import ProductList from "../features/Products/ProductList";
import BasketPage from "../features/Basket/BasketPage";
import App from "../../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/product/:productId",
                element: (
                    <ProductPage />
                ),
            },
            {
                path: "/my_shop",
                element: (
                    <ProductList />
                ),
            },
            {
                path: "/basket",
                element: (
                    <BasketPage />
                ),
            },
            {
                path: "*",
                element: (
                    <div>404 error</div>
                )
            },
        ]
    },

])

export const Router = () => {
    return <RouterProvider router={router} />
}