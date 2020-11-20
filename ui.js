function DisplayRecord(data) {
    document.getElementById('location').innerHTML = data.location;
    document.getElementById('date').innerHTML = FormatDate(data.date);
    document.getElementById('temp').innerHTML = data.temp;
    document.getElementById('weather').innerHTML = data.main;
}

function FormatDate(date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options);
}