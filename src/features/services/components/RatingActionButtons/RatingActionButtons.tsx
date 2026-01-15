import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const RatingActionButtons = ({ id }: { id: number }) => {
  return (
    <ColumnActionDropdown>
      <DropdownMenuItem>
        <button>View info</button>
      </DropdownMenuItem>
    </ColumnActionDropdown>
  );
};

export default RatingActionButtons;
