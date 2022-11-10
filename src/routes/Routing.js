import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import WorkDetail from "../pages/WorkDetail";
import Works from "../pages/Works";


export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/works" element={<Works/>} />
                <Route path="/work_detail" element={<WorkDetail/>} />
            </Routes>
        </Router>
    )
}