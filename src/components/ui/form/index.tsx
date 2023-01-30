import {
  formAreaProps,
  formControlProps,
  formProps,
  formSelectProps,
} from './props'

const Form = ({
  children,
  className = '',
  onSubmit = (e) => e.preventDefault(),
  ...props
}: formProps): JSX.Element => {
  return (
    <form
      onSubmit={onSubmit}
      className={''.concat(className && ' ' + className)}
      {...props}>
      {children}
    </form>
  )
}

export const FormControl = ({
  type,
  name,
  label,
  placeholder = ' ',
  value,
  onChange,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...props
}: formControlProps): JSX.Element => {
  return (
    <div className={'relative'.concat(className && ' ' + className)}>
      <input
        className={'appearance-none peer block w-full pb-1.5 pt-3 px-3 text-stone-900 transition duration-200 border rounded focus:outline-none focus:ring-0 focus:border-fuchsia-500'.concat(
          inputClassName && ' ' + inputClassName
        )}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=' '
        {...props}
      />
      <label
        className={'pointer-events-none duration-200 mb-2 px-1 bg-white top-0 text-stone-500 absolute -translate-y-2 left-3 text-sm peer-focus:text-sm peer-placeholder-shown:text-base peer-focus:text-fuchsia-500 transform peer-focus:-translate-y-2 peer-placeholder-shown:translate-y-2.5'.concat(
          labelClassName && ' ' + labelClassName
        )}
        htmlFor={name}>
        {label}
      </label>
    </div>
  )
}
export const FormSelect = ({
  children,
  name,
  label,
  placeholder = ' ',
  value,
  onChange,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...props
}: formSelectProps): JSX.Element => {
  return (
    <div className={'relative'.concat(className && ' ' + className)}>
      <select
        className={'appearance-none peer block w-full pb-1.5 pt-3 px-3 text-stone-900 transition duration-200 border rounded focus:outline-none focus:ring-0 focus:border-fuchsia-500'.concat(
          inputClassName && ' ' + inputClassName
        )}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=' '
        {...props}>
        {children}
      </select>
      <label
        className={'z-0 pointer-events-none duration-200 mb-2 px-1 bg-white top-0 text-stone-500 absolute -translate-y-2 left-3 text-sm peer-focus:text-sm peer-placeholder-shown:text-base peer-focus:text-fuchsia-500 transform peer-focus:-translate-y-2 peer-placeholder-shown:translate-y-2.5'.concat(
          labelClassName && ' ' + labelClassName
        )}
        htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export const FormArea = ({
  name,
  label,
  placeholder = ' ',
  value,
  onChange,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...props
}: formAreaProps): JSX.Element => {
  return (
    <div className={'relative'.concat(className && ' ' + className)}>
      <textarea
        className={'appearance-none peer block w-full py-2.5 px-3 text-stone-900 transition duration-200 border rounded focus:outline-none focus:ring-0 focus:border-fuchsia-500'.concat(
          inputClassName && ' ' + inputClassName
        )}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=' '
        {...props}
      />
      <label
        className={'z-0 pointer-events-none duration-200 mb-2 px-1 bg-white top-0 text-stone-500 absolute -translate-y-2 left-3 text-sm peer-focus:text-sm peer-placeholder-shown:text-base peer-focus:text-fuchsia-500 transform peer-focus:-translate-y-2 peer-placeholder-shown:translate-y-2.5'.concat(
          labelClassName && ' ' + labelClassName
        )}
        htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

Form.Control = FormControl
Form.Select = FormSelect
Form.Area = FormArea

export default Form
