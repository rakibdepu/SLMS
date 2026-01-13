import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/adminnavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import { ToastContainer } from 'react-toastify';

export default function adminLayout() {
  const [render,setRender] = useState(false);
  const token = localStorage.getItem("authToken")
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if(token && (role === "librarian" || role === "admin")){
      setRender(true)
    }
    else{
      navigate("/login")
    }    
  },[])


  return (
    <>

    {render ? <>
          <AdminNavbar />
          <div className="row g-0">
            <AdminSidebar />
            <main className="col-md-9 col-lg-10 admin-main">
              <Outlet />
            </main>
          </div>
          <AdminFooter />
          </> :
          null
          }
          <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> 
    </>
  );
}
