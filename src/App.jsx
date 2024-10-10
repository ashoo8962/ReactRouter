import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import Contacts from './components/Contacts'
import User from './components/User'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
//routrpro to fit elements in that
function App() {
  const router=createBrowserRouter([
    {

    path:'/',
    element:<> <Navbar/><Home /></>
},
{
  path:'/login',
  element:<> <Navbar/><Login /></>
},
{
  path:'/contacts',
  element:<> <Navbar/><Contacts /></>
},

{
  path:'/user/:username',
  element:<> <Navbar/><User/></>
},

])

  return (
    <>
    <div>welcome to page</div>
     
      <RouterProvider router={router}/>
        
    </>
  )
}

export default App
