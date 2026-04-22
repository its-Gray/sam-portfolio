import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
          Let&apos;s Talk
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
          Interested in discussing backend engineering, security challenges, or collaboration
          opportunities. Get in touch—I&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '60px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column - Quick Contact */}
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
              Get in Touch
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '12px',
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:samuel.dev@gmail.com"
                  style={{
                    fontSize: '15px',
                    color: 'var(--accent)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--accent)')}
                >
                  samuel.dev@gmail.com
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '12px',
                  }}
                >
                  Availability
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-light)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Available for contract work, consulting, and full-time opportunities. Typically
                  respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--text)',
                    boxSizing: 'border-box',
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--text)',
                    boxSizing: 'border-box',
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  placeholder="your@email.com"
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--text)',
                    boxSizing: 'border-box',
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--accent)',
                  color: 'white',
                  padding: '12px 28px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 500,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.2s ease',
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
                Send Message
                <FaArrowRight size={14} />
              </button>

              {submitted && (
                <div
                  style={{
                    marginTop: '24px',
                    padding: '16px',
                    backgroundColor: 'rgba(13, 148, 136, 0.1)',
                    color: 'var(--success)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  Message sent successfully! I&apos;ll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
