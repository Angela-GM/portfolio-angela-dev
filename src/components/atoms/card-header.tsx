interface CardHeaderProps {
    children?: React.ReactNode;
}
export const CardHeader = ({children}:CardHeaderProps) => {
  return (
    <div className="flex flex-col space-y-1.5 p-6">{children}</div>
  )
}
