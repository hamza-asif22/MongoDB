async function addData() {
    const newData = document.getElementById('newData').value;
    if (!newData) {
        alert('Please enter data to add.');
        return;
    }

    const connectionString = 'mongodb://localhost:27017/Mongo-Project';
    const apiUrl = `/api/addData`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: newData, connectionString }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error adding data:', error);
        alert('Error adding data. Check the console for details.');
    }
}

async function removeData() {
    const dataToRemove = document.getElementById('dataToRemove').value;
    if (!dataToRemove) {
        alert('Please enter data to remove.');
        return;
    }

    const connectionString = 'mongodb://localhost:27017/';
    const apiUrl = `/api/removeData`;

    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: dataToRemove, connectionString }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error removing data:', error);
        alert('Error removing data. Check the console for details.');
    }
}

async function viewData() {
    const connectionString = 'mongodb://localhost:27017/';
    const apiUrl = `/api/viewData?connectionString=${encodeURIComponent(connectionString)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('result').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Check the console for details.');
    }
}
