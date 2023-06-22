import { Widgets } from './sections/widgetmap'

function Simple(props: any) {
  const { template } = props
  return (
    <>
      {template.sections.map((section: any) => {
        const Component = Widgets[section.type]
        return <Component key={section.type} data={section.data} />
      })}
    </>
  )
}

export default Simple
