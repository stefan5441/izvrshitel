import type { Estate } from "./types";

export const getTitleColor = (title: Estate) => {
  switch (title) {
    case "Гаража":
      return "#38BDF8";
    case "Деловен простор":
      return "#34D399";
    case "Друго":
      return "#FBBF24";
    case "Земјиште":
      return "#FB7185";
    case "Куќа":
      return "#A78BFA";
    case "Стан":
      return "#F97316";
  }
};
