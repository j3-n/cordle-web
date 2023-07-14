export type User = {
    id: string;
    wins: number;
    losses: number;
    draws: number;
    elo: number;
};

export type Server = {
    id: string;
    name: string;
};