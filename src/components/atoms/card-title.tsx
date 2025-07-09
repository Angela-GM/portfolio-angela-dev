interface CardTitleProps {
    children?: React.ReactNode;
    className?: string;
}
export const CardTitle = ({children, className}:CardTitleProps) => {
  return (
    <div className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</div>
  )
}
