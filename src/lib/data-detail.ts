import { faker } from "@faker-js/faker";

interface TaskDetails {
  taskId: string;
  taskType: "Design" | "Development" | "Marketing";
  image: string;
  dueDate: string;
  status: "error" | "warning" | "default";
  assignedBy: string;
  escalationStatus: "None" | "Escalated";
  worker: {
    name: string;
    position: string;
    department: string;
  };
  recentActivity: {
    image: string;
    user: string;
    action: string;
    timestamp: Date;
  }[];
  comments: {
    image: string;
    user: string;
    comment: string;
    timestamp: Date;
  }[];
}

export const taskDetails: TaskDetails = {
  taskId: faker.string.uuid(),
  taskType: faker.helpers.arrayElement(["Design", "Development", "Marketing"]),
  image: faker.image.url(),
  dueDate: new Date().toLocaleDateString("en-GB"),
  status: faker.helpers.arrayElement(["error", "warning", "default"]),
  assignedBy: faker.name.fullName(),
  escalationStatus: faker.helpers.arrayElement(["None", "Escalated"]),
  worker: {
    name: faker.name.fullName(),
    position: faker.name.jobTitle(),
    department: faker.company.buzzAdjective(),
  },
  recentActivity: [
    {
      image: faker.image.avatar(),
      user: faker.name.fullName(),
      action: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    },
    {
      image: faker.image.avatar(),
      user: faker.name.fullName(),
      action: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    },
  ],
  comments: [
    {
      image: faker.image.avatar(),
      user: faker.name.fullName(),
      comment: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    },
    {
      image: faker.image.avatar(),
      user: faker.name.fullName(),
      comment: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    },
  ],
};
