import { Color } from "./Color";
export function Colori({ colori }) {
  return (
    <div>
      {colori.map((value) => (
        <Color key={value.id} color={value} />
      ))}
    </div>
  );
}
