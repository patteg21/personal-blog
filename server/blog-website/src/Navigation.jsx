import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <div className="bg-secondary z-2">
            <ul className="p-5">
                <Link to="/"><li className="inline-block pr-10 pl-10 transition duration-300 hover:opacity-50">Home</li></Link>
                <Link to="/posts"><li className="inline-block pr-10 pl-10 transition duration-300 hover:opacity-50">Posts</li></Link>
                <Link to="/about"><li className="inline-block pr-10 pl-10 transition duration-300 hover:opacity-50">About</li></Link>
            </ul>
        </div>
    )
}