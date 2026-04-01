import FG_AD_ISI from "../assets/images/Products/FG_AD_ISI.jpg"
import FG_AD_10PC from "../assets/images/Products/FG_AD_10PC.jpg"
import FG_WAS_1_12 from "../assets/images/Products/FG_WAS_1_12.jpg"
import FG_OR_23_2 from "../assets/images/Products/FG_OR_23_2.jpg"
import FG_WAS_1_2 from "../assets/images/Products/FG_WAS_1_2.jpg"
import FG_VW_CONC from "../assets/images/Products/FG_VW_CONC.jpg"
import FG_WAS_TW from "../assets/images/Products/FG_WAS_TW.png"
import FG_WAS_PL from "../assets/images/Products/FG_WAS_PL.jpg"
import FG_GAS_DFMB from "../assets/images/Products/FG_GAS_DFMB.jpg"
import FG_WAS_CP from "../assets/images/Products/FG_WAS_CP.jpg"
import FG_DP_SIL from "../assets/images/Products/FG_DP_SIL.jpg"
import FG_OR_53_3 from "../assets/images/Products/FG_OR_53_3.jpg"
import FG_OR_BEND from "../assets/images/Products/FG_OR_BEND.jpg"
import FG_WAS_CP_BLUE from "../assets/images/Products/FG_WAS_CP_BLUE.jpg"
import FG_BOLT_8PC from "../assets/images/Products/FG_BOLT_8PC.jpg"
import FG_PLUG_AVP from "../assets/images/Products/FG_PLUG_AVP.jpg"
import FG_TKK_CONC from "../assets/images/Products/FG_TKK_CONC.jpg"
import FG_WAS_BVPS_SILI from "../assets/images/Products/FG_WAS_BVPS_SILI.jpg"
import FG_CGAS_BIG from "../assets/images/Products/FG_CGAS_BIG.jpg"


export const products = [
  // ISI Adapter
  {
    id: "FG_AD_ISI",
    // Basic Info
    name: "Rubber Sleeve Gasket",
    shortDescription:
      "High-performance rubber grommet designed for secure pipe sealing, vibration absorption, and leak-proof performance in fluid and mechanical systems.",
    image: FG_AD_ISI,
    // Key Features
    features: [
      "Excellent water and weather resistance",
      "Good flexibility and compression recovery",
      "Strong sealing and vibration absorption",
      "Resistant to aging and ozone",
      "Easy installation and long service life",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "55 ± 5 Shore A",
        tensileStrength: "7 – 10 MPa",
        elongation: "250 – 350%",
        temperatureRange: "-30°C to +110°C",
        density: "1.2 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      { 
        id : "Automobile",
        name: "Automobile",
        applications: [
          "Cable and pipe pass-through sealing",
          "Vibration damping in engine components",
        ],
      },
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Pipe insertion sealing",
          "Leak-proof joints in plumbing systems",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },

  // FG_AD_10PC
  {
    id: "FG_AD_10PC",
    // Basic Info
    name: "Rubber Inlet Gasket",
    shortDescription:
      "Durable rubber inlet gasket engineered for tight pipe sealing, offering excellent resistance to leakage, vibration, and environmental exposure.",
    image: FG_AD_10PC,
    // Key Features
    features: [
      "Strong sealing capability under compression",
      "Excellent resistance to water and chemicals",
      "Durable and long-lasting performance",
      "Good flexibility with dimensional stability",
      "Resistant to aging and environmental exposure",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "60 ±5 Shore A",
        tensileStrength: "8 – 11 MPa",
        elongation: "250 – 300%",
        temperatureRange: "-30°C to +120°C",
        density: "1.2 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials:  ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      { 
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Pipe sealing in drainage and water systems",
          "Leak-proof joints in fittings and connectors",
        ],
      },
      { 
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing of low-pressure pipelines",
          "Protection against fluid leakage and dust ingress",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },

  // FG_WAS_1_1/2
  {
    id: "FG_WAS_1_1/2",
    // Basic Info
    name: "Rubber Gasket Washer (1-1/2 Inches)",
    shortDescription:
      "Precision-cut Rubber Gasket Washer designed for uniform sealing in bolted joints, preventing leakage in fluid and air systems.",
    image: FG_WAS_1_12,
    // Key Features
    features: [
      "Uniform surface sealing performance",
      "Resistant to water and mild chemicals",
      "Good compression and recovery properties",
      "Easy to install and replace",
      "Durable under continuous pressure and vibration",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "60 ±5 Shore A",
        tensileStrength: "7 – 10 MPa",
        elongation: "200 – 300%",
        temperatureRange: "-30°C to +110°C",
        density: "1.20 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id : "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in pipe flange connections",
          "Leak prevention in water fittings",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in low-pressure joints",
          "Used in equipment and pipeline connections",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },
  
  // FG_OR_23_2
  {
    id: "FG_OR_23_2",
    // Basic Info
    name: "Rubber O-Ring Seal (23-2 Inches)",
    shortDescription:
      "Precision-molded rubber O-ring designed for reliable sealing in static and dynamic applications, preventing leakage of fluids and gases under pressure.",
    image: FG_OR_23_2,
    // Key Features
    features: [
      "Excellent sealing under pressure",
      "High elasticity and flexibility",
      "Resistant to oil, water, and chemicals (based on material)",
      "Long service life with low maintenance",
      "Suitable for static and dynamic applications",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "60 ±5 Shore A",
        tensileStrength: "10 – 15 MPa",
        elongation: "300 – 450%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","Natural Rubber","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in taps, valves, and pipe fittings",
          "Leak prevention in water and plumbing systems",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in valves and pipeline fittings",
          "Prevents leakage in oil-based and pressurized systems",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },

  // FG_WAS_1-2
  {
    id: "FG_WAS_1-2",
    // Basic Info
    name: "Rubber Inlet Washer",
    shortDescription:
      "Durable rubber sealing washer designed for tight compression sealing in threaded and bolted joints, ensuring leak-proof performance in fluid systems.",
    image: FG_WAS_1_2,
    // Key Features
    features: [
      "Excellent compression sealing performance",
      "Good flexibility and recovery",
      "Resistant to water and mild chemicals",
      "Easy installation and replacement",
      "Durable under repeated tightening",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "50 ± 5 Shore A",
        tensileStrength: "18 – 22 MPa",
        elongation: "400 – 600%",
        temperatureRange: "-20°C to +80°C",
        density: "1.10 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in taps, valves, and pipe fittings",
          "Leak prevention in water and plumbing systems",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Sealing in low-pressure water systems",
          "Used in components requiring high flexibility",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_VW_CONC
  {
    id: "FG_VW_CONC",
    // Basic Info
    name: "Silicone Sealing Washer",
    shortDescription:
      "High-performance silicone washer designed for reliable sealing in water systems, offering excellent flexibility, temperature resistance, and long service life.",
    image: FG_VW_CONC,
    // Key Features
    features: [
      "Excellent temperature resistance (high & low)",
      "Non-toxic and suitable for hygienic applications",
      "Outstanding flexibility and durability",
      "Resistant to water, weather, and aging",
      "Long service life with stable performance",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Silicone",
      specifications: {
        hardness: "50 ± 5 Shore A",
        tensileStrength: "7 – 10 MPa",
        elongation: "300 – 450%",
        temperatureRange: "-50°C to +200°C",
        density: "1.15 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Natural Rubber"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in taps, showers, and pipe fittings",
          "Used in applications requiring hygiene and flexibility",
        ],
      },
      {
        id: "Solar",
        name: "Solar",
        applications: [
          "Sealing in outdoor equipment exposed to heat and weather",
          "Used in panel fittings and cable entry points",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_WAS_TW
  {
    id: "FG_WAS_TW",
    // Basic Info
    name: "Step Tail Washer",
    shortDescription:
      "Engineered silicone washer with a stepped profile designed for enhanced sealing, excellent temperature resistance, and long-lasting performance in fluid systems.",
    image: FG_WAS_TW,
    // Key Features
    features: [
      "Excellent high and low temperature resistance",
      "Non-toxic and suitable for hygienic applications",
      "Superior flexibility and compression recovery",
      "Resistant to weathering, aging, and UV",
      "Long service life with stable performance",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Silicone",
      specifications: {
        hardness: "50 ± 5 Shore A",
        tensileStrength: "7 – 10 MPa",
        elongation: "300 – 450%",
        temperatureRange: "-50°C to +200°C",
        density: "1.15 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Natural Rubber"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in taps, pipe joints, and fittings requiring hygienic materials",
          "Leak-proof sealing in hot and cold water systems",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Sealing in components exposed to temperature variations",
          "Used where flexibility and heat resistance are required",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_WAS_PL
  {
    id: "FG_WAS_PL",
    // Basic Info
    name: "Rubber Plate Seal (Plug-Type Washer)",
    shortDescription:
      "Durable natural rubber sealing plug designed for secure blocking and sealing of openings, ensuring leak-proof performance with easy insertion and removal..",
    image: FG_WAS_PL,
    // Key Features
    features: [
      "Easy insertion and removal with grip design",
      "Excellent flexibility and sealing capability",
      "Good compression and recovery",
      "Resistant to water and general wear",
      "Reusable and cost-effective solution",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "50 ± 5 Shore A",
        tensileStrength: "18 – 22 MPa",
        elongation: "400 – 600%",
        temperatureRange: "-20°C to +80°C",
        density: "1.10 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Temporary sealing of pipe openings during maintenance",
          "Blocking outlets in plumbing and drainage systems",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Sealing ports and openings during testing or transport",
          "Used as protective plug for components",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_GAS_DFMB
  {
    id: "FG_GAS_DFMB",
    // Basic Info
    name: "DF Monoblock Gasket",
    shortDescription:
      "High-performance rubber gasket designed for monoblock systems, featuring a profiled structure for reliable sealing and uniform pressure distribution in fluid applications.",
    image: FG_GAS_DFMB,
    // Key Features
    features: [
      "Designed specifically for monoblock applications",
      "Profiled structure for enhanced sealing efficiency",
      "Excellent flexibility and compression recovery",
      "Good resistance to water and wear",
      "Durable under continuous use",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "50 ± 5 Shore A",
        tensileStrength: "16 – 20 MPa",
        elongation: "350 – 500%",
        temperatureRange: "-20°C to +80°C",
        density: "1.12 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in monoblock pump systems and pipe connections",
          "Ensures leak-proof performance in water handling systems",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in low-pressure industrial connections",
          "Used in equipment requiring durable gasket solutions",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_WAS_CP
  {
    id: "FG_WAS_CP",
    // Basic Info
    name: "Connection Pipe Washer",
    shortDescription:
      "Durable NBR rubber washer designed for reliable sealing in pipe connections, ensuring leak-proof performance in fluid and oil-based systems.",
    image: FG_WAS_CP,
    // Key Features
    features: [
      "Excellent oil and fuel resistance",
      "Reliable sealing under compression",
      "Good flexibility and durability",
      "Resistant to wear and abrasion",
      "Long service life in industrial use",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "60 ± 5 Shore A",
        tensileStrength: "10 – 15 MPa",
        elongation: "300 – 450%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","Natural Rubber","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in pipe connections and fittings",
          "Leak prevention in water and plumbing systems",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in oil lines and fluid transfer systems",
          "Used in connections requiring oil resistance",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_DP_SIL (Silicone Diaphragm) (Not Yet Added !)
  {
    id: "FG_DP_SIL",
    // Basic Info
    name: "Silicone Monoblock Diaphragm",
    shortDescription:
      "High-performance silicone diaphragm designed for monoblock pump systems, ensuring efficient fluid control, flexibility, and long-lasting sealing performance.",
    image: FG_DP_SIL,
    // Key Features
    features: [
      "Excellent flexibility for dynamic applications",
      "Superior temperature resistance (hot & cold)",
      "Non-toxic and suitable for hygienic use",
      "Resistant to water, weather, and aging",
      "Long service life with consistent performance",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Silicone",
      specifications: {
        hardness: "45 ± 5 Shore A",
        tensileStrength: "7 – 9 MPa",
        elongation: "350 – 500%",
        temperatureRange: "-50°C to +200°C",
        density: "1.15 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","Natural Rubber","NBR"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Used in monoblock pumps for fluid control and sealing",
          "Maintains consistent flow and pressure in water systems",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Used in fluid control components requiring flexibility",
          "Suitable for systems exposed to temperature variations",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_OR_53_3
  {
    id: "FG_OR_53_3",
    // Basic Info
    name: "Rubber O-Ring Seal (53-3 Inches)",
    shortDescription:
      "Precision-molded NBR O-ring designed for reliable sealing in fluid and oil-based systems, ensuring leak-proof performance under pressure.",
    image: FG_OR_53_3,
    // Key Features
    features: [
      "Excellent oil and fuel resistance",
      "High elasticity and sealing efficiency",
      "Reliable performance under pressure",
      "Good abrasion and wear resistance",
      "Long service life in industrial applications",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "60 ± 5 Shore A",
        tensileStrength: "10 – 15 MPa",
        elongation: "300 – 450%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","Natural Rubber","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in pipe fittings, taps, and valves",
          "Leak prevention in water and plumbing systems",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in oil lines and hydraulic systems",
          "Prevents leakage in pressurized fluid systems",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_WAS_CP_BLUE
  {
    id: "FG_WAS_CP_BLUE",
    // Basic Info
    name: "Connection Pipe Washer (Blue Variant)",
    shortDescription:
      "Durable NBR rubber washer designed for reliable sealing in pipe connections, ensuring leak-proof performance in fluid and oil-based systems.",
    image: FG_WAS_CP_BLUE,
    // Key Features
    features: [
      "Excellent oil and fuel resistance",
      "Reliable sealing under compression",
      "Good flexibility and durability",
      "Resistant to wear and abrasion",
      "Color-coded for easy identification",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "60 ± 5 Shore A",
        tensileStrength: "10 – 15 MPa",
        elongation: "300 – 450%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","Natural Rubber","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in pipe connections and fittings",
          "Leak prevention in water and plumbing systems",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in oil lines and fluid transfer systems",
          "Used where oil-resistant materials are required",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_OR_BEND
  {
    id: "FG_OR_BEND",
    // Basic Info
    name: "Bend O-Ring (Heavy Section O-Ring)",
    shortDescription:
      "High-performance O-ring with a thicker cross-section, designed for enhanced sealing in curved and high-compression applications, ensuring leak-proof performance in fluid systems.",
    image: FG_OR_BEND,
    // Key Features
    features: [
      "Thick cross-section for improved sealing",
      "Excellent oil and fuel resistance",
      "High compression strength",
      "Good flexibility with shape retention",
      "Durable under repeated use",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "65 ± 5 Shore A",
        tensileStrength: "10 – 15 MPa",
        elongation: "300 – 400%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","Natural Rubber","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Sealing in bent pipe joints and curved fittings",
          "Leak prevention in plumbing systems under compression",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing in curved pipelines and connectors",
          "Used in applications requiring strong sealing under pressure",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_BOLT_8PC
  {
    id: "FG_BOLT_8PC",
    // Basic Info
    name: "Rubber Mounting Bolt (Insert-Type Rubber Fastener)",
    shortDescription:
      "Durable natural rubber mounting component with an embedded metal insert, designed for secure fastening, vibration absorption, and flexible support in mechanical assemblies.",
    image: FG_BOLT_8PC,
    // Key Features
    features: [
      "Embedded metal insert for secure fastening",
      "Excellent vibration and shock absorption",
      "High flexibility with strong structural support",
      "Resistant to water and general wear",
      "Durable and long service life",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "55 ± 5 Shore A",
        tensileStrength: "16 – 20 MPa",
        elongation: "350 – 500%",
        temperatureRange: "-20°C to +80°C",
        density: "1.12 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Mounting and securing components in pump and pipe systems",
          "Vibration damping in plumbing assemblies",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Used as flexible mounting support in components",
          "Absorbs vibration and reduces noise in assemblies",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_PLUG_AVP
  {
    id: "FG_PLUG_AVP",
    // Basic Info
    name: "Angle Valve Plug Piston",
    shortDescription:
      "Precision-molded rubber plug piston designed for angle valve systems, ensuring reliable sealing, smooth operation, and long-lasting performance in fluid control applications.",
    image: FG_PLUG_AVP,
    // Key Features
    features: [
      "Excellent oil and fluid resistance",
      "Precise fit for valve applications",
      "Good flexibility with sealing efficiency",
      "Resistant to wear and repeated use",
      "Durable under continuous operation",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "60 ± 5 Shore A",
        tensileStrength: "10 – 14 MPa",
        elongation: "300 – 400%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Used in angle valves for flow control and sealing",
          "Ensures leak-proof operation in plumbing systems",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Used in small fluid control components",
          "Provides sealing in low-pressure systems",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_TKK_CONC
  {
    id: "FG_TKK_CONC",
    // Basic Info
    name: "Concealed Valve Rubber Plug (Tikki Seal)",
    shortDescription:
      "Compact  rubber plug designed for concealed fittings, ensuring reliable sealing, smooth operation, and long service life in plumbing systems.",
    image: FG_TKK_CONC,
    // Key Features
    features: [
      "Compact design for concealed applications",
      "Excellent oil and fluid resistance",
      "Good flexibility and sealing performance",
      "Resistant to wear and repeated use",
      "Durable and easy to install",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "NBR",
      specifications: {
        hardness: "60 ± 5 Shore A",
        tensileStrength: "10 – 14 MPa",
        elongation: "300 – 400%",
        temperatureRange: "-25°C to +100°C",
        density: "1.20 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Used in concealed valves for sealing and flow control",
          "Ensures leak-proof operation in hidden plumbing systems",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Used as a sealing plug in compact components",
          "Suitable for low-pressure fluid sealing applications",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


    // FG_WAS_BVPS_SILI
  {
    id: "FG_WAS_BVPS_SILI",
    // Basic Info
    name: "Silicone Bib Valve Piston Washer",
    shortDescription:
      "High-performance silicone piston washer designed for valve systems, ensuring smooth operation, precise sealing, and long-lasting performance in fluid control applications.",
    image: FG_WAS_BVPS_SILI,
    // Key Features
    features: [
      "Excellent flexibility for dynamic sealing",
      "Superior high and low temperature resistance",
      "Non-toxic and suitable for water applications",
      "Smooth surface for consistent operation",
      "Long service life with minimal wear",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Silicone",
      specifications: {
        hardness: "45 ± 5 Shore A",
        tensileStrength: "7 – 9 MPa",
        elongation: "350 – 500%",
        temperatureRange: "-50°C to +200°C",
        density: "1.15 g/cm³³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Natural Rubber"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Used in bib valves for flow control and sealing",
          "Ensures smooth operation and leak-proof performance",
        ],
      },
      {
        id: "Automobile",
        name: "Automobile",
        applications: [
          "Used in small fluid control systems",
          "Suitable for applications requiring flexibility and heat resistance",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },


   // FG_CGAS_BIG
  {
    id: "FG_CGAS_BIG",
    // Basic Info
    name: "Rubber Mounting Gasket (Heavy-Duty Seal)",
    shortDescription:
      "Robust natural rubber gasket designed for mounting, spacing, and sealing in large assemblies, ensuring stability, vibration absorption, and reliable performance.",
    image: FG_CGAS_BIG,
    // Key Features
    features: [
      "Large size for heavy-duty applications",
      "Excellent flexibility and load absorption",
      "Good compression and recovery properties",
      "Resistant to water and general wear",
      "Provides stability and alignment support",
    ],
    // Primary Material (IMPORTANT DESIGN)
    primaryMaterial: {
      name: "Natural Rubber",
      specifications: {
        hardness: "55 ± 5 Shore A",
        tensileStrength: "16 – 20 MPa",
        elongation: "350 – 500%",
        temperatureRange: "-20°C to +80°C",
        density: "1.12 g/cm³",
      },
    },
    // Other Materials (just mention, no specs)
    otherMaterials: ["EPDM","NBR","Silicone"],
    // Industries + Applications (VERY IMPORTANT STRUCTURE)
    industries: [
      {
        id: "Sanitary & Hydraulics",
        name: "Sanitary & Hydraulics",
        applications: [
          "Mounting and sealing in large pipe joints and fittings",
          "Used as spacer and support in plumbing assemblies",
        ],
      },
      {
        id: "Oil & Gas",
        name: "Oil & Gas",
        applications: [
          "Sealing and cushioning in low-pressure industrial connections",
          "Used where vibration damping and alignment are required",
        ],
      },
    ],
    // Datasheet PDF
    datasheet: "/assets/datasheets/epdm-sheet.pdf",
  },
















   

    
]