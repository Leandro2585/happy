import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Orphanage from "./Orphanage";

@Entity()
class Visit {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Orphanage)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage_id: Orphanage;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Visit;