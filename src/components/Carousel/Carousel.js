import { useState, useEffect } from 'react';
import CarouselControls from '../CarouselControls/CarouselControls';
import CarouselItem from '../CarouselItem/CarouselItem';
import ModalSlider from '../ModalSlider/ModalSlider';
import './Carousel.css';

function Carousel () {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [projectData, setProjectData] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const prev = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : projectData.length - 1;
        setCurrentSlide(index);
      }
      
    const next = () => {
        const index = currentSlide < projectData.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
      }
    
    const more = () => {
        setOpenModal(true);
    }
    
    useEffect(()=>{
        async function getProjectData() {
            const response = await fetch('http://localhost:4000/projects');
            const res = await response.json();
            setProjectData(res);
        }
        getProjectData();
    }, []);
    
    return (
        <div data-testid='carousel'>
            <div className='carousel' id="projects">
                <div className='carousel-inner'>
                    {projectData.map((data, index) => {
                        return <div 
                                    className='carousel-item-block' key={index}
                                    style={{ transform: `translate(-${currentSlide * 100}%)`}}
                                >
                                    <CarouselItem data={data}/>
                                </div>
                    })}
                </div>
                <CarouselControls prev={prev} next={next} more={more}/>
            </div>
            {openModal && <ModalSlider closeModal={setOpenModal} data={projectData[currentSlide].images} />}
        </div>
    )
}

export default Carousel;