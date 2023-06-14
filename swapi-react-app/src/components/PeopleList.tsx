import React, { useEffect, useState } from "react";
import { getPeopleList } from "../api/people-list-api";
import { FullCaracter } from "../types/caracterType";
import { useNavigate } from "react-router-dom";
import { Vehicle } from "../types/vehicleType";
import { Modal } from "./VehicleModal";
import { YellowButton } from "./YellowButton";
import { getVehicleList } from "../api/vehicle-list-api";
import { SearchBar } from "./SearchBar";
import { Spinner } from "./Spinner";

export const PeopleList: React.FC = () => {
  const navigate = useNavigate();
  const [peopleList, setPeopleList] = useState<FullCaracter[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPerson, setSelectedPerson] = useState<FullCaracter | null>(null);
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

  const getVehicles = async (person: FullCaracter) => {
    setIsLoading(true);
    try {
      let newVehicleList: Vehicle[] = [];
      for (const vehicle of person.vehicles) {
        const api = vehicle.substring(21, vehicle.length - 1);
        if (api === '' || api === null || api === undefined) {
          newVehicleList = [];
          break;
        }
        const response = await getVehicleList(api);
        const data = response;
        newVehicleList.push(data);
      }
      setVehicleList(newVehicleList);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleVehicleClick = async (person: FullCaracter) => {
    setSelectedPerson(person);
    await getVehicles(person);
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="flex h-full w-full items-center justify-center p-1 bg-auto bg-gradient-to-br
        from-sky-500 via-rose-500 to-lime-500 ">
      <div className="my-4">
        <div className="my-2">
          <YellowButton handleClick={handleBackClick} buttonName="Back"/>
        </div>
        <div className="my-2">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>   
      </div>
        {isLoading ? <Spinner /> : (
          <ul>
            {peopleList.filter((term) => {
              if(searchTerm === '') {
                return term;
              } else if(term.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return term;
              }
            }).map((person) => (
            <div className="mb-2" key={person.name}>
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="mr-2 h-8 w-48 text-center bg-gray-300 rounded">
                    {person.name}
                  </div>
                  
                  <button
                    className="ml-2 w-36 h-8 rounded-lg bg-purple-300"
                    onClick={() => handleVehicleClick(person)}>
                    View Vehicles
                  </button>
                  {isModalOpen && selectedPerson && selectedPerson === person && (
                      <Modal
                      isOpen={isModalOpen}
                      person={selectedPerson}
                      vehicles={vehicleList}
                      onClose={handleCancelClick}
                      />
                  )}
                </div>
              </div>
            </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};