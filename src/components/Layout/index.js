import { Outlet } from "react-router-dom";
import Banner from "../Banner";


const Layout = () => {
  return(
    <main>
      <Banner />
      <Outlet />
    </main>
  )
}

export default Layout;