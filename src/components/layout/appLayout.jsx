import { Outlet } from "react-router";
import { Footer } from "./footer";
import { Header } from "./header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
