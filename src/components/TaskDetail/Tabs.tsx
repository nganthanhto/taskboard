import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Activity, MessageSquare } from "lucide-react";
import React from "react";

export default function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <TabsPrimitive.Root defaultValue="comments" className="w-full">
      <TabsPrimitive.List className="flex justify-end border-b border-gray-200">
        <TabsPrimitive.Trigger
          value="recent-activity"
          className="group inline-flex items-center border-b-2 border-transparent pr-6 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
        >
          <Activity className="mr-2 h-4 w-4" />
          Recent Activity
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value="comments"
          className="group inline-flex items-center border-b-2 border-transparent pr-6 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Comments
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>
      {children}
    </TabsPrimitive.Root>
  );
}

Tabs.Content = function TabsContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Content value={value} className="mt-4 space-y-4 pt-4">
      {children}
    </TabsPrimitive.Content>
  );
};
