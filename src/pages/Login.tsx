import {Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import Register from "./Register.tsx";

const Login = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default Login