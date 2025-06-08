const { fromURL } = require("cheerio");
const { writeFile } = require("fs");

const scrapeAndTransform = async () => {
  const cheerio = await fromURL("https://kirm.mk/?page_id=1694");

  // scraping
  const { scrapedRealEstatePostings } = cheerio.extract({
    scrapedRealEstatePostings: [
      {
        selector: [".wraper_oglas"],
        value: {
          id: "p:first",
          posterName: "p:eq(3)",
          estateType: ".wraper_oglas",
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

  // a whole different scrape function because someone decided not to use html tags properly
  const { separateScrapeForEstateType } = cheerio.extract({
    separateScrapeForEstateType: [".wraper_oglas"],
  });

  // transforming
  const transformedRealEstatePostings = scrapedRealEstatePostings.map((posting, index) => ({
    id: Number(posting.id.split(" ")[4]),
    estateType: separateScrapeForEstateType[index].split("Тип на недвижност :")[1].split("Недвижноста")[0],
    posterName: posting.posterName.split(":")[1]?.split("  ")[0]?.trim(),
    location: posting.location.split(" ")[4].replace(/\n$/, ""),
    size: Number(posting.sizeAndStartingPrice.split(" ")[1].split("м")[0]),
    startingPrice: Number(posting.sizeAndStartingPrice.split(" ")[7].replace(/,/g, "")),
    date: posting.date.split(":")[1],
    note: posting.note.split(":")[1].slice(1),
    moreInfoUrl: posting.moreInfo,
  }));

  writeFile("scrapedData.json", JSON.stringify(transformedRealEstatePostings, null, 2), function (err) {
    if (err) {
      console.log(err);
    }
  });
};
scrapeAndTransform();
