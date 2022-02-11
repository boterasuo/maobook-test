function calenderReplace(nowY, nowM) {

const yearAndMonth = document.getElementById('yearAndMonth')
const title = document.getElementById('title')
const data = document.getElementById('data')
// const nowYEAR = document.getElementById('nowYEAR')



//如果要得到某個年月日的日曆用下面的語法
// const now = new Date('2020/3/1')

//得到目前的年月的語法
const now = new Date()

//用樣版字串的寫法
//yearAndMonth.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}`

//用分開定義年和日的寫法
const nowY = now.getFullYear()
//月份注意回傳為0~11，0代表1月，11代表12月
const nowM = now.getMonth() + 1
const monthlist= ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC']

// 呈現在網頁上
yearAndMonth.innerHTML = monthlist[nowM-1] + '  ' + nowY

// 顯示年在網頁上
// nowYEAR.innerHTML = nowY

// 星期幾的陣列
const weekList = ['日', '一', '二', '三', '四', '五', '六']

let weekTitleDisplay = ''

for (let i = 0; i < weekList.length; i++) {
  weekTitleDisplay += `<th>${weekList[i]}</th>`
}

// 呈現在網頁上
title.innerHTML = `<tr>${weekTitleDisplay}</tr>`

// 計算本月有幾天，設為0是固定用法，getdate() 可以得到最後一天是哪天
const days = new Date(nowY, nowM, 0).getDate()

// 計算本月的第一天是星期幾，回傳0-6，0代表星期日，1-6代表星期一到六
const weekdayFirst = new Date(`${nowY}/${nowM}/1`).getDay()

console.log(days, weekdayFirst)

// 一維陣列中有多少成員要呈現，算td總數
const numberOfMember = days + weekdayFirst

// 產生這個準備呈現在網頁上的陣列
const dataTemp = []

for (let i = 0; i < numberOfMember; i++) {
  // 第1天的前面的成員只需要空白字串
  if (i < weekdayFirst) {
    dataTemp.push('')
  } else {
    dataTemp.push(i - weekdayFirst + 1)
  }
}

console.log(dataTemp)

// 準備呈現在網頁上

let dataDisplay = '<tr>'

for (let i = 0; i < dataTemp.length; i++) {
  dataDisplay += `<td>${dataTemp[i]}</td>`

  // 每7個後面要加入一個換下一列的標記
  if ((i + 1) % 7 === 0) {
    dataDisplay += '</tr><tr>'
  }
}

dataDisplay += '</tr>'

console.log(dataDisplay)

// 呈現在網頁上
data.innerHTML = `${dataDisplay}`

}

calenderReplace(); 