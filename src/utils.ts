import { Node as NodeType } from "./types";

export const getState = (data: NodeType) => {
  if (data.errors && data.errors.length > 0) {
    return "error";
  }
  if (data.warnings && data.warnings.length > 0) {
    return "warning";
  }
  if (data.loading) {
    return "loading";
  }
  if (data.success) {
    return "success";
  }
  return "idle";
};
