import { defineConfig } from 'windicss/helpers'

// const scales: Record<string, string> = {
//   half: '50%',
//   '1d2': '50%',
//   '1d3': '33.333333%',
//   '2d3': '66.666666%',
// }

// let percent = 0
/**
 * 初始化百分比尺寸
 * @returns 5p: 5%, 100p: 100%
 */
// const initPercentScales = () => {
//   if (percent > 100) {
//     return
//   }
//   scales[`${percent}p`] = `${percent}%`
//   percent += 5
//   initPercentScales()
// }

// initPercentScales()

export default defineConfig({
  safelist: [
    range(2200).map((i) => `left-${i}px`),
    range(2200).map((i) => `bottom-${i}px`),
    range(10).map((i) => `-left-${i}px`),
    range(10).map((i) => `-bottom-${i}px`),
  ],

  preflight: false,
  prefixer: false,
  shortcuts: {
    'flex-center': 'flex items-center',
  },
  extract: {
    // 忽略部分文件夹
    exclude: ['node_modules', '.git', 'dist'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#1bbde6',
        fff: '#fff',
        '000': '#000',
        '333': '#333',
        '666': '#666',
        '999': '#999',
      },
      fontSize: {},
    },
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false,
  },
})

function range(size: number) {
  return Array.from(Array(size).keys()).map((i) => i)
}
