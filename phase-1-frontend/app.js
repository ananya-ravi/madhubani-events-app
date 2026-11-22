const eventsList = document.getElementById("events-list");

function displayEvents(events) {
    eventsList.innerHTML = "";

    events.forEach(function(event) {
        const card = document.createElement("article");
        card.className = "event-card";

        card.innerHTML = `
            <img class="event-image"
                 src="${event.image}"
                 alt="${event.title}">

            <div class="event-card-content">
                <span class="event-type">${event.type}</span>

                <h3>${event.title}</h3>

                <p class="event-meta">${event.date}</p>
                <p class="event-meta">${event.location}</p>

                <p class="event-summary">${event.description}</p>

                <a class="view-details-button"
                   href="event-details.html?id=${event.id}">
                    View Event Details →
                </a>
            </div>
        `;

        eventsList.appendChild(card);
    });
}

displayEvents(sampleEvents);