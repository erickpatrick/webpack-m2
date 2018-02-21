Object.defineProperty(document, 'cookie', {
  get () {
    const result = this.cookies.map((value, index) => value.split(' ').shift())

    return this.cookies.length
      ? result.join('')
      : ''
  },

  set (value) {
    if (this.cookies === undefined) {
      this.cookies = []
    }

    let cookie = value.split(';').shift()
    cookie = cookie.split('=')

    const existingCookieIndex = this.cookies.findIndex((item, index) => item.includes(`${cookie[0]}=`))

    // cookie doesnt exist yet and its value is not an empty value
    if (existingCookieIndex === -1 && cookie[1] !== '') {
      this.cookies.push(`${value};`)
    }

    // cookie does exist and its value is not an empty value
    if (existingCookieIndex >= 0 && cookie[1] !== '') {
      this.cookies[existingCookieIndex] = `${value};`
    }

    // cookie does exist and its value is an empty value
    if (existingCookieIndex >= 0 && cookie[1] === '') {
      this.cookies.splice(existingCookieIndex, 1)
    }
  },

  cookies: []
});
