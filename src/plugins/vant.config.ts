import { Button, List, Cell, CellGroup, Image, Toast } from 'vant'

// 按需引入，使用插件以后就无须这个
export function vant(app: any) {
  app.use(Button)
  app.use(List)
  app.use(Cell)
  app.use(CellGroup)
  app.use(Image)
  app.use(Toast)
}
