import React, { FC } from 'react'
import { TextTypes } from './types'

//TODO : create fontWeight , color types
interface TextProps {
    content: string
    type: TextTypes
    hide?: boolean
    fontSize?: number
    textColor?: string
    fontWeight?: string
}

const H1 = (content: string, style: any): JSX.Element => (
    <h1 style={style}>{content}</h1>
)
const H2 = (content: string, style: any): JSX.Element => (
    <h2 style={style}>{content}</h2>
)
const H3 = (content: string, style: any): JSX.Element => (
    <h3 style={style}>{content}</h3>
)
const H4 = (content: string, style: any): JSX.Element => (
    <h4 style={style}>{content}</h4>
)
const H5 = (content: string, style: any): JSX.Element => (
    <h5 style={style}>{content}</h5>
)
const H6 = (content: string, style: any): JSX.Element => (
    <h6 style={style}>{content}</h6>
)
const B = (content: string, style: any): JSX.Element => (
    <b style={style}>{content}</b>
)
const Strong = (content: string, style: any): JSX.Element => (
    <strong style={style}>{content}</strong>
)
const I = (content: string, style: any): JSX.Element => (
    <i style={style}>{content}</i>
)
const Em = (content: string, style: any): JSX.Element => (
    <em style={style}>{content}</em>
)
const Mark = (content: string, style: any): JSX.Element => (
    <mark style={style}>{content}</mark>
)
const Del = (content: string, style: any): JSX.Element => (
    <del style={style}>{content}</del>
)
const Ins = (content: string, style: any): JSX.Element => (
    <ins style={style}>{content}</ins>
)
const Sub = (content: string, style: any): JSX.Element => (
    <sub style={style}>{content}</sub>
)
const Sup = (content: string, style: any): JSX.Element => (
    <sup style={style}>{content}</sup>
)
const Plain = (content: string, style: any): JSX.Element => (
    <div style={style}>{content}</div>
)

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
    [TextTypes.plain, Plain],
])

const Text: FC<TextProps> = ({
    content,
    type,
    hide = false,
    ...props
}: TextProps) => {
    if (hide) {
        return null
    }
    let style = null
    if (type === TextTypes.plain) {
        style = {
            'font-size': props.fontSize || 12,
            'font-weight': props.fontWeight || 500,
            color: props.textColor || '#222222',
        }
    } else {
        style = {
            color: props.textColor || '#222222',
        }
    }

    return txtMapper.get(type)(content, style)
}

export { Text, TextTypes }
