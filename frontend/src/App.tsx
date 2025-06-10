import { useState } from "react";
import { Filters } from "./Filters";
import { type Filter, type Posting } from "./types";
import { Pagination } from "./Pagination";
import { PostingCard } from "./PostingCard";
import scrapedData from "../../scrapedData.json";

function App() {
  const realEstatePostings = scrapedData as Posting[];

  const [filters, setFilters] = useState<Filter>({
    dateFrom: undefined,
    dateTo: undefined,
    location: undefined,
    posterName: undefined,
    sizeFrom: undefined,
    sizeTo: undefined,
    startingPriceFrom: undefined,
    startingPriceTo: undefined,
  });

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredPostings = realEstatePostings.filter((posting) => {
    const { posterName, dateFrom, dateTo, location, sizeFrom, sizeTo, startingPriceFrom, startingPriceTo } = filters;

    const matchesPosterName = !posterName || posting.posterName.toLowerCase().includes(posterName.toLowerCase());
    const matchesLocation = !location || posting.location.toLowerCase().includes(location.toLowerCase());
    const matchesDateFrom = !dateFrom || new Date(posting.date) >= new Date(dateFrom);
    const matchesDateTo = !dateTo || new Date(posting.date) <= new Date(dateTo);
    const matchesSizeFrom = !sizeFrom || posting.size >= sizeFrom;
    const matchesSizeTo = !sizeTo || posting.size <= sizeTo;
    const matchesPriceFrom = !startingPriceFrom || posting.startingPrice >= startingPriceFrom;
    const matchesPriceTo = !startingPriceTo || posting.startingPrice <= startingPriceTo;

    return (
      matchesPosterName &&
      matchesLocation &&
      matchesDateFrom &&
      matchesDateTo &&
      matchesSizeFrom &&
      matchesSizeTo &&
      matchesPriceFrom &&
      matchesPriceTo
    );
  });

  return (
    <div className="wholePage">
      <Filters realEstatePostings={realEstatePostings} filters={filters} setFilters={setFilters} />
      {filteredPostings.length > 0 ? (
        <div className="mainContainer">
          {filteredPostings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((posting) => (
            <PostingCard key={posting.id} realEstatePostings={posting} />
          ))}
          <Pagination
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={Math.ceil(filteredPostings.length / itemsPerPage)}
          />
        </div>
      ) : (
        <div>Нема вакви</div>
      )}
    </div>
  );
}

export default App;
