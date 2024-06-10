import { Category } from "src/categories/entities/category.entity";
import { Region } from "src/regions/entities/region.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal', { precision: 5, scale: 2 })
    price: number;

    @Column()
    stockQuantity: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @OneToOne(() => Region)
    region: Region;
}
