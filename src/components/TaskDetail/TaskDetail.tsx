import TaskHeader from "./TaskHeader";
import TaskInfo from "./TaskInfo";
import WorkerInfo from "./WorkerInfo";
import Tabs from "./Tabs";
import CommentsTab from "./CommentsTab";
import RecentActivityTab from "./RecentActivityTab";

export default function TaskDetails() {
  return (
    <div className="space-y-6">
      <TaskHeader />
      <TaskInfo />
      <WorkerInfo />
      <Tabs>
        <Tabs.Content value="recent-activity">
          <RecentActivityTab />
        </Tabs.Content>
        <Tabs.Content value="comments">
          <CommentsTab />
        </Tabs.Content>
      </Tabs>
    </div>
  );
}
