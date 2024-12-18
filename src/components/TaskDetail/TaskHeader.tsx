import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import { taskDetails } from "../../lib/data-detail";

export default function TaskHeader() {
  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between">
        <h1 className="text-lg font-bold text-gray-900">Task Details</h1>
      </div>
      <section className="space-y-4">
        <div className="flex items-start space-x-4">
          <AvatarPrimitive.Root className="relative h-16 w-16 overflow-hidden rounded-md">
            <AvatarPrimitive.Image
              src={taskDetails.image}
              className="h-full w-full object-cover"
            />
            <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-gray-100">
              <User className="h-6 w-6 text-gray-400" />
            </AvatarPrimitive.Fallback>
          </AvatarPrimitive.Root>
          <div className="grid gap-1">
            <h2 className="text-lg font-semibold text-gray-900">
              ID Verification
            </h2>
            <p className="text-sm text-gray-500">#{taskDetails.taskId}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
