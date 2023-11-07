export default function Topbar(){


    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WwaP-RX56Uj_ftxyeEvGuuDWkiiTCYEIuw&usqp=CAU" />
                    </div></label>
                
                <a className="btn btn-ghost normal-case text-xl p-0 m-0">blogs</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>Courses</a></li>
                <li>
                    <details>
                    <summary>
                        Live Classes
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>
                        Practice
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>
                        Resources
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>
                        Our Products
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    )
}