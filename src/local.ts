import { AddressInfo } from 'net'
import { app } from './server'

const server = app.listen(3000, () => {
  const { port } = server.address() as AddressInfo
  console.info(`http://localhost:${port}/passing/listening.svg`)
})