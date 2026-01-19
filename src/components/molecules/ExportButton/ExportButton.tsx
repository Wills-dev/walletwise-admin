import * as XLSX from "xlsx";
import { Download } from "lucide-react";
import { RowSelectionState, Table } from "@tanstack/react-table";

interface ExportButtonProps<TData = unknown> {
  table: Table<TData>;
  rowSelection: RowSelectionState;
}

const ExportButton = <TData,>({
  table,
  rowSelection,
}: ExportButtonProps<TData>) => {
  const exportToExcel = () => {
    const selectedRows = table.getFilteredSelectedRowModel().rows;
    const rowsToExport =
      selectedRows?.length > 0 ? selectedRows : table.getRowModel().rows;

    // Extract data for export (excluding actions column)
    const exportData = rowsToExport.map((row) => {
      const rowData: Record<string, unknown> = {};
      row.getVisibleCells().forEach((cell) => {
        // Skip the actions column and selection column
        if (cell.column.id !== "actions" && cell.column.id !== "select") {
          const columnDef = cell.column.columnDef;
          let header: string;

          if (typeof columnDef.header === "string") {
            header = columnDef.header;
          } else if (
            "accessorKey" in columnDef &&
            typeof columnDef.accessorKey === "string"
          ) {
            header = columnDef.accessorKey;
          } else {
            header = cell.column.id;
          }

          // Get the raw value instead of the rendered cell
          rowData[header] = row.getValue(cell.column.id);
        }
      });
      return rowData;
    });

    // Create workbook and worksheet
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split("T")[0];
    const filename = `data_export_${timestamp}.xlsx`;

    // Save the file
    XLSX.writeFile(wb, filename);
  };

  const selectedRowCount = Object.keys(rowSelection)?.length;
  const totalRowCount = table.getRowModel().rows?.length;

  return (
    <div className="flex items-center gap-2 max-md:hidden">
      {/* Selection info and export button */}
      {selectedRowCount > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-gray-800 dark:text-gray-500 text-xs">
            {selectedRowCount} of {totalRowCount} row(s) selected
          </span>
          <button
            className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
            onClick={exportToExcel}
          >
            <Download className="h-4 w-4" />
            <span>Export Selected</span>
          </button>
        </div>
      )}{" "}
      <button
        className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
        onClick={exportToExcel}
      >
        <Download className="h-4 w-4" />
        <span>Export All</span>
      </button>
    </div>
  );
};

export default ExportButton;
