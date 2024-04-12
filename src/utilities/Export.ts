export default class Export {
  constructor(data: object) {
    this.data = data
  }

  protected data: object

  public asTxt() {
    const a = document.createElement("a")
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(this.data, null, 2)], {
        type: "text/plain",
      })
    )
    a.setAttribute("download", "data.txt")
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
