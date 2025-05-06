import { useMemo } from "react";

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => {
    return list.filter((i) => i.age >= 18);
  }, [list]);

  return (
    <>
      <ul>
        {filteredList.map((i) => (
          <li key={i.id}>
            {i.name} (Età:{i.age})
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilteredList;