// Button.tsx
import { ButtonProps } from "../../types/button/Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = '';
  const variantClasses = {};
  const sizeClasses = {};
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses}`;

  return (
    <button
      className={classes}
      disabled={disabled || false}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button };
