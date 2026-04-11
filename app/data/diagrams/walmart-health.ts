import type { Node, Edge } from '@xyflow/react';

export const walmartHealthNodes: Node[] = [
  // User
  { id: 'user',     type: 'input', position: { x: 0,   y: 220 }, data: { label: 'User' }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },

  // Frontend
  { id: 'ui',       position: { x: 130, y: 190 }, data: { label: 'Clinical Service UI' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 12 } },

  // Primary backend service
  { id: 'clinical', position: { x: 310, y: 200 }, data: { label: 'Clinical Service\nSettings' }, style: { background: '#1e293b', color: '#60a5fa', border: '2px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre', fontWeight: 600 } },

  // Config
  { id: 'config',   position: { x: 130, y: 360 }, data: { label: 'Config Service\n(secrets + configs)' }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },

  // Event-driven components
  { id: 'listener', position: { x: 310, y: 360 }, data: { label: 'Service Settings\nListener' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },
  { id: 'kafka',    position: { x: 540, y: 300 }, data: { label: 'Kafka'                       }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },
  { id: 'changefeed', position: { x: 310, y: 460 }, data: { label: 'Changefeed Processor'     }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },

  // Databases
  { id: 'cosmos',   position: { x: 540, y: 180 }, data: { label: 'Cosmos DB'  }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12 } },
  { id: 'azuresql', position: { x: 540, y: 380 }, data: { label: 'Azure SQL'  }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12 } },

  // External
  { id: 'pharmacy', position: { x: 720, y: 180 }, data: { label: 'Walmart Pharmacy\nStores'   }, style: { background: '#1e293b', color: '#a78bfa', border: '1px solid #7c3aed', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },
  { id: 'internal', position: { x: 720, y: 280 }, data: { label: 'Internal Services\n(Image Service + others)' }, style: { background: '#1e293b', color: '#a78bfa', border: '1px solid #7c3aed', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },

  // Infra
  { id: 'k8s',      position: { x: 720, y: 380 }, data: { label: 'Kubernetes + Concord\n(CI/CD)' }, style: { background: '#1e293b', color: '#fb923c', border: '1px solid #ea580c', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },
];

export const walmartHealthEdges: Edge[] = [
  { id: 'e-user-ui',        source: 'user',      target: 'ui',        animated: false },
  { id: 'e-ui-clin',        source: 'ui',        target: 'clinical',  animated: false },
  { id: 'e-clin-cosmos',    source: 'clinical',  target: 'cosmos',    animated: false },
  { id: 'e-clin-azuresql',  source: 'clinical',  target: 'azuresql',  animated: false },
  { id: 'e-clin-pharmacy',  source: 'clinical',  target: 'pharmacy',  animated: false },
  { id: 'e-clin-internal',  source: 'clinical',  target: 'internal',  animated: false },
  { id: 'e-clin-kafka',     source: 'clinical',  target: 'kafka',     animated: false },
  { id: 'e-config-listener',source: 'config',    target: 'listener',  animated: false },
  { id: 'e-config-clin',    source: 'config',    target: 'clinical',  animated: false },
  { id: 'e-config-change',  source: 'config',    target: 'changefeed',animated: false },
  { id: 'e-listener-clin',  source: 'listener',  target: 'clinical',  animated: false },
  { id: 'e-cosmos-change',  source: 'cosmos',    target: 'changefeed',animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-change-kafka',   source: 'changefeed',target: 'kafka',     animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-kafka-listener', source: 'kafka',     target: 'listener',  animated: true, style: { stroke: '#3b82f6' } },
];

export const walmartHealthMeta = {
  title: 'Walmart — Clinical Services (Health & Wellness)',
  period: 'Sep 2022 – May 2024',
  description:
    'Led the migration of monolithic legacy systems to cloud-native microservices using Java 17 and Spring WebFlux, automating critical healthcare workflows across Walmart\'s Health & Wellness division. A Kafka-based event-driven architecture synchronizes Cosmos DB change feeds with downstream pharmacy services.',
  impact: [
    '2,500+ hours/day pharmacy labor saved',
    'Nationwide rollout across all US pharmacy locations',
    'Monolith → microservices migration',
    'Kafka event-driven changefeed pipeline',
  ],
  tech: ['Java 17', 'Spring WebFlux', 'Kafka', 'Cosmos DB', 'Azure SQL', 'Kubernetes', 'Concord', 'Azure'],
};
