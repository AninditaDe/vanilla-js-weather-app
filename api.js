function GetWeatherReport(url) {
    let res = fetch(url)
        .then((res) => {
            if (res.status === 200) {
                document.getElementById('errorMessage').style.visibility = "hidden";
                document.getElementById('errorMessage').innerHTML = "";
                return res.json()
            } else {
                document.getElementById('errorMessage').innerHTML = new Error("HTTP status " + res.statusText);
            }
        })
        .then((data) => {
            const location = data.name;
            const date = data.dt;
            const temp = data.main.temp;
            const { main, description } = data.weather[0];
            const record = { location, date, temp, main, description }; //Code improvement required
            DisplayRecord(record);
            //return { location, date, temp, main, description };
        })
        .catch((error) => console.log(error));
}