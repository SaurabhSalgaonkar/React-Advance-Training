import Card from '../Card'
import { useEffect, useState, useContext } from 'react';
import { userContext } from '../userContext';
import { setInfo } from '../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { fetchData } from '../utils/dataSlice';

const Home = () => {
    // const [ info, setInfo ] = useState([]);
    const dispatch = useDispatch();
    const dataItems = useSelector((store) => store.data.dataItems);

    console.log('dataItems ', dataItems);
    const { userName, info, dispatch: contextDispatch } = useContext(userContext);

    const handleClick = (item) => {
        dispatch(addItem(item));
        console.log(item);
    }

    useEffect(() => {
        // const response = async() => {
        //     // const data = await fetch('https://run.mocky.io/v3/713214c7-5dfa-406c-b2d7-425ef21be44c');
        //     // const response = await data.json();
        //     // console.log(response);
        //     // contextDispatch(setInfo(response.data));
        // }
        // response();
        dispatch(fetchData());
    }, []);


    if(!dataItems?.length) return <div>Loading ......</div>

    return(
        <>  
            <div>
                {userName}
            </div>
            { dataItems.map((e) => <Card key={e.id} item={e} handleClick={handleClick} />) }
        </>
    )
}

export default Home;