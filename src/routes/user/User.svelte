<script lang="ts">
	import type { User } from "$lib/types/discord";

    let user: User = {
        id: "12341",
        name: "dave",
        wins: 15,
        losses: 10,
        draws: 8,
        games: 15 + 10 + 8,
        elo: 567
    };
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet">
</svelte:head>

<div class="user-display">
    <p>
        {user.name}'s stats:<br />
        wins: {user.wins}<br />
        losses: {user.losses}<br />
        draws: {user.draws}<br />
        games played: {user.games}<br />
        elo: {user.elo}<br />
    </p>
</div>

<style>
    .user-display {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);

        align-items: center;
        text-align: center;
        font-weight: bold;
        font-family: Baloo;
        color: whitesmoke;

        padding: 10px;
        background-color: #6AAA64;
    }
</style>
