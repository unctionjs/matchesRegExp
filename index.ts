import { string } from "./types"

export default function matchesRegExp (expression: RegExp) {
  return function matchesRegExpExpression (text: string): Boolean {
    return expression.test(text)
  }
}
