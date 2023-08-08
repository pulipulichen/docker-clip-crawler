const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: 'Jer仔',
    feedID: 'jer965',
    homepageURL: 'https://www.youtube.com/channel/UClkSKv9-Geah2gwYu7e9jFw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '志祺七七 X 圖文不符',
    feedID: 'shasha77',
    homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.endsWith('｜志祺七七')) }
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '雀可美特',
    feedID: 'checkmatekuhaku',
    homepageURL: 'https://www.youtube.com/channel/UCoWl-esLvmLkh8iZzARvAJg',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '斐姨所思【阿姨想知道】',
    feedID: 'fanamericantime-interview',
    homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    itemFilters: [
      ItemFiltersPreset.between30minTo180Min,
      (item) => { return (item.title.indexOf('斐姨所思 【阿姨想知道】') > -1) }
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '動畫小坑谷',
    feedID: 'valleylife351',
    homepageURL: 'https://www.youtube.com/channel/UCbCb-ZUoKwQ8vcRbrH2nE0Q',
    itemFilters: [
      ItemFiltersPreset.between1minTo10Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '蒼藍鴿聊醫學',
    feedID: 'bluepigeon0810',
    homepageURL: 'https://www.youtube.com/channel/UCUn77_F5A65HViL9OEvIpLw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '老阿貝聊AI繪圖',
    feedID: 'laoabe',
    homepageURL: 'https://www.youtube.com/channel/UCq0cd_ZAT08f3_nCL5goHcg',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '番茄没有酱聊AI繪圖',
    feedID: 'lsm0315',
    homepageURL: 'https://www.youtube.com/channel/UCoYbSADuNZvm99BLxqtImYQ',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '攝徒日記Fun TV',
    feedID: 'funtv8964',
    homepageURL: 'https://www.youtube.com/channel/UCvTe3Z7TZsjGzUERx4Ce6zA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]



module.exports = feedList