import Stack from "@/components/Stack";
import {
  ExecuteOnceIcon,
  AlwaysOutputIcon,
  RetryIcon,
} from "@/components/icons";
import { useNodeContext } from "../hooks/useNodeContext";
import { useControls } from "leva";

const SettingsBadges = () => {
  const { nodePositions } = useNodeContext();
  const { leftEdge, bottomEdge } = nodePositions;

  const { retryOnFail, executeOnce, alwaysOutputData } = useControls(
    "Node Settings",
    {
      retryOnFail: { value: true, label: "Retry on Fail" },
      executeOnce: { value: true, label: "Execute Once" },
      alwaysOutputData: { value: true, label: "Always Output Data" },
    }
  );

  return (
    <Stack
      stackingDirection="right"
      offsetY="bottom"
      anchorPos={{ x: leftEdge, y: bottomEdge }}
    >
      {retryOnFail && <RetryIcon />}
      {executeOnce && <ExecuteOnceIcon />}
      {alwaysOutputData && <AlwaysOutputIcon />}
    </Stack>
  );
};

export default SettingsBadges;
