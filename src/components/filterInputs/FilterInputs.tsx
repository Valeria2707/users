import "./FilterInputs.css";
import { UserData } from "../../types/users.types";
import { FILTER_CONFIG } from "../../constants/filter.constants";

interface Props {
  filters: UserData;
  onFilterChange: (field: keyof UserData) => (value: string) => void;
}

export default function FilterInputs({ filters, onFilterChange }: Props) {
  return (
    <div className="filter-inputs-container">
      {FILTER_CONFIG.map(({ field, placeholder }) => (
        <input
          key={field}
          type="text"
          placeholder={placeholder}
          value={filters[field]}
          onChange={(e) => onFilterChange(field)(e.target.value)}
          className="filter-input"
        />
      ))}
    </div>
  );
}
