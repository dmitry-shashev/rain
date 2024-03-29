type ConstantsOnlyType<TClass, TValue> = Omit<
  Pick<
    TClass,
    {
      [K in keyof TClass]: TClass[K] extends TValue ? K : never
    }[keyof TClass]
  >,
  // exclude it from autocompletion
  'EMPTY'
>

// it is here in order to prevent class logic overcomplicating
const VALUE_MARKER = Symbol()

abstract class StructEnum<TClass, TValue extends object> {
  // used instead of "null" or "undefined"
  //  - some "safe" way
  abstract readonly EMPTY: TValue

  public getAll(): Array<TValue> {
    const current = this as unknown as TClass
    const keys = Object.getOwnPropertyNames(current) as unknown as Array<
      keyof TClass
    >
    const result: Array<TValue> = []
    keys.forEach((key) => {
      const value = current[key] as unknown
      if (this.isValue(value) && value !== this.EMPTY) {
        result.push(value)
      }
    })
    return result
  }

  // this function can be used for parsing values by a key,
  // so it may accept "string"
  public getByKey(
    key: keyof ConstantsOnlyType<TClass, TValue> | string
  ): TValue {
    const current = this as unknown as Record<string, TValue | undefined>
    const result = current[String(key)] as TValue | undefined
    if (this.isValue(result)) {
      return result
    }
    return this.EMPTY
  }

  public isEmpty(value: TValue): boolean {
    return value === this.EMPTY
  }

  protected buildValue(obj: TValue): Readonly<TValue> {
    Object.assign(obj, {
      [VALUE_MARKER]: true,
    })
    // the main idea - if we do not specify "readonly" on the fields
    // and then use the construction like "const p: SomeData = Some.ONE"
    // we do implicit cast from readonly - "freeze" will trigger an error
    return Object.freeze(obj)
  }

  protected getByFieldValue<
    Key extends keyof TValue,
    Value extends TValue[Key] | undefined
  >(fieldName: Key, fieldValue: Value): TValue {
    if (fieldValue === undefined) {
      return this.EMPTY
    }
    const allConstants = this.getAll()
    const found = allConstants.find((v) => v[fieldName] === fieldValue)
    if (!found) {
      return this.EMPTY
    }
    return found
  }

  private isValue(value: unknown): value is TValue {
    if (typeof value === 'object' && value !== null && VALUE_MARKER in value) {
      return true
    }
    return false
  }
}

export default StructEnum
