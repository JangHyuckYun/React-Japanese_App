import React, {useState, useContext, useEffect, useRef} from "react";
import styledLevelComponents from "./styles/Level-Style";
import {Link, useParams, useLocation} from "react-router-dom";
import {InfoContext} from "./contexts/info";
import useColor from "./customHooks/useColor";
import ContentByChapter from "./ContentByChapter";

const {MenusStyle, LevelItem} = styledLevelComponents;
/*
TODO
 - props로 데이터 옮기지 말고 infoStore 활용하여 json 옮기기
 - chapter 형태로 꾸미기 (chapter 안에 word들 표시)
*/
const Level = (props) => {
    const {type, level} = useParams();
    const {data: {language}, profile: {language: {study}} } = useContext(InfoContext);
    const data = language[study][type][level];
    const { pathname } = useLocation();
    const { getRandomColor } = useColor();
    const levelRef = useRef([]);
    let testData = Array.from(Array(15));
    let [dataClickInfo, setDataClickInfo] = useState(testData.slice().map((d, idx) => {
        return {
          isClick:false,
        };
    }));

    const clickLevel = ($event) => {
        const { dataset: { idx } } = $event.target;
        let modifyDataClickInfo = dataClickInfo.map((d, dIdx) => {

            return {
                isClick:d.isClick ? false : (Number(idx) === dIdx)
            }
        });

        setDataClickInfo(modifyDataClickInfo);
    }
    const levelOffsetTop = levelRef.current.slice().map(ref => {
        return ref.offsetTop
    });

    return (
        <MenusStyle>
            {testData.slice().map((d, idx) => {
                return <LevelItem
                    key={idx}
                    ref={el => (levelRef.current[idx] = el)}
                    backgroundcolor={"#8dc4bb"}
                    isClick={dataClickInfo[idx].isClick}
                    data-idx={idx}
                    onClick={($event) => clickLevel($event)}
                    animate={dataClickInfo[idx].isClick ? "open" : "close"}
                    variants={{
                        open: {
                            translateY: ["0px", `-${levelOffsetTop[idx] - 10}px`],
                        },
                        close: {
                            translateY: 0,
                        }
                    }}
                    transition={{
                        duration: .3
                    }}
                ><span>Chapter{idx + 1}</span>
                    {dataClickInfo[idx].isClick ? <ContentByChapter chapterData={data[idx] || []} /> : ""}
                </LevelItem>;
            })}
        </MenusStyle>
    );
};

export default Level;