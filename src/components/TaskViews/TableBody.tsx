// components/TaskViews/TableBody.tsx
import React from "react";
import { flexRender } from "@tanstack/react-table";

interface TableBodyProps {
  rows: any[];
  columns: any[];
}

const TableBody: React.FC<TableBodyProps> = ({ rows, columns }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {rows?.length ? (
        rows.map((row) => (
          <tr key={row.id} className="hover:bg-[#F9F9FA] transition-colors">
            {row.getVisibleCells().map((cell: any) => (
              <td
                key={cell.id}
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={columns.length}
            className="px-6 py-4 text-center text-sm text-gray-500"
          >
            No tasks available
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
