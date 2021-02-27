import React, {useState} from 'react'
import styles from './Grid.module.css'
import Data from '../../data/data.json'
import Card from '../../components/card/Card'

import LakeThumb from "../../assets/images/lake-inniscarra-thumb.jpg"
import LakeImage from "../../assets/images/lake-inniscarra-trainer.jpg"
import PerformanceImage from "../../assets/images/performance-series-trainer.jpg"
import PerformanceThumb from "../../assets/images/performance-series-thumb.jpg"
import SlowPullsImage from "../../assets/images/slow-pulls-trainer.jpg"
import SlowPullsThumb from "../../assets/images/slow-pulls-thumb.jpg"
import TwentyImage from "../../assets/images/20-minutes-to-toned-trainer.jpg"
import TwentyThumb from "../../assets/images/20-minutes-to-toned-thumb.jpg"
import CharlesImage from "../../assets/images/charles-race-trainer.jpg"
import CharlesThumb from "../../assets/images/charles-race-thumb.jpg"
import KafueImage from "../../assets/images/kafue-river-trainer.jpg"
import KafueThumb from "../../assets/images/kafue-river-thumb.jpg"
import HIITImage from "../../assets/images/full-body-hiit-trainer.jpg"
import HIITThumb from "../../assets/images/full-body-hiit-thumb.jpg"
import ShredImage from "../../assets/images/shred-and-burn-trainer.jpg"
import ShredThumb from "../../assets/images/shred-and-burn-thumb.jpg"


const Grid = props => {
    const [selected, setSelected] = useState('')
    const data = Data.data

    const chooseImages = title => {
        let result
        if (title === "Lake Inniscarra, Ireland - Pyramid") result =  [LakeImage, LakeThumb]
        else if (title === "Performance Series") result = [PerformanceImage, PerformanceThumb]
        else if (title === "Slow Pulls and Fast Intervals") result =  [SlowPullsImage, SlowPullsThumb]
        else if (title === "20 Minutes to Toned") result = [TwentyImage, TwentyThumb]
        else if (title === "Charles Race, Boston, Massachusetts") result = [CharlesImage, CharlesThumb]
        else if (title === "Full-Body HIIT Series") result = [HIITImage, HIITThumb]
        else if (title === "Kafue River, Zambia - Power Stroke Pyramid") result = [KafueImage, KafueThumb]
        else result = [ShredImage, ShredThumb]
        return result
    }


    return (
        <main className={styles.Container}>
            <div className={styles.Grid}>
                {data.map((location, i) => <Card 
                    key={i}
                    title={location.title} 
                    thumbnail={chooseImages(location.title)[1]} 
                    image={chooseImages(location.title)[0]}
                    selected={selected}
                    setSelected={setSelected}/>)}
            </div>
        </main>

    )
}

export default Grid

