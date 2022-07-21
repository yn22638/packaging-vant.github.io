import { defineConfig } from 'windicss/helpers'

const scales = {
  half: '50%',
  '1d2': '50%',
  '1d3': '33.333333%',
  '2d3': '66.666666%',
}

let percent = 0
/**
 * 初始化百分比尺寸
 * @returns 5p: 5%, 100p: 100%
 */
const initPercentScales = () => {
  if (percent > 100) {
    return
  }
  scales[`${percent}p`] = `${percent}%`
  percent += 5
  initPercentScales()
}

initPercentScales()

export default defineConfig({
  prefixer: false, // 小程序不需要加厂商前缀
  theme: {
    extend: {
      borderRadius: scales,
      width: scales,
      height: scales,
      minWidth: scales,
      minHeight: scales,
      maxWidth: scales,
      maxHeight: scales,
      spacing: scales,
      colors: {
        fff: '#fff',
        '000': '#000',
        '333': '#333',
        '666': '#666',
        '999': '#999',
        f8: '#f8f8f8',
        primary: '#2488FF',
      },
    },
  },
})
