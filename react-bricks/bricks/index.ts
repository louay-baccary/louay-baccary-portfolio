import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import AnimatedHeroUnit from './AnimatedHeroUnit'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit,AnimatedHeroUnit], // Custom Bricks
      },
    ],
  },
]

export default bricks
