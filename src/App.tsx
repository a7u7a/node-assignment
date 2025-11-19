import Canvas from "@/components/Canvas";
import Node from "@/components/Node";
import styles from "@/App.module.css";
import initialNodeState from "@/data";

function App() {
  return (
    <div className={styles.app}>
      <Canvas>
        <Node initialState={initialNodeState} />
      </Canvas>
    </div>
  );
}

export default App;
