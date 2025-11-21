import { DeleteIcon, DeltaIcon } from "@/components/icons";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import Stack from "@/components/Stack";
import { useControls } from "leva";

const EditsBadge = () => {
  const { nodePositions } = useNodeContext();
  const { rightEdge, bottomEdge } = nodePositions;

  const { unsavedEdits } = useControls("Node State", {
    unsavedEdits: { value: false, label: "Unsaved edits" },
  });

  return (
    <Stack
      stackingDirection="left"
      offsetY="bottom"
      anchorPos={{ x: rightEdge, y: bottomEdge }}
    >
      <DeleteIcon />
      {unsavedEdits && <DeltaIcon />}
    </Stack>
  );
};

export default EditsBadge;
