'use client';

import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface Props {
  nodes: Node[];
  edges: Edge[];
}

export function FlowDiagram({ nodes: initNodes, edges: initEdges }: Props) {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(initEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      panOnDrag={true}
      zoomOnScroll={false}
      zoomOnPinch={true}
      minZoom={0.3}
      maxZoom={1.5}
      proOptions={{ hideAttribution: true }}
      style={{ background: 'transparent' }}
      defaultEdgeOptions={{
        style: { stroke: '#475569', strokeWidth: 1.5 },
        animated: false,
      }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={20}
        size={1}
        color="#1e293b"
      />
    </ReactFlow>
  );
}
