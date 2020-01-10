const fetchSomething = (param1, param2) => {
  console.log(param1, param2)
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('something')
    }, 1000)
  )
}

export default {
  fetchSomething,
}
