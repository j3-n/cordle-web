<script lang="ts">
	import { getServer } from "$lib/api/discord-server";
	import type { Server } from "$lib/types/discord";

    let userSearch: string = '';
    let searchResponse: Server = {
        id: '',
        name: '',
        approximate_member_count: 0,
        approximate_presence_count: 0
    };

    async function search() {
        console.log(userSearch);

        let resp = getServer(userSearch);
        searchResponse = await resp;
        console.log(searchResponse);
    }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet">
</svelte:head>

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
            Server Name: {searchResponse.name}<br />
            Members: {searchResponse.approximate_member_count}<br />
            Members Online: {searchResponse.approximate_presence_count}<br />
        </p>
    </div>
</div>

<style>
    .search {
        font-family: Baloo;
    }

    .search-bar {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);

        gap: 10px;
    }

    .search-results {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }

    input {
        border: 2px;

        background-color: #6AAA64;
        color: whitesmoke;

        height: 40px;
        font-weight: bold;

        text-align: center;
    }

    button {
        border: 2px;

        background-color: #6AAA64;
        color: whitesmoke;

        height: 40px;
        width: 40px;

        font-weight: bold;
    }

    button:hover {
        cursor:pointer;
    }
</style>
