import { useEffect, useState } from 'react';
import Card from './Card';


const ProjectsCard = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, []);
    return (
        <div id='projects' className='max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h2 className='hidden lg:flex text-xl lg:text-4xl text-center text-blue-500 font-bold my-4'>
                <span className="text-primary dark:text-dark-text text-center mb-4">
                My Exclusive Projects
                </span>

            </h2>
            <p className='flex text-primary font-bold lg:hidden'>projects</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    cards.map((card, index) => <Card key={index+1} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default ProjectsCard;