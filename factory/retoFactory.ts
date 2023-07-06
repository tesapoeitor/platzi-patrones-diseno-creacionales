interface HttpAdapterFactory {
    makeAdapter(): HttpAdapter
}

interface HttpAdapter {
    get(): void
    post(): void
    put(): void
    delete(): void
}

class ExpressAdapter implements HttpAdapter {
    get(): void {
        console.log('Express método get')
    }

    post(): void {
        console.log('Express método post')
    }

    put(): void {
        console.log('Express método put')
    }

    delete(): void {
        console.log('Express método delete')
    }
}

class FastifyAdapter implements HttpAdapter {
    get(): void {
        console.log('Fastify método get')
    }

    post(): void {
        console.log('Fastify método post')
    }

    put(): void {
        console.log('Fastify método put')
    }

    delete(): void {
        console.log('Fastify método delete')
    }
}

class ExpressFactory implements HttpAdapterFactory {
    makeAdapter(): HttpAdapter {
        return new ExpressAdapter()
    }
}

class FastifyFactory implements HttpAdapterFactory {
    makeAdapter(): HttpAdapter {
        return new FastifyAdapter()
    }
}

function appFactory(factory: HttpAdapterFactory): void {
    const adapter = factory.makeAdapter()
    adapter.get()
    adapter.post()
    adapter.delete()
}

function createFactory(type: 'express' | 'fastify'): HttpAdapterFactory {
    const factories = {
        express: ExpressFactory,
        fastify: FastifyFactory
    }

    const Factory = new factories[type]
    return Factory
}

appFactory(createFactory('express'))
appFactory(createFactory('fastify'))