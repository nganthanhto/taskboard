import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main className="font-manrope p-8">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
