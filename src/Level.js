import React, {useState, useContext, useEffect, useRef} from "react";
import styledLevelComponents from "./styles/Level-Style";
import {Link, useParams, useLocation} from "react-router-dom";
import {InfoContext} from "./contexts/info";
import useColor from "./customHooks/useColor";
import ContentByChapter from "./ContentByChapter";
import {useAnimation, useMotionValue, useViewportScroll} from "framer-motion";

const {MenusStyle, LevelItem} = styledLevelComponents;
/*
TODO
*/
const getDuration = (idx) => {
    const maxDuration = 0.3;
    const addDuration = 0.1 * (idx + 1);

    return addDuration > maxDuration ? maxDuration : addDuration;
}

const Level = (props) => {
    const {type, level} = useParams();
    const {data: {language}, profile: {language: {study}}} = useContext(InfoContext);
    const data = language[study][type][level];
    const levelRef = useRef([]);
    const container = useRef(0);
    const containerScrollY = useMotionValue(0);
    let testData = Array.from(Array(15));
    let [dataClickInfo, setDataClickInfo] = useState(testData.slice().map((d, idx) => {
        return {
            isClick: false,
            isShow: false,
            isAnimation:false,
        };
    }));

    const clickLevel = ($event) => {
        const {target , target: { dataset: {idx} }} = $event;

        if(target.className.includes("chapterButton")) {
            let modifyDataClickInfo = dataClickInfo.map((d, dIdx) => {
                let isShow = d.isShow;
                let isClick = d.isClick;
                let isAnimation = d.isAnimation;

                isClick = isClick ? false : (Number(idx) === dIdx);

                if(isClick) {
                    isAnimation = true;
                    isShow = true;
                } else if(isShow && isAnimation) {
                    isShow = !isShow;
                } else if(!isShow && isAnimation) {
                    isAnimation = !isAnimation;
                }

                return {
                    isShow,
                    isClick,
                    isAnimation
                }
            });
            console.log("modifyDataClickInfo", modifyDataClickInfo);
            // 한개라도 클릭된 상태일 시 스크롤 안되도록 설정
            const isClicked = modifyDataClickInfo.filter(item => item.isClick).length > 0;
            container.current.style.overflow = isClicked ? "hidden" : "auto";

            containerScrollY.set(getContainerScrollTop());
            setDataClickInfo(modifyDataClickInfo);
        }
    }
    const levelOffsetTop = levelRef.current.slice().map(ref => {
        return ref.offsetTop
    });

    const getContainerScrollTop = () => {
        return container.current !== undefined ? container.current.scrollTop : 0;
    }

    return (
        <MenusStyle ref={el => container.current = el}>
            {testData.slice().map((d, idx) => {
                return <LevelItem
                    className={"chapterButton"}
                    key={idx}
                    ref={el => (levelRef.current[idx] = el)}
                    backgroundcolor={"#8dc4bb"}
                    isClick={dataClickInfo[idx].isClick}
                    data-idx={idx}
                    zIndex={dataClickInfo[idx].isClick ? 999 : 1}
                    custom={idx}
                    onClick={($event) => clickLevel($event)}
                    animate={dataClickInfo[idx].isClick ? "open" : "close"}
                    variants={{
                        open:{
                            translateY: ["0px", `-${levelOffsetTop[idx] - 10 - containerScrollY.get()}px`],
                            zIndex: 999
                        },
                        close:{
                            transition:{
                                delay:getDuration(idx)
                            },
                            translateY: 0,
                            zIndex: 1,
                        }
                    }}
                    transition={{
                        duration: getDuration(idx)
                    }}
                ><span className={"chapterButton"} data-idx={idx}>Chapter{idx + 1}</span>
                    <ContentByChapter
                        className={"chapterLower"}
                        duration={getDuration(idx)}
                        chapterData={data[idx] || []}
                        isShow={dataClickInfo[idx].isShow}
                        isAnimation={dataClickInfo[idx].isAnimation}
                        testHeight={80}
                    />
                </LevelItem>;
            })}
        </MenusStyle>
    );
};

export default Level;