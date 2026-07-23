const newLine = '\n'
export const markdownHeader = new RegExp(`${newLine}(#+)(.*)`)
export const markdownH1 = /^# (.*$)/im
export const markdownH2 = /^## (.*$)/im
export const markdownH3 = /^### (.*$)/im
export const markdownH4 = /^#### (.*$)/im
export const markdownH5 = /^##### (.*$)/im
export const markdownH6 = /^###### (.*$)/im
export const markdownImage = /!\[([^[]+)\]\(([^)]+)\)/
export const markdownLink = /\[([^[]+)\]\(([^)]+)\)/
export const markdownStrong = /(\*\*|__)(.*?)(\*?)\1/
export const markdownDex = /~~(.*?)~~/
export const markdownQ = /:"(.*?)":/
export const markdownCode = /`(.*?)`/
export const markdownBlockquote = new RegExp(`${newLine}(&gt;|\\>)(.*)`)
export const markdownHr = new RegExp(`${newLine}-{5,}`)
export const markdownBr = new RegExp(`((${newLine}){2,})`)
export const markdownEm = /(\s|>)(\*|_)(.*?)\2(\s|<)/
export const markdownUlList = new RegExp(
  `${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`,
)
export const markdownOlList = new RegExp(`${newLine}[0-9]+\\.(.*)`)

export const markdownRegexesArray = [
  markdownH1,
  markdownH2,
  markdownH3,
  markdownH4,
  markdownH5,
  markdownH6,
  markdownImage,
  markdownLink,
  markdownStrong,
  markdownDex,
  markdownQ,
  markdownCode,
  markdownBlockquote,
  markdownHr,
  markdownBr,
  markdownEm,
  markdownUlList,
  markdownOlList,
]

export const htmlRegex =
  /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i

// Matches whole-string date values only (ISO 8601 date/datetime, or
// dd.mm.yyyy / dd/mm/yyyy). Prevents free text that merely contains a year
// (e.g. "Bewerbung im Frühjahr 2027") from being misdetected as a date.
export const dateStringRegex =
  /^(\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2})?(\.\d+)?(Z|[+-]\d{2}:?\d{2})?)?|\d{1,2}[./]\d{1,2}[./]\d{2,4})$/
