import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';


const Home = () => {


    const [homePics, sethomePics] = useState([]);
    const { homePicsId } = useParams()

    useEffect(() => {
        setTimeout(() => { getPics() }, 2000);
    }, [homePicsId]);





    // API CALL
    // ORIGINAL FETCH "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2022-07-08&end_date=2022-07-10"

    const getPics = async () => {

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDateStart = `${year}-${month}-${day}`;
        let fullDateEnd = `${year}-${month}-${day}`;
        let fullDateURL = 'https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=' + fullDateStart + '&end_date=' + fullDateEnd + '';

        const response = await fetch(fullDateURL)
        const data = await response.json()
        sethomePics(data)
        console.log(data);
        console.log(homePics);
    }



    return (
        <>
            <div className="card bg-metal-300 shadow-xl text-white text-center">
                <div className="card-body">
                    <h2 className="card-title self-center py-3 text-3xl">Astronomy Image of the Day</h2>

                    <Loading/>
                    <p>{homePics.map((i) => i.title)}</p>
                    <p>{homePics.map((i) => i.explanation)}</p>

                </div>
                <figure className='py-10'><img src={homePics.map((i) => i.url)} alt="" /></figure>
                <p className='py-5'>Created by: {homePics.map((i) => i.copyright)} on {homePics.map((i) => i.date)}</p>
            </div>
        </>
)
}

export default Home