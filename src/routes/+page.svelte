<script>

</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet">
</svelte:head>

<main>
    <h1>
        Welcome to Cordle
    </h1>

    <a href="/guild">Guild Search</a>
    <a href="/user">User Search</a>
</main>

<style>
    :global(body) {
        background-color: #FAFAFA;
        color: #050505;
    }

    :global(body.dark-mode) {
        background-color: #050505;
        color: #050505;
    }

    h1 {
        padding: 10px;
        background-color: #6AAA64;
    }

    main {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);

        height: 40px;
        font-weight: bold;
        font-family: Baloo;
        color: #FAFAFA;

        text-align: center;
        gap: 20px;
    }
</style>