import React,{ useEffect, useState }  from "react";
import { getPeopleList } from "../api/people-list-api";
import { RouteComponentProps } from "@reach/router";
import { Caracter } from "../services/types";

interface PeopleList extends RouteComponentProps{

};

export const PeopleList: React.FC<PeopleList> = () => {
    const [peopleList, setPeopleList] = useState<Caracter | null>(null);
    
    useEffect(() => {
        const fetchPeople = async () => {
            const peopleList = await getPeopleList();
            console.log(peopleList);
    }
    fetchPeople()
   
    }, []);
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br
        from-sky-500 via-rose-500 to-lime-500 bg-cover">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4">
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1 flex justify-between items-center">
                <div className="h-8 w-48 text-center bg-gray-300 rounded">Dart Weider</div>
                <button className="w-36 h-8 rounded-lg bg-purple-300">View Vehicles</button>
              </div>
            </div>
        </div>
      </div>
    </div> 
  );
};