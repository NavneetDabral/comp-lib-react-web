import React, { FC } from 'react';
import { TextTypes } from './types'

interface TextProps {
  content: string
  type: TextTypes
}

{/* W3C
<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript te */}

const H1 = (content: string): JSX.Element => <h1>{content}</h1>
const H2 = (content: string): JSX.Element => <h2>{content}</h2>
const H3 = (content: string): JSX.Element => <h3>{content}</h3>
const H4 = (content: string): JSX.Element => <h4>{content}</h4>
const H5 = (content: string): JSX.Element => <h5>{content}</h5>
const H6 = (content: string): JSX.Element => <h6>{content}</h6>
const B = (content: string): JSX.Element => <b>{content}</b>
const Strong = (content: string): JSX.Element => <strong>{content}</strong>
const I = (content: string): JSX.Element => <i>{content}</i>
const Em = (content: string): JSX.Element => <em>{content}</em>
const Mark = (content: string): JSX.Element => <mark>{content}</mark>
const Del = (content: string): JSX.Element => <del>{content}</del>
const Ins = (content: string): JSX.Element => <ins>{content}</ins>
const Sub = (content: string): JSX.Element => <sub>{content}</sub>
const Sup = (content: string): JSX.Element => <sup>{content}</sup>
const Plain = (content: string): JSX.Element => <>{content}</>


const txtMapper = new Map<TextTypes, any>([
  [TextTypes.h1, H1],
  [TextTypes.h2, H2],
  [TextTypes.h3, H3],
  [TextTypes.h4, H4],
  [TextTypes.h5, H5],
  [TextTypes.h6, H6],
  [TextTypes.b, B],
  [TextTypes.strong, Strong],
  [TextTypes.i, I],
  [TextTypes.em, Em],
  [TextTypes.mark, Mark],
  [TextTypes.del, Del],
  [TextTypes.ins, Ins],
  [TextTypes.sup, Sup],
  [TextTypes.sub, Sub],
  [TextTypes.plain , Plain]
])

const Text: FC<TextProps> = ({ content, type }: TextProps) => {
  return (
    txtMapper.get(type)(content)
  )
}

export { Text }