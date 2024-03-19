import Category from "../models/category";
import { REPAIRS } from "./repair-data";


const CATEGORIES = [
    new Category('c1', "Concrete/Asphalt", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c1'), false, "exterior", []),
    new Category('c2', "Decks", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c2'), false, "exterior", []),
    new Category('c3', "Exterior Painting", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c3'), false, "exterior", []),
    new Category('c4', "Fence", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c4'), false, "exterior", []),
    new Category('c5', "Finish", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c5'), false, "exterior", []),
    new Category('c6', "Garage", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c6'), false, "exterior", []),
    new Category('c7', "Landscaping", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c7'), false, "exterior", []),
    new Category('c8', "Gutters", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c8'), false, "exterior", []),
    new Category('c9', "Roof", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c9'), false, "exterior", []),
    new Category('c10', "Pergola", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c10'), false, "exterior", []),
    new Category('c11', "Fence", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c11'), false, "exterior", []),
    new Category('c12', "Pool", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c12'), false, "exterior", []),
    new Category('c13', "Septic", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c13'), false, "exterior", []),
    new Category('c28', "Masonry", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c28'), false, "exterior", []),
    new Category('c29', "Windows", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c29'), false, "exterior", []),
    
    new Category('c14', "Interior Painting", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c14'), false, "interior", []),
    new Category('c15', "Hardwood", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c15'), false, "interior", []),
    new Category('c16', "Carpet/Vinyl", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c16'), false, "interior", []),
    new Category('c17', "Tiling", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c17'), false, "interior", []),
    new Category('c18', "Kitchen (Grouped)", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c18'), false, "interior", []),
    new Category('c19', "Appliances (Grouped)", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c19'), false, "interior", []),
    new Category('c20', "Kitchen (Itemized)", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c20'), false, "interior", []),
    new Category('c21', "Bathroom (Grouped)", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c21'), false, "interior", []),
    new Category('c22', "Bathroom (Itemized)", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c22'), false, "interior", []),
    new Category('c23', "Framing", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c23'), false, "interior", []),
    new Category('c24', "Insulation", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c24'), false, "interior", []),
    new Category('c25', "Walls", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c25'), false, "interior", []),
    new Category('c26', "Doors and Trim", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c26'), false, "interior", []),
    new Category('c27', "Basement", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c27'), false, "interior", []),
    new Category('c30', "Foundation", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c30'), false, "interior", []),

    new Category('c31', "HVAC", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c31'), false, "mechanicals", []),
    new Category('c32', "Plumbing", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c32'), false, "mechanicals", []),
    new Category('c33', "Electrical", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c33'), false, "mechanicals", []),

    new Category('c34', "Demo & Dumpsters", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c34'), false, "other", []),
    new Category('c35', "Termites/Abatement", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c35'), false, "other", []),
    new Category('c36', "Permits", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c36'), false, "other", []),
    new Category('c37', "Extra", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c37'), false, "other", []),
    new Category('c38', "Contingency", 0.0, REPAIRS.filter((repair) => repair.categoryId === 'c38'), false, "other", []),

];

const EXTERIOR = [{ type: "Exterior", data: CATEGORIES.filter((category) => category.type === "exterior") }];
const INTERIOR = [{ type: "Interior", data: CATEGORIES.filter((category) => category.type === "interior") }];
const MECHANICALS = [{ type: "Mechanicals", data: CATEGORIES.filter((category) => category.type === "mechanicals") }];
const OTHER = [{ type: "Other", data: CATEGORIES.filter((category) => category.type === "other") }];

export {EXTERIOR, INTERIOR, MECHANICALS, OTHER, CATEGORIES};
