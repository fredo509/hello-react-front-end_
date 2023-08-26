import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getgreetings } from '../redux/store/greetingsSlice';

const Greeting = () => {
    const dispatch = useDispatch();
    const greetingsData = useSelector((state) => state.greetings);
    console.log(greetingsData);

    useEffect(() => {
        dispatch(getgreetings());
    }, [dispatch]);

    return (
        <div>
            <h2>Refresh to get a new Greeting</h2>
            <p>{greetingsData.greetings.content}</p>
        </div>
    );
};

export default Greeting
