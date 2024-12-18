import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import { taskDetails } from "../../lib/data-detail";

export default function CommentsTab() {
  return (
    <div className="py-6">
      <textarea
        placeholder="Add a comment..."
        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        rows={4}
      />
      <div className="flex justify-end">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
      {taskDetails.comments.map((comment, index) => (
        <div key={index} className="pt-4">
          <div className="flex space-x-3">
            <AvatarPrimitive.Root className="relative h-8 w-8 overflow-hidden rounded-full">
              <AvatarPrimitive.Image
                src={comment.image}
                alt={comment.comment}
                className="h-full w-full object-cover"
              />
              <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-gray-100">
                <User className="h-4 w-4 text-gray-400" />
              </AvatarPrimitive.Fallback>
            </AvatarPrimitive.Root>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">
                  {comment.user}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(comment.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
