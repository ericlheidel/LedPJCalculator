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
  {
    id: 3,
    tileBrandId: "Triton",
    tileModel: "XT100",
    tileCardId: "Novastar",
    pixelPitch: 7.2,
    widthPixel: 100,
    heightPixel: 200,
    widthMM: 600,
    heightMM: 1200,
    weightLBS: 50,
    processorTypeId: "MX40",
    image: "",
  },
  {
    id: 4,
    tileBrandId: "Roe",
    tileModel: "V6ST",
    tileCardId: "Novastar",
    pixelPitch: 5.5,
    widthPixel: 100,
    heightPixel: 100,
    widthMM: 800,
    heightMM: 800,
    weightLBS: 60,
    processorTypeId: "SX40",
    image: "",
  },
  {
    id: 5,
    tileBrandId: "Absen",
    tileModel: "N4",
    tileCardId: "HuaWei",
    pixelPitch: 4.8,
    widthPixel: 128,
    heightPixel: 256,
    widthMM: 700,
    heightMM: 1400,
    weightLBS: 55,
    processorTypeId: "MX50",
    image: "",
  },
  {
    id: 6,
    tileBrandId: "Leyard",
    tileModel: "LVP300",
    tileCardId: "Novastar",
    pixelPitch: 2.5,
    widthPixel: 200,
    heightPixel: 400,
    widthMM: 900,
    heightMM: 1800,
    weightLBS: 70,
    processorTypeId: "MX40",
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
  {
    id: 3,
    processorBrand: "Absen",
    processorModel: "N4",
    processorCard: "HuaWei",
    numberOfPorts: 16,
    maxResolution: "1920 x 1080",
    fiberExtender: false,
    processorControlTypeId: "WiFi",
    processorSourceTypeId: "HDMI",
    processorRedundancyTypeId: "Processor Only",
    processorSoftwareTypeId: "VMP",
    image: "",
  },
  {
    id: 4,
    processorBrand: "Leyard",
    processorModel: "LVP300",
    processorCard: "Leyard",
    numberOfPorts: 24,
    maxResolution: "3840 x 2160",
    fiberExtender: true,
    processorControlTypeId: "Ethernet",
    processorSourceTypeId: "SDI",
    processorRedundancyTypeId: "Port or Processor",
    processorSoftwareTypeId: "Tessera",
    image: "",
  },
  {
    id: 5,
    processorBrand: "Roe",
    processorModel: "V6ST",
    processorCard: "Roe",
    numberOfPorts: 32,
    maxResolution: "4096 x 2160",
    fiberExtender: true,
    processorControlTypeId: "USB",
    processorSourceTypeId: "HDMI",
    processorRedundancyTypeId: "Port Only",
    processorSoftwareTypeId: "VMP",
    image: "",
  },
  {
    id: 6,
    processorBrand: "Unilumin",
    processorModel: "UHD1000",
    processorCard: "Unilumin",
    numberOfPorts: 12,
    maxResolution: "1920 x 1080",
    fiberExtender: false,
    processorControlTypeId: "IP",
    processorSourceTypeId: "SDI",
    processorRedundancyTypeId: "Port or Processor",
    processorSoftwareTypeId: "Tessera",
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
