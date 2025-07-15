import accounts from './accounts.json' with { type: 'json' };
import transactions from './transactions.json' with { type: 'json' };

export type Account = (typeof accounts)[number];
export type Transaction = (typeof transactions)[number];

export const myAccounts: Account[] = [];

export { accounts, transactions };
