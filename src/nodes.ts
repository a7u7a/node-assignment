import { Node } from "./types";

const nodes: Node[] = [
  {
    id: "0",
    title: "Node 0",
    subtitle: "Subtitle 0",
  },
  {
    id: "1",
    title: "Node 1",
    loading: true,
  },
  {
    id: "2",
    title: "Node 2",
    success: true,
  },
  {
    id: "3",
    title: "Node 3",
    errors: ["Error 1", "Error 2"],
  },
  {
    id: "4",
    title: "Node 4",
    warnings: ["Warning 1", "Warning 2"],
  },
];

export default nodes;
