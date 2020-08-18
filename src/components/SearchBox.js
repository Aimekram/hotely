import React, { useReducer } from 'react'
import { getDate } from '../utils/getDate'

// helpers for controlling form's elements
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
    const onChange = e => dispatch({ field: e.target.name, value: e.target.value })
    const { destination, checkInDate, checkOutDate, guestsNr, payOnCheckIn } = state

    return (
        <form className = 'w-full max-w-md bg-white rounded-xl px-8 pt-8 pb-10 relative mt-20 md:mt-0 md:absolute mx-auto md:top-1/5 md:left-1/10'>
            <div className='mb-4'>
                <label htmlFor='destination' className='font-bold'>Where do you go?</label>
                <div className='relative'>
                    <input id='destination' name='destination' type='text' placeholder='try "Singapore"' value={destination} onChange={onChange} />
                    <img src='/img/map-pin.svg' alt='location icon' className='absolute right-0 top-0 m-4' />
                </div>
            </div>
            <div className='mb-4 flex flex-col sm:flex-row flex-wrap'>
                <div className='flex flex-col flex-no-wrap sm:mr-4 max-w-180px'>
                    <label htmlFor='checkInDate' className='font-bold'>Check in</label>
                    <input id='checkInDate' name='checkInDate' type='date' min={getDate('today')} value={checkInDate} onChange={onChange} />
                </div>
                <div className='flex flex-col flex-no-wrap max-w-180px'>
                    <label htmlFor='checkOutDate' className='font-bold'>Check out</label>
                    <input id='checkOutDate' name='checkOutDate' type='date' min={getDate('tomorrow')} value={checkOutDate} onChange={onChange} />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor='guestsNr' className='font-bold'>Guests</label>
                <select id='guestsNr' name='guestsNr' value={guestsNr} onChange={onChange}>
                    <option value='How many guests?' hidden className='text-blue-500'>How many guests?</option>
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