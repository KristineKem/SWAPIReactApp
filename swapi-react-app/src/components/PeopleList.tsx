import React, { useEffect, useState } from "react";
import { getPeopleList } from "../api/people-list-api";
import { FullCaracter } from "../types/caracterType";
import { useNavigate } from "react-router-dom";
import { Vehicle } from "../types/vehicleType";

export const PeopleList: React.FC = () => {
  const navigate = useNavigate();
  const [peopleList, setPeopleList] = useState<FullCaracter[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchPeopleList = async () => {
      setIsLoading(true);
      try {
        const response = await getPeopleList();
        const data = response.results;
        setPeopleList(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
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
      className="flex h-full w-full items-center justify-center p-1 bg-auto bg-gradient-to-br
        from-sky-500 via-rose-500 to-lime-500 "
    >
      <div className="my-4">
        <div className="my-2">
        <button 
          type="button"
          className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md 
                        transition-colors duration-300 hover:bg-yellow-600"
          onClick={handleBackClick}
        >
          Back
        </button>
        </div>
        <div className="my-2">
          <div className="flex items-center justify-center">
            <div className="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
              <div className="w-full">
                <input
                  type="search"
                  className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                  placeholder="search"
                  x-model="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center bg-yellow-500 justify-center w-12 h-12 text-white rounded-r-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (<p>Loading...</p>) : (
          <ul className="">
            {peopleList.filter((term) => {
              if(searchTerm === '') {
                return term;
              } else if(term.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return term;
              }
            }).map((person) => 
            <div className="mb-2">
              <div key={person.name}
                      className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
                    >
                      <div className="flex-1 flex justify-between items-center">
                        <div className="mr-2 h-8 w-48 text-center bg-gray-300 rounded">
                          {person.name}
                        </div>
                        
                        <button
                          className="ml-2 w-36 h-8 rounded-lg bg-purple-300"
                          onClick={handleVehicleClick}
                        >
                          View Vehicles
                        </button>
                        {isModalOpen && 
                           <div className="fixed inset-0 flex justify-center py-3 sm:max-w-xl sm:mx-auto">
                           <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                           <div className="px-12 py-5">
                               <h2 className="text-purlpe-800 text-3xl font-semibold">Vehicles of {person.name}</h2>
                           </div>
                           <div className="bg-gray-200 w-full flex flex-col items-center">
                               <div className="flex flex-col items-center py-6 space-y-3">
                               <table className="flex flex-col items-center min-w-full bg-white">
                               <thead className="flex flex-col items-center bg-purple-500 text-white">
                               <tr>
                                   <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                   <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Model</th>
                                   <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Passengers</th>
                               </tr>
                               </thead>
                               <tbody className="text-gray-700">
                               {person.vehicles.map((vehicle) => (
                                   <tr key={vehicle.name}>
                                   <td>{vehicle.name}</td>
                                   <td>{vehicle.model}</td>
                                   <td>{vehicle.passengers}</td>
                                   </tr>
                               ))}
                               </tbody>
                           </table>
                               </div>
                           </div>
                           <div className="h-20 flex items-center justify-center">
                               <button type="button" className="text-gray-600" onClick={handleCancelClick}>Cancel</button>
                           </div>
                           </div>
                       </div>
                        }
                      </div>
                    </div>
            </div>
           )}
          </ul>
          )}
        </div>
      </div>
    
  );
};
