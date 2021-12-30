import React, {createContext, useState} from "react";
const defaultValue = {
    menus: {
        home: {active:true},
        menu1: {active:false},
        menu2: {active:false},
        menu3: {active:false},
    },
    profile: {
        noClue: {
            n1: {},
            n2: {},
            n3: {},
            n4: {},
            n5: {},
        }, // 잘 모르겠는것들
        soFar: {
            n1: {},
            n2: {},
            n3: {},
            n4: {},
            n5: {},
        }, // 공부 진행 상황 저장
    },

    updateMenu: () => {},
    updateProfile: () => {},
};

export const InfoContext = createContext(defaultValue);

const InfoStore = (props) => {

    const [menusInfo, profileInfo] = Object.values(defaultValue);

    let [menus, setMenus] = useState(menusInfo);
    const [profile, setProfile] = useState(profileInfo);

    const updateMenu = ($e) => {
        console.log($e);
        const { type } = $e.target.dataset;
        menus = Object.keys(menus).map((key) => {
            let obj = {};
            obj[key] = key === type;

            return obj;
        });

        setMenus(menus);
    };

    const updateProfile = () => {
        console.log("updateProfile...");
    };

    return(
        <InfoContext.Provider value={{menus, profile, updateMenu, updateProfile}}>
            {props.children}
        </InfoContext.Provider>
    );
};

export default InfoStore;