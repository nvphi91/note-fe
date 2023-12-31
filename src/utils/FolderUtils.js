export const folderLoader = async () => {
    const query = `query Folders {
        folders {
            id
            name
            createdAt
        }
    }`;
    const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    })

    const { data } = await res.json();
    console.log('data');
    console.log(data);
    return data;
}