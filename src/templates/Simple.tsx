import { mergeClasses } from '../utils/util'
import { Widgets } from './sections/widgetmap'
import styles from './simple.module.css'

function Simple(props: any) {
  const { template } = props
  return (
    <div style={{ paddingInline: 50 }}>
      {template.sections.map((section: any) => {
        const Component = Widgets[section.type]
        if (!Component) return null
        return (
          <div
            key={section.type}
            className={mergeClasses([styles.section, styles.unbrakable])}
          >
            <Component data={section.data} />
          </div>
        )
      })}
    </div>
  )
}

export default Simple
