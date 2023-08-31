import BaseDataConstant from './base-data-constant'

export interface ColorKindData {
  label: string
  value: string
}

class ColorKind extends BaseDataConstant<ColorKind, ColorKindData> {
  UNDEFINED = this.buildValue({
    label: '',
    value: '',
  })

  RED = this.buildValue({
    label: 'Red',
    value: 'red',
  })

  GREEN = this.buildValue({
    label: 'Green',
    value: 'green',
  })

  BLUE = this.buildValue({
    label: 'Blue',
    value: 'blue',
  })

  // example how we can get own sets
  getOnlyNeeded(): ReadonlyArray<ColorKindData> {
    return [this.GREEN, this.BLUE]
  }

  // example how we can get a value by a field
  getByLabel(value: ColorKindData['label']): ColorKindData {
    return this.getByFieldValue('label', value)
  }
}

const obj: Readonly<ColorKind> = new ColorKind()
export { obj as ColorKind }
