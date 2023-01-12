import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function Home() {

    const [homePics, sethomePics] = useState([]);
    const [homePics1, sethomePics1] = useState([]);
    const [homePics2, sethomePics2] = useState([]);

    const { homePicsId } = useParams()

    useEffect(() => {
        setTimeout(() => { getPics() }, 2000);
    }, [homePicsId]);
    useEffect(() => {
        setTimeout(() => { getPics1() }, 2000);
    }, [homePicsId]);

    useEffect(() => {
        setTimeout(() => { getPics2() }, 2000);
    }, [homePicsId]);


    const getPics1 = async () => {
        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDateStart = `${year}-${month}-${day - 1}`;
        let fullDateEnd = `${year}-${month}-${day - 1}`;
        let fullDateURL1 = 'https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=' + fullDateStart + '&end_date=' + fullDateEnd + '';
        const response1 = await fetch(fullDateURL1)
        const data1 = await response1.json()
        sethomePics1(data1)
        console.log(fullDateURL1);

    }

    const getPics2 = async () => {
        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDateStart = `${year}-${month}-${day - 2}`;
        let fullDateEnd = `${year}-${month}-${day - 2}`;
        let fullDateURL2 = 'https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=' + fullDateStart + '&end_date=' + fullDateEnd + '';

        const response2 = await fetch(fullDateURL2)

        const data2 = await response2.json()
        sethomePics2(data2)
        console.log(fullDateURL2);
    }


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
        console.log(data)
        console.log(fullDateURL);
    }
    
    ;


    return (
        <>
            <div>
                <div className='text-white text-2xl text-center'>Click on any category to enter the SpaceStore<div></div></div><br /></div>
            <div className='text-white text-center text-2xl'>Check the latest Space Images created by spacefans like your self!</div>
            <div className='flex-col m-10'>
                <div className="card lg:card-side bg-slate-600 text-white p-5 shadow-xl">
                    <figure className='m-5'><img src={homePics.map((i) => i.hdurl)} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{homePics.map((i) => i.title)}</h2><br />
                        <p className='text-xl'>{homePics.map((i) => i.explanation)}</p>
                        <p className='text-xl'>Created by: {homePics.map((i) => i.copyright)} on {homePics.map((i) => i.date)}</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div><br />
                <div className="card lg:card-side hadow-xl bg-slate-600 text-white p-5">
                    <figure className='m-5'><img src={homePics1.map((i) => i.hdurl)} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{homePics1.map((i) => i.title)}</h2><br />
                        <p className='text-xl'>{homePics1.map((i) => i.explanation)}</p>
                        <p className='text-xl'>Created by: {homePics1.map((i) => i.copyright)} on {homePics1.map((i) => i.date)}</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div><br />
                <div className="card lg:card-side shadow-xl  bg-slate-600 text-white p-5" >
                    <figure className='m-5'><img src={homePics2.map((i) => i.hdurl)} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{homePics2.map((i) => i.title)}</h2><br />
                        <p>{homePics2.map((i) => i.explanation)}</p><br />
                        <p>Created by: {homePics2.map((i) => i.copyright)} on {homePics2.map((i) => i.date)}</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}

export default Home
