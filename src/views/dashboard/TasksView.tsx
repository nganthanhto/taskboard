import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import * as Avatar from "@radix-ui/react-avatar";
import { Task, generateTasks } from "../../lib/data";
import { Badge } from "../../components/Badge/Badge";
import TablePagination from "../../components/TaskViews/TablePagination";
import TaskActions from "../../components/TaskViews/TaskActions";
import TableHeader from "../../components/TaskViews/TableHeader";
import TableBody from "../../components/TaskViews/TableBody";
import TaskDialog from "../../components/TaskViews/TaskDialog";

const data = generateTasks(100);

export default function TasksView() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [selectedItem, setSelectedItem] = useState(null) as any;

  const columns: ColumnDef<Task>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
          aria-label="Select All"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          aria-label={`Select row ${row.id}`}
        />
      ),
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <div className="flex items-center">
          <span>Task Name</span>
          <button className="ml-2" onClick={() => column.toggleSorting()}>
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="w-4 h-4" />
            ) : (
              <span className="text-gray-400">⇅</span>
            )}
          </button>
        </div>
      ),
      cell: ({ row }) => {
        const task = row.original as Task;
        return (
          <div className="flex items-center space-x-4">
            <Avatar.Root className="h-10 w-10 rounded-md overflow-hidden">
              <Avatar.Image
                src={task.image}
                alt={task.title}
                className="h-full w-full object-cover"
              />
              <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600">
                {task.title.charAt(0)}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="flex flex-col">
              <span className="font-medium">{task.title}</span>
              <span className="text-sm text-gray-500">{task.subtext}</span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "dueDate",
      header: ({ column }) => (
        <div className="flex items-center">
          <span>Due Date</span>
          <button className="ml-2" onClick={() => column.toggleSorting()}>
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="w-4 h-4" />
            ) : (
              <span className="text-gray-400">⇅</span>
            )}
          </button>
        </div>
      ),
      cell: ({ row }) => {
        const date = row.getValue("dueDate") as Date;
        return <div>{date.toString()}</div>;
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <div className="flex items-center">
          <span>Status</span>
          <button className="ml-2" onClick={() => column.toggleSorting()}>
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="w-4 h-4" />
            ) : (
              <span className="text-gray-400">⇅</span>
            )}
          </button>
        </div>
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as
          | "error"
          | "warning"
          | "default";
        return <Badge variant={status} status={status} />;
      },
    },

    {
      accessorKey: "assignee",
      header: ({ column }) => (
        <div className="flex items-center">
          <span>Worker</span>
          <button className="ml-2" onClick={() => column.toggleSorting()}>
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="w-4 h-4" />
            ) : (
              <span className="text-gray-400">⇅</span>
            )}
          </button>
        </div>
      ),
      cell: ({ row }) => {
        const assignee = row.getValue("assignee") as Task["assignee"];
        return (
          <div className="flex items-center space-x-2">
            <Avatar.Root className="h-8 w-8 rounded-full overflow-hidden">
              <Avatar.Image
                src={assignee.avatar}
                alt={assignee.name}
                className="h-full w-full object-cover"
              />
              <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600">
                {assignee.name.charAt(0)}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{assignee.name}</span>
              <span className="text-xs text-gray-500">{assignee.email}</span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "comment",
      header: ({ column }) => (
        <div className="flex items-center">
          <span>Comment</span>
          <button className="ml-2" onClick={() => column.toggleSorting()}>
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="w-4 h-4" />
            ) : (
              <span className="text-gray-400">⇅</span>
            )}
          </button>
        </div>
      ),
      cell: ({ row }) => {
        const comment = row.getValue("comment") as string;
        return <div>{comment}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const task = row.original;
        return <TaskActions task={task} setSelectedItem={setSelectedItem} />;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <Tabs.Root defaultValue="deferrals" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <Tabs.List className="flex space-x-1 rounded-lg bg-gray-100 p-1">
            <Tabs.Trigger
              value="deferrals"
              className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Deferrals
            </Tabs.Trigger>
            <Tabs.Trigger
              value="exemptions"
              className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Exemptions
            </Tabs.Trigger>
            <Tabs.Trigger
              value="escalations"
              className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Escalations
            </Tabs.Trigger>
          </Tabs.List>
        </div>
        <Tabs.Content value="deferrals" className="mt-4">
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <TableHeader headerGroups={table.getHeaderGroups()} />
                <TableBody rows={table.getRowModel().rows} columns={columns} />
              </table>
            </div>
          </div>
          <TablePagination table={table} />
        </Tabs.Content>
        <Tabs.Content value="exemptions" className="mt-4">
          <div className="text-center text-sm text-gray-500">
            Switch to the "Exemptions" tab to view the demo.
          </div>
        </Tabs.Content>
        <Tabs.Content value="escalations" className="mt-4">
          <div className="text-center text-sm text-gray-500">
            Switch to the "Escalations" tab to view the demo.
          </div>
        </Tabs.Content>
      </Tabs.Root>

      <TaskDialog
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
