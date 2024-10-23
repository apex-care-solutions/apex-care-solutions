export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(entity: T): Promise<T>;
    update(id: string, entity: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}

export abstract class Repository<T> implements IRepository<T> {
    protected data: T[] = [];

    async findAll(): Promise<T[]> {
        return this.data;
    }

    async findById(id: string): Promise<T | null> {
        const entity = this.data.find((item: any) => item.id === id);
        return entity || null;
    }

    async create(entity: T): Promise<T> {
        this.data.push(entity);
        return entity;
    }

    async update(id: string, entity: Partial<T>): Promise<T | null> {
        const index = this.data.findIndex((item: any) => item.id === id);
        if (index === -1) return null;

        this.data[index] = { ...this.data[index], ...entity };
        return this.data[index];
    }

    async delete(id: string): Promise<boolean> {
        const index = this.data.findIndex((item: any) => item.id === id);
        if (index === -1) return false;

        this.data.splice(index, 1);
        return true;
    }
}
