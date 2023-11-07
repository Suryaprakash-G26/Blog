    /* eslint-disable react/prop-types */
    import { useEffect } from 'react';
    import Display from '../contents/main';
    import Workspace from '../contents/workspace';

    const CyberSecurity = ({ data, info, setinfo }) => {
        
        
        useEffect(()=>{
            const filter = data.filter(item => item.value === 'Cybersecurity'); 
            setinfo(filter);    
            console.log(filter)
        },[setinfo])
    
        return (
            <Workspace>
                <Display data={info}/>
            </Workspace>
        );
    };

    export default CyberSecurity;