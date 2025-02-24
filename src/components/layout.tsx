import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FCF3F8] to-[#F0FAF4] px-4 md:px-0">
      <Outlet />
    </div>
  );
};

export default Layout;
