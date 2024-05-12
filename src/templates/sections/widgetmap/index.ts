import W1 from '../w1'
import Header from '../header'
import Extras from '../extras'
import Widget from './widgetTypes'
import Skills from '../skills'
import Honors from '../honors'

import Projects from '../projects'

const Widgets: { [key in Widget]: React.FC<any> } = {
  [Widget.HEADER]: Header,
  [Widget.W1]: W1,
  [Widget.EXTRAS]: Extras,
  [Widget.PROJECTS]: Projects,

  [Widget.SKILLS]: Skills,
  [Widget.HONORS]: Honors,
}

export { Widgets }
