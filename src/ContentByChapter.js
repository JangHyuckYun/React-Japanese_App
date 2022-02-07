import React, {useState, useContext, useEffect, useRef} from "react";
import styledLevelComponents from "./styles/Level-Style";
import {useNavigate, use} from "react-router";
import {Link, useParams, useLocation} from "react-router-dom";
import {InfoContext} from "./contexts/info";
import ContentByChapterStyle from "./styles/ContentByChapter-Style";
import Slider from "react-touch-drag-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const {MenusStyle, LevelItem} = styledLevelComponents;

const ContentByChapter = ({chapterData, duration, testHeight, isShow, isAnimation}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const prevSlide = () => {
        console.log("prev");
        setSlideIndex(slideIndex <= 0 ? 0 : (slideIndex - 1));
    }
    const nextSlide = () => {
        console.log("next");
        setSlideIndex(slideIndex >= chapterData.length - 1 ? chapterData.length - 1 : (slideIndex + 1));
    }

    return (
        <ContentByChapterStyle
            duration={duration}
            testHeight={testHeight}
            isShow={isShow}
            isAnimation={isAnimation}
        >
            <button className={"prevButton"} onClick={() => prevSlide()}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className={"nextButton"} onClick={() => nextSlide()}><FontAwesomeIcon icon={faChevronRight} /></button>
            <Slider
                onSlideComplete={(i) => console.log('finished dragging, current slide is', i)}
                onSlideStart={(i) => console.log('started dragging on slide is', i)}
                activeIndex={slideIndex}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true}
            >
                {chapterData.map((data, idx) => (
                    <div className={"slideCard"} key={data.idx}>{data.name} | {data.mean}</div>
                ))}
            </Slider>
        </ContentByChapterStyle>
    );
};

export default ContentByChapter;