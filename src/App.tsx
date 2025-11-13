import { Routes, Route } from "react-router-dom";
import { Default } from "./pages/Default";
import { Home } from "./pages/Home";
import { Calendar } from "./pages/Calendar";
import DefaultLayout from "./layouts/DefaultLayout";



export default function App() {
  return (
    <DefaultLayout>

    
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
    </DefaultLayout>
  );
}
