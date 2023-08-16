import "./app.scss";
import { routes } from "./routes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {GlobalLayout} from "./patterns/03-layouts/global-layout/global-layout.tsx";
import {PageNotFound} from "./pages/page-not-found.tsx";
import {HomePage} from "./pages/home.tsx";
import {LoginPage} from "./pages/user/login.tsx";
import {RegisterPage} from "./pages/user/register.tsx";
import {WelcomePage} from "./pages/welcome.tsx";
import {MenuPage} from "./pages/menu.tsx";


export function App() {
  return (
    <>
        <BrowserRouter>
                <HelmetProvider>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>react-vite-starter</title>
                    </Helmet>
                    <GlobalLayout>
                        <Routes>
                            {/* Basic Pages */}
                            <Route path={routes.home} element={<HomePage />} />
                            <Route path={routes.welcome} element={<WelcomePage />} />
                            <Route path={routes.menu} element={<MenuPage />} />

                            {/* User Pages */}
                            <Route path={routes.user.login} element={<LoginPage />} />
                            <Route path={routes.user.register} element={<RegisterPage />} />

                            {/* 404 Route */}
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </GlobalLayout>
                </HelmetProvider>
        </BrowserRouter>
    </>
  )
}
