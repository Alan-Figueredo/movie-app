import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation"

export default function Slider(props) {
    const data = props
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currentIndex]);


    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 3;
            })
        } else {
            const isLastSlide = currentIndex >= data.data.length - 3;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 3);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }



    return (
        <div className='main-container'>
            <div id='slider' className="slider-container">
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            data.data?.map((movie) => {
                                return (
                                    <li onClick={() => { router.push(`/movie/${movie.id}`) }} key={movie.id}>
                                        <img className='bannerImg'  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`backdrop of ${movie.original_title}`} />
                                        <div className="onTheatreTitle">
                                            {movie.original_title.slice(0, 27)}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="dots-container">
                    {
                        data.data?.map((_, idx) => (
                            <div key={idx}
                                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                onClick={() => goToSlide(idx)}>
                                &#9865;
                            </div>))
                    }
                </div>
            </div>
        </div>

    )
}