interface CardContentProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export const CardContent = ({children, className, style}: CardContentProps) => {
  return (
    <div className={`p-6 ${className}`} style={style}>{children}</div>
  )
}
