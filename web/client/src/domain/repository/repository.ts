export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(entity: T): Promise<T>;
    update(id: string, entity: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}

export abstract class Repository<T> implements IRepository<T> {
    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<T | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<T>): Promise<T | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    protected data: T[] = [];
}
