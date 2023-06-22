import Experience from '../experience/Experience'
import Header from '../header'
import Extras from '../extras'
import Widget from './widgetTypes'
import Skills from '../skills'
import Achievements from '../achievements'
import Events from '../events'
import Projects from '../projects'

const Widgets: { [key in Widget]: React.FC<any> } = {
  [Widget.HEADER]: Header,
  [Widget.EXPERIENCE]: Experience,
  [Widget.EXTRAS]: Extras,
  [Widget.PROJECTS]: Projects,
  [Widget.EVENTS]: Events,
  [Widget.SKILLS]: Skills,
  [Widget.ACHIEVEMENTS]: Achievements,
}

export { Widgets }
