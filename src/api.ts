import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as serverless from 'serverless-http'
import { app } from './server'

export const handler: APIGatewayProxyHandler = serverless(app)