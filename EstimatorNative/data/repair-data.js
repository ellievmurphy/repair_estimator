import Repair from "../models/repair";
import UNITS from "../models/repair-units";

export const REPAIRS = [
  // c1: Concrete Asphalt
  new Repair("r1", "c1", "Demo existing concrete or asphalt", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("r2", "c1", "Concrete installed for driveway/patio/sidewalk", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("r3", "c1", "Asphalt installed in driveway", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r4", "c1", "Gravel installed for driveway/sidewalk", false, 0.0, UNITS.SF, 2.0, 0),

  // c2: Decks
  new Repair("r5", "c2", "New deck 15'x15'(add permit if 30\" off ground", false, 0.0, UNITS.EA, 3000.0, 0),
  new Repair("r6", "c2", "New deck 10'x10'", false, 0.0, UNITS.EA, 2000.0, 0),
  new Repair("r7", "c2", "New deck - treated lumber", false, 0.0, UNITS.SF, 15.0, 0),
  new Repair("r8", "c2", "New deck - cedar material", false, 0.0, UNITS.SF, 19.0, 0),
  new Repair("r9", "c2", "Decking material replacement only", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("r10", "c2", "Sand & refinish deck only", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("r11", "c2", "New railings - wood", false, 0.0, UNITS.LF, 20.0, 0),
  new Repair("r12", "c2", "New railings - metal", false, 0.0, UNITS.LF, 40.0, 0),

  // c3: Exterior Painting
  new Repair("r13", "c3", "Painting both exterior & interior (whole property)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r14", "c3", "Painting exterior only", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("r15", "c3", "Paint trim only", false, 0.0, UNITS.LF, 1.65, 0),
  new Repair("r16", "c3", "Sand & refinish deck or paint deck", false, 0.0, UNITS.SF, 1.75, 0),
  new Repair("r17", "c3", "Paint fence", false, 0.0, UNITS.SF, 1.0, 0),
  new Repair("r18", "c3", "Paint detached garage", false, 0.0, UNITS.SF, 1.0, 0),

  // c4: Fence
  new Repair("r19", "c4", "Wood fencing", false, 0.0, UNITS.LF, 15.0, 0),
  new Repair("r20", "c4", "Wrought iron fencing", false, 0.0, UNITS.LF, 45.0, 0),
  new Repair("r21", "c4", "Chain-link fence", false, 0.0, UNITS.LF, 8.0, 0),

  // c5: Finish
  new Repair("r22", "c5", "Demo existing finishing material", false, 0.0, UNITS.SF, 0.75, 0),
  new Repair("r23", "c5", "Stucco", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("r24", "c5", "Wood siding", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("r25", "c5", "Vinyl siding", false, 0.0, UNITS.SF, 2.25, 0),
  new Repair("r26", "c5", "Fiber cement siding", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("r27", "c5", "Plywood panel siding", false, 0.0, UNITS.SF, 2.5, 0),
  new Repair("r28", "c5", "Patch an exterior section", false, 0.0, UNITS.LS, 500.0, 0),
  new Repair("r29", "c5", "Power wash exterior finish", false, 0.0, UNITS.SF, 0.75, 0),

  //c6: Garage
  new Repair("r30", "c6", "Garage Door Only - 1 Car - 9'x7' door, manual", false, 0.0, UNITS.EA, 775.0, 0),
  new Repair("r31", "c6", "Garage Door Only - 2 Car - 16' door, manual", false, 0.0, UNITS.EA, 100.0, 0),
  new Repair("r32", "c6", "Garage Door Opener Installed", false, 0.0, UNITS.EA, 225, 0),
  new Repair("r33", "c6", "Reroof detached garage (rip & replace)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r34", "c6", "Build new detached garage", false, 0.0, UNITS.SF, 30.0, 0),

  //c7: Landscaping
  new Repair("r35", "c7", "Full landscaping makeover large lot", false, 0.0, UNITS.LS, 5000.0, 0),
  new Repair("r36", "c7", "Full landscaping makeover medium lot", false, 0.0, UNITS.LS, 3500.0, 0),
  new Repair("r37", "c7", "Full landscaping makeover small lot", false, 0.0, UNITS.LS, 2000, 0),
  new Repair("r38", "c7", "Clean up landscaping & yard only", false, 0.0, UNITS.LS, 500.0, 0),
  new Repair("r39", "c7", "Tree removal (per tree)", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("r40", "c7", "Tree planting (per tree)", false, 0.0, UNITS.EA, 130.0, 0),

  //c8: Gutters
  new Repair("r41", "c8", "Gutters & downspouts - demo & install new (Flat Cost)", false, 0.0, UNITS.SF, 0.5, 0),
  new Repair("r42", "c8", "Gutters & downspouts - demo & install new (linear foot)", false, 0.0, UNITS.LF, 6.0, 0),
  
  //c9: Roof
  new Repair("r43", "c9", "Roof (rip and replace) - architectural shingle", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r44", "c9", "Rollover (add a layer of shingles) - architectural shingle", false, 0.0, UNITS.SF, 2.5, 0),
  new Repair("r45", "c9", "Roof Sheathing - plywood 1/2\" remove & install", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("r46", "c9", "Roof repair/patch (hard)", false, 0.0, UNITS.EA, 900.0, 0),
  new Repair("r47", "c9", "Roof repair/patch (easy)", false, 0.0, UNITS.EA, 600.0, 0),
  new Repair("r48", "c9", "Premium for 3 layer tear off", false, 0.0, UNITS.SF, 0.35, 0),
  new Repair("r49", "c9", "Premium for steep pitched roof", false, 0.0, UNITS.SF, 0.2, 0),
  new Repair("r50", "c9", "Fascia - demo & install new", false, 0.0, UNITS.LF, 3.0, 0),
  new Repair("r51", "c9", "Soffit - demo & install new", false, 0.0, UNITS.LF, 4.0, 0),

  //c10: Pergola
  new Repair("r52", "c10", "New pergola canopy 15'x15'", false, 0.0, UNITS.EA, 2500.0, 0),
  new Repair("r53", "c10", "New pergola canopy 10'x10'", false, 0.0, UNITS.EA, 2000.0, 0),

  //c11: Fence
  new Repair("r54", "c11", "Wood fencing", false, 0.0, UNITS.LF, 15.0, 0),
  new Repair("r55", "c11", "Wrought iron fencing", false, 0.0, UNITS.LF, 45.0, 0),
  new Repair("r56", "c11", "Chain-link fence", false, 0.0, UNITS.LF, 8.0, 0),

  //c12: Pool
  new Repair("r57", "c12", "Pool Completely Redone ($10k to $15k)", false, 0.0, UNITS.EA, 10000.0, 0),
  new Repair("r58", "c12", "Pool (redo plaster only)", false, 0.0, UNITS.EA, 4500.0, 0),

  //c13: Septic
  new Repair("r59", "c13", "Septic (all new system)", false, 0.0, UNITS.EA, 15000.0, 0),
  new Repair("r60", "c13", "Septic (new tank only)", false, 0.0, UNITS.EA, 5500.0, 0),
  new Repair("r61", "c13", "Septic (replace leach field only)", false, 0.0, UNITS.EA, 3000.0, 0),

  //c14: Interior Painting
  new Repair("r62", "c14", "Interior painting only", false, 0.0, UNITS.SF, 2.0, 0),
  new Repair("r63", "c14", "Add extra wall prep (damaged walls)", false, 0.0, UNITS.SF, 0.5, 0),

  //c15: Hardwood
  new Repair("r64", "c15", "Hardwood flooring - solid wood", false, 0.0, UNITS.SF, 7.0, 0),
  new Repair("r65", "c15", "Engineered hardwood flooring", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("r66", "c15", "Laminate hardwood flooring", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r67", "c15", "Sand & refinish existing hardwood flooring", false, 0.0, UNITS.SF, 2.0, 0),

  //c16: Carpet / Vinyl
  new Repair("r68", "c16", "Carpet", false, 0.0, UNITS.SF, 1.35, 0),
  new Repair("r69", "c16", "Vinyl or linoleum flooring", false, 0.0, UNITS.SF, 2.0, 0),

  //c17: Tiling
  new Repair("r70", "c17", "Ceramic floor tile - in kitchen", false, 0.0, UNITS.SF, 10.0, 0),
  new Repair("r71", "c17", "Backsplash wall tile - in kitchen", false, 0.0, UNITS.SF, 15.0, 0),
  new Repair("r72", "c17", "Ceramic floor tile - in bathrooms", false, 0.0, UNITS.SF, 8.0, 0),
  new Repair("r73", "c17", "Shower wall tile - in bathrooms (70 sf usually)", false, 0.0, UNITS.SF, 9.0, 0),
  new Repair("r74", "c17", "Shower accent wall tile - in bathrooms", false, 0.0, UNITS.SF, 16.0, 0),
  new Repair("r75", "c17", "Ceramic floor tile - other areas of house", false, 0.0, UNITS.SF, 8.0, 0),

  //c18: Kitchen (Grouped)
  new Repair("r76", "c18", "High end kitchen", false, 0.0, UNITS.EA, 12500.0, 0),
  new Repair("r77", "c18", "Median kitchen", false, 0.0, UNITS.EA, 10500.0, 0),
  new Repair("r78", "c18", "Low end kitchen", false, 0.0, UNITS.EA, 8500.0, 0),
  new Repair("r79", "c18", "Low end kitchen - refinish existing cabinets", false, 0.0, UNITS.EA, 6500.0, 0),
  new Repair("r80", "c18", "Kitchen extra custom items", false, 0.0, UNITS.EA, 500.0, 0),

  //c19: Appliances (Grouped)
  new Repair("r81", "c19", "Luxury home appliances", false, 0.0, UNITS.EA, 12000.0, 0),
  new Repair("r82", "c19", "High end home appliances", false, 0.0, UNITS.EA, 7000.0, 0),
  new Repair("r83", "c19", "Median price home appliances", false, 0.0, UNITS.EA, 4500.0, 0),
  new Repair("r84", "c19", "Low end home appliances", false, 0.0, UNITS.EA, 2000.0, 0),

  //c20: Kitchen (Item)
  new Repair("r85", "c20", "Cabinets", false, 0.0, UNITS.LF, 185.0, 0),
  new Repair("r86", "c20", "Countertops", false, 0.0, UNITS.SF, 65.0, 0),
  new Repair("r87", "c20", "Sink", false, 0.0, UNITS.EA, 350.0, 0),
  new Repair("r88", "c20", "Sink Faucet", false, 0.0, UNITS.EA, 350.0, 0),
  new Repair("r89", "c20", "Garbage Disposal", false, 0.0, UNITS.EA, 250.0, 0),
  new Repair("r90", "c20", "Refrigerator", false, 0.0, UNITS.EA, 1200.0, 0),
  new Repair("r91", "c20", "Range", false, 0.0, UNITS.EA, 850.0, 0),
  new Repair("r92", "c20", "Range Hood", false, 0.0, UNITS.EA, 400.0, 0),
  new Repair("r93", "c20", "Dishwasher", false, 0.0, UNITS.EA, 600.0, 0),
  new Repair("r94", "c20", "Microwave", false, 0.0, UNITS.EA, 350.0, 0),

  //c21: Bathroom (Grouped)
  new Repair("r95", "c21", "Luxury master bath - replace everything", false, 0.0, UNITS.EA, 9000.0, 0),
  new Repair("r96", "c21", "Master Bath - replace everything", false, 0.0, UNITS.EA, 5500.0, 0),
  new Repair("r97", "c21", "Secondary bath - replace everything", false, 0.0, UNITS.EA, 3000.0, 0),

  //c22: Bathroom (Item)
  new Repair("r98", "c22", "Vanity cabinet", false, 0.0, UNITS.EA, 700.0, 0),
  new Repair("r99", "c22", "Vanity countertop - granite or other hard surface", false, 0.0, UNITS.EA, 150.0, 0),
  new Repair("r100", "c22", "Vanity mirror", false, 0.0, UNITS.EA, 75.0, 0),
  new Repair("r101", "c22", "Sink", false, 0.0, UNITS.EA, 125.0, 0),
  new Repair("r102", "c22", "Sink Faucet", false, 0.0, UNITS.EA, 150.0, 0),
  new Repair("r103", "c22", "Toilet", false, 0.0, UNITS.EA, 200.0, 0),
  new Repair("r104", "c22", "Bathtub - fiberglass", false, 0.0, UNITS.EA, 450.0, 0),
  new Repair("r105", "c22", "Bathtub & shower surround - fiberglass", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("r106", "c22", "Shower stall & surround - fiberglass", false, 0.0, UNITS.EA, 400.0, 0),
  new Repair("r107", "c22", "Showerhead & faucet kit", false, 0.0, UNITS.EA, 210.0, 0),
  new Repair("r108", "c22", "Bathroom towel bar kit", false, 0.0, UNITS.EA, 75.0, 0),

  //c23: Framing
  new Repair("r109", "c23", "Vanity New construction framing- (includes walls, floors & roof)", false, 0.0, UNITS.SF, 30.0, 0),
  new Repair("r110", "c23", "Interior framing changes (non load barring)", false, 0.0, UNITS.SF, 15.0, 0),
  new Repair("r111", "c23", "Open load bearing/structural wall", false, 0.0, UNITS.EA, 1500.0, 0),
  new Repair("r112", "c23", "Subfloor put in (3/4\" plywood)", false, 0.0, UNITS.SF, 1.85, 0),

  //c24: Insulation
  new Repair("r113", "c24", "Wall insulation", false, 0.0, UNITS.SF, 1.0, 0),
  new Repair("r114", "c24", "Floor insulation", false, 0.0, UNITS.SF, 1.25, 0),
  new Repair("r115", "c24", "Attic insulation, blown-in", false, 0.0, UNITS.SF, 0.8, 0),

  //c25: Walls
  new Repair("r116", "c25", "Drywall, tape & skimcoat walls/ceilings in gutted house", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("r117", "c25", "Drywall, tape, & skimcoat a wall (1/2\" thick)", false, 0.0, UNITS.SF, 2.5, 0),
  new Repair("r118", "c25", "Drywall, tape, & skimcoat a ceiling (1/2\" thick)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r119", "c25", "Skimcoating/texturing walls and ceilings only", false, 0.0, UNITS.SF, 1.0, 0),
  new Repair("r120", "c25", "Patchwork section of a wall - (drywall, tape, & finish)", false, 0.0, UNITS.EA, 500.0, 0),

  //c26: Doors and Trim
  new Repair("r121", "c26", "New interior doors, closet doors, hardware, & trim (3000 sq ft house)", false, 0.0, UNITS.EA, 4000.0, 0),
  new Repair("r122", "c26", "New interior doors, closet doors, hardware, & trim (1500 sq ft house)", false, 0.0, UNITS.EA, 2000.0, 0),
  new Repair("r123", "c26", "Interior door - prehung hollow-core door", false, 0.0, UNITS.EA, 175.0, 0),
  new Repair("r124", "c26", "Interior sliding closet door", false, 0.0, UNITS.EA, 175.0, 0),
  new Repair("r125", "c26", "Exterior front door - single door w/ hardware & dead bolt", false, 0.0, UNITS.EA, 150.0, 0),
  new Repair("r126", "c26", "Exterior french patio door - double door", false, 0.0, UNITS.EA, 700.0, 0),
  new Repair("r127", "c26", "Exterior sliding glass door - double door", false, 0.0, UNITS.EA, 850.0, 0),
  new Repair("r128", "c26", "Crown molding", false, 0.0, UNITS.LF, 3.75, 0),
  new Repair("r129", "c26", "New baseboard trim", false, 0.0, UNITS.LF, 2.75, 0),
  new Repair("r130", "c26", "Raised panel wood wainscoting", false, 0.0, UNITS.LF, 17.5, 0),

  //c27: Basement
  new Repair("r131", "c27", "Pour concrete floor in basement", false, 0.0, UNITS.SY, 175.0, 0),
  new Repair("r132", "c27", "Seal basement", false, 0.0, UNITS.EA, 250.0, 0),
  new Repair("r133", "c27", "Install sump pump", false, 0.0, UNITS.EA, 1000.0, 0),
  new Repair("r134", "c27", "Install french drains (estimate depending on condition - L x W)", false, 0.0, UNITS.SF, 125.0, 0),
  new Repair("r135", "c27", "Reframe support beam", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("r136", "c27", "Replace stairs", false, 0.0, UNITS.EA, 1000.0, 0),

  //c28: Masonry
  new Repair("r137", "c28", "Fireplace/chimney, brick/stone - replace existing", false, 0.0, UNITS.LS, 5000.0, 0),
  new Repair("r138", "c28", "Concrete block", false, 0.0, UNITS.SF, 6.0, 0),
  new Repair("r139", "c28", "Stone", false, 0.0, UNITS.SF, 18.0, 0),
  new Repair("r140", "c28", "Brick", false, 0.0, UNITS.SF, 11.5, 0),
  new Repair("r141", "c28", "Tuckpoint brick", false, 0.0, UNITS.SF, 3.5, 0),
  new Repair("r142", "c28", "Power wash exterior masonry", false, 0.0, UNITS.SF, 0.75, 0),

  //c29: Windows
  new Repair("r143", "c29", "Windows, vinyl, average size", false, 0.0, UNITS.EA, 300.0, 0),
  new Repair("r144", "c29", "Windows, wood, restore existing wood (historical)", false, 0.0, UNITS.EA, 450.0, 0),
  new Repair("r145", "c29", "Window, large bay window - remove & replace", false, 0.0, UNITS.EA, 850.0, 0),

  //c30: Foundation
  new Repair("r146", "c30", "Excavation - dig footing trenching", false, 0.0, UNITS.LF, 20.0, 0),
  new Repair("r147", "c30", "Excavation - backfill of trenches", false, 0.0, UNITS.LF, 10.0, 0),
  new Repair("r148", "c30", "New foundation - pour concrete footing", false, 0.0, UNITS.LF, 30.0, 0),
  new Repair("r149", "c30", "New foundation - pour concrete slab on grade (4\" thick)", false, 0.0, UNITS.SF, 4.0, 0),
  new Repair("r150", "c30", "New foundation - pour stem wall for single story house", false, 0.0, UNITS.LF, 100.0, 0),
  new Repair("r151", "c30", "Repair existing foundation -  ($10k min - get quote)", false, 0.0, UNITS.EA, 10000.0, 0),
  new Repair("r152", "c30", "Repair existing foundation -  stair mud jacking (will vary)", false, 0.0, UNITS.EA, 800.0, 0),
  new Repair("r153", "c30", "Repair existing foundation - bowing walls support with I beams", false, 0.0, UNITS.EA, 800.0, 0),
  new Repair("r154", "c30", "Repair existing foundation - settled walls support w/piers", false, 0.0, UNITS.EA, 1200.0, 0),

  //c31: HVAC
  new Repair("r155", "c31", "Gas fired forced hot air heating system, ac system, & ductwork", false, 0.0, UNITS.EA, 6000.0, 0),
  new Repair("r156", "c31", "Gas fired forced hot air heating system & ductwork", false, 0.0, UNITS.EA, 4000.0, 0),
  new Repair("r157", "c31", "Gas fired forced hot air unit only", false, 0.0, UNITS.EA, 1700.0, 0),
  new Repair("r158", "c31", "Air conditioning unit only", false, 0.0, UNITS.EA, 2000.0, 0),
  new Repair("r159", "c31", "Replace forced air ductwork only", false, 0.0, UNITS.EA, 2300.0, 0),
  new Repair("r160", "c31", "Replace boiler & hot water baseboard system", false, 0.0, UNITS.EA, 6500.0, 0),
  new Repair("r161", "c31", "Replace boiler unit only", false, 0.0, UNITS.EA, 3000.0, 0),
  new Repair("r162", "c31", "Wall heater (install new or remove & replace)", false, 0.0, UNITS.EA, 600.0, 0),
  new Repair("r163", "c31", "Service heating & cooling system only", false, 0.0, UNITS.EA, 500.0, 0),

  //c32: Plumbing
  new Repair("r164", "c32", "New plumbing system in entire house (1,500 sq. ft 3/2 house)", false, 0.0, UNITS.EA, 7000.0, 0),
  new Repair("r165", "c32", "Replace tankless hot water heater", false, 0.0, UNITS.EA, 1500.0, 0),
  new Repair("r166", "c32", "Replace gas hot water heater - 40 gallon", false, 0.0, UNITS.EA, 1000.0, 0),
  
  //c33: Electrical
  new Repair("r167", "c33", "Rewire entire house, new panel, & lighting fixtures (1,500 sqft)", false, 0.0, UNITS.EA, 7000.0, 0),
  new Repair("r168", "c33", "Basic electrical work for house & lighting fixtures (1500 sq. ft)", false, 0.0, UNITS.EA, 3000.0, 0),
  new Repair("r169", "c33", "Replace electrical panel only", false, 0.0, UNITS.EA, 2000.0, 0),
  new Repair("r170", "c33", "Replace all lighting fixtures only (1500 sq. ft. house)", false, 0.0, UNITS.EA, 2000.0, 0),

  //c34: Demo & Dumpsters
  new Repair("r171", "c34", "Demolition work (cost to fill one 40 yd dumpster)", false, 0.0, UNITS.EA, 500.0, 0),
  new Repair("r172", "c34", "Dumpster rental (40 yard)", false, 0.0, UNITS.EA, 500.0, 0),
  
  //c35: Termites/Abatement
  new Repair("r173", "c35", "Termite fumigation & treatment", false, 0.0, UNITS.LS, 1000.0, 0),
  new Repair("r174", "c35", "Mold removal & abatement - minimum", false, 0.0, UNITS.LS, 2000.0, 0),
  new Repair("r175", "c35", "Asbestos removal & abatement - minimum", false, 0.0, UNITS.LS, 1500.0, 0),
  
  //c36: Permits
  new Repair("r176", "c36", "Construction permits for remodel (city)", false, 0.0, UNITS.EA, 1500.0, 0),
  new Repair("r177", "c36", "Construction permits for addition (city)", false, 0.0, UNITS.EA, 5000.0, 0),
  new Repair("r178", "c36", "Construction permits for deck (city)", false, 0.0, UNITS.EA, 600.0, 0),
  new Repair("r179", "c36", "Construction permits over the counter", false, 0.0, UNITS.EA, 750.0, 0),
  new Repair("r180", "c36", "Construction permits for full submittal (county)", false, 0.0, UNITS.EA, 1500.0, 0),
  new Repair("r181", "c36", "Construction permits for addition (county)", false, 0.0, UNITS.EA, 5000.0, 0),
  new Repair("r182", "c36", "Construction permits for deck (county)", false, 0.0, UNITS.EA, 600.0, 0),

  //c37: Extra
  new Repair("r183", "c37", "Extra", false, 0.0, UNITS.EA, 0.0, 0),

  //c38: Contingency
  new Repair("r184", "c38", "Contingency", false, 0.0, UNITS.EA, 10.0, 0),

];
