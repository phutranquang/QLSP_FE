/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter, defer } from "react-router-dom";
import SpinMovies from "../components/commons/Spin";
import AuthLayoutMovies from "../components/Auth";
import PublicLayout from "../components/PublicLayout";
import ProtectedLayout from "../components/ProtectedLayout";

const HomePage     = lazy(() => import('../pages/Home'));
const UpcomingPage = lazy(() => import('../pages/Upcoming')) ;
const SearchPage   = lazy(() => import('../pages/Search'));
const NotFoundPage = lazy(() => import('../pages/404'));
const DetailPage   = lazy(() => import('../pages/Detail'));
const LoginPage    = lazy(() => import('../pages/Login'));
const FavoritePage = lazy(() => import('../pages/Favorite'));

// viet ham lay du lieu nguoi dung da luu vao localstorage
const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = window.localStorage.getItem("reactjs2302-movie");
            resolve(user);
        }, 3000)
    });
}

const router = createBrowserRouter([
    {
        element: <AuthLayoutMovies/>,
        loader: () => defer ({ userPromise: getUserData() }),
        errorElement: <NotFoundPage/>,
        children: [
            {
                element: <PublicLayout/>,
                errorElement: <NotFoundPage/>,
                children: [
                    {
                        path: "/",
                        element: (
                            <Suspense fallback={<SpinMovies/>}>
                                <HomePage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    },
                    {
                        path: "/upcoming",
                        element: (
                            <Suspense fallback={<SpinMovies/>}>
                                <UpcomingPage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    },
                    {
                        path: "/search/:name",
                        element: (
                            <Suspense fallback={<SpinMovies/>}>
                                <SearchPage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    },
                    {
                        // localhost:1537/movie/qua-nhanh-qua-nguy-hiem/1234
                        // :slug va :id goi la tham so truyen len url (co the thay doi gia tri duoc)
                        path: "/movie/:slug/:id",
                        element: (
                            <Suspense fallback={<SpinMovies/>}>
                                <DetailPage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    },
                    {
                        path: '/login',
                        element:(
                            <Suspense fallback={<SpinMovies/>}>
                                <LoginPage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    }
                ]
            },
            {
                element: <ProtectedLayout/>,
                errorElement: <NotFoundPage/>,
                children: [
                    {
                        path: '/favoirte',
                        element: (
                            <Suspense fallback={<SpinMovies/>}>
                                <FavoritePage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    }
                ]
            }
        ]
    }
]);
export default router;