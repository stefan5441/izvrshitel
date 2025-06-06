import type { Posting } from "./types";

type Props = {
  realEstatePosting: Posting;
};

export const TableRow = ({ realEstatePosting }: Props) => {
  return (
    <tr>
      <td>{realEstatePosting.id}</td>
      <td>{realEstatePosting.posterName}</td>
      <td>{realEstatePosting.estateType}</td>
      <td>{realEstatePosting.date}</td>
      <td>{realEstatePosting.location}</td>
      <td>{realEstatePosting.size}</td>
      <td>{realEstatePosting.startingPrice}</td>
      <td>{realEstatePosting.moreInfoUrl ? <a href={realEstatePosting.moreInfoUrl}>Повеќе информации</a> : "-"}</td>
    </tr>
  );
};
