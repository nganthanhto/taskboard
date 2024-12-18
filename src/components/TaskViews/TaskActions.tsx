import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

interface TaskActionsProps {
  task: any;
  setSelectedItem: (task: any) => void;
}

const TaskActions = ({ task, setSelectedItem }: TaskActionsProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-1 rounded-md hover:bg-gray-100">
          <DotsHorizontalIcon className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white rounded-md shadow-lg p-1 min-w-[8rem]">
        <DropdownMenu.Item className="text-sm px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-md">
          Edit Task
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="text-sm px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-md"
          onClick={() => setSelectedItem(task)}
        >
          View Details
        </DropdownMenu.Item>
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <DropdownMenu.Item className="text-sm px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-md text-red-600">
          Delete Task
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default TaskActions;
