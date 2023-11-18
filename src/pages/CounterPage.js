import React from 'react';
import Counter from '../component/Counter';

const CounterPage = () => {
    return (
        <div>
            <div className='container mt-5'>
                <div className=' row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <Counter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;