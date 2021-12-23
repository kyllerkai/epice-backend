import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class epicedb1640127151116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'epiceDb',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome', //nome da pessoa
            type: 'varchar',
          },
          {
            name: 'email', // email da pessoa
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'curso', //curso da pessoa
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('epiceDb');
  }
}
