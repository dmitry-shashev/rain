import BaseDataConstant from './base-data-constant'

export interface ColorKindData {
  label: string
  value: string
}

class ColorKind extends BaseDataConstant<ColorKind, ColorKindData> {
  public UNDEFINED = this.buildValue({
    label: '',
    value: '-1',
  })

  public RED = this.buildValue({
    label: 'Red',
    value: 'red',
  })

  public GREEN = this.buildValue({
    label: 'Green',
    value: 'green',
  })

  public BLUE = this.buildValue({
    label: 'Blue',
    value: 'blue',
  })

  // example how we can get own sets
  public getOnlyNeeded(): ReadonlyArray<ColorKindData> {
    return [this.GREEN, this.BLUE]
  }

  // example how we can get a value by a field
  public getByLabel(value: ColorKindData['label']): ColorKindData {
    return this.getByFieldValue('label', value)
  }
}

const obj = Object.freeze(new ColorKind())
export { obj as ColorKind }
