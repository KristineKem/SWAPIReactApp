import React, { useEffect, useState } from "react";
import { getPeopleList } from "../api/people-list-api";
import { Caracter } from "../types/caracterType";
import { useNavigate } from "react-router-dom";
import { VehicleModal } from "../components/VehicleModal";
import { PEOPLE_URL } from "../constants/url_people";
import axios from "axios";

interface PeopleArray {
  toArray?: Caracter[];
}

export const PeopleList: React.FC = () => {
  const navigate = useNavigate();
  const [peopleList, setPeopleList] = useState<Caracter[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPeopleList = async () => {
        const response = await getPeopleList();
        const data: PeopleArray = {toArray: response};
        if(data.toArray) {
        setPeopleList(data.toArray);
        }
    };
    fetchPeopleList();
  }, []);

  

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleVehicleClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };


  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gradient-to-br
        from-sky-500 via-rose-500 to-lime-500 bg-cover"
    >
      <div className="relative w-full max-w-lg">
        <button
          type="button"
          className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md 
                        transition-colors duration-300 hover:bg-yellow-600"
          onClick={handleBackClick}
        >
          Back
        </button>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <ul>
            {JSON.stringify(peopleList.map(people => people.name))}
          </ul>
        </div>
      </div>
    </div>
  );
};
