export const LEDTileExamples = [
  {
    id: 1,
    tileBrandId: "Triton", //gg this WILL BE a foreign key
    tileModel: null,
    tileCardId: "Novastar", //gg this WILL BE a foreign key
    pixelPitch: 5.9,
    widthPixel: 84,
    heightPixel: 168,
    widthMM: 500,
    heightMM: 1000,
    weightLBS: 48,
    processorTypeId: "MX40", //gg this WILL BE a foreign key
    image: "",
  },
  {
    id: 2,
    tileBrandId: "Roe", //gg this WILL BE a foreign key
    tileModel: "V6ST",
    tileCardId: "Brompton", //gg this WILL BE a foreign key
    pixelPitch: 6.9,
    widthPixel: 144,
    heightPixel: 144,
    widthMM: 1000,
    heightMM: 1000,
    weightLBS: 72,
    processorTypeId: "SX40", //gg this WILL BE a foreign key
    image: "",
  },
]

export const ProcessorExamples = [
  {
    id: 1,
    processorBrand: "Novastar", //gg this WILL BE a foreign key
    processorModel: "MX40",
    processorCard: "Novastar", //gg this WILL BE a foreign key
    numberOfPorts: 20,
    maxResolution: "3840 x 2160",
    fiberExtender: true,
    processorControlTypeId: "IP", //gg this WILL BE a foreign key
    processorSourceTypeId: "HDMI", //gg this WILL BE a foreign key
    processorRedundancyTypeId: "Port or Processor", //gg this WILL BE a foreign key
    processorSoftwareTypeId: "VMP", //gg this WILL BE a foreign key
    image: "",
  },
  {
    id: 2,
    processorBrand: "Brompton", //gg this WILL BE a foreign key
    processorModel: "SX40",
    processorCard: "Brompton", //gg this WILL BE a foreign key
    numberOfPorts: 40,
    maxResolution: "3840 x 2160",
    fiberExtender: true,
    processorControlTypeId: "USB", //gg this WILL BE a foreign key
    processorSourceTypeId: "SDI", //gg this WILL BE a foreign key
    processorRedundancyTypeId: "Port Only", //gg this WILL BE a foreign key
    processorSoftwareTypeId: "Tessera", //gg this WILL BE a foreign key
    image: "",
  },
]

export const TourExamples = [
  {
    id: 1,
    tourName: "Chris Stapleton",
  },
  {
    id: 2,
    tourName: "ZZ Top",
  },
  {
    id: 3,
    tourName: "Luke Combs",
  },
  {
    id: 4,
    tourName: "Brad Paisley",
  },
  {
    id: 5,
    tourName: "Dierks Bentley",
  },
  {
    id: 6,
    tourName: "Lynyrd Skynyrd",
  },
  {
    id: 7,
    tourName: "Hall & Oates",
  },
  {
    id: 8,
    tourName: "Jason Aldean",
  },
  {
    id: 9,
    tourName: "Garth Brooks",
  },
  {
    id: 10,
    tourName: "Hardy",
  },
]

export const ShowExamples = [
  {
    id: 1,
    showName: "Grand Prix 2024",
  },
  {
    id: 2,
    showName: "IEBA 2023",
  },
  {
    id: 3,
    showName: "Grand Prix 2023",
  },
  {
    id: 4,
    showName: "Scott Hamilton 2024",
  },
  {
    id: 5,
    showName: "IEBA 2022",
  },
  {
    id: 6,
    showName: "IEBA 2024",
  },
  {
    id: 7,
    showName: "Scott Hamilton 2023",
  },
  {
    id: 8,
    showName: "NYE 2024",
  },
]

export const LEDConfigurationTourExample = [
  {
    id: 1,
    name: "D Rig",
  },
  {
    id: 2,
    name: "A Rig",
  },
  {
    id: 3,
    name: "C Rig",
  },
  {
    id: 4,
    name: "B Rig",
  },
  {
    id: 5,
    name: "Festival Rig",
  },
]
