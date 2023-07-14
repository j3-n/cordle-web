<script lang="ts">
	import { getServer } from "$lib/api/discord-server";
	import type { Server } from "$lib/types/discord";

    let userSearch: string = '';
    let searchResponse: Server;

    async function search() {
        console.log(userSearch);

        let resp = getServer(userSearch);
        searchResponse = await resp;
    }
</script>

<div class="search">
    <div class="search-bar">
        <input
            type="text"
            id="server-search"
            name="sever-search"
            placeholder="server id..."
            bind:value={userSearch}
        >

        <button
            on:click={search}
        >
            Go
        </button>
    </div>

    <div class="search-results">
        <p>
            {searchResponse}<br />
            {userSearch}
        </p>
    </div>
</div>

<style>
    .search-bar {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 10px;
    }

    input {
        border: 2px;

        background-color: darkseagreen;
        color: whitesmoke;

        height: 40px;
        font-weight: bold;

        text-align: center;
    }

    button {
        border: 2px;

        background-color: darkseagreen;
        color: whitesmoke;

        height: 40px;
        width: 40px;

        font-weight: bold;
    }

    button:hover {
        cursor:pointer;
    }
</style>
