import { CommonStatus, AuthType } from 'app/enums';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('member')
export default class Member {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'open_id', type: 'varchar', nullable: true })
  openId: string | null;

  @Column({ name: 'mobile', type: 'varchar', length: 20, nullable: true })
  mobile: string | null;

  @Column({ name: 'avatar', type: 'varchar', length: 500, nullable: true })
  avatar: string | null;

  @Column({ name: 'birthday', type: 'date', nullable: true })
  birthday: string | null;

  @Column({ name: 'password', type: 'text', nullable: true })
  password: string | null;

  @Column({
    name: 'status',
    type: 'tinyint',
    default: CommonStatus.Active,
    comment: '1: Active, 0: Inactive',
  })
  status: number;

  @Column({ name: 'fullname', type: 'varchar', length: 255, nullable: true })
  name: string | null;

  @Column({ name: 'nickname', type: 'varchar', length: 255, nullable: true })
  nickName: string | null;

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: true })
  email: string | null;

  @Column({ name: 'address', type: 'varchar', length: 500, nullable: true })
  address: string | null;

  @Column({ name: 'gender', type: 'tinyint', comment: '1: Male, 2: Female, 3: Other', nullable: true })
  gender: number | null;

  @Column({ name: 'refresh_token', type: 'text', nullable: true })
  refreshToken: string;

  @Column({
    name: 'auth_type',
    type: 'tinyint',
    default: AuthType.Normal,
    comment: '0: Normal, 1: Facebook',
  })
  authType: number;

  @Column({ name: 'is_online', type: 'tinyint', default: CommonStatus.InActive, comment: '0: offline, 1: online' })
  isOnline: number;

  @CreateDateColumn({ name: 'created_date', type: 'datetime', nullable: true })
  createdAt: Date | null;

  @UpdateDateColumn({ name: 'update_date', type: 'datetime', nullable: true })
  updateDate: Date | null;
}
