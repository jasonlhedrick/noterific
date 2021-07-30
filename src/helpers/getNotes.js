const axios = require('axios');
const { serverLoc } = require('../constants');

async function getNotes() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        try {
            const response = await axios.get(`${serverLoc}/notes/`, {
                headers: {
                    authorization: `Bearer ${jwt}`
                }
            })
            return await response;
        } catch (err) {
            console.error(err);
        }
    }
}

export default getNotes;