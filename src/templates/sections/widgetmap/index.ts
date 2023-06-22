import Experience from '../experience'
import Header from '../header'
import Extras from '../extras'
import Widget from './widgetTypes'
import Skills from '../skills'
import Honors from '../honors'
import Events from '../events'
import Projects from '../projects'

const Widgets: { [key in Widget]: React.FC<any> } = {
  [Widget.HEADER]: Header,
  [Widget.EXPERIENCE]: Experience,
  [Widget.EXTRAS]: Extras,
  [Widget.PROJECTS]: Projects,
  [Widget.EVENTS]: Events,
  [Widget.SKILLS]: Skills,
  [Widget.HONORS]: Honors,
}

export { Widgets }
