import type { Server } from "$lib/types/discord";

export async function getServer(id: string): Promise<Server> {
    const response = await fetch(
        `http://localhost:8080/server?id=${id}`,
        {
            method: "GET",
        },
    );

    if (!response.ok) throw new Error("failed to fetch (get) from api");

    return response.json();
}
