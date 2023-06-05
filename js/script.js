window.onload = () => {
    // On va chercher la div dans le HTML
    let calendarEl = document.getElementById('calendar');

    // On instancie le calendrier
    let calendar = new FullCalendar.Calendar(calendarEl, {
        // On charge le composant "timeGrid"
        plugins: [ 'timegrid' ],
    });

    // On affiche le calendrier
    calendar.render();
}