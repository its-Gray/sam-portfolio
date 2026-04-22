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
    <>
      <style>{`
        .nav-desktop {
          display: flex;
        }
        .mobile-menu-btn {
          display: none;
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-maxwidth {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .nav-mobile {
            display: none !important;
          }
        }
      `}</style>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: 'var(--bg-alt)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="nav-maxwidth"
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
            className="nav-desktop"
            style={{
              gap: '4px',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '8px 14px',
                  borderRadius: '5px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  fontSize: '13px',
                  color: isActive(link.path) ? 'white' : 'var(--text)',
                  backgroundColor: isActive(link.path) ? 'var(--accent)' : 'transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.3px',
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            style={{
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
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              display: 'block',
              borderTop: '1px solid var(--border)',
              backgroundColor: 'var(--bg)',
              padding: '12px 20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 12px',
                    borderRadius: '5px',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    color: isActive(link.path) ? 'white' : 'var(--text)',
                    backgroundColor: isActive(link.path) ? 'var(--accent)' : 'transparent',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                  onMouseEnter={e => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
