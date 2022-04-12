import type { ITask } from "@/@types/index";
import gpc from "generate-pincode";

/** This array is for original solution withOut json server */
export const Tasks: ITask[] = [
  {
    text: "Learn Vue.js",
    done: false,
    reminder: true,
    startingDate: new Date("2022-04-07"),
    id: gpc(4),
  },
  {
    text: "Create first Vue.js app",
    done: true,
    reminder: false,
    startingDate: new Date("2022-04-08"),
    id: gpc(4),
  },
  {
    text: "Teach Finnish to my wife",
    done: false,
    reminder: true,
    startingDate: new Date("2022-04-12"),
    id: gpc(4),
  },
];
