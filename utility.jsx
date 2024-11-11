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
