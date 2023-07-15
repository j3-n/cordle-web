export type User = {
    id: string;
    name: string;
    wins: number;
    losses: number;
    draws: number;
    games: number;
    elo: number;
};

export type UserPost = {
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