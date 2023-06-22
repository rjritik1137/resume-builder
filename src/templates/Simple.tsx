import { Widgets } from './sections/widgetmap'

function Simple(props: any) {
  const { template } = props
  return (
    <div style={{ paddingInline: 50 }}>
      {template.sections.map((section: any) => {
        const Component = Widgets[section.type]
        if (!Component) return null
        return (
          <div key={section.type} style={{ marginTop: 20 }}>
            <Component data={section.data} />
          </div>
        )
      })}
    </div>
  )
}

export default Simple
