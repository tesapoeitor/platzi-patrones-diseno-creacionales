/**
 * How to implement Abstract Factory?
 *
 * 1. Declare base products classes/interfaces for each product
 *  in the catalog.
 *
 * Base products:
 *  - MastodonCar
 *  - RhinoCar
 *
 * 2. Implement concrete products classes that inherits/implements
 *  base products classes/interfaces, the number of concrete prodcuts
 *  will depend on the number of families.
 *
 * Concrete products:
 *  - MastodonSedanCar
 *  - MastodonHatchbackCar
 *  - RhinoSedanCar
 *  - RhinoHatchbackCar
 *
 * 3. Declare abstract factory class/interface that declare creation
 *  methods for each base product. The return value could be the base
 *  products types or concrete products types.
 *
 * Abstract Factory:
 *   - CarFactory
 *      * createMastodonCar(): MastodonCar
 *      * createRhinoCar(): RhinoCar
 *
 * 4. Create concrete factories that implements/inherits from the
 *  abstract factory behavior and implements all the products creation
 *  methods. The number of concrete factories will depend of the number
 *  of product families.
 *
 * Concrete Factories:
 *  - SedanCarFactory
 *  - HatchbackCarFactory
 *
 */

// PASO 1
interface BaseCar {
    useGPS(): void
}

interface RhinoCar extends BaseCar {
}

interface MastodonCar extends BaseCar {
}

// PASO 2
class MastodonSedanCar implements MastodonCar {
    public useGPS(): void {
        console.log('[SEDAN] Mastodon GPS')
    }
}

class MastodonHatchbackCar implements MastodonCar {
    public useGPS(): void {
        console.log('[HATCHBACK] Mastodon GPS')
    }
}

class RhinoSedanCar implements RhinoCar {
    public useGPS(): void {
        console.log('[SEDAN] Rhino GPS')
    }
}

class RhinoHatchbackCar implements RhinoCar {
    public useGPS(): void {
        console.log('[HATCHBACK] Rhino GPS')
    }
}

// PASO 3
interface CarAbstractFactory {
    createMastodonCar(): MastodonCar
    createRhinoCar(): RhinoCar
}

// PASO 4
class SedanCarFactory implements CarAbstractFactory {
    public createMastodonCar(): MastodonCar {
        return new MastodonSedanCar()
    }

    public createRhinoCar(): RhinoCar {
        return new RhinoSedanCar()
    }
}

class HatchbackCarFactory implements CarAbstractFactory {
    public createMastodonCar(): MastodonCar {
        return new MastodonHatchbackCar()
    }

    public createRhinoCar(): RhinoCar {
        return new RhinoHatchbackCar()
    }
}

function appAbstractFactory(factory: CarAbstractFactory): void {
    const mastodon = factory.createMastodonCar()
    const rhino = factory.createRhinoCar()

    mastodon.useGPS()
    rhino.useGPS()
}

function createFactory(type: 'sedan' | 'hatchback'): CarAbstractFactory {
    const factories = {
        sedan: SedanCarFactory,
        hatchback: HatchbackCarFactory,
    }

    const Factory = new factories[type]
    return Factory
}

appAbstractFactory(createFactory('sedan'))
appAbstractFactory(createFactory('hatchback'))

export {}