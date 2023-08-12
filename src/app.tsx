import "./app.scss";
import { routes } from "./routes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {GlobalLayout} from "./patterns/03-layouts/global-layout/global-layout.tsx";
import {PageNotFound} from "./pages/page-not-found.tsx";
import {HomePage} from "./pages/home.tsx";


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

                            {/* 404 Route */}
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </GlobalLayout>
                </HelmetProvider>
        </BrowserRouter>
    </>
  )
}
