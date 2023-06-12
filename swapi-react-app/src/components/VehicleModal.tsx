import React, { useEffect, useState } from "react";
import { Vehicle } from "../types/vehicleType";
import { useNavigate } from "react-router-dom";
import { getVehicleList } from "../api/vehicle-list-api";


export const VehicleModal = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([] as Vehicle[]);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        getVehicleList().then((res) => {
            setVehicles(res.data);
        });
    });

    const handleCancelClick = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
            <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
            <div className="px-12 py-5">
                <h2 className="text-gray-800 text-3xl font-semibold">Vehicles</h2>
            </div>
            <div className="bg-gray-200 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Model</th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Passengers</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                {vehicles.map((row) => (
                    <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.model}</td>
                    <td>{row.passengers}</td>
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
        </div>
        </div>
);
};