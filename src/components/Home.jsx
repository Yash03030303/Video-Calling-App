import React, { useState } from "react";
import Hero from "./Hero";
import {useNavigate} from "react-router-dom";

const Home = () => {
        const [value, setValue] = useState("");
        const navigateTo = useNavigate();
        const handleJoinMeeting = () =>{
            navigateTo(`/room/${value}`);
        }
    return (
        <>
            <Hero />
            <div className="container">
                <h1>Join Meet</h1>
                <div>
                    <input type="text" placeholder='Meet ID' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button disabled={!value} onClick={handleJoinMeeting}>Join Meeting </button>
                </div>
            </div>
        </>
    )
}

export default Home