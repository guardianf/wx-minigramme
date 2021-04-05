const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const getHouseList = n => {
  return Array.apply(null, {length: n}).map((item, index) => {
    const random = Math.ceil(Math.random() * 10);
    const block = random % 3 == 1 ? `新华小区` : random % 3 == 0 ? `永华小区` : `万达新城`;
    return {
      area: block,
      host: `房东-${index + 1}`,
      addr: `${block}-${index + 1}`
    }
  })
}
module.exports = {
  formatTime,
  getHouseList
}
