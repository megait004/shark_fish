import "@/assets/style/styles.css";
import Layout from "@/components/layout";
import Index from "@/pages";
import NotFound from "@/pages/not-found";
import { Route, Routes } from "react-router";
import Home from "@/pages/home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
