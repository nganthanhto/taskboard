// components/TaskDialog.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import TaskDetails from "../TaskDetail/TaskDetail";

interface TaskDialogProps {
  selectedItem: any;
  onClose: () => void;
}

const TaskDialog: React.FC<TaskDialogProps> = ({ selectedItem, onClose }) => {
  if (!selectedItem) return null;

  return (
    <Dialog.Root open={!!selectedItem} onOpenChange={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 max-h-[80vh] bg-white rounded-lg shadow-lg p-6 overflow-y-auto custom-scroll">
        <Dialog.Close
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <Cross2Icon className="w-6 h-6" />
        </Dialog.Close>
        <div className="mt-4">
          <TaskDetails />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default TaskDialog;
