import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from './components/Base';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
        children: [
            {
                index: true,
                async lazy() {
                    let { Home } = await import("./components/Home");
                    return { Component: Home };
                },
            },
            {
                path:"about",
                async lazy() {
                    let { About } = await import("./components/About");
                    return { Component: About };
                },
            },
            {
                path:"projects",
                async lazy() {
                    let { Projects } = await import("./components/Projects");
                    return { Component: Projects };
                },
            },
            {
                path:"contact",
                async lazy() {
                    let { Contact } = await import("./components/Contact");
                    return { Component: Contact };
                },
            },
            {
                path:"*",
                async lazy() {
                    let { ErrorPage } = await import("./components/ErrorPage");
                    return { Component: ErrorPage };
                },
            },
        ]

    }
])

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router
