export interface Role {
  id: string;
  company: string;
  title: string;
  period: string;
  startDate: string;   // ISO for sorting
  endDate: string | 'present';
  current: boolean;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experience: Role[] = [
  {
    id: 'walmart-2',
    company: 'Walmart Inc.',
    title: 'Senior Software Developer',
    period: 'Sep 2025 – Present',
    startDate: '2025-09',
    endDate: 'present',
    current: true,
    location: 'Remote',
    summary:
      'Engineer core services on Walmart Marketplace\'s seller-payments platform — commission, settlement, seller payouts, and reconciliation across the US, Canada, Mexico, and Chile — migrating a legacy Java monolith to cloud-native microservices.',
    bullets: [
      'Migrated 30+ REST endpoints from a legacy Java monolith to containerized Spring Boot microservices on Kubernetes via canary releases, serving 2.5M+ daily requests.',
      'Engineered idempotency and concurrency controls for payment processing, resolving race conditions across distributed services to guarantee exactly-once settlement under high concurrent load.',
      'Replaced Cassandra-based locking with a faster Redis distributed-locking mechanism (Hazelcast as an in-memory option), cutting lock-acquisition latency for concurrent access to shared payment state.',
      'Built event-driven Kafka messaging for migrated payment services, integrating settlement ETL output and scheduled reconciliation jobs with downstream consumers.',
      'Designed a Spring Batch–orchestrated DAG pipeline for Pay-on-Delivery reconciliation, sequencing 12 validation stages — order matching, payout calculation, and processor transmission — with dependency management and failure/retry handling.',
      'Built a custom MCP server exposing payments-domain tools for AI-agent access to platform data, plus a custom Skill for automated migration parity-checking, and mentored junior engineers on the payments platform team.',
      'Built an agentic reconciliation classifier using the Claude Agent SDK to categorize disputed payment cases and infer partner intent, driving automated response and resolution for the reconciliation workflow.',
    ],
    tech: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'Hazelcast', 'Cassandra', 'Kubernetes', 'Docker', 'Spring Batch', 'Angular', 'MCP', 'Claude Agent SDK'],
  },
  {
    id: 'trp-2',
    company: 'T. Rowe Price',
    title: 'Software Developer',
    period: 'May 2024 – Sep 2025',
    startDate: '2024-05',
    endDate: '2025-09',
    current: false,
    location: 'Owings Mills, MD',
    summary:
      'Led architectural design discussions and built core financial microservices supporting millions of daily transactions across 300+ mutual fund products.',
    bullets: [
      'Integrated BNY Mellon Pershing and FactSet RESTful APIs to automate financial data retrieval for 300+ mutual fund products, RMD, and college savings accounts.',
      'Led architectural design discussions and authored technical design documents engaging directly with product owners across a 30+ person organization.',
      'Designed and deployed cloud-native services on AWS (EC2, S3, SNS, SQS), leveraging EMR for large-scale data processing within Spring Boot applications.',
      'Managed multi-database systems including IBM DB2, PostgreSQL, and DynamoDB, ensuring data integrity across high-availability financial applications.',
    ],
    tech: ['Java 17', 'Spring Boot', 'AWS', 'EC2', 'S3', 'SNS', 'SQS', 'EMR', 'DB2', 'PostgreSQL', 'DynamoDB', 'Angular'],
  },
  {
    id: 'walmart-1',
    company: 'Walmart Inc.',
    title: 'Software Developer',
    period: 'Sep 2022 – May 2024',
    startDate: '2022-09',
    endDate: '2024-05',
    current: false,
    location: 'Remote',
    summary:
      'Led the migration of monolithic legacy systems to cloud-native microservices, automating critical healthcare workflows across Walmart\'s Health & Wellness division.',
    bullets: [
      'Migrated monolithic legacy systems to cloud-native microservices using Java 17 and Spring WebFlux, reducing pharmacy staff labor by 2,500+ hours per day across the United States.',
      'Architected resilient event-driven data pipelines on Azure using Cosmos DB and Azure SQL with CI/CD orchestration via Concord for automated Kubernetes deployments.',
      'Implemented Kafka-based event orchestration to synchronize Cosmos DB change feed updates with downstream API executions across distributed microservices.',
    ],
    tech: ['Java 17', 'Spring WebFlux', 'Kafka', 'Azure', 'Cosmos DB', 'Azure SQL', 'Kubernetes', 'Concord', 'Spring Boot'],
  },
  {
    id: 'trp-1',
    company: 'T. Rowe Price',
    title: 'Full-Stack Developer',
    period: 'May 2020 – Sep 2022',
    startDate: '2020-04',
    endDate: '2022-09',
    current: false,
    location: 'Owings Mills, MD',
    summary:
      'Contributed across 10–15 microservices powering end-to-end Mutual Fund transactions, RMD, and college savings workflows for millions of daily trades across 300+ funds.',
    bullets: [
      'Migrated the RMD service from Groovy to Java Spring Boot, modernizing 8–10 endpoints and implementing JPA/Hibernate to improve throughput and maintainability.',
      'Built and maintained Angular/TypeScript frontend features using RxJS for reactive state management across fund transaction and portfolio views.',
      'Conducted code reviews, led technical design discussions, and maintained high test coverage using JUnit 5 and Mockito within a 12-person Agile/Scrum team.',
    ],
    tech: ['Java', 'Spring Boot', 'Groovy', 'Angular', 'TypeScript', 'RxJS', 'JPA', 'Hibernate', 'DB2', 'JUnit 5', 'Mockito', 'Rally'],
  },
  {
    id: 'abhyudaya',
    company: 'Abhyudaya Multimedia',
    title: 'Full-Stack Developer',
    period: 'Apr 2015 – May 2017',
    startDate: '2015-04',
    endDate: '2017-05',
    current: false,
    location: 'India',
    summary:
      'Built full-stack features for a multimedia advertising platform scaling from thousands to hundreds of thousands of users.',
    bullets: [
      'Built and maintained full-stack features using Spring MVC, Hibernate, and Oracle SQL within a 15-person engineering team.',
      'Developed interactive campaign analytics dashboards using D3.js and HTML5 Canvas, delivering real-time SVG-based ad performance visualizations.',
    ],
    tech: ['Java', 'Spring MVC', 'Hibernate', 'Oracle SQL', 'D3.js', 'HTML5', 'JavaScript'],
  },
];
