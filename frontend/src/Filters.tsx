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

  const { allPosters, allLocations } = useMemo(() => {
    const allPosters = Array.from(new Set(realEstatePostings.map((posting) => posting.posterName))).sort((a, b) =>
      a.localeCompare(b)
    );
    const allLocations = Array.from(new Set(realEstatePostings.map((posting) => posting.location))).sort((a, b) =>
      a.localeCompare(b)
    );

    return { allPosters, allLocations };
  }, [realEstatePostings]);

  console.log(filters);

  return (
    <div>
      <div>
        <label>Извршител</label>
        <select
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

      <div>
        <label>Датум на продажба</label>
        <input
          type="date"
          value={filters.dateFrom ?? ""}
          onChange={(e) => setSpecificFilter("dateFrom", e.target.value || undefined)}
        />
        <input
          type="date"
          value={filters.dateTo ?? ""}
          onChange={(e) => setSpecificFilter("dateTo", e.target.value || undefined)}
        />
      </div>

      <div>
        <label>Локација</label>
        <select
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

      <div>
        <label>Квадратура</label>
        <input
          type="text"
          placeholder="Од"
          value={filters.sizeFrom ?? ""}
          onChange={(e) => setSpecificFilter("sizeFrom", Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="До"
          value={filters.sizeTo ?? ""}
          onChange={(e) => setSpecificFilter("sizeTo", Number(e.target.value))}
        />
      </div>

      <div>
        <label>Почетна цена</label>
        <input
          type="text"
          placeholder="Од"
          value={filters.startingPriceFrom ?? ""}
          onChange={(e) => setSpecificFilter("startingPriceFrom", Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="До"
          value={filters.startingPriceTo ?? ""}
          onChange={(e) => setSpecificFilter("startingPriceTo", Number(e.target.value))}
        />
      </div>
    </div>
  );
};
