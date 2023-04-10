import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import Statistics from './components/Statistics/Statistics'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/appliedJobs',
                element: <AppliedJobs></AppliedJobs>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: 'job/:id',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch('/featuredJobs.json'),
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
