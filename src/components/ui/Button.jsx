export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles =
    'px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2';

  const variants = {
    primary: {
      style: {
        backgroundColor: 'var(--accent)',
        color: 'white',
        boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.5)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 53, 0.3)';
      },
    },
    secondary: {
      style: {
        borderColor: 'var(--accent)',
        color: 'var(--accent)',
        borderWidth: '2px',
      },
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = 'var(--accent)';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = 'var(--accent)';
      },
    },
  };

  const variant_config = variants[variant];

  return (
    <button
      className={`${baseStyles} ${className}`}
      style={variant_config.style}
      onMouseEnter={variant_config.onMouseEnter}
      onMouseLeave={variant_config.onMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
