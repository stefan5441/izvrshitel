import type { Posting } from "./types";
import scrapedData from "../../scrapedData.json";
import { Table } from "./Table";

function App() {
  const realEstatePostings = scrapedData as Posting[];

  return <Table realEstatePostings={realEstatePostings} />;
}

export default App;
