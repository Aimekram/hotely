export const getDate = (day) => {
    const currentDate = new Date()
    switch (day) {
        case 'today': {
            let today = currentDate.toISOString().substr(0, 10)
            return today
        }
        case 'tomorrow': {
            let tomorrow = currentDate
            tomorrow.setDate(tomorrow.getDate()+1)
            return tomorrow.toISOString().substr(0, 10)
        }
        case 'oneWeekLater': {
            let oneWeekLater = currentDate
            oneWeekLater.setDate(oneWeekLater.getDate()+7)
            return oneWeekLater.toISOString().substr(0, 10)
        }
    }
}