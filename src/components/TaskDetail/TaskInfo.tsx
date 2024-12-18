import { Badge } from "../Badge/Badge";
import { taskDetails } from "../../lib/data-detail";

export default function TaskInfo() {
  return (
    <ul className="space-y-4">
      <li className="flex items-start space-x-4">
        <span className="text-sm font-medium text-gray-500">Task Type:</span>
        <span className="text-sm text-gray-900">{taskDetails.taskType}</span>
      </li>
      <li className="flex items-start space-x-4">
        <span className="text-sm font-medium text-gray-500">Due Date:</span>
        <span className="text-sm text-gray-900">{taskDetails.dueDate}</span>
      </li>
      <li className="flex items-start space-x-4">
        <span className="text-sm font-medium text-gray-500">Status:</span>
        <span className="text-sm text-gray-900">
          <Badge variant={taskDetails.status} status={taskDetails.status} />
        </span>
      </li>
      <li className="flex items-start space-x-4">
        <span className="text-sm font-medium text-gray-500">Assigned By:</span>
        <span className="text-sm text-gray-900">{taskDetails.assignedBy}</span>
      </li>
      <li className="flex items-start space-x-4">
        <span className="text-sm font-medium text-gray-500">
          Escalation Status:
        </span>
        <span className="text-sm text-gray-900">
          {taskDetails.escalationStatus}
        </span>
      </li>
    </ul>
  );
}
