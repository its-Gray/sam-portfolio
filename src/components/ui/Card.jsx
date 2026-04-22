export function Card({ children, hover = true, className = '' }) {
  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-300 ${hover ? 'hover:-translate-y-2' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--bg-alt)',
        borderColor: 'var(--border)',
        borderWidth: '1px',
      }}
      onMouseEnter={
        hover
          ? e => {
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(255, 107, 53, 0.15)`;
              e.currentTarget.style.borderColor = 'var(--accent)';
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
