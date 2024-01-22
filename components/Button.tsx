import { ReactNode, forwardRef } from "react";

type ButtonProps = {
  color?: 'primary' | 'secondary',
  className?: string | null,
  children?: ReactNode,
  href?: string,
  onClick?: () => void
}

const getColorClasses = (color: string): string => {
  if (color === 'secondary') {
    return 'text-black dark:text-gray-100 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-gray-100 dark:focus:ring-gray-900 focus:ring-opacity-30 dark:focus:ring-opacity-30';
  }
  return 'text-white dark:text-white bg-violet-600 dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-400 focus:ring-violet-600 dark:focus:ring-violet-500 focus:ring-opacity-30 dark:focus:ring-opacity-30';
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(({
  color = 'primary',
  className = '',
  children,
  href,
  onClick
}, ref) => {
  const baseClasses = 'rounded-lg px-4 py-2 font-semibold focus:outline-none focus:ring-4 inline-block'
  const colorClasses = getColorClasses(color);;

  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      {children}
    </a>
  );
});

export default Button;