import { Redis } from '@upstash/redis';
import { Account } from './data';

const redis = Redis.fromEnv();

export async function getMyAccounts() {
	return (await redis.get<Account[]>('my-accounts')) ?? [];
}

export async function setMyAccounts(accounts: Account[]) {
	return await redis.set('my-accounts', accounts);
}
