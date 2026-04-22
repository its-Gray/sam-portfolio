export function About() {
  const educationItems = [
    { label: 'Masters in Cybersecurity', school: 'University Of  Playmouth', year: '2021' },
    { label: "Bachelor's in Computer Science", school: 'Kenyatta University, Kenya', year: '2017' },
  ];

  const certifications = [
    'CISSP - Certified Information Systems Security Professional',
    'CEH - Certified Ethical Hacker',
    'AWS Certified Security Specialist',
    'NIST Cybersecurity Framework Certified',
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
          About Me
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
          Building secure systems and mentoring the next generation of engineers. 7+ years of
          experience in backend engineering and cybersecurity.
        </p>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Journey Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            marginBottom: '100px',
          }}
        >
          {/* Left Column - Journey */}
          <div>
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--text-h)',
                marginBottom: '32px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              My Journey
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-light)',
                  margin: 0,
                }}
              >
                I earned my Bachelor&apos;s degree in Computer Science from Kenyatta University in
                Kenya, building a strong foundation in software development and system architecture.
                This technical base proved invaluable as I progressed into backend systems and
                distributed computing.
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-light)',
                  margin: 0,
                }}
              >
                Recognizing that security must be built into systems from the ground up, I pursued
                my Master&apos;s degree in Cybersecurity. This combination of backend engineering
                expertise and security specialization enables me to design systems that are both
                performant and secure.
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-light)',
                  margin: 0,
                }}
              >
                Today, I lead security initiatives protecting critical government infrastructure
                while mentoring engineers and contributing to the broader tech community.
              </p>
            </div>
          </div>

          {/* Right Column - Education & Certs */}
          <div>
            <div style={{ marginBottom: '60px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-h)',
                  marginBottom: '32px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {educationItems.map(item => (
                  <div
                    key={item.year}
                    style={{
                      paddingBottom: '16px',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '8px',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'var(--text-h)',
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </h3>
                      <span
                        style={{
                          fontSize: '13px',
                          color: 'var(--accent)',
                          fontWeight: 600,
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-light)',
                        margin: 0,
                      }}
                    >
                      {item.school}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-h)',
                  marginBottom: '32px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Certifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {certifications.map(cert => (
                  <div
                    key={cert}
                    style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                  >
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-light)',
                        lineHeight: 1.5,
                      }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
