import Canvas from "@/components/Canvas";
import Node from "@/components/Node";
import styles from "@/App.module.css";
import initialNodeState from "@/data";
import { Leva } from "leva";

function App() {
  return (
    <>
      <Leva theme={{ sizes: { rootWidth: "350px" } }} />
      <div className={styles.app}>
        <Canvas>
          <Node initialState={initialNodeState} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
