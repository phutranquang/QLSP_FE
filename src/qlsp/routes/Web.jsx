/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SpinProducts from "../components/commons/Spin";
import PublicLayout from "../components/PublicLayout";

const HomePage     = lazy(() => import('../pages/Home'));
const HomeCommercePage = lazy(() => import('../pages/HomeCommerce'))
const PhonePage     = lazy(() => import('../pages/PhoneCommerce'));
const LaptopPage    = lazy(() => import('../pages/LaptopCommerce'));
const NotFoundPage = lazy(() => import('../pages/404'));
const DetailPage   = lazy(() => import('../pages/Detail'));
const SearchPage   = lazy(() => import('../pages/Search'));
const ShoppingCartPage   = lazy(() => import('../pages/ShoppingCart'));
const AddPage   = lazy(() => import('../pages/Add'));
const BillPage = lazy(() => import('../pages/Bill'));
const StorePage = lazy(() => import('../pages/Store'));
const CustomerPage = lazy(() => import('../pages/Customer'))



const router = createBrowserRouter([
    {
        element: <PublicLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: "/",
                element: (
                <Suspense fallback={<SpinProducts/>}>
                    <HomeCommercePage/>
                </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/home",
                element: (
                <Suspense fallback={<SpinProducts/>}>
                    <HomePage/>
                </Suspense>
                    ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/phone",
                element: (
                <Suspense fallback={<SpinProducts/>}>
                    <PhonePage/>
                </Suspense>
                        ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/laptop",
                element: (
                <Suspense fallback={<SpinProducts/>}>
                    <LaptopPage/>
                </Suspense>
                        ),
                errorElement: <NotFoundPage/>
            },
            {        
                // :slug va :id goi la tham so truyen len url (co the thay doi gia tri duoc)
                path: "/product/:slug/:id",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <DetailPage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            // {        
            //     // :slug va :id goi la tham so truyen len url (co the thay doi gia tri duoc)
            //     path: "/bill/:slug/:id",
            //     element: (
            //         <Suspense fallback={<SpinProducts/>}>
            //             <BillDetailPage/>
            //         </Suspense>
            //     ),
            //     errorElement: <NotFoundPage/>
            // },
            {
                path: "/search/:name",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <SearchPage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/shoppingcart",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <ShoppingCartPage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/add",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <AddPage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/kho",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <StorePage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/donhang",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <BillPage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            },
            {
                path: "/khachhang",
                element: (
                    <Suspense fallback={<SpinProducts/>}>
                        <CustomerPage/>
                    </Suspense>
                ),
                errorElement: <NotFoundPage/>
            }


        ]
    }
]);
export default router;