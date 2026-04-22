import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = path => location.pathname === path;

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            SM
          </div>
          <span
            style={{
              color: 'var(--text-h)',
              fontWeight: 600,
              fontSize: '15px',
              display: 'none',
            }}
            className="hidden md:inline"
          >
            Samuel
          </span>
        </Link>

        {/* Desktop Menu */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '10px 16px',
                borderRadius: '6px',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                fontSize: '14px',
                color: isActive(link.path) ? 'white' : 'var(--text)',
                backgroundColor: isActive(link.path) ? 'var(--accent)' : 'transparent',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  e.currentTarget.style.color = 'var(--text-h)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text)';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Hidden on desktop via media query */}
        <style>{`
          @media (max-width: 767px) {
            .mobile-menu-btn {
              display: block !important;
            }
          }
        `}</style>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            color: 'var(--text)',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            padding: '8px',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            display: 'block',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
            padding: '16px 40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  color: isActive(link.path) ? 'white' : 'var(--text)',
                  backgroundColor: isActive(link.path) ? 'var(--accent)' : 'var(--bg-alt)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
