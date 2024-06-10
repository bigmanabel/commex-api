import { Product } from "src/products/entities/product.entity";
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @OneToOne(() => Product)
    product: Product;
}
