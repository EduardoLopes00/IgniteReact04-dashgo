import { createServer, Model } from 'miragejs'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        routes() {
            this.namespace = 'apiFake'
            this.timing = 750;
        
            this.get('/users')
            this.post('/users')

        }
    })

    return server;
}