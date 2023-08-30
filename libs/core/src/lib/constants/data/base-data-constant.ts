type ConstantsOnlyType<TClass, TDataKind> = Omit<
  Pick<
    TClass,
    {
      [K in keyof TClass]: TClass[K] extends TDataKind ? K : never
    }[keyof TClass]
  >,
  // exclude it from autocompletion
  'UNDEFINED'
>

// it is here in order to prevent class logic overcomplicating
const CONSTANT_VALUE_TYPE = Symbol('CONSTANT_VALUE_TYPE')

abstract class BaseDataConstant<TClass, TDataKind extends object> {
  abstract readonly UNDEFINED: TDataKind

  public getAll(): Array<TDataKind> {
    const current = this as unknown as TClass
    const keys = Object.getOwnPropertyNames(current) as unknown as Array<
      keyof TClass
    >
    const result: Array<TDataKind> = []
    keys.forEach((key) => {
      const value = current[key] as unknown
      if (this.isConstantField(value) && value !== this.UNDEFINED) {
        result.push(value)
      }
    })
    return result
  }

  // this function can be used for parsing values by a key,
  // so it may accept "string"
  public getByKey(
    key: keyof ConstantsOnlyType<TClass, TDataKind> | string
  ): TDataKind {
    const current = this as unknown as Record<string, TDataKind | undefined>
    const result = current[String(key)] as TDataKind | undefined
    if (this.isConstantField(result)) {
      return result
    }
    return this.UNDEFINED
  }

  protected buildValue(obj: TDataKind): Readonly<TDataKind> {
    Object.assign(obj, {
      [CONSTANT_VALUE_TYPE]: true,
    })
    // the main idea - if we do not specify "readonly" on the fields
    // and then use the construction like "const p: SomeData = Some.ONE"
    // we do implicit cast from readonly - "freeze" will trigger an error
    return Object.freeze(obj)
  }

  protected getByFieldValue<
    Key extends keyof TDataKind,
    Value extends TDataKind[Key] | undefined
  >(fieldName: Key, fieldValue: Value): TDataKind {
    if (fieldValue === undefined) {
      return this.UNDEFINED
    }
    const allConstants = this.getAll()
    const found = allConstants.find((v) => v[fieldName] === fieldValue)
    if (!found) {
      return this.UNDEFINED
    }
    return found
  }

  private isConstantField(value: unknown): value is TDataKind {
    if (
      typeof value === 'object' &&
      value !== null &&
      CONSTANT_VALUE_TYPE in value
    ) {
      return true
    }
    return false
  }
}

export default BaseDataConstant
