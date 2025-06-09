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

  return (
    <div className="wholePage">
      <Filters realEstatePostings={realEstatePostings} filters={filters} setFilters={setFilters} />
      <div className="mainContainer">
        {realEstatePostings
          .slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
          .map((posting) => (
            <PostingCard key={posting.id} realEstatePostings={posting} />
          ))}
        <Pagination
          setItemsPerPage={setItemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={Math.ceil(realEstatePostings.length / itemsPerPage)}
        />
      </div>
    </div>
  );
}

export default App;
