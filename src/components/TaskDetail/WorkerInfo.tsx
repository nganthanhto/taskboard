import { taskDetails } from "../../lib/data-detail";

export default function WorkerInfo() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Worker Information
      </h2>
      <ul className="space-y-2">
        <li className="flex items-start space-x-4">
          <span className="text-sm font-medium text-gray-500">Name:</span>
          <span className="text-sm text-gray-900">
            {taskDetails.worker.name}
          </span>
        </li>
        <li className="flex items-start space-x-4">
          <span className="text-sm font-medium text-gray-500">Position:</span>
          <span className="text-sm text-gray-900">
            {taskDetails.worker.position}
          </span>
        </li>
        <li className="flex items-start space-x-4">
          <span className="text-sm font-medium text-gray-500">Department:</span>
          <span className="text-sm text-gray-900">
            {taskDetails.worker.department}
          </span>
        </li>
      </ul>
    </section>
  );
}
