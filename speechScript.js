function updateDate() {
    const currentDate = new Date();
    const options = {year: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('currentDate').innerText = formattedDate;
}

updateDate();

setInterval(updateDate, 1000);