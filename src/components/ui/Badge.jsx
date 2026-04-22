export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: {
      backgroundColor: 'var(--bg)',
      color: 'var(--accent)',
      border: '1px solid var(--accent)',
    },
    accent: {
      backgroundColor: 'var(--accent)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--bg-alt)',
      color: 'var(--text-light)',
      border: '1px solid var(--border)',
    },
  };

  const style = variants[variant];

  return (
    <span
      className="px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 inline-block"
      style={style}
      onMouseEnter={e => {
        if (variant === 'default') {
          e.currentTarget.style.backgroundColor = 'var(--accent)';
          e.currentTarget.style.color = 'white';
        }
      }}
      onMouseLeave={e => {
        if (variant === 'default') {
          e.currentTarget.style.backgroundColor = 'var(--bg)';
          e.currentTarget.style.color = 'var(--accent)';
        }
      }}
    >
      {children}
    </span>
  );
}
