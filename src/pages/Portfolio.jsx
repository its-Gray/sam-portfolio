export function Portfolio() {
  const projects = [
    {
      title: 'Enterprise Security Platform',
      description:
        'Designed and implemented a comprehensive vulnerability management platform protecting 500+ enterprise endpoints with real-time threat detection and automated response systems.',
      tech: ['Python', 'Elasticsearch', 'React', 'AWS', 'SIEM'],
      impact: '500K+ records protected',
      outcome: '99.99% uptime maintained',
    },
    {
      title: 'Zero-Trust Authentication System',
      description:
        'Built advanced authentication framework implementing MFA, biometric verification, and quantum-resistant encryption protocols for government security infrastructure.',
      tech: ['Java', 'Cryptography', 'OAuth 2.0', 'PostgreSQL', 'SSL/TLS'],
      impact: '99.9% availability',
      outcome: 'Zero security breaches',
    },
    {
      title: 'Cloud Infrastructure Migration',
      description:
        'Led secure migration of legacy applications to cloud platforms with zero downtime, modernizing infrastructure while maintaining compliance standards.',
      tech: ['Kubernetes', 'Terraform', 'AWS', 'Docker', 'DevSecOps'],
      impact: '40% cost reduction',
      outcome: 'Completed in 6 months',
    },
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg)' }}>
      {/* Header Section */}
      <section style={{ padding: '100px 40px 60px', maxWidth: '1100px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'var(--text-h)',
            marginBottom: '20px',
            letterSpacing: '-0.5px',
          }}
        >
          Featured Projects
        </h1>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-light)',
            maxWidth: '650px',
            margin: 0,
          }}
        >
          Significant projects demonstrating engineering depth, security expertise, and measurable
          impact on critical systems.
        </p>
      </section>

      {/* Projects */}
      <section style={{ padding: '60px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projects.map((project, idx) => (
            <div key={idx}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-h)',
                  marginBottom: '16px',
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-light)',
                  marginBottom: '24px',
                }}
              >
                {project.description}
              </p>

              {/* Impact and Outcome */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px',
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    Impact
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      margin: 0,
                    }}
                  >
                    {project.impact}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    Outcome
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      margin: 0,
                    }}
                  >
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '12px',
                      color: 'var(--accent)',
                      backgroundColor: 'var(--accent-light)',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
