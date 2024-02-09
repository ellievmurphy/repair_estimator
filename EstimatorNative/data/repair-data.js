import Repair from "../models/repair";
import UNITS from "../models/repair-units";

export const REPAIRS = [
  // c1: Concrete Asphalt
  new Repair("c1", "Demo existing concrete or asphalt", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("c1", "Concrete installed for driveway/patio/sidewalk", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("c1", "Asphalt installed in driveway", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c1", "Gravel installed for driveway/sidewalk", false, 0.0, UNITS.SF, 2.0, 0),

  // c2: Decks
  new Repair("c2", "New deck 15'x15'(add permit if 30\" off ground", false, 0.0, UNITS.EA, 3000.0, 0),
  new Repair("c2", "New deck 10'x10'", false, 0.0, UNITS.EA, 2000.0, 0),
  new Repair("c2", "New deck - treated lumber", false, 0.0, UNITS.SF, 15.0, 0),
  new Repair("c2", "New deck - cedar material", false, 0.0, UNITS.SF, 19.0, 0),
  new Repair("c2", "Decking material replacement only", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("c2", "Sand & refinish deck only", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("c2", "New railings - wood", false, 0.0, UNITS.LF, 20.0, 0),
  new Repair("c2", "New railings - metal", false, 0.0, UNITS.LF, 40.0, 0),

  // c3: Exterior Painting
  new Repair("c3", "Painting both exterior & interior (whole property)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c3", "Painting exterior only", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("c3", "Paint trim only", false, 0.0, UNITS.LF, 1.65, 0),
  new Repair("c3", "Sand & refinish deck or paint deck", false, 0.0, UNITS.SF, 1.75, 0),
  new Repair("c3", "Paint fence", false, 0.0, UNITS.SF, 1.0, 0),
  new Repair("c3", "Paint detached garage", false, 0.0, UNITS.SF, 1.0, 0),

  // c4: Fence
  new Repair("c4", "Wood fencing", false, 0.0, UNITS.LF, 15.0, 0),
  new Repair("c4", "Wrought iron fencing", false, 0.0, UNITS.LF, 45.0, 0),
  new Repair("c4", "Chain-link fence", false, 0.0, UNITS.LF, 8.0, 0),

  // c5: Finish
  new Repair("c5", "Demo existing finishing material", false, 0.0, UNITS.SF, 0.75, 0),
  new Repair("c5", "Stucco", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("c5", "Wood siding", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("c5", "Vinyl siding", false, 0.0, UNITS.SF, 2.25, 0),
  new Repair("c5", "Fiber cement siding", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("c5", "Plywood panel siding", false, 0.0, UNITS.SF, 2.5, 0),
  new Repair("c5", "Patch an exterior section", false, 0.0, UNITS.LS, 500.0, 0),
  new Repair("c5", "Power wash exterior finish", false, 0.0, UNITS.SF, 0.75, 0),

  //c6: Garage
  new Repair("c6", "Garage Door Only - 1 Car - 9'x7' door, manual", false, 0.0, UNITS.EA, 775.0, 0),
  new Repair("c6", "Garage Door Only - 2 Car - 16' door, manual", false, 0.0, UNITS.EA, 100.0, 0),
  new Repair("c6", "Garage Door Opener Installed", false, 0.0, UNITS.EA, 225, 0),
  new Repair("c6", "Reroof detached garage (rip & replace)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c6", "Build new detached garage", false, 0.0, UNITS.SF, 30.0, 0),
];
