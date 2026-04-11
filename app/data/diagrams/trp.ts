import type { Node, Edge } from '@xyflow/react';

export const trpNodes: Node[] = [
  // User
  { id: 'user', type: 'input', position: { x: 0, y: 220 }, data: { label: 'User' }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },

  // Frontend
  { id: 'ssj-ui', position: { x: 130, y: 190 }, data: { label: 'SSJ UI\n(Angular)' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre' } },

  // SSJ
  { id: 'ssj', position: { x: 290, y: 200 }, data: { label: 'Self-Serve Journey\n(SSJ)' }, style: { background: '#1e293b', color: '#60a5fa', border: '1px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre' } },

  // Services
  { id: 'rmd',        position: { x: 470, y: 80  }, data: { label: 'RMD Service'        }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },
  { id: 'brokerage',  position: { x: 470, y: 200 }, data: { label: 'Brokerage Service'  }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },
  { id: 'account',    position: { x: 470, y: 320 }, data: { label: 'Account Access'     }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },

  // Account sub-services
  { id: 'portfolio',  position: { x: 640, y: 280 }, data: { label: 'Portfolio Service'  }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },
  { id: 'watchlist',  position: { x: 640, y: 360 }, data: { label: 'Watchlist Service'  }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12 } },
  { id: 'market',     position: { x: 800, y: 360 }, data: { label: 'Market Research\nService' }, style: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 12, whiteSpace: 'pre' } },

  // RSP Platform
  { id: 'rsp',        position: { x: 640, y: 80  }, data: { label: 'RSP\n(Retail Service Platform)' }, style: { background: '#1e293b', color: '#60a5fa', border: '2px solid #3b82f6', borderRadius: 8, fontSize: 12, whiteSpace: 'pre', fontWeight: 600 } },
  { id: 'entity',     position: { x: 810, y: 20  }, data: { label: 'Entity Service'     }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'agreement',  position: { x: 810, y: 80  }, data: { label: 'Agreement Service'  }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },
  { id: 'transaction',position: { x: 810, y: 140 }, data: { label: 'Transaction Service' }, style: { background: '#0f172a', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, fontSize: 11 } },

  // Databases
  { id: 'db2',       position: { x: 980, y: 80  }, data: { label: 'DB2'       }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12 } },
  { id: 'postgres',  position: { x: 640, y: 200 }, data: { label: 'PostgreSQL' }, style: { background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', borderRadius: 8, fontSize: 12 } },

  // Third-party
  { id: 'third-party', position: { x: 980, y: 320 }, data: { label: 'Third-Party Services\nPlaid · Pershing · FactSet' }, style: { background: '#1e293b', color: '#a78bfa', border: '1px solid #7c3aed', borderRadius: 8, fontSize: 11, whiteSpace: 'pre', textAlign: 'center' } },

  // AWS
  { id: 'aws', position: { x: 980, y: 190 }, data: { label: 'AWS\nRoute53 · ALB · ECS\nLambda · SNS · SQS\nDynamoDB' }, style: { background: '#1e293b', color: '#fb923c', border: '1px solid #ea580c', borderRadius: 8, fontSize: 11, whiteSpace: 'pre' } },
];

export const trpEdges: Edge[] = [
  { id: 'e-user-ui',        source: 'user',       target: 'ssj-ui',      animated: false },
  { id: 'e-ui-ssj',         source: 'ssj-ui',     target: 'ssj',         animated: false },
  { id: 'e-ssj-rmd',        source: 'ssj',        target: 'rmd',         animated: false },
  { id: 'e-ssj-brokerage',  source: 'ssj',        target: 'brokerage',   animated: false },
  { id: 'e-ssj-account',    source: 'ssj',        target: 'account',     animated: false },
  { id: 'e-ssj-rsp',        source: 'ssj',        target: 'rsp',         animated: false },
  { id: 'e-rmd-rsp',        source: 'rmd',        target: 'rsp',         animated: false },
  { id: 'e-brokerage-rsp',  source: 'brokerage',  target: 'rsp',         animated: false },
  { id: 'e-brokerage-pg',   source: 'brokerage',  target: 'postgres',    animated: false },
  { id: 'e-account-port',   source: 'account',    target: 'portfolio',   animated: false },
  { id: 'e-account-watch',  source: 'account',    target: 'watchlist',   animated: false },
  { id: 'e-portfolio-rsp',  source: 'portfolio',  target: 'rsp',         animated: false },
  { id: 'e-watchlist-rsp',  source: 'watchlist',  target: 'rsp',         animated: false },
  { id: 'e-watchlist-mkt',  source: 'watchlist',  target: 'market',      animated: false },
  { id: 'e-rsp-entity',     source: 'rsp',        target: 'entity',      animated: false },
  { id: 'e-rsp-agreement',  source: 'rsp',        target: 'agreement',   animated: false },
  { id: 'e-rsp-txn',        source: 'rsp',        target: 'transaction', animated: false },
  { id: 'e-entity-db2',     source: 'entity',     target: 'db2',         animated: false },
  { id: 'e-agreement-db2',  source: 'agreement',  target: 'db2',         animated: false },
  { id: 'e-txn-db2',        source: 'transaction',target: 'db2',         animated: false },
  { id: 'e-mkt-third',      source: 'market',     target: 'third-party', animated: false },
  { id: 'e-brokerage-third',source: 'brokerage',  target: 'third-party', animated: false },
  { id: 'e-ssj-third',      source: 'ssj',        target: 'third-party', animated: false },
  { id: 'e-rsp-aws',        source: 'rsp',        target: 'aws',         animated: false },
];

export const trpMeta = {
  title: 'T. Rowe Price — Self-Serve Journey Platform',
  period: 'Apr 2020 – Sep 2025',
  description:
    'End-to-end mutual fund transaction platform processing millions of daily trades across 300+ funds. Built on a microservices architecture with the Retail Service Platform (RSP) as the core engine, integrating third-party financial data providers and AWS cloud infrastructure.',
  impact: [
    'Millions of daily financial transactions',
    '300+ mutual fund products integrated',
    '30+ person organization',
    '8–10 endpoints modernized (RMD migration)',
  ],
  tech: ['Java 17', 'Spring Boot', 'Angular', 'AWS', 'DB2', 'PostgreSQL', 'DynamoDB', 'Groovy', 'JUnit 5'],
};
