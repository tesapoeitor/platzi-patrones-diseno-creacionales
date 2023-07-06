interface BaseCar {
    showCost(): void
}

interface CarFactory {
    makeCar(): BaseCar
}

class RhinoCar implements BaseCar {
    public showCost(): void{
        console.log('Rhino Car Cost: $ 15.000')
    }
}

class MastodonCar implements BaseCar {
    public showCost(): void {
        console.log('Mastodon Car Cost: $ 20.000')
    }
}

class RhinoFactory implements CarFactory {
    public makeCar(): BaseCar {
        return new RhinoCar()
    }
}

class MastodonFactory implements CarFactory {
    public makeCar(): BaseCar {
        return new MastodonCar()
    }
}

function appFactory(factory: CarFactory): void {
    const car = factory.makeCar()
    car.showCost()
}

function createFactory(type: 'rhino' | 'mastodon'): CarFactory {
    const factories = {
        rhino: RhinoFactory,
        mastodon: MastodonFactory
    }

    const Factory = new factories[type]
    return Factory
}

appFactory(createFactory('rhino'))
appFactory(createFactory('mastodon'))