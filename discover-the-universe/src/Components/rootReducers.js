
import {
    SET_ENGLISH, SET_FRENCH,
    SELECT_CHARACTER,
    SELECT_PLANET,
    SELECT_PLANET_PICTURE,
    SELECT_REFERENCE_PLANET_EARTH,
    SELECT_NAME_CHARACTER,
    SELECT_AUDIO_ACTIVATE,
    SELECT_AUDIO_DESACTIVATE,
    CHECK_CHECKBOX,
    UNCHECK_CHECKBOX
} from './actionTypes';

const STORE = {
    currentCharacter: "/images/astronaute1.png",
    audio: true,
    checkbox: false,
    uncheckbox:true,
    currentNameCharacter: "",
    earth_reference_infos: null,
    currentPlanet: {},
    currentPlanetPicture: "",
    EN: {
        lang: 'EN',
        planets: [],
        choiceCharacter: ["Home", "Next", "Choose your nickname", "Choose your character", "previous"],
        language: ["ENGLISH", "FRENCH"],
        setting: ["Click here to access the settings"],
        launcherButton: ["Get Started"],
        footer: ["About us", "Contact us"],
        audio: ["ACTIVATE", "DESACTIVATE"],
        choiceCharacterPlaceholder: ["nickname"],
        choicePlanet: ["Select your planet"],
        choiceMars: ["Mars", "Do you want to explore the red planet?"],
        choiceVenus: ["Venus", "Do you want to explore Venus ?"],
        choiceJupiter: ["Jupiter", "Do you want to explore Jupiter?"],
        choiceUranus: ["Uranus", "Do you want to explore Uranus?"],
        infoPlanet: [
            " is a planet of the solar system. ",
            " has a mass ",
            " bigger ",
            " smaller ",
            " than that of the earth, which means that it is ",
            " heavier ",
            " lighter ",
            " than the earth. ",
            " has a volume of ",
            " kg / m³, which means she is ",
            " This planet has no moon ",
            " She owns ",
            " satellites ",
            " satellite ",
            " The gravity is of ",
            " and she is ",
            " than that of the earth, which means that you will be ",
            " heavier ",
            " lighter ",
            " only on the earth. ",
            " Welcome to "
        ]
    },
    FR: {
        lang: 'FR',
        choiceCharacter: ["Accueil", "Suivant", "Indique ton pseudo", "Selectionne ton personnage", "précédent"],
        language: ["ANGLAIS", "FRANCAIS"],
        setting: ["Cliquez ici pour accéder aux paramètres"],
        launcherButton: ["Commencer"],
        footer: ["A propos de nous", "Nous contacter"],
        audio: ["ACTIVER", "DESACTIVER"],
        choiceCharacterPlaceholder: ["pseudo"],
        choicePlanet: ["Sélectionne la planète"],
        choiceMars: ["Mars", "Veux-tu explorer la planète rouge ?"],
        choiceVenus: ["Venus", "Veux-tu explorer Venus ?"],
        choiceJupiter: ["Jupiter", "Veux-tu explorer Jupiter ?"],
        choiceUranus: ["Uranus", "Veux-tu explorer Uranus?"],
        infoPlanet: [
            " est une planet du systeme solaire. ",
            " a une masse ",
            " plus grande",
            " plus petite",
            " que celle de la terre, ce qui veut dire qu'elle est ",
            " plus lourde ",
            " plus légère ",
            " que la terre. ",
            " a un volume de ",
            " kg/m³, ce qui veut dire qu'elle est ",
            " Cette planet n'a pas de lune",
            " Elle possède",
            " satellites",
            " satellite",
            " La gravité est de",
            " et elle est ",
            " que celle de la terre. Ce qui veut dire que tu seras",
            " plus lourd",
            " plus leger",
            " que sur la terre.",
            " Bienvenue sur "
        ]
    }
};


const rootReducer = (state, action) => {

    let lang = (state == undefined) ? STORE.EN : state.lang;
    let currentCharacter = STORE.currentCharacter;
    let currentPlanet = STORE.currentPlanet;
    let earth_reference_infos = STORE.earth_reference_infos;
    let currentNameCharacter = STORE.currentNameCharacter;
    let currentPlanetPicture = STORE.currentPlanetPicture;
    let audio = STORE.audio;
    let checkbox = STORE.checkbox;
    let uncheckbox = STORE.uncheckbox;


    switch (action.type) {
        case SET_FRENCH.type: lang = STORE.FR; break;
        case SET_ENGLISH.type: lang = STORE.EN; break;

        case SELECT_CHARACTER.type:

            STORE.currentCharacter = action.character;
            currentCharacter = action.character;
            break;

        case SELECT_PLANET.type:
            STORE.currentPlanet = action.planet;
            /*console.log(action.planet);*/
            break;

        case SELECT_PLANET_PICTURE.type:
            STORE.currentPlanetPicture = action.picture;
            /*console.log(action.picture);*/
            break;

        case SELECT_REFERENCE_PLANET_EARTH.type:
            STORE.earth_reference_infos = action.earth;
            /*console.log(action.earth);*/
            break;

        case SELECT_NAME_CHARACTER.type:
            STORE.currentNameCharacter = action.name;
            /*console.log(action.name);*/
            break;

        case SELECT_AUDIO_ACTIVATE.type:
            STORE.audio = action.audio;
            break;

        case CHECK_CHECKBOX.type:
            STORE.checkbox = action.checkbox;
            checkbox = action.checkbox;
            STORE.uncheckbox = false;
            break;

        case UNCHECK_CHECKBOX.type:
            STORE.uncheckbox = action.uncheckbox;
            uncheckbox = action.uncheckbox;
            STORE.checkbox = false;
            break;

        case SELECT_AUDIO_DESACTIVATE.type:
            STORE.audio = action.audio
            console.log(action.audio)
            break;

        default:
            lang = STORE.EN;
            break;
    }
    console.log("STORE.currentPlanet  : ", STORE.currentPlanet)
    return {
        lang: lang,
        currentCharacter: currentCharacter,
        currentPlanet: currentPlanet,
        earth_reference_infos: earth_reference_infos,
        currentNameCharacter: currentNameCharacter,
        currentPlanetPicture: currentPlanetPicture,
        audioIsActivate: STORE.audio,
        checkbox: checkbox,
        uncheckbox: uncheckbox
    };

}


export default rootReducer;