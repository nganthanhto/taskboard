import { faker } from "@faker-js/faker";

export type Task = {
  id: string;
  title: string;
  subtext: string;
  image: string;
  status: "error" | "warning" | "default";
  priority: "low" | "medium" | "high";
  dueDate: string;
  assignee: {
    name: string;
    email: string;
    avatar: string;
  };
};

export function generateTasks(count: number): Task[] {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    subtext: faker.lorem.words(1),
    image: faker.image.url(),
    status: faker.helpers.arrayElement(["error", "warning", "default"]),
    priority: faker.helpers.arrayElement(["low", "medium", "high"]),
    dueDate: new Date(faker.date.future()).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    assignee: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    },
    comment: index + 1,
  }));
}
