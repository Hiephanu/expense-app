const convertDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear();

    const textDate = `${day}-${month}-${year} `
    return textDate
}
const convertFromString = (dateString) => {
    if (dateString) {
        const parts = dateString.split('-');
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const year = parseInt(parts[2]);
        return new Date(year, month, day);
    } else {
        return ""
    }

}
export function formatDate() {
    return {
        convertDate,
        convertFromString
    }
}