import type { Posting } from "./types";
import { PostingCard } from "./PostingCard";
import scrapedData from "../../scrapedData.json";

function App() {
  const realEstatePostings = scrapedData as Posting[];

  return (
    <div className="mainContainer">
      {realEstatePostings.map((posting) => (
        <PostingCard key={posting.id} realEstatePostings={posting} />
      ))}
    </div>
  );
}

export default App;
