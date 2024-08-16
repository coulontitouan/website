document.addEventListener("DOMContentLoaded", async function () {
    // L'URL vers laquelle faire la requête
    const url = "https://discord.com/api/v10/users/524926551431708674";

    // Le token d'autorisation
    const token = ""; // Remplacez par votre token

    // Effectuer la requête fetch avec le token d'autorisation
    // console.log(await fetch(url, {
    //     headers: {
    //         'Authorization': `Bot ${token}`,
    //         // 'Content-Type': 'application/json',
    //     }
    // }))
    console.log(await fetch(url, {
        data: {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': "http://127.0.0.1:3000"
        },
        headers: {
            'Authorization': `Bot ${token}`,
            // 'Content-Type': 'application/json',
        }
    }))
});
