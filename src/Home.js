import Card from '../Card'
import { useEffect, useState, useContext } from 'react';
import { userContext } from '../userContext';
import { setInfo } from '../reducer';

const Home = () => {
    // const [ info, setInfo ] = useState([]);
    const { userName, info, dispatch } = useContext(userContext);

    useEffect(() => {
        const response = async() => {
            const data = await fetch('https://run.mocky.io/v3/713214c7-5dfa-406c-b2d7-425ef21be44c');
            const response = await data.json();
            console.log(response);
            dispatch(setInfo(response.data));
        }
        response();
    }, []);

    if(!info.length) return <div>Loading ......</div>

    return(
        <>  
            <div>
                {userName}
            </div>
            { info.map((e) => <Card key={e.id} name={e.name} rating={e.ratings} img={e.img} />) }
            Home
        </>
    )
}

export default Home;