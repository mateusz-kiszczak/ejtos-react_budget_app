import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    // const [action, setAction] = useState('');

    const handleOnChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
    <form className='currency-form'>
        <label for="currency">Currency: </label>
        <select 
            name="currency"
            style={{height: "58px", borderRadius: "5px"}} 
            value={currency} 
            onChange={handleOnChange}
        >
            <option value="$">&#36; Dollar</option>
            <option value="£">&pound; Pound</option>
            <option value="€">&euro; Euro</option>
            <option value="₹">&#8377; Rup</option>
        </select>
    </form>
    );
};
export default Currency;
