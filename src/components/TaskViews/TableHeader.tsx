import { flexRender } from "@tanstack/react-table";

interface TableHeaderProps {
  headerGroups: any;
}

const TableHeader = ({ headerGroups }: TableHeaderProps) => {
  return (
    <thead className="bg-gray-50">
      {headerGroups.map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <th
              key={header.id}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header.isPlaceholder ? null : (
                <div className="flex items-center">
                  <span>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </span>
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
