import type { Node, Edge } from '@xyflow/react';

export const walmartPaymentsNodes: Node[] = [
  // Entry
  { id: 'seller',      type: 'input', position: { x: 0,   y: 220 }, data: { label: 'Seller / User' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre', width: 130, textAlign: 'center' } },
  { id: 'seller-ui',   position: { x: 190, y: 210 }, data: { label: 'Seller Center UI\n(Web + Mobile)' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre', width: 150, textAlign: 'center' } },
  { id: 'gateway',     position: { x: 410, y: 200 }, data: { label: 'API Gateway + GraphQL\n(IAM / PAM Auth)' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 11, whiteSpace: 'pre', width: 190, textAlign: 'center' } },

  // Orchestration / BFF tier
  { id: 'settlement-svc', position: { x: 680, y: 90  }, data: { label: 'Settlement Service' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11, width: 150, textAlign: 'center' } },
  { id: 'billing-svc',    position: { x: 680, y: 190 }, data: { label: 'Billing Service' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11, width: 150, textAlign: 'center' } },
  { id: 'wallet-bff',     position: { x: 680, y: 290 }, data: { label: 'Wallet BFF' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11, width: 150, textAlign: 'center' } },

  // Core platform
  { id: 'payments-platform', position: { x: 930, y: 190 }, data: { label: 'Payments Platform\n(Commission Engine)' }, style: { background: '#1e293b', color: '#60a5fa', border: '2px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre', fontWeight: 600, width: 170, textAlign: 'center' } },
  { id: 'redis',             position: { x: 930, y: 40  }, data: { label: 'Redis + Hazelcast\n(Distributed Locking)' }, style: { background: '#1e293b', color: '#f87171', border: '1px solid #dc2626', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 170, textAlign: 'center' } },
  { id: 'kafka-consumers',   position: { x: 930, y: 340 }, data: { label: 'Kafka Consumers\n(Order / Adjustment)' }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 170, textAlign: 'center' } },

  // DB
  { id: 'cassandra', position: { x: 1160, y: 190 }, data: { label: 'Cassandra\n(Payment State)' }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 11, whiteSpace: 'pre', width: 150, textAlign: 'center' } },

  // Downstream
  { id: 'wallet-platform', position: { x: 1390, y: 40  }, data: { label: 'Wallet Platform\n(Auto-Payout)' }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 150, textAlign: 'center' } },
  { id: 'risk-model',      position: { x: 1390, y: 140 }, data: { label: 'Risk / Capital\nModel Service' }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 150, textAlign: 'center' } },
  { id: 'batch-reporting', position: { x: 1390, y: 240 }, data: { label: 'Batch Reporting\n(Apache Spark)' }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 150, textAlign: 'center' } },

  // Reconciliation DAG — showpiece sub-flow
  { id: 'pod-recon', position: { x: 1160, y: 360 }, data: { label: 'POD Reconciliation DAG\n(12 stages · Spring Batch)' }, style: { background: '#1e293b', color: '#fb923c', border: '2px dashed #ea580c', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', fontWeight: 600, width: 200, textAlign: 'center' } },

  // Disbursement
  { id: 'disbursement', position: { x: 1390, y: 360 }, data: { label: 'Accounting / ERP →\nPayment Processors' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 170, textAlign: 'center' } },

  // AI / MCP layer — parallel, not seller-facing
  { id: 'mcp-server', position: { x: 410, y: 440 }, data: { label: 'MCP Server\n(AI-Agent Tools)' }, style: { background: '#1e293b', color: '#a78bfa', border: '1px dashed #7c3aed', borderRadius: 8, fontSize: 11, whiteSpace: 'pre', width: 160, textAlign: 'center' } },
  { id: 'agent-classifier', position: { x: 1160, y: 470 }, data: { label: 'Reconciliation Classifier\n(Claude Agent SDK)' }, style: { background: '#1e293b', color: '#a78bfa', border: '1px dashed #7c3aed', borderRadius: 8, fontSize: 10.5, whiteSpace: 'pre', width: 200, textAlign: 'center' } },
];

export const walmartPaymentsEdges: Edge[] = [
  { id: 'e-seller-ui',   source: 'seller',    target: 'seller-ui', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-ui-gateway',  source: 'seller-ui', target: 'gateway',   animated: true, style: { stroke: '#3b82f6' } },

  { id: 'e-gw-settlement', source: 'gateway', target: 'settlement-svc', animated: false },
  { id: 'e-gw-billing',    source: 'gateway', target: 'billing-svc',    animated: false },
  { id: 'e-gw-wallet',     source: 'gateway', target: 'wallet-bff',     animated: false },

  { id: 'e-settlement-pp', source: 'settlement-svc', target: 'payments-platform', animated: false },
  { id: 'e-billing-pp',    source: 'billing-svc',    target: 'payments-platform', animated: false },
  { id: 'e-walletbff-pp',  source: 'wallet-bff',     target: 'payments-platform', animated: false },

  { id: 'e-pp-redis',  source: 'payments-platform', target: 'redis',           animated: false, style: { stroke: '#dc2626' } },
  { id: 'e-kafka-pp',  source: 'kafka-consumers',   target: 'payments-platform', animated: false },
  { id: 'e-pp-cass',   source: 'payments-platform', target: 'cassandra',       animated: false },

  { id: 'e-cass-wallet', source: 'cassandra', target: 'wallet-platform',  animated: false },
  { id: 'e-cass-risk',   source: 'cassandra', target: 'risk-model',       animated: false },
  { id: 'e-cass-batch',  source: 'cassandra', target: 'batch-reporting',  animated: false },

  { id: 'e-kafka-pod',   source: 'kafka-consumers', target: 'pod-recon',    animated: true, style: { stroke: '#ea580c', strokeWidth: 1, strokeDasharray: '3 3' } },
  { id: 'e-pod-disb',    source: 'pod-recon',       target: 'disbursement', animated: true, style: { stroke: '#ea580c', strokeWidth: 1, strokeDasharray: '3 3' } },
  { id: 'e-wallet-disb', source: 'wallet-platform', target: 'disbursement', animated: false },

  { id: 'e-mcp-pp', source: 'mcp-server', target: 'payments-platform', animated: false, style: { stroke: '#7c3aed', strokeWidth: 1, strokeDasharray: '3 3' } },
  { id: 'e-classifier-pod', source: 'agent-classifier', target: 'pod-recon', animated: true, style: { stroke: '#7c3aed', strokeWidth: 1, strokeDasharray: '3 3' } },
];

export const walmartPaymentsMeta = {
  title: 'Walmart — Marketplace Payments Platform',
  period: 'Sep 2025 – Present',
  description:
    'Engineer core services on Walmart Marketplace\'s seller-payments platform — commission, settlement, seller payouts, and reconciliation across the US, Canada, Mexico, and Chile. Migrated 30+ REST endpoints from a legacy Java monolith to containerized Spring Boot microservices on Kubernetes via canary releases. A parallel MCP layer exposes the same platform data to AI agents for migration parity-checking and domain tooling, and a Claude Agent SDK–based classifier feeds the Pay-on-Delivery reconciliation DAG by categorizing disputed cases and inferring partner intent.',
  impact: [
    '2.5M+ daily payment requests',
    '30+ endpoints migrated to microservices',
    '12-stage reconciliation DAG for Pay-on-Delivery',
    'Agentic reconciliation classifier (Claude Agent SDK)',
  ],
  tech: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'Hazelcast', 'Cassandra', 'Kubernetes', 'Docker', 'Spring Batch', 'Angular', 'MCP', 'Claude Agent SDK'],
};
