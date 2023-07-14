import type { User } from "$lib/types/discord";

export async function getUser(id: string): Promise<User> {
    const response = await fetch(
        `http://localhost:8080/user?id=${id}`,
        {
            method: "GET",
        },
    );

    if (!response.ok) throw new Error("failed to fetch (get) from api");

    return response.json();
}
