import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Plant {
  name: string;
  description: string;
  imageUri: string;
}

interface PlantContextType {
  plants: Plant[];
  addPlant: (plant: Plant) => void;
}

const defaultContextValue: PlantContextType = {
  plants: [],
  addPlant: () => {}
};

const PlantContext = createContext(defaultContextValue);

export const PlantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [plants, setPlants] = useState<Plant[]>([]);

  const addPlant = (plant: Plant) => {
    setPlants(prevPlants => [...prevPlants, plant]);
  };

  return (
    <PlantContext.Provider value={{ plants, addPlant }}>
      {children}
    </PlantContext.Provider>
  );
};

export const usePlants = () => useContext(PlantContext);
