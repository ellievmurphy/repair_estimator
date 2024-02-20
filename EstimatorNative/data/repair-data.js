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

  //c7: Landscaping
  new Repair("c7", "Full landscaping makeover large lot", false, 0.0, UNITS.LS, 5000.0, 0),
  new Repair("c7", "Full landscaping makeover medium lot", false, 0.0, UNITS.LS, 3500.0, 0),
  new Repair("c7", "Full landscaping makeover small lot", false, 0.0, UNITS.LS, 2000, 0),
  new Repair("c7", "Clean up landscaping & yard only", false, 0.0, UNITS.LS, 500.0, 0),
  new Repair("c7", "Tree removal (per tree)", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("c7", "Tree planting (per tree)", false, 0.0, UNITS.EA, 130.0, 0),

  //c8: Gutters
  new Repair("c8", "Gutters & downspouts - demo & install new (Flat Cost)", false, 0.0, UNITS.SF, 0.5, 0),
  new Repair("c8", "Gutters & downspouts - demo & install new (linear foot)", false, 0.0, UNITS.LF, 6.0, 0),
  
  //c9: Roof
  new Repair("c9", "Roof (rip and replace) - architectural shingle", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c9", "Rollover (add a layer of shingles) - architectural shingle", false, 0.0, UNITS.SF, 2.5, 0),
  new Repair("c9", "Roof Sheathing - plywood 1/2\" remove & install", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("c9", "Roof repair/patch (hard)", false, 0.0, UNITS.EA, 900.0, 0),
  new Repair("c9", "Roof repair/patch (easy)", false, 0.0, UNITS.EA, 600.0, 0),
  new Repair("c9", "Premium for 3 layer tear off", false, 0.0, UNITS.SF, 0.35, 0),
  new Repair("c9", "Premium for steep pitched roof", false, 0.0, UNITS.SF, 0.2, 0),
  new Repair("c9", "Fascia - demo & install new", false, 0.0, UNITS.LF, 3.0, 0),
  new Repair("c9", "Soffit - demo & install new", false, 0.0, UNITS.LF, 4.0, 0),

  //c10: Pergola
  new Repair("c10", "New pergola canopy 15'x15'", false, 0.0, UNITS.EA, 2500.0, 0),
  new Repair("c10", "New pergola canopy 10'x10'", false, 0.0, UNITS.EA, 2000.0, 0),

  //c11: Fence
  new Repair("c11", "Wood fencing", false, 0.0, UNITS.LF, 15.0, 0),
  new Repair("c11", "Wrought iron fencing", false, 0.0, UNITS.LF, 45.0, 0),
  new Repair("c11", "Chain-link fence", false, 0.0, UNITS.LF, 8.0, 0),

  //c12: Pool
  new Repair("c12", "Pool Completely Redone ($10k to $15k)", false, 0.0, UNITS.EA, 10000.0, 0),
  new Repair("c12", "Pool (redo plaster only)", false, 0.0, UNITS.EA, 4500.0, 0),

  //c13: Septic
  new Repair("c13", "Septic (all new system)", false, 0.0, UNITS.EA, 15000.0, 0),
  new Repair("c13", "Septic (new tank only)", false, 0.0, UNITS.EA, 5500.0, 0),
  new Repair("c13", "Septic (replace leach field only)", false, 0.0, UNITS.EA, 3000.0, 0),

  //c14: Interior Painting
  new Repair("c14", "Interior painting only", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("c14", "Add extra wall prep (damaged walls)", false, 0.0, UNITS.SF, 0.5, 0),

  //c15: Hardwood
  new Repair("c15", "Hardwood flooring - solid wood", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("c15", "Engineered hardwood flooring", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("c15", "Laminate hardwood flooring", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c15", "Sand & refinish existing hardwood flooring", false, 0.0, UNITS.SF, 2.0, 0),

  //c16: Carpet / Vinyl
  new Repair("c16", "Carpet", false, 0.0, UNITS.SF, 1.35, 0),
  new Repair("c16", "Vinyl or linoleum flooring", false, 0.0, UNITS.SF, 2.0, 0),

  //c17: Tiling
  new Repair("c17", "Ceramic floor tile - in kitchen", false, 0.0, UNITS.SF, 10.0, 0),
  new Repair("c17", "Backsplash wall tile - in kitchen", false, 0.0, UNITS.SF, 15.0, 0),
  new Repair("c17", "Ceramic floor tile - in bathrooms", false, 0.0, UNITS.SF, 8.0, 0),
  new Repair("c17", "Shower wall tile - in bathrooms (70 sf usually)", false, 0.0, UNITS.SF, 9.0, 0),
  new Repair("c17", "Shower accent wall tile - in bathrooms", false, 0.0, UNITS.SF, 16.0, 0),
  new Repair("c17", "Ceramic floor tile - other areas of house", false, 0.0, UNITS.SF, 8.0, 0),

  //c18: Kitchen (Grouped)
  new Repair("c18", "High end kitchen", false, 0.0, UNITS.EA, 12500.0, 0),
  new Repair("c18", "Median kitchen", false, 0.0, UNITS.EA, 10500.0, 0),
  new Repair("c18", "Low end kitchen", false, 0.0, UNITS.EA, 8500.0, 0),
  new Repair("c18", "Low end kitchen - refinish existing cabinets", false, 0.0, UNITS.EA, 6500.0, 0),
  new Repair("c18", "Kitchen extra custom items", false, 0.0, UNITS.EA, 500.0, 0),

  //c19: Appliances (Grouped)
  new Repair("c19", "Luxury home appliances", false, 0.0, UNITS.EA, 12000.0, 0),
  new Repair("c19", "High end home appliances", false, 0.0, UNITS.EA, 7000.0, 0),
  new Repair("c19", "Median price home appliances", false, 0.0, UNITS.EA, 4500.0, 0),
  new Repair("c19", "Low end home appliances", false, 0.0, UNITS.EA, 2000.0, 0),

  //c20: Kitchen (Item)
  new Repair("c20", "Cabinets", false, 0.0, UNITS.LF, 185.0, 0),
  new Repair("c20", "Countertops", false, 0.0, UNITS.SF, 65.0, 0),
  new Repair("c20", "Sink", false, 0.0, UNITS.EA, 350.0, 0),
  new Repair("c20", "Sink Faucet", false, 0.0, UNITS.EA, 350.0, 0),
  new Repair("c20", "Garbage Disposal", false, 0.0, UNITS.EA, 250.0, 0),
  new Repair("c20", "Refrigerator", false, 0.0, UNITS.EA, 1200.0, 0),
  new Repair("c20", "Range", false, 0.0, UNITS.EA, 850.0, 0),
  new Repair("c20", "Range Hood", false, 0.0, UNITS.EA, 400.0, 0),
  new Repair("c20", "Dishwasher", false, 0.0, UNITS.EA, 600.0, 0),
  new Repair("c20", "Microwave", false, 0.0, UNITS.EA, 350.0, 0),

  //c21: Bathroom (Grouped)
  new Repair("c21", "Luxury master bath - replace everything", false, 0.0, UNITS.EA, 9000.0, 0),
  new Repair("c21", "Master Bath - replace everything", false, 0.0, UNITS.EA, 5500.0, 0),
  new Repair("c21", "Secondary bath - replace everything", false, 0.0, UNITS.EA, 3000.0, 0),

  //c22: Bathroom (Item)
  new Repair("c22", "Vanity cabinet", false, 0.0, UNITS.EA, 700.0, 0),
  new Repair("c22", "Vanity countertop - granite or other hard surface", false, 0.0, UNITS.EA, 150.0, 0),
  new Repair("c22", "Vanity mirror", false, 0.0, UNITS.EA, 75.0, 0),
  new Repair("c22", "Sink", false, 0.0, UNITS.EA, 125.0, 0),
  new Repair("c22", "Sink Faucet", false, 0.0, UNITS.EA, 150.0, 0),
  new Repair("c22", "Toilet", false, 0.0, UNITS.EA, 200.0, 0),
  new Repair("c22", "Bathtub - fiberglass", false, 0.0, UNITS.EA, 450.0, 0),
  new Repair("c22", "Bathtub & shower surround - fiberglass", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("c22", "Shower stall & surround - fiberglass", false, 0.0, UNITS.EA, 400.0, 0),
  new Repair("c22", "Showerhead & faucet kit", false, 0.0, UNITS.EA, 210.0, 0),
  new Repair("c22", "Bathroom towel bar kit", false, 0.0, UNITS.EA, 75.0, 0),

  //c23: Framing
  new Repair("c23", "Vanity New construction framing- (includes walls, floors & roof)", false, 0.0, UNITS.SF, 30.0, 0),
  new Repair("c23", "Interior framing changes (non load barring)", false, 0.0, UNITS.SF, 15.0, 0),
  new Repair("c23", "Open load bearing/structural wall", false, 0.0, UNITS.EA, 1500.0, 0),
  new Repair("c23", "Subfloor put in (3/4\" plywood)", false, 0.0, UNITS.SF, 1.85, 0),

  //c24: Insulation
  new Repair("c24", "Wall insulation", false, 0.0, UNITS.SF, 1.0, 0),
  new Repair("c24", "Floor insulation", false, 0.0, UNITS.SF, 1.25, 0),
  new Repair("c24", "Attic insulation, blown-in", false, 0.0, UNITS.SF, 0.8, 0),

  //c25: Walls
  new Repair("c25", "Drywall, tape & skimcoat walls/ceilings in gutted house", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("c25", "Drywall, tape, & skimcoat a wall (1/2\" thick)", false, 0.0, UNITS.SF, 2.5, 0),
  new Repair("c25", "Drywall, tape, & skimcoat a ceiling (1/2\" thick)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c25", "Skimcoating/texturing walls and ceilings only", false, 0.0, UNITS.SF, 1.0, 0),
  new Repair("c25", "Patchwork section of a wall - (drywall, tape, & finish)", false, 0.0, UNITS.EA, 500.0, 0),

  //c26: Doors and Trim
  new Repair("c26", "New interior doors, closet doors, hardware, & trim (3000 sq ft house)", false, 0.0, UNITS.EA, 4000.0, 0),
  new Repair("c26", "New interior doors, closet doors, hardware, & trim (1500 sq ft house)", false, 0.0, UNITS.EA, 2000.0, 0),
  new Repair("c26", "Interior door - prehung hollow-core door", false, 0.0, UNITS.EA, 175.0, 0),
  new Repair("c26", "Interior sliding closet door", false, 0.0, UNITS.EA, 175.0, 0),
  new Repair("c26", "Exterior front door - single door w/ hardware & dead bolt", false, 0.0, UNITS.EA, 150.0, 0),
  new Repair("c26", "Exterior french patio door - double door", false, 0.0, UNITS.EA, 700.0, 0),
  new Repair("c26", "Exterior sliding glass door - double door", false, 0.0, UNITS.EA, 850.0, 0),
  new Repair("c26", "Crown molding", false, 0.0, UNITS.LF, 3.75, 0),
  new Repair("c26", "New baseboard trim", false, 0.0, UNITS.LF, 2.75, 0),
  new Repair("c26", "Raised panel wood wainscoting", false, 0.0, UNITS.LF, 17.5, 0),

  //c27: Basement
  new Repair("c27", "Pour concrete floor in basement", false, 0.0, UNITS.SY, 175.0, 0),
  new Repair("c27", "Seal basement", false, 0.0, UNITS.EA, 250.0, 0),
  new Repair("c27", "Install sump pump", false, 0.0, UNITS.EA, 1000.0, 0),
  new Repair("c27", "Install french drains (estimate depending on condition - L x W)", false, 0.0, UNITS.SF, 125.0, 0),
  new Repair("c27", "Reframe support beam", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("c27", "Replace stairs", false, 0.0, UNITS.EA, 1000.0, 0),

  //c28: Masonry
  new Repair("c28", "Fireplace/chimney, brick/stone - replace existing", false, 0.0, UNITS.LS, 5000.0, 0),
  new Repair("c28", "Concrete block", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("c28", "Stone", false, 0.0, UNITS.SF, 18.0, 0),
  new Repair("c28", "Brick", false, 0.0, UNITS.SF, 11.5, 0),
  new Repair("c28", "Tuckpoint brick", false, 0.0, UNITS.SF, 3.5, 0),
  new Repair("c28", "Power wash exterior masonry", false, 0.0, UNITS.SF, 0.75, 0),

  //c29: Windows
  new Repair("c29", "Windows, vinyl, average size", false, 0.0, UNITS.EA, 300.0, 0),
  new Repair("c29", "Windows, wood, restore existing wood (historical)", false, 0.0, UNITS.EA, 450.0, 0),
  new Repair("c29", "Window, large bay window - remove & replace", false, 0.0, UNITS.EA, 850.0, 0),

  //c30: Foundation
  new Repair("c30", "Excavation - dig footing trenching", false, 0.0, UNITS.LF, 20.0, 0),
  new Repair("c30", "Excavation - backfill of trenches", false, 0.0, UNITS.LF, 10.0, 0),
  new Repair("c30", "New foundation - pour concrete footing", false, 0.0, UNITS.LF, 30.0, 0),
  new Repair("c30", "New foundation - pour concrete slab on grade (4\" thick)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("c30", "New foundation - pour stem wall for single story house", false, 0.0, UNITS.LF, 100.0, 0),
  new Repair("c30", "Repair existing foundation -  ($10k min - get quote)", false, 0.0, UNITS.EA, 10000.0, 0),
  new Repair("c30", "Repair existing foundation -  stair mud jacking (will vary)", false, 0.0, UNITS.EA, 800.0, 0),
  new Repair("c30", "Repair existing foundation - bowing walls support with I beams", false, 0.0, UNITS.EA, 800.0, 0),
  new Repair("c30", "Repair existing foundation - settled walls support w/piers", false, 0.0, UNITS.EA, 1200.0, 0),

];
