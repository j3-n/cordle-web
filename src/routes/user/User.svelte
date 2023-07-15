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
        color: whitesmoke;

        padding: 10px;
        background-color: darkseagreen;
    }
</style>
