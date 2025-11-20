import { NodeType } from "@/types";

const initialNodeState: NodeType = {
  id: "0",
  title: "Get a DONKY solar flare",
  subtitle: "Get:DONKY solar flare",
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
