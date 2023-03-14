import { MigrationInterface, QueryRunner } from "typeorm";

export class addPasswordColumn1676023583564 implements MigrationInterface {
    name = 'addPasswordColumn1676023583564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "state" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "state"`);
    }

}
