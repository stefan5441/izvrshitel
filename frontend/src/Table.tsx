import { TableRow } from "./TableRow";
import type { Posting } from "./types";

type Props = {
  realEstatePostings: Posting[];
};

export const Table = ({ realEstatePostings }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Број на оглас</th>
          <th>Извршител</th>
          <th>Тип на недвижнина</th>
          <th>Датум на објава</th>
          <th>Локација</th>
          <th>Квадратура</th>
          <th>Цена</th>
          <th>Повеќе информации</th>
        </tr>
      </thead>
      <tbody>
        {realEstatePostings.map((posting) => (
          <TableRow realEstatePosting={posting} />
        ))}
      </tbody>
    </table>
  );
};
