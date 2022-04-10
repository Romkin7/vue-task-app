export type ButtonTypes = "submit" | "button" | "reset";
export type InputTypes = "text" | "email" | "number" | "tel" | "password" | "date";
export type ButtonVariants = "green" | "orange" | "blue" | "red";
export type Events =
  | "create-task"
  | "delete-task"
  | "toggle-done"
  | "toggle-reminder";

export interface ITask {
  text: string;
  id: number;
  done: boolean;
  reminder: boolean;
  startingDate: Date;
}
