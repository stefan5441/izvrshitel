export type Estate = "Куќа" | "Стан" | "Деловен простор" | "Гаража" | "Земјиште" | "Друго";

export type Posting = {
  id: number;
  posterName: string;
  estateType: Estate;
  date: string;
  location: string;
  size: number;
  startingPrice: number;
  note: string;
  moreInfoUrl: string;
};

export type Filter = {
  posterName?: string;
  dateFrom?: string;
  dateTo?: string;
  location?: string;
  sizeFrom?: number;
  sizeTo?: number;
  startingPriceFrom?: number;
  startingPriceTo?: number;
};
