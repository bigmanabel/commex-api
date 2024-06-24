import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity";

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
