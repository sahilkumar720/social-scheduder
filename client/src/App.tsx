import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout  from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Scheduler from "./pages/Scheduler";
import AiComposer from "./pages/AiComposer";
import Account from "./pages/Account";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route element={<Layout/>} >
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/scheduler" element={<Scheduler />} />
                    <Route path="/ai-composer" element={<AiComposer />} />
                         <Route path="/account" element={<Account />} />


                    
                </Route>
            </Routes>
        </>
    );
}
