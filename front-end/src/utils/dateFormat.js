export const formatTime = (timestamp) => {

    const date = new Date(timestamp);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeString = `${hours}: ${formattedMinutes} ${ampm}`;

    return timeString;
}


export const formatDate = (dateInfo) => {
    const date = new Date(dateInfo);

    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

    return date.toLocaleDateString(undefined , options);
}


export const isValidURL = (string) => {
    try {
        new URL(string);
        return true
    } catch (e) {
        return false;
    }
}