![Alt text](/screenshot.png "Optional title")

# Node Assignment

My take on the [n8n](https://github.com/n8n-io/n8n) "Base" node.

## Concept

I imagine n8n becoming not only a tool for unprecedented automation workflow flexibility but also for workflow **observability**. Users should be able to monitor the status and performance history of their nodes in ways that are relevant to them and their KPIs.

This proof-of-concept takes a step in that direction by introducing nodes with **variable dimensions** that act as containers for performance metrics. These nodes can be customized to function as workflow dashboards, allowing users to:

- Assess workflow status at a glance
- Identify bottlenecks and performance issues
- Check usage quotas and limits
- Browse recent activity and execution history
- Visualize data through tables or custom charts

Users can leverage default formatting or extend the implementation with their own visualizations.

**Design Decision**: The input/output icons have been detached from the main node card to provide greater flexibility for laying out node contents. This approach allows each I/O "cell" to be differentiated by data type through distinct icons, making data flow more intuitive.

## How to run

Using node v22.17.1 (npm v10.9.2)

```bash
npm install
```

```bash
npm run dev
```

Navigate to: `http://localhost:5173/`

## Pending

From highest to lowest priority:

- Quick actions menu
- Tooltips for buttons and icons
- Improve loading icon
- Node states must affect font color
- Add a "Cancel" execute button on hover while loading
- Select outside to deselect node
- Add reset button to leva controls
- Add custom text to leva controls
- Simplify imports

## Disclaimer

Admittedly, I got a bit carried away with the idea of implementing this using SVG. This lead to the creation of some layout logic that, in retrospect, I realize was not really part of the assissesment (i.e.: See the [Stack component](/src/components/Stack/Stack.tsx) and [useSVGMeasure](/src/lib/useSVGMeasure.ts) hooks).
