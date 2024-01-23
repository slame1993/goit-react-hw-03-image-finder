import axios from "axios"; 


export async function fetchData(search, page) {
    const headers = {"Authorization": "NJHMpyMaFFn1TrhMJgKDGrXpLjas04X3naVyLDxNFp1blRcXKAuQOFTq" }
  
    return await axios.get(`https://api.pexels.com/v1/search?query=${search}&page=${page}&per_page=12`, {headers}).then(response => response.data)
  
  
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}





