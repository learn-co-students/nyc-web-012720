const API_BASE = "http://localhost:3000/api/v1"

export const getMaladies = () => fetch(`${API_BASE}/maladies`).then(res => res.json()).catch(console.alert)
export const getRemedies = () => fetch(`${API_BASE}/remedies`).then(res => res.json()).catch(console.alert)
export const fetchMalady = id => fetch(`${API_BASE}/maladies/${id}`).then(res => res.json()).catch(console.alert)
export const fetchRemedy = id => fetch(`${API_BASE}/remedies/${id}`).then(res => res.json()).catch(console.alert)
export const postRemedy = body => fetch(`${API_BASE}/remedies`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(body)
}).then(res => res.json()).catch(console.alert)