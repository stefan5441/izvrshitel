import type { Posting } from "./types";
import { Pagination } from "./Pagination";
import { PostingCard } from "./PostingCard";
import scrapedData from "../../scrapedData.json";
import { useState } from "react";

function App() {
  const realEstatePostings = scrapedData as Posting[];

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(0);

  return (
    <div className="mainContainer">
      {realEstatePostings.slice(pageNumber * itemsPerPage, pageNumber * itemsPerPage + itemsPerPage).map((posting) => (
        <PostingCard key={posting.id} realEstatePostings={posting} />
      ))}
      <Pagination setItemsPerPage={setItemsPerPage} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
