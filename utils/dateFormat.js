const addDateSuffix = date => {
    let dateString = date.toString();

    const lastDigit = dateString.substr(dateString.length - 1);

    if (lastDigit === '1' && dateString !== '11') {
        dateString = `${dateString}st`;
    } else if (lastDigit === '2' && dateString !== '12') {
        dateString = `${dateString}nd`;
    } else if (lastDigit === '3' && dateString !== '13') {
        dateString = `${dateString}rd`;
    } else {
        dateString = `${dateString}th`;
    }

    return dateString;
};

module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let months;

    if (monthLength === 'short') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec',
        };
    } else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December',
        };
    }

    const date = new Date(timestamp);
    const formattedMonth = months[date.getMonth()];

    let day;

    if (dateSuffix) {
        day = addDateSuffix(date.getDate());
    } else {
        day = date.getDate();
    }

    const year = date.getFullYear();

    let hour;

    if (date.getHours() > 12) {
        hour = Math.floor(date.getHours() - 12);
    } else {
        hour = date.getHours();
    }

    if (hour === 0) {
        hour = 12;
    }

    const minutes = date.getMinutes();

    let ampm;

    if (date.getHours() >= 12) {
        ampm = 'pm';
    } else {
        ampm = 'am';
    }

    const timeStamp = `${formattedMonth} ${day}, ${year} ${hour}:${minutes}${ampm}`;

    return timeStamp;
}