import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const projectId = parseInt(id);
    // console.log(projectId);

    // const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);

    useEffect(() => {

        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // setCards(data);


                const card = data.find((item) => item.id === projectId);
                setCurrentCard(card);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [projectId]);


    return (
        <div className="p-10 dark:text-gray-300 bg-indigo-50 dark:bg-transparent">
            <h2 className='text-xl font-bold mb-2 text-blue-600'>Projects Details:</h2>
            {currentCard ? (
                <div>
                    <h3><span className='font-bold'>Title: </span> {currentCard?.title}</h3>
                    <p><span className='font-bold'>Description: </span> {currentCard?.description}</p>
                    <h3><span className='font-bold'>Technologies: </span> {
                        currentCard.technologies.map((item, idx)=><p key={idx+2}>{item}</p>)
                        }</h3>
                        <h3 className='font-bold'>Links:</h3>
                        <div className='flex gap-4'>
                        <h3><a className='font-bold text-blue-500' target='_blank' href={currentCard?.githublink}>Github-link</a></h3>
                        <h3><a className='font-bold text-blue-500'target='_blank' href={currentCard?.livelink}>Live</a></h3>
                        </div>
                    <h3><span className='font-bold'>Improvement: </span>{currentCard.update}</h3>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div>
                <h3><span className='font-bold'>Plans for this project:</span> {currentCard?.FuturePlan}</h3>
            </div>
            <div className='my-10 border-2 p-2'>
                <h1 className='text-xl font-bold mb-2'>Struggling to Build My Website</h1>
                <p>Building my website was more challenging than I expected. At first, getting the layout just right took a lot of time, as I had to balance design with functionality. Once I thought I had it, I tested it on mobile devices and realized it looked terrible. After hours of learning about responsive design, I finally got it to work well on all screens.

                    Then, performance became a problem. The site started loading slowly as I added more content. Through optimization techniques like image compression, I managed to speed it up. The hardest part was debugging – tracking down errors felt impossible at times. But persistence paid off, and I’m proud of the finished product. The journey taught me valuable lessons about design, performance, and testing.</p>
            </div>
            {/* back btn */}
            <div className='flex justify-center items-center'>
            <button className="relative flex h-[50px] w-28 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
              <span className="relative z-10"><Link to='/'>Back To Home</Link></span>
            </button>
            </div>
        </div>
    );
};

export default Details;
