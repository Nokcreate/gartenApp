import { Plant } from "../model/Plant";

export class PlantService {
  private static instance: PlantService;
  private plants: Plant[] = [];

  private constructor() {}

  public static getInstance(): PlantService {
    if (!PlantService.instance) {
      PlantService.instance = new PlantService();
    }
    return PlantService.instance;
  }

  addPlant(plant: Plant): void {
    this.plants.push(plant);
  }

  getPlants(): Plant[] {
    return this.plants;
  }
}