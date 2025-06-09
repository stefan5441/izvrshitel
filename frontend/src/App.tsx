import type { Posting } from "./types";
import { Pagination } from "./Pagination";
import { PostingCard } from "./PostingCard";
import scrapedData from "../../scrapedData.json";
import { useState } from "react";

function App() {
  const realEstatePostings = scrapedData as Posting[];

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
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
  );
}

export default App;
