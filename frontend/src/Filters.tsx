import { useMemo } from "react";
import type { Filter, Posting } from "./types";

type Props = {
  realEstatePostings: Posting[];
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

export const Filters = ({ realEstatePostings, filters, setFilters }: Props) => {
  const setSpecificFilter = <K extends keyof Filter>(key: K, value: Filter[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const allEstateTypes = ["Куќа", "Стан", "Деловен простор", "Гаража", "Земјиште", "Друго"];

  const { allPosters, allLocations } = useMemo(() => {
    const allPosters = Array.from(new Set(realEstatePostings.map((posting) => posting.posterName))).sort((a, b) =>
      a.localeCompare(b)
    );
    const allLocations = Array.from(new Set(realEstatePostings.map((posting) => posting.location))).sort((a, b) =>
      a.localeCompare(b)
    );

    return { allPosters, allLocations };
  }, [realEstatePostings]);

  return (
    <div className="filterContainer">
      <div className="filterDropdownContainer">
        <label>Извршител</label>
        <select
          className="filterDropdown"
          value={filters.posterName ?? "Селектирај извршител"}
          onChange={(e) =>
            setSpecificFilter("posterName", e.target.value === "Селектирај извршител" ? undefined : e.target.value)
          }
        >
          <option value={"Селектирај извршител"}>Селектирај извршител</option>
          {allPosters.map((poster) => (
            <option value={poster} key={poster}>
              {poster}
            </option>
          ))}
        </select>
      </div>

      <div className="filterDropdownContainer">
        <label>Тип на недвижнина</label>
        <select
          className="filterDropdown"
          value={filters.estateType ?? "Селектирај недвижнина"}
          onChange={(e) =>
            setSpecificFilter("estateType", e.target.value === "Селектирај недвижнина" ? undefined : e.target.value)
          }
        >
          <option value={"Селектирај недвижнина"}>Селектирај недвижнина</option>
          {allEstateTypes.map((estateType) => (
            <option value={estateType} key={estateType}>
              {estateType}
            </option>
          ))}
        </select>
      </div>

      <div className="filterDateContainer">
        <label>Датум на продажба</label>
        <div className="filterDateInnerContainer">
          <div className="filterLabelAndDate">
            <p>Од</p>
            <input
              className="filterDateInput"
              type="date"
              value={filters.dateFrom ?? ""}
              onChange={(e) => setSpecificFilter("dateFrom", e.target.value || undefined)}
            />
          </div>
          <div className="filterLabelAndDate">
            <p>До</p>
            <input
              className="filterDateInput"
              type="date"
              value={filters.dateTo ?? ""}
              onChange={(e) => setSpecificFilter("dateTo", e.target.value || undefined)}
            />
          </div>
        </div>
      </div>

      <div className="filterDropdownContainer">
        <label>Локација</label>
        <select
          className="filterDropdown"
          value={filters.location ?? "Селектирај локација"}
          onChange={(e) =>
            setSpecificFilter("location", e.target.value === "Селектирај локација" ? undefined : e.target.value)
          }
        >
          <option value={"Селектирај локација"}>Селектирај локација</option>
          {allLocations.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="filterRangeContainer">
        <label>Квадратура</label>
        <div className="filterRangeInputs">
          <input
            className="filterRangeInput"
            type="text"
            placeholder="Од"
            value={filters.sizeFrom ?? ""}
            onChange={(e) => setSpecificFilter("sizeFrom", Number(e.target.value))}
          />
          <input
            className="filterRangeInput"
            type="text"
            placeholder="До"
            value={filters.sizeTo ?? ""}
            onChange={(e) => setSpecificFilter("sizeTo", Number(e.target.value))}
          />
        </div>
      </div>

      <div className="filterRangeContainer">
        <label>Почетна цена</label>
        <div className="filterRangeInputs">
          <input
            className="filterRangeInput"
            type="text"
            placeholder="Од"
            value={filters.startingPriceFrom ?? ""}
            onChange={(e) => setSpecificFilter("startingPriceFrom", Number(e.target.value))}
          />
          <input
            className="filterRangeInput"
            type="text"
            placeholder="До"
            value={filters.startingPriceTo ?? ""}
            onChange={(e) => setSpecificFilter("startingPriceTo", Number(e.target.value))}
          />
        </div>
      </div>

      <button
        className="filterResetButton"
        onClick={() =>
          setFilters({
            dateFrom: undefined,
            estateType: undefined,
            dateTo: undefined,
            location: undefined,
            posterName: undefined,
            sizeFrom: undefined,
            sizeTo: undefined,
            startingPriceFrom: undefined,
            startingPriceTo: undefined,
          })
        }
      >
        Ресетирај филтри
      </button>
    </div>
  );
};
