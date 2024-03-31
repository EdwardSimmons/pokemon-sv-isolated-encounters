export default class Str {
  constructor(str: string) {
    this.str = str
  }
  protected str: string
  public toTitleCase() {
    return this.str.replace(
      /\b\w+/g,
      s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()
    )
  }
}
