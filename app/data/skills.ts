export interface SkillGroup {
  category: string;
  icon: string;   // lucide icon name
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    icon: 'Server',
    skills: ['Java 17+', 'Spring Boot', 'Spring WebFlux', 'Spring AOP', 'Spring MVC', 'JPA / Hibernate', 'Python', 'Groovy', 'REST / RESTful APIs'],
  },
  {
    category: 'Cloud & Infra',
    icon: 'Cloud',
    skills: ['AWS (EC2, S3, SNS, SQS, EMR)', 'Azure', 'GCP (Dataproc, Airflow)', 'Kubernetes', 'Docker', 'Concord CI/CD'],
  },
  {
    category: 'Data & Messaging',
    icon: 'Database',
    skills: ['Apache Kafka', 'Apache Spark', 'Cassandra', 'Redis', 'Hazelcast', 'Couchbase', 'PostgreSQL', 'DynamoDB', 'Cosmos DB', 'MongoDB', 'IBM DB2', 'Oracle SQL', 'Azure SQL', 'Azure Blob'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: ['TypeScript', 'React', 'Redux', 'Angular', 'RxJS', 'D3.js', 'HTML5', 'CSS'],
  },
  {
    category: 'DevOps & Monitoring',
    icon: 'Activity',
    skills: ['Jenkins', 'GitLab CI/CD', 'Grafana', 'Prometheus', 'Splunk'],
  },
  {
    category: 'Testing & Methodology',
    icon: 'FlaskConical',
    skills: ['JUnit 5', 'Mockito', 'Testcontainers', 'WireMock', 'TDD', 'Agile / Scrum', 'JIRA', 'Rally'],
  },
  {
    category: 'AI-Assisted Engineering',
    icon: 'Bot',
    skills: ['MCP Servers', 'Claude Agent SDK', 'Agentic Workflows', 'RAG / pgvector', 'Claude Skills & Plugins', 'AI-Driven Test Automation'],
  },
];
