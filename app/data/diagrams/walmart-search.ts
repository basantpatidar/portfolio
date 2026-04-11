import type { Node, Edge } from '@xyflow/react';

export const walmartSearchNodes: Node[] = [
  // Entry
  { id: 'search',    type: 'input', position: { x: 0,   y: 200 }, data: { label: 'Walmart Search\n(100M+ daily queries)' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre' } },

  // Core engine
  { id: 'perceive',  position: { x: 200, y: 190 }, data: { label: 'Perceive\n(DAG Engine)' }, style: { background: '#1e293b', color: '#60a5fa', border: '2px solid #3b82f6', borderRadius: 8, fontSize: 13, whiteSpace: 'pre', fontWeight: 600 } },

  // ML Models (fan-out)
  { id: 'genai',     position: { x: 440, y: 20  }, data: { label: 'GenAI Flows'              }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'pt',        position: { x: 440, y: 90  }, data: { label: 'Product Type Models'      }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'ann',       position: { x: 440, y: 160 }, data: { label: 'ANN Query Embedding Model'}, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'brand',     position: { x: 440, y: 230 }, data: { label: 'Brand Entity Models'      }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'categorizer', position: { x: 440, y: 300 }, data: { label: 'Query Categorizer Models' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'other-ml',  position: { x: 440, y: 370 }, data: { label: 'Other ML Models\n(multitask · encoders · 70+ total)' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px dashed #334155', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },

  // Messaging & Monitoring
  { id: 'kafka',     position: { x: 200, y: 370 }, data: { label: 'Kafka\n→ Open Logs' }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12, whiteSpace: 'pre' } },
  { id: 'prometheus',position: { x: 200, y: 460 }, data: { label: 'Prometheus'          }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },
  { id: 'grafana',   position: { x: 360, y: 460 }, data: { label: 'Grafana'             }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },

  // Databases
  { id: 'cassandra', position: { x: 0,   y: 380 }, data: { label: 'Cassandra\n(multi-region)' }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12, whiteSpace: 'pre' } },
  { id: 'couchbase', position: { x: 0,   y: 460 }, data: { label: 'Couchbase'                 }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12 } },
  { id: 'azureblob', position: { x: 0,   y: 540 }, data: { label: 'Azure Blob'                }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12 } },

  // Infra
  { id: 'k8s',       position: { x: 440, y: 460 }, data: { label: 'Kubernetes + Concord\n(CI/CD)' }, style: { background: '#1e293b', color: '#fb923c', border: '1px solid #ea580c', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },
];

export const walmartSearchEdges: Edge[] = [
  { id: 'e-s-p',     source: 'search',    target: 'perceive',   animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-p-genai', source: 'perceive',  target: 'genai',      animated: false },
  { id: 'e-p-pt',    source: 'perceive',  target: 'pt',         animated: false },
  { id: 'e-p-ann',   source: 'perceive',  target: 'ann',        animated: false },
  { id: 'e-p-brand', source: 'perceive',  target: 'brand',      animated: false },
  { id: 'e-p-cat',   source: 'perceive',  target: 'categorizer',animated: false },
  { id: 'e-p-other', source: 'perceive',  target: 'other-ml',   animated: false },
  { id: 'e-p-kafka', source: 'perceive',  target: 'kafka',      animated: false },
  { id: 'e-p-prom',  source: 'perceive',  target: 'prometheus', animated: false },
  { id: 'e-prom-g',  source: 'prometheus',target: 'grafana',    animated: false },
  { id: 'e-p-cass',  source: 'perceive',  target: 'cassandra',  animated: false },
  { id: 'e-p-couch', source: 'perceive',  target: 'couchbase',  animated: false },
  { id: 'e-p-blob',  source: 'perceive',  target: 'azureblob',  animated: false },
];

export const walmartSearchMeta = {
  title: 'Walmart — E-Commerce Search Platform',
  period: 'Sep 2025 – Present',
  description:
    'Extended and scaled the Java Spring Boot microservice powering Walmart\'s e-commerce search, delivering query understanding for 100M+ daily requests. The Perceive DAG engine orchestrates 70+ parallel ML models in real-time for classification, categorization, and query embedding.',
  impact: [
    '100M+ daily search queries',
    '70+ parallel ML models orchestrated',
    '40% reduction in manual data audit time',
    '99.9%+ availability on multi-region Cassandra',
  ],
  tech: ['Java 17', 'Spring Boot', 'Kafka', 'Cassandra', 'Couchbase', 'Azure', 'Kubernetes', 'Python', 'Grafana', 'Prometheus'],
};
