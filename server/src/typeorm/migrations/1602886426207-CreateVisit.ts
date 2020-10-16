import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVisit1602886426207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'visit',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                },
                {
                    name: 'date',
                    type: 'timestamp with time zone'
                },
                {
                    name: 'create_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('visit');
    }

}
