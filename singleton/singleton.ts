// 1. Hacer que el constructor sea privado
// 2. Crear un método estático para llamar al constructor privado
// y guardar la instancia en una variable estática

interface Singleton {
    instance: Singleton
    version: string
    getInstance(version: Singleton['version']): Singleton
}

class Singleton implements Singleton {
    private static instance: Singleton | undefined = undefined
    
    public version: string

    private constructor(version: string) {
        this.version = version
    }

    public static getInstance(version: string): Singleton {
        if(!Singleton.instance) Singleton.instance = new Singleton(version)

        return Singleton.instance
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance('1')
    const singleton2 = Singleton.getInstance('2')
    const singleton3 = Singleton.getInstance('3')

    console.log(`singleton1 es igual a singleton2? : ${singleton1 === singleton2}`)
    console.log(`singleton2 es igual a singleton3? : ${singleton2 === singleton3}`)
}

appSingleton()