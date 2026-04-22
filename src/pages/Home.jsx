import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero Section - Premium and Minimal */}
      <section style={{ padding: '140px 40px 100px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ maxWidth: '700px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--text-h)',
              marginBottom: '32px',
              letterSpacing: '-0.5px',
            }}
          >
            Backend Engineer
            <br />
            Systems Architect
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--text-light)',
              marginBottom: '48px',
              maxWidth: '650px',
            }}
          >
            I build critical infrastructure and secure systems at scale. From designing distributed
            architectures to protecting 500K+ users, I focus on systems that solve real problems
            with technical depth.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 28px',
                backgroundColor: 'var(--accent)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 500,
                fontSize: '15px',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-md)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              View Projects <FaArrowRight size={14} />
            </Link>
            <a
              href="mailto:samuel@example.com"
              style={{
                padding: '12px 28px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--text-h)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '15px',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                e.currentTarget.style.borderColor = 'var(--text-h)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section
        style={{
          padding: '100px 40px',
          backgroundColor: 'var(--bg-alt)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '40px',
              fontWeight: 600,
            }}
          >
            Featured Work
          </p>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 300px',
                gap: '40px',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--text-h)',
                    marginBottom: '16px',
                  }}
                >
                  Enterprise Security Platform
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'var(--text-light)',
                    marginBottom: '24px',
                  }}
                >
                  Designed and deployed a comprehensive vulnerability management platform protecting
                  500K+ enterprise endpoints. Implemented real-time threat detection, automated
                  response systems, and achieved 99.9% uptime. Built with Python, Elasticsearch, and
                  AWS.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Python', 'Elasticsearch', 'AWS', 'SIEM'].map(tech => (
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
              <div style={{ fontSize: '48px', color: 'var(--border)' }}>→</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Skills/Domains */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            {/* Backend Engineering */}
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-h)',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Backend Engineering
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      marginBottom: '4px',
                    }}
                  >
                    Languages
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    Python, Java, C++, Go
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      marginBottom: '4px',
                    }}
                  >
                    Frameworks
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    Django, Spring, FastAPI, Node.js
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      marginBottom: '4px',
                    }}
                  >
                    Databases
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    PostgreSQL, MongoDB, Redis, Elasticsearch
                  </p>
                </div>
              </div>
            </div>

            {/* Security & Systems */}
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-h)',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Security & Infrastructure
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      marginBottom: '4px',
                    }}
                  >
                    Security
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    Threat Detection, Incident Response, Zero-Trust Architecture, NIST/CIS
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      marginBottom: '4px',
                    }}
                  >
                    Cloud & DevOps
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    AWS, Kubernetes, Terraform, Docker, CI/CD
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text-h)',
                      marginBottom: '4px',
                    }}
                  >
                    Systems Design
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    Distributed Systems, Scalability, Performance, Reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Clean */}
      <section
        style={{
          padding: '120px 40px',
          backgroundColor: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: 'var(--text-h)',
              marginBottom: '20px',
            }}
          >
            Let&apos;s build something great
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--text-light)',
              marginBottom: '40px',
            }}
          >
            Interested in discussing distributed systems, security challenges, or how I can help
            with your infrastructure?
          </p>
          <a
            href="mailto:samuel@example.com"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-md)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
