import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rp4jaq1czf01zchg0b1sju/master',
    cache: new InMemoryCache()
});