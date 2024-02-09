import Category from "../models/category";
import { REPAIRS } from "./repair-data";


export const CATEGORIES = [
    new Category('c1', "Concrete Asphalt", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c1'), false, "exterior"),
    new Category('c2', "Decks", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c2'), false, "exterior"),
];

export const EXTERIOR = { type: "Exterior", data: [CATEGORIES.filter((category) => category.type === "exterior")] };
