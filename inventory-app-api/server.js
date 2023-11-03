import app from './app'

const port = process.env.APP_PORT
app.listen(port, () => {
  console.log('HTTP server running!')
  console.log(`CTRL + Click -> http://localhost:${port}`)
})
