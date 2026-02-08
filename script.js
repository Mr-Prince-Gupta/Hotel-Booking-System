function bookRoom() {
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let room = document.getElementById("roomType").value;
    let msg = document.getElementById("message");

    if (!checkin || !checkout || !room) {
        msg.style.color = "red";
        msg.innerText = "Please select dates and room type!";
    } else {
        msg.style.color = "lightgreen";
        msg.innerText =
            "Booking Successful! " + room +
            " from " + checkin +
            " to " + checkout;
    }
    document.write("Room Has Been Booked Successfully!!! (<_>)")
}
