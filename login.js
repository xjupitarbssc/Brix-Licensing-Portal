function loginWithDiscord() {
    // Simulate redirect to Discord authorization URL
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1213959196903477389&scope=identify&response_type=code&redirect_uri=https://brix.bloxstoreroblox.org/callback';
    // Note: Replace YOUR_CLIENT_ID with your actual Discord application client ID
}

function getDiscordUserId(accessToken) {
    // Make a request to Discord API to get user information
    fetch('https://discord.com/api/v9/users/@me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        const userId = data.id;
        console.log(`Discord User ID: ${userId}`);

        // Now, integrate the Bloxlink API to resolve Roblox ID
        fetch(`https://api.blox.link/v4/public/guilds/YOUR_SERVER_ID/discord-to-roblox/${userId}`, {
            headers: {
                Authorization: 'YOUR_BLOXLINK_API_KEY',
            },
        })
        .then((response) => response.json())
        .then((bloxlinkData) => {
            console.log('Bloxlink API Response:', bloxlinkData);

            // Access the resolved Roblox ID from bloxlinkData
            const robloxId = bloxlinkData.robloxID;
            console.log(`Resolved Roblox ID: ${robloxId}`);
        })
        .catch(error => {
            console.error('Error fetching data from Bloxlink API:', error);
        });
    })
    .catch(error => {
        console.error('Error fetching user information from Discord API:', error);
    });
}

// Simulated user login state
let isLoggedIn = false;

// Check login status on page load
checkLoginStatus();

function checkLoginStatus() {
    // Simulated access token obtained from the OAuth flow
    const accessToken = 'your_access_token';

    if (isLoggedIn) {
        // Redirect to the main application page or perform other actions for logged-in users
        console.log('User is logged in.');
        getDiscordUserId(accessToken);
    } else {
        // Redirect to the login page
        window.location.href = 'login.html';
    }
}

// Function to simulate logging out
function logout() {
    isLoggedIn = false;
    window.location.href = 'login.html';
}
