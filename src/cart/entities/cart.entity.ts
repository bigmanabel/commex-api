import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @JoinColumn()
    @OneToOne(() => Product, product => product.cart)
    product: Product;
}
