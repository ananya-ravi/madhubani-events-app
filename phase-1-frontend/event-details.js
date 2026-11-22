const detailsContainer = document.getElementById("event-details");

const urlParameters = new URLSearchParams(window.location.search);
const eventId = Number(urlParameters.get("id"));

const selectedEvent = sampleEvents.find(function(event) {
    return event.id === eventId;
});

if (selectedEvent) {
    const title = document.createElement("h1");
    title.textContent = selectedEvent.title;

    const date = document.createElement("p");
    date.textContent = selectedEvent.date;

    const time = document.createElement("p");
    time.textContent = selectedEvent.time;

    const location = document.createElement("p");
    location.textContent = selectedEvent.location;

    const type = document.createElement("p");
    type.textContent = selectedEvent.type;

    const heading = document.createElement("h2");
    heading.textContent = "About This Event";

    const description = document.createElement("p");
    description.textContent = selectedEvent.description;

    const backLink = document.createElement("a");
    backLink.href = "index.html";
    backLink.className = "back-link";
    backLink.textContent = "← Back to Events";

    detailsContainer.replaceChildren(
        title,
        date,
        time,
        location,
        type,
        heading,
        description,
        backLink
    );
} else {
    detailsContainer.textContent = "Event not found.";

    const backLink = document.createElement("a");
    backLink.href = "index.html";
    backLink.className = "back-link";
    backLink.textContent = "← Back to Events";

    detailsContainer.appendChild(backLink);
}