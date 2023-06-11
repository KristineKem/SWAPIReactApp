import React from 'react';
import Image from "../images/star_wars_2.jpg";
import { RouteComponentProps, useNavigate, Link } from "@reach/router";


interface GetStartedPageProps extends RouteComponentProps{

};

export const GetStartedPage: React.FC<GetStartedPageProps> = () => {
    const navigate = useNavigate();

     const handleViewClick = () => {
        navigate('/people');
    };

    const handleSearchClick = () => {
        navigate('/search');
    };

    return(

        <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br
            from-sky-500 via-rose-500 to-lime-500 bg-cover">
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                <div className="mb-8 flex flex-col items-center">
                    <img className="inline" src={Image} width="100" height="100" alt="" />
                    <h1 className="mb-2 text-2xl">Welcome to SWAPI React App</h1>
                    <span className="text-gray-300">What do you want to do?</span>
                </div>
                <form action="#">
                    <div className="mt-8 flex justify-center text-lg text-black">
                    <button type="button" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md 
                        transition-colors duration-300 hover:bg-yellow-600" onClick={handleViewClick}>
                        Viev people list
                    </button>
                    </div>
                    <div className="mt-8 flex justify-center text-lg text-black">
                        <button type="button" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md 
                            transition-colors duration-300 hover:bg-yellow-600" onClick={handleSearchClick}>
                            Search
                        </button>                       
                    </div>
                </form>
                </div>
            </div>
        </div>
);
}