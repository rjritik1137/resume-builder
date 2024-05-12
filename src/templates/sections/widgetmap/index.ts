import W1 from '../w1'
import Header from '../header'
import Extras from '../extras'
import Widget from './widgetTypes'
import W2 from '../w2'
import Honors from '../honors'

import Projects from '../projects'

const Widgets: { [key in Widget]: React.FC<any> } = {
  [Widget.HEADER]: Header,
  [Widget.W1]: W1,
  [Widget.EXTRAS]: Extras,
  [Widget.PROJECTS]: Projects,

  [Widget.W2]: W2,
  [Widget.HONORS]: Honors,
}

export { Widgets }
