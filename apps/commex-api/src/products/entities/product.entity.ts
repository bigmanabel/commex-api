
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "../../categories/entities/category.entity";
import { Region } from "../../regions/entities/region.entity";
import { Cart } from "../../cart/entities/cart.entity";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    stockQuantity: number;

    @Column('bytea', { nullable: true })
    image: Buffer;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @ManyToOne(() => Region, region => region.products)
    region: Region;

    @OneToOne(() => Cart, cart => cart.product)
    cart: Cart;
}
