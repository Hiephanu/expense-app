const convertDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear();

    const textDate = `${day}-${month}-${year} `
    return textDate.trim()
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
const isValidDate = (dateString) => {
    var parts = dateString.split("-");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }
    if (day < 1 || day > 31) {
        return false;
    }
    if (month == 2) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            if (day > 29) {
                return false;
            }
        } else {
            if (day > 28) {
                return false;
            }
        }
    }

    const nowDate =new Date( Date.now())
    if(convertFromString(dateString) + 1 > nowDate){
        return false;
    }

    return true;
}
export function formatDate() {
    return {
        convertDate,
        convertFromString,
        isValidDate
    }
}