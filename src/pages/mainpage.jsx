/* eslint-disable react/prop-types */
import Display from "../contents/main";
import Workspace from "../contents/workspace"


const Main=({data})=>{
    return(
        <Workspace>
            <Display data={data} />
        </Workspace>
    )
}

export default Main;