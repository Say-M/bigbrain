import { buttonProps } from './props'

const Button = ({
  children,
  className = '',
  type = 'button',
  ...props
}: buttonProps) => {
  return (
    <button
      type={type}
      className={'py-2.5 px-10 rounded transition'.concat(
        className && ' ' + className
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
