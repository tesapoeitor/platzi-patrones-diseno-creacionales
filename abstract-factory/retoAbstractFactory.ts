// Paso 1
interface CPU {
    setSeries(serie: string): void
}

interface Memory {
    setCapacityInGB(capacity: number): void
}

interface Display {
    setResolution(resolution: '1920' | '720' | '480'): void
}

// Paso 2
// CPU
// Phone
class CPUPhone implements CPU {
    serie: string

    public setSeries(serie: string): void {
        this.serie = serie
    }
}

// Laptop
class CPULaptop implements CPU {
    serie: string

    public setSeries(serie: string): void {
        this.serie = serie
    }
}

// Tablet
class CPUTablet implements CPU {
    serie: string

    public setSeries(serie: string): void {
        this.serie = serie
    }
}

// Memory
// Phone
class MemoryPhone implements Memory {
    capacityInGB: number

    public setCapacityInGB(capacity: number): void {
        this.capacityInGB = capacity
    }
}

// Laptop
class MemoryLaptop implements Memory {
    capacityInGB: number

    public setCapacityInGB(capacity: number): void {
        this.capacityInGB = capacity
    }
}

// Tablet
class MemoryTablet implements Memory {
    capacityInGB: number

    public setCapacityInGB(capacity: number): void {
        this.capacityInGB = capacity
    }
}

// Display
// Phone
class DisplayPhone implements Display {
    resolution: string

    public setResolution(resolution: "1920" | "720" | "480"): void {
        this.resolution = resolution
    }
}

// Laptop
class DisplayLaptop implements Display {
    resolution: string

    public setResolution(resolution: "1920" | "720" | "480"): void {
        this.resolution = resolution
    }
}

// Tablet
class DisplayTablet implements Display {
    resolution: string

    public setResolution(resolution: "1920" | "720" | "480"): void {
        this.resolution = resolution
    }
}

// Paso 3
interface ComponentAbstractFactory {
    createCPU(): CPU
    createMemory(): Memory
    createDisplay(): Display
}

// Paso 4
// Phone
class PhoneFactory implements ComponentAbstractFactory {
    public createCPU(): CPU {
        return new CPUPhone()
    }

    public createDisplay(): Display {
        return new DisplayPhone()
    }

    public createMemory(): Memory {
        return new MemoryPhone()
    }
}

// Laptop
class LaptopFactory implements ComponentAbstractFactory {
    public createCPU(): CPU {
        return new CPULaptop()
    }

    public createDisplay(): Display {
        return new DisplayLaptop()
    }

    public createMemory(): Memory {
        return new MemoryLaptop()
    }
}

// Tablet
class TabletFactory implements ComponentAbstractFactory {
    public createCPU(): CPU {
        return new CPUTablet()
    }

    public createDisplay(): Display {
        return new DisplayTablet()
    }

    public createMemory(): Memory {
        return new MemoryTablet()
    }
}

function appAbstractFactory(factory: ComponentAbstractFactory): void {
    const cpu = factory.createCPU()
    const memory = factory.createMemory()
    const display = factory.createDisplay()
}

function createFactory(type: 'phone' | 'laptop' | 'tablet'): ComponentAbstractFactory {
    const factories = {
        phone: PhoneFactory,
        laptop: LaptopFactory,
        tablet: TabletFactory
    }

    const Factory = new factories[type]
    return Factory
}

appAbstractFactory(createFactory('phone'))
appAbstractFactory(createFactory('laptop'))
appAbstractFactory(createFactory('tablet'))