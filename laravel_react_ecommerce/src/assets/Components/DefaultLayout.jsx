import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";

export default function DefaultLayout() {
    const {user, token} = useStateContext();
    if(!token) {
        return <Navigate to='/login' />
    }
    const onLogout = (ev) => {
        ev.preventDefault();
    }
    
    return (
        <div className="header">
            <nav className="bg-gray-800 p-5 shadow-lg border-bottom">  
            <div className="container mx-auto flex justify-between">  
                <div className="flex space-x-4">
                    <a href="#" className="p-2 rounded text-white hover:bg-white hover:text-gray-800">Header</a>
                </div>  
                <div className="flex space-x-4">  
                    <a href="#" className="p-2 rounded text-white hover:bg-white hover:text-gray-800">{user.name}</a>  
                    <a href="#" onClick={onLogout} className="p-2 rounded text-white hover:bg-white hover:text-gray-800">Logout</a> 
                </div>  
            </div>  
            
            
            </nav>

            <Outlet />

        </div>
          
      )
}
