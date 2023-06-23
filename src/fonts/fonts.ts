import _fontStyle from './styles.module.css'

export type FontTypes = keyof typeof _fontStyle
export type FontStyleType = { [key in FontTypes]: key }

const fontStyle = _fontStyle as FontStyleType
// Object.keys(fontStyle).forEach(key=>{fontStyle[key] = key})
export { fontStyle }
