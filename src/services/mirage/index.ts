import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'


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

        factories: {
            user: Factory.extend ({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server) {
            server.createList('user', 200); //It will create 200 users based on the factory defined above.
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