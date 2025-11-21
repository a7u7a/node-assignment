import Stack from "@/components/Stack";
import {
  ExecuteOnceIcon,
  AlwaysOutputIcon,
  RecycleIcon,
} from "@/components/icons";
import { useNodeContext } from "../hooks/useNodeContext";
import { useControls } from "leva";

const SettingsBadges = () => {
  const { nodePositions } = useNodeContext();
  const { leftEdge, bottomEdge } = nodePositions;

  const { retryOnFail, executeOnce, alwaysOutputData } = useControls(
    "Node Settings",
    {
      retryOnFail: { value: true, label: "Retry on fail" },
      executeOnce: { value: true, label: "Execute once" },
      alwaysOutputData: { value: true, label: "Always output data" },
    }
  );

  return (
    <Stack
      stackingDirection="right"
      offsetY="bottom"
      anchorPos={{ x: leftEdge, y: bottomEdge }}
    >
      {retryOnFail && <RecycleIcon />}
      {executeOnce && <ExecuteOnceIcon />}
      {alwaysOutputData && <AlwaysOutputIcon />}
    </Stack>
  );
};

export default SettingsBadges;
