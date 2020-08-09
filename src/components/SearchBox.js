import React, { useReducer } from 'react'

const getDate = (day) => {
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

const initialState = {
    destination: '',
    checkInDate: getDate('today'),
    checkOutDate: getDate('oneWeekLater'),
    guestsNr: '',
    payOnCheckIn: '',
}

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

const SearchBox = () => {
    // control form elements
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const onChange = (e) => dispatch({ field: e.target.name, value: e.target.value })
    const { destination, checkInDate, checkOutDate, guestsNr, payOnCheckIn } = state

    return (
        <form className = 'w-full max-w-md bg-white rounded-xl px-8 pt-8 pb-10 mb-4'>
            <div className='mb-4'>
                <label htmlFor='destination'>Where you go?</label>
                <div className='relative'>
                    <input id='destination' name='destination' type='text' placeholder='try "Singapore"' value={destination} onChange={onChange} />
                    <img src='/img/map-pin.svg' alt='location icon' className='absolute right-0 top-0 my-6 mx-4' />
                </div>
            </div>
            <div className='mb-4 flex'>
                <div className='mr-4'>
                    <label htmlFor='checkInDate'>Check in</label>
                    <input id='checkInDate' name='checkInDate' type='date' min={getDate('today')} value={checkInDate} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='checkOutDate'>Check out</label>
                    <input id='checkOutDate' name='checkOutDate' type='date' min={getDate('tomorrow')} value={checkOutDate} onChange={onChange} />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor='guestsNr'>Guests</label>
                <select id='guestsNr' name='guestsNr' defaultValue='How many guest ?' value={guestsNr} onChange={onChange}>
                    <option value='' disabled hidden>How many guest ?</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
            </div>
            <div className='mb-4'>
                <input id='payOnCheckIn' name='payOnCheckIn' type="checkbox" value={payOnCheckIn} onChange={onChange} />
                <label htmlFor="payOnCheckIn">Pay when checking in?</label>
            </div>
            <input type='submit' value='Search Hotel' className='btn btn-orange'/>
        </form>
    )
}

export default SearchBox