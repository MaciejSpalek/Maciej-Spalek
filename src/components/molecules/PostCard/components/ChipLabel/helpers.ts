import { ChipType } from "./ChipLabel.model";

export const getChipText = (type: ChipType) => {
    switch (type) {
      case "sold_out": {
        return "Sold out";
      }

      case "available": {
        return "Available";
      }

      default: {
        return "";
      }
    }
  };