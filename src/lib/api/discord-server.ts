import type { Server } from "$lib/types/discord";

export async function getServer(id: string): Promise<Server> {
    let auth = process.env.DISCORD_TOK;
    if (auth === undefined) throw new Error("DISCORD_TOK is undefined in .env");

    console.log(auth);

    const response = await fetch(
        `https://discord.com/api/guilds/${id}?with_counts=true`,
        {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": auth,
                "User-Agent": "Node/12.14.1"
            },
        },
    );

    if (!response.ok) throw new Error("failed to fetch (get) from api");

    return response.json();
}
