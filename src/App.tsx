import Slide from "./components/Slide";
import Node from "./components/Node";
import styles from "./App.module.css";
import nodes from "./nodes";

function App() {
  return (
    <div className={styles.app}>
      {nodes.map((node) => (
        <Slide key={node.id}>
          <Node data={node} />
        </Slide>
      ))}
    </div>
  );
}

export default App;
