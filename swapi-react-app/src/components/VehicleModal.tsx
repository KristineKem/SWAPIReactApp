import { useEffect, useState } from "react";
import { FullCaracter } from "../types/caracterType";
import { Vehicle } from "../types/vehicleType";
import { YellowButton } from "./YellowButton";
import { Spinner } from "./Spinner";

interface ModalProps {
  isOpen: boolean;
  person: FullCaracter;
  vehicles: Vehicle[];
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  person,
  vehicles,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full flex justify-center py-3 sm:max-w-xl sm:mx-auto">
      <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
        <div className="px-12 py-5">
          <h2 className="text-purple-800 text-3xl font-semibold">
            Vehicles of {person.name}
          </h2>
        </div>
        <div className="bg-gray-200 w-full">
          {isLoading ? (
            <Spinner />
          ) : vehicles.length === 0 ? (
            <p className="p-4 text-center">
              This Character does not have any vehicles
            </p>
          ) : (
            <div className="flex flex-col items-center py-6 space-y-3">
              <table className="min-w-full bg-white border">
                <thead className="bg-purple-500 text-white">
                  <tr>
                    <th className="py-3 px-4 uppercase font-semibold text-sm border-b">
                      Name
                    </th>
                    <th className="py-3 px-4 uppercase font-semibold text-sm border-b">
                      Model
                    </th>
                    <th className="py-3 px-4 uppercase font-semibold text-sm border-b">
                      Passengers
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.name}>
                      <td className="py-2 px-4 border-b">{vehicle.name}</td>
                      <td className="py-2 px-4 border-b">{vehicle.model}</td>
                      <td className="py-2 px-4 border-b">
                        {vehicle.passengers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="h-20 flex items-center justify-center">
          <YellowButton handleClick={onClose} buttonName={"Cancel"} />
        </div>
      </div>
    </div>
  );
};
