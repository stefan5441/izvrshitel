const { load } = require("cheerio");
const { writeFile } = require("fs");

const scrapeAndTransform = async () => {
  const res = await fetch("https://kirm.mk/?page_id=1694");
  const html = await res.text();
  const cheerio = load(html);

  // scraping
  const { scrapedRealEstatePostings } = cheerio.extract({
    scrapedRealEstatePostings: [
      {
        selector: [".wraper_oglas"],
        value: {
          id: "p:first",
          posterName: "p:eq(3)",
          location: "p:eq(5)",
          sizeAndStartingPrice: "p:eq(6)",
          date: "p:eq(7)",
          note: "p:eq(8)",
          moreInfo: {
            selector: "a",
            value: "href",
          },
        },
      },
    ],
  });

  // transforming
  const transformedRealEstatePostings = scrapedRealEstatePostings.map((posting) => ({
    id: Number(posting.id.split(" ")[4]),
    posterName: `${posting.posterName.split(" ")[1].slice(1)} ${posting.posterName.split(" ")[2]}`,
    location: posting.location.split(" ")[4],
    size: Number(posting.sizeAndStartingPrice.split(" ")[1].split("м")[0]),
    startingPrice: Number(posting.sizeAndStartingPrice.split(" ")[7]),
    date: posting.date.split(":")[1],
    note: posting.note.split(":")[1].slice(1),
    moreInfoUrl: posting.moreInfo,
  }));

  writeFile("scrapedData.txt", JSON.stringify(transformedRealEstatePostings, null, 2), function (err) {
    if (err) {
      console.log(err);
    }
  });
};
scrapeAndTransform();
