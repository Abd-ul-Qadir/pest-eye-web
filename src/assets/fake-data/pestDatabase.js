// pestDatabase.js - English only for web app
const pestDatabase = {
  'Locustoidea': {
    name: 'Locust',
    description: 'Destructive swarming pests that devour crops rapidly. Can cause 100% crop loss during outbreaks.',
    pesticides: [
      {
        name: 'Chlorpyrifos',
        dosage: '500ml/ha',
        safety: 'PHI: 15 days',
      },
      {
        name: 'Lambda-cyhalothrin',
        dosage: '150ml/ha',
        safety: 'Toxic to bees',
      },
    ],
    biologicalControls: [
      'Metarhizium anisopliae fungus',
      'Parasitic wasps',
    ],
    damageSymptoms: [
      'Complete defoliation',
      'Only stems remaining',
    ],
    prevention: [
      'Early monitoring',
      'Barrier crops',
    ],
    riskLevel: 'High',
  },

  'Miridae': {
    name: 'Mirid Bugs',
    description: 'Sap-sucking bugs that cause leaf deformation and stunted growth.',
    pesticides: [
      {
        name: 'Imidacloprid',
        dosage: '200ml/ha',
        safety: 'Moderately toxic',
      },
      {
        name: 'Acetamiprid',
        dosage: '100g/ha',
        safety: 'PHI: 7 days',
      },
    ],
    biologicalControls: [
      'Assassin bugs',
      'Spiders',
    ],
    damageSymptoms: [
      'Leaf curling',
      'Yellow spots',
    ],
    prevention: [
      'Weed control',
      'Early planting',
    ],
    riskLevel: 'Medium',
  },

  'Thrips': {
    name: 'Thrips',
    description: 'Tiny insects that scrape plant surfaces and feed on plant juices, causing silvering of leaves.',
    pesticides: [
      {
        name: 'Spinosad',
        dosage: '100ml/ha',
        safety: 'Low toxicity',
      },
      {
        name: 'Abamectin',
        dosage: '50ml/ha',
        safety: 'PHI: 7 days',
      },
    ],
    biologicalControls: [
      'Minute pirate bugs',
      'Predatory mites',
    ],
    damageSymptoms: [
      'Silvery streaks on leaves',
      'Deformed growth',
    ],
    prevention: [
      'Blue sticky traps',
      'Reflective mulches',
    ],
    riskLevel: 'Medium',
  },

  'army worm': {
    name: 'Armyworm',
    description: 'Caterpillars that move in large numbers, consuming leaves and stems of various crops.',
    pesticides: [
      {
        name: 'Emamectin benzoate',
        dosage: '200g/ha',
        safety: 'PHI: 14 days',
      },
      {
        name: 'Chlorantraniliprole',
        dosage: '100ml/ha',
        safety: 'Bee-safe',
      },
    ],
    biologicalControls: [
      'Parasitic wasps',
      'Nematodes',
    ],
    damageSymptoms: [
      'Skeletonized leaves',
      'Complete defoliation',
    ],
    prevention: [
      'Light traps for moths',
      'Early detection',
    ],
    riskLevel: 'High',
  },

  'brown plant hopper': {
    name: 'Brown Plant Hopper',
    description: 'Sucks sap from rice plants, causing yellowing and wilting (hopperburn). Can transmit viral diseases.',
    pesticides: [
      {
        name: 'Buprofezin',
        dosage: '300g/ha',
        safety: 'PHI: 21 days',
      },
      {
        name: 'Pymetrozine',
        dosage: '150g/ha',
        safety: 'Selective action',
      },
    ],
    biologicalControls: [
      'Wolf spiders',
      'Water striders',
    ],
    damageSymptoms: [
      'Yellowing from tips',
      'Wilting plants',
    ],
    prevention: [
      'Resistant varieties',
      'Alternate wet/dry irrigation',
    ],
    riskLevel: 'High',
  },

  'flea beetle': {
    name: 'Flea Beetle',
    description: 'Small jumping beetles that create small holes in leaves, reducing photosynthetic area.',
    pesticides: [
      {
        name: 'Carbaryl',
        dosage: '1kg/ha',
        safety: 'PHI: 7 days',
      },
      {
        name: 'Deltamethrin',
        dosage: '50ml/ha',
        safety: 'Toxic to fish',
      },
    ],
    biologicalControls: [
      'Braconid wasps',
      'Tachinid flies',
    ],
    damageSymptoms: [
      'Shot-hole damage',
      'Stunted seedlings',
    ],
    prevention: [
      'Row covers',
      'Trap cropping',
    ],
    riskLevel: 'Medium',
  },

  'grasshopper': {
    name: 'Grasshopper',
    description: 'Large insects that consume large amounts of plant material, causing significant defoliation.',
    pesticides: [
      {
        name: 'Malathion',
        dosage: '1L/ha',
        safety: 'PHI: 7 days',
      },
      {
        name: 'Diflubenzuron',
        dosage: '150g/ha',
        safety: 'IGR',
      },
    ],
    biologicalControls: [
      'Robber flies',
      'Birds',
    ],
    damageSymptoms: [
      'Irregular leaf damage',
      'Complete defoliation',
    ],
    prevention: [
      'Habitat modification',
      'Border treatments',
    ],
    riskLevel: 'High',
  },

  'grubs': {
    name: 'White Grubs',
    description: 'White grubs are larvae that feed on plant roots, weakening plants and reducing yield.',
    pesticides: [
      {
        name: 'Clothianidin',
        dosage: '200g/ha',
        safety: 'Seed treatment',
      },
      {
        name: 'Thiamethoxam',
        dosage: '250g/ha',
        safety: 'Systemic action',
      },
    ],
    biologicalControls: [
      'Heterorhabditis nematodes',
      'Beauveria fungus',
    ],
    damageSymptoms: [
      'Wilting plants',
      'Root damage',
    ],
    prevention: [
      'Deep plowing',
      'Neem cake application',
    ],
    riskLevel: 'Medium',
  },

  'rice Stemfly': {
    name: 'Rice Stem Fly',
    description: 'Larvae bore into rice stems, causing deadhearts in young plants and whiteheads in mature plants.',
    pesticides: [
      {
        name: 'Fipronil',
        dosage: '100ml/ha',
        safety: 'PHI: 21 days',
      },
      {
        name: 'Cartap hydrochloride',
        dosage: '500g/ha',
        safety: 'Moderate toxicity',
      },
    ],
    biologicalControls: [
      'Braconid wasps',
      'Predatory beetles',
    ],
    damageSymptoms: [
      'Deadhearts',
      'Whiteheads',
    ],
    prevention: [
      'Clipping seedling tips',
      'Early planting',
    ],
    riskLevel: 'High',
  },

  'rice gall midge': {
    name: 'Rice Gall Midge',
    description: 'Forms galls (silver shoots) on rice plants, causing stunted growth and reduced yield.',
    pesticides: [
      {
        name: 'Thiamethoxam',
        dosage: '250g/ha',
        safety: 'Seed treatment',
      },
      {
        name: 'Chlorantraniliprole',
        dosage: '100ml/ha',
        safety: 'Low risk',
      },
    ],
    biologicalControls: [
      'Platygaster wasps',
      'Predatory bugs',
    ],
    damageSymptoms: [
      'Silver shoots',
      'Stunted plants',
    ],
    prevention: [
      'Resistant varieties',
      'Avoid water stagnation',
    ],
    riskLevel: 'High',
  },

  'rice leaf roller': {
    name: 'Rice Leaf Roller',
    description: 'Caterpillars that roll rice leaves and feed inside, reducing photosynthetic area.',
    pesticides: [
      {
        name: 'Flubendiamide',
        dosage: '150ml/ha',
        safety: 'PHI: 14 days',
      },
      {
        name: 'Emamectin benzoate',
        dosage: '200g/ha',
        safety: 'Rainfast',
      },
    ],
    biologicalControls: [
      'Trichogramma wasps',
      'Spiders',
    ],
    damageSymptoms: [
      'Rolled leaves',
      'White streaks',
    ],
    prevention: [
      'Light traps',
      'Field sanitation',
    ],
    riskLevel: 'Medium',
  },

  'rice leafhopper': {
    name: 'Rice Leafhopper',
    description: 'Transmits viral diseases and extracts plant sap, causing hopperburn in rice plants.',
    pesticides: [
      {
        name: 'Dinotefuran',
        dosage: '200g/ha',
        safety: 'Systemic',
      },
      {
        name: 'Etofenprox',
        dosage: '300ml/ha',
        safety: 'Low toxicity',
      },
    ],
    biologicalControls: [
      'Mirid bugs',
      'Egg parasitoids',
    ],
    damageSymptoms: [
      'Yellowing from tips',
      'Stunted growth',
    ],
    prevention: [
      'Synchronized planting',
      'Drain fields periodically',
    ],
    riskLevel: 'High',
  },

  'rice water weevil': {
    name: 'Rice Water Weevil',
    description: 'Larvae feed on rice roots while adults notch leaves, reducing plant vigor.',
    pesticides: [
      {
        name: 'Carbofuran',
        dosage: '1kg/ha',
        safety: 'Highly toxic',
      },
      {
        name: 'Fipronil',
        dosage: '100ml/ha',
        safety: 'Seed treatment',
      },
    ],
    biologicalControls: [
      'Predatory beetles',
      'Nematodes',
    ],
    damageSymptoms: [
      'Root pruning',
      'Notched leaves',
    ],
    prevention: [
      'Deep flooding',
      'Crop rotation',
    ],
    riskLevel: 'Medium',
  },

  'small brown plant hopper': {
    name: 'Small Brown Plant Hopper',
    description: 'Similar to brown plant hopper but smaller, causes similar damage by sucking sap and transmitting diseases.',
    pesticides: [
      {
        name: 'Buprofezin',
        dosage: '300g/ha',
        safety: 'IGR',
      },
      {
        name: 'Pymetrozine',
        dosage: '150g/ha',
        safety: 'Anti-feeding',
      },
    ],
    biologicalControls: [
      'Mirid bugs',
      'Spiders',
    ],
    damageSymptoms: [
      'Yellowing',
      'Hopperburn',
    ],
    prevention: [
      'Avoid excessive nitrogen',
      'Resistant varieties',
    ],
    riskLevel: 'High',
  },

  'wheat sawfly': {
    name: 'Wheat Sawfly',
    description: 'Larvae bore into wheat stems causing lodging (falling over) and reduced yield.',
    pesticides: [
      {
        name: 'Chlorpyrifos',
        dosage: '500ml/ha',
        safety: 'PHI: 15 days',
      },
      {
        name: 'Lambda-cyhalothrin',
        dosage: '150ml/ha',
        safety: 'Broad spectrum',
      },
    ],
    biologicalControls: [
      'Braconid wasps',
      'Tachinid flies',
    ],
    damageSymptoms: [
      'Lodged plants',
      'Stem damage',
    ],
    prevention: [
      'Early planting',
      'Deep plowing',
    ],
    riskLevel: 'Medium',
  },

  'white backed plant hopper': {
    name: 'White Backed Plant Hopper',
    description: 'Sucks sap and transmits viral diseases in rice plants. Causes hopperburn and can lead to complete crop loss.',
    pesticides: [
      {
        name: 'Buprofezin',
        dosage: '300g/ha',
        safety: 'PHI: 21 days',
      },
      {
        name: 'Dinotefuran',
        dosage: '200g/ha',
        safety: 'Systemic',
      },
    ],
    biologicalControls: [
      'Wolf spiders',
      'Water striders',
    ],
    damageSymptoms: [
      'Hopperburn',
      'Virus transmission',
    ],
    prevention: [
      'Resistant varieties',
      'Avoid excessive nitrogen',
    ],
    riskLevel: 'High',
  },

  'yellow rice borer': {
    name: 'Yellow Rice Borer',
    description: 'Larvae bore into rice stems causing deadhearts in young plants and whiteheads in mature plants.',
    pesticides: [
      {
        name: 'Cartap hydrochloride',
        dosage: '500g/ha',
        safety: 'Moderate toxicity',
      },
      {
        name: 'Flubendiamide',
        dosage: '150ml/ha',
        safety: 'PHI: 14 days',
      },
    ],
    biologicalControls: [
      'Trichogramma wasps',
      'Birds',
    ],
    damageSymptoms: [
      'Deadhearts',
      'Whiteheads',
    ],
    prevention: [
      'Early planting',
      'Field sanitation',
    ],
    riskLevel: 'High',
  },

  'default': {
    name: 'Unknown Pest',
    description: 'Pest identification incomplete. Please consult local agricultural expert.',
    pesticides: [],
    biologicalControls: [],
    damageSymptoms: [],
    prevention: [],
    riskLevel: 'Unknown',
  },
};

// Main function to get complete pest information
export const getPestInfo = (pestName) => {
  const standardizedKey = Object.keys(pestDatabase).find(
    key => key.toLowerCase() === pestName?.toLowerCase()
  ) || 'default';

  const pestInfo = pestDatabase[standardizedKey];

  return {
    scientificName: standardizedKey,
    displayName: pestInfo.name || standardizedKey,
    description: pestInfo.description,
    pesticides: pestInfo.pesticides,
    biologicalControls: pestInfo.biologicalControls,
    damageSymptoms: pestInfo.damageSymptoms,
    prevention: pestInfo.prevention,
    riskLevel: pestInfo.riskLevel,
  };
};

export default pestDatabase;