export interface FormProps<T> {
  readonly defaultValues?: T
  readonly globalErrors?: Array<string>
  readonly loading?: boolean
  readonly hideControls?: boolean
  onSubmit: (data: T) => void
  onCancel?: () => void
}
