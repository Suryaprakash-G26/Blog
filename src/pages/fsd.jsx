/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Display from '../contents/main';
import Workspace from '../contents/workspace';

const Fullstack = ({ data, info, setinfo }) => {
    useEffect(()=>{
        const cs = data.filter(item => item.value === 'FSD'); 
        setinfo(cs);
        console.log(info);


    },[])
   
    return (
        <Workspace>
            <Display data={info} />
        </Workspace>
    );
};

export default Fullstack;
