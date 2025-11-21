![Alt text](/screenshot.png "Optional title")

# Node Assignment

My take on the n8n "Base" node.

## Concept

The main idea behind this design is to implement a node with variable dimensions. The concept behind it is to augment the workflow view with observability features. Allowing users to have more details available to them at a glance without having to inspect the nodes.

The design implements the concept of node "drawers" which could be extended to include custom observability widgets for each node, allowing the workflow view to act as a dashboard. For instance allowing summaries, extended warning or error messages or even data-visualizations to exist in the node.

Separating the inputs and outputs from the main node card opens the opportunity to use of specific input/output icons to differentiate input types.

## How to run

Using node v22.17.1 (npm v10.9.2)

```bash
npm install
```

```bash
npm run dev
```

Navigate to: `http://localhost:5173/`
