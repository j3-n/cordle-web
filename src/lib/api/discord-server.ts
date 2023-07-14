import type { Server } from "$lib/types/discord";

export async function getServer(id: string): Promise<Server> {
    const response = await fetch(
        `https://discord.com/api/guilds/${id}?with_counts=true`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "//",
            },
        },
    );

    console.log(response);
    if (!response.ok) throw new Error("failed to fetch (get) from api");

    return response.json();
}
