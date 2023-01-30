export type formProps = {
  children: JSX.Element[] | JSX.Element
  className?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export type formControlProps = {
  type: string
  name: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  inputClassName?: string
  labelClassName?: string
  [props: string]: string | number | boolean
}
export type formSelectProps = {
  children: JSX.Element[] | JSX.Element
  name: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  inputClassName?: string
  labelClassName?: string
  [props: string]: string | number | boolean
}
export type formAreaProps = {
  name: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  inputClassName?: string
  labelClassName?: string
  [props: string]: string | number | boolean
}
