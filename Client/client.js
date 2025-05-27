 const axios = require('axios');

async function remoteAdd(a, b) {
    try {
        const response = await axios.post('http://localhost:3000/add', {
            a, b
        });
        return response.data.result;
    } catch (error) {
        console.error('RPC call failed:', error.message);
    }
}

// Call remote function as if it's local
remoteAdd(5, 3).then(result => {
    console.log('Result from RPC server:', result);
});

