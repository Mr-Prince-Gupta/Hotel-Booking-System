function bookRoom() {
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let roomType = document.getElementById("roomType").value;
    let message = document.getElementById("message");

    if (checkin === "" || checkout === "" || roomType === "") {
        message.style.color = "red";
        message.innerText = "Please select all booking details!";
    } else {
        message.style.color = "green";
        message.innerText =
            "Booking successful! Room Type: " +
            roomType +
            " | Check-in: " +
            checkin +
            " | Check-out: " +
            checkout;
    }
}
