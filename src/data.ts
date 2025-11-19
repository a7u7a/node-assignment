import { NodeType } from "@/types";

const initialNodeState: NodeType = {
  id: "0",
  title: "Node 0",
  subtitle: "Subtitle 0",
  errors: [],
  showErrors: false,
  warnings: [],
  showWarnings: false,
  loading: false,
  success: false,
  settings: {
    alwaysOutputData: false,
    executeOnce: false,
    retryOnFail: false,
  },
};
export default initialNodeState;
