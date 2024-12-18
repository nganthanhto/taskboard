import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import { taskDetails } from "../../lib/data-detail";

export default function RecentActivityTab() {
  return (
    <div className="py-6">
      {taskDetails.recentActivity.map((activity, index) => (
        <div key={index} className="pt-4">
          <div className="flex space-x-3">
            <AvatarPrimitive.Root className="relative h-8 w-8 overflow-hidden rounded-full">
              <AvatarPrimitive.Image
                src={activity.image}
                className="h-full w-full object-cover"
              />
              <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-gray-100">
                <User className="h-4 w-4 text-gray-400" />
              </AvatarPrimitive.Fallback>
            </AvatarPrimitive.Root>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">
                  {activity.user}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{activity.action}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
