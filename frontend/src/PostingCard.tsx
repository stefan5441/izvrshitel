import type { Posting } from "./types";

type Props = {
  realEstatePostings: Posting;
};

export const PostingCard = ({ realEstatePostings }: Props) => {
  return (
    <div>
      <div>{realEstatePostings.id}</div>
      <div>{realEstatePostings.posterName}</div>
      <div>{realEstatePostings.date}</div>
      <div>{realEstatePostings.estateType}</div>
      <div>{realEstatePostings.location}</div>
      <div>{realEstatePostings.size}</div>
      <div>{realEstatePostings.startingPrice}</div>
      <div>{realEstatePostings.note}</div>
      <div>{realEstatePostings.moreInfoUrl}</div>
    </div>
  );
};
