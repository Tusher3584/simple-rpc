 const axios = require('axios');

async function remoteAdd(a, b) {
    try {
        const response = await axios.post('https://endless-troll-evidently.ngrok-free.app/add', {
            a, b
        });
        return response.data.result;
    } catch (error) {
        console.error('RPC call failed:', error.message);
    }
}

// Call remote function as if it's local
remoteAdd(10, 3).then(result => {
    console.log('Result from RPC server:', result);
});

