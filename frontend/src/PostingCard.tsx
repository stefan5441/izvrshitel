import type { Posting } from "./types";
import { getTitleColor } from "./utils";

type Props = {
  realEstatePostings: Posting;
};

export const PostingCard = ({ realEstatePostings }: Props) => {
  return (
    <div className="postingCard">
      <div className="postingCardTitleContainer">
        <div className="postingCardTitle" style={{ color: `${getTitleColor(realEstatePostings.estateType)}` }}>
          {realEstatePostings.estateType}
        </div>
        <div className="postingCardSubtitle">
          <div>{`Број на оглас: ${realEstatePostings.id}`}</div>
          <div>{`Извршител: ${realEstatePostings.posterName}`}</div>
        </div>
      </div>

      <div>
        <div>
          <span className="highlightedText">Датум на продажба: </span>
          {realEstatePostings.date.split("-").reverse().join(".")}
        </div>
        <div>
          <span className="highlightedText">Локација: </span>
          {realEstatePostings.location}
        </div>
        <div>
          <span className="highlightedText">Квадратура: </span>
          {`${realEstatePostings.size} m2`}
        </div>
        <div>
          <span className="highlightedText">Почетна цена: </span>
          {`${realEstatePostings.startingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} денари`}
        </div>
      </div>

      <div className="postingFooter">
        <div className="postingNote">{realEstatePostings.note}</div>
        {realEstatePostings.moreInfoUrl && (
          <a className="postingMoreInfo" href={realEstatePostings.moreInfoUrl}>
            Повеќе информации
          </a>
        )}
      </div>
    </div>
  );
};
