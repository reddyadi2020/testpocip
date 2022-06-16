import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { dataSources } from './dataSource'

const server = new ApolloServer({ schema, dataSources, 
  context: async ({ req }) => { 
  try{
  	console.log('IP:',req.ip);
  } catch (e) {
      // Error connecting to auth service
      return {};
    }
  	}
  })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
