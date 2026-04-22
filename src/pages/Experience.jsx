export function Experience() {
  const experiences = [
    {
      role: 'Senior Cybersecurity Engineer',
      company: 'Wisconsin Department of Revenue',
      period: '2021 - Present',
      description:
        'Lead comprehensive security initiatives protecting sensitive government data and critical infrastructure. Directing a team of 5+ security engineers across threat detection, compliance, and system hardening.',
      achievements: [
        'Redesigned security architecture protecting 500K+ government records',
        'Reduced incident response time from 4 hours to 1.5 hours (60% improvement)',
        'Led NIST 800-53 and CIS Controls framework implementation',
        'Established security mentorship program for 12+ junior engineers',
      ],
    },
    {
      role: 'Cybersecurity Analyst',
      company: 'Regional Financial Services',
      period: '2019 - 2021',
      description:
        'Conducted comprehensive security assessments and managed incident response for enterprise systems. Implemented advanced threat detection, endpoint protection, and compliance frameworks.',
      achievements: [
        'Performed 50+ penetration tests identifying critical vulnerabilities',
        'Managed 99.9% uptime during critical security incidents',
        'Implemented endpoint detection and response across 1000+ devices',
        'Developed and delivered security awareness training to 500+ employees',
      ],
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
          Experience
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
          7+ years of progressive experience building secure systems and leading security
          initiatives at scale.
        </p>
      </section>

      {/* Timeline */}
      <section style={{ padding: '60px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {experiences.map(job => (
            <div key={job.role}>
              <div style={{ marginBottom: '24px' }}>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--text-h)',
                    marginBottom: '8px',
                  }}
                >
                  {job.role}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    {job.company}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    {job.period}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-light)',
                  marginBottom: '24px',
                }}
              >
                {job.description}
              </p>

              <div
                style={{
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  Key Achievements
                </p>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {job.achievements.map(achievement => (
                    <li
                      key={achievement}
                      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <span
                        style={{
                          color: 'var(--accent)',
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-light)',
                          lineHeight: 1.5,
                        }}
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
