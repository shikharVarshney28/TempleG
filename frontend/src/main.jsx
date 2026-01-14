import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TempleGallery from './Components/TempleGallery.jsx'
import Intro from './Components/Intro.jsx'
import Services from './Components/Services.jsx'
import TempleInfo from './Components/TempleInfo.jsx'
import About from './Components/About.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Donation from './Components/Donation.jsx'
import Events from './Components/Events.jsx'
import DailyDarshan from './Components/DailyDarshan.jsx'

let app = createBrowserRouter([
  { path: '/', 
    element: <App/> ,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:[<Intro/>, <Services/>,<TempleInfo/>,<TempleGallery limitPerCategory={4} isSlider={true} />]
      },
      {
        path:"/gallery",
        element:<TempleGallery />
      },
      {
        path:"/ganeshji",
        element:<About/>
      },
      {
        path:"/donation",
        element:<Donation/>
      },
      {
        path:"/events",
        element:<Events/>
      },
      {
        path:"/ddarshan",
        element:<DailyDarshan/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={app}>
    <App />
  </RouterProvider>
)
