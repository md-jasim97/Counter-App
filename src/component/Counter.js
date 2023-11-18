import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deCrement, inCrement, setCustom } from '../redux/state/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const disPatch = useDispatch();
    const myNumber = React.useRef();
    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h1 className='text-white'>My counter App</h1>
            </div>

            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick={()=>{disPatch(inCrement())}} className='btn btn-success'>Increment</button>
                    <button onClick={()=>{disPatch(deCrement())}}className='btn btn-danger mx-2'>Decrement</button>
                </div>

                <div>
                    <input ref={myNumber} type="text" className='form-control my-2 w-50' />
                    <button onClick={()=>{disPatch(setCustom(myNumber.current.value))}} className='btn btn-primary w-50 my-2'>Custom Add</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;