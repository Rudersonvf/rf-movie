import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { ContextCardCount } from "../../utils/count-context";

export default function Main() {
  const [contextCardCount, setContextCardCount] = useState<number>(0);

  return (
    <ContextCardCount.Provider
      value={{
        contextCardCount,
        setContextCardCount,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </ContextCardCount.Provider>
  );
}
