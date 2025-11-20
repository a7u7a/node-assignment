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
    "Settings",
    {
      retryOnFail: { value: false },
      executeOnce: { value: false },
      alwaysOutputData: { value: false },
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
