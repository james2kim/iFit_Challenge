import React from 'react'
import styles from './Card.module.css'

const Card = props => {
    const {setSelected, selected, title} = props
    const setActive = () => setSelected(title)
    const setUniqueTimeStyles = title => {
        let time
        let numbers
        if (title === "Lake Inniscarra, Ireland - Pyramid") {
            time = '30:52'
            numbers = '6,248 M'
        }
        else if (title === "Slow Pulls and Fast Intervals") {
            time = '44:13'
            numbers = '9,948 M'
        }
        else if (title === "Charles Race, Boston, Massachusetts") {
            time = '36:22'
            numbers = '8,648 M'
        }
        else if (title === "Kafue River, Zambia - Power Stroke Pyramid") {
            time = '22:22'
            numbers = '4,660 M'
        }

        if (time && numbers) {
            return <div className={styles.Unique}>
                    <p><i className="fa fa-clock-o"></i> {time}</p>
                    <p><i className="fa fa-paperclip"></i> {numbers}</p>
                </div>
        } 
    }

    const positionText = title => {
        let number
        if (title === "Performance Series") number = '9'
        if (title === "20 Minutes to Toned" || title === "Full-Body HIIT Series") number = '12'
        if (number) {
            return <div className={styles.Backdrop}>
                    <p className={styles.FontSizeNum}>{number}</p>
                    <p className={styles.FontSizeWork}>WORKOUTS</p>
                    <p className={styles.FontSizeNum}><i className="fa fa-indent" aria-hidden="true"></i></p>
                </div>
        }

    }
   
    return (
        <section 
            className={styles.Card}
            style={{boxShadow: title === selected 
                ? '0px 7px 6px 0px #ccc' : '0px 3px 6px 0px #ccc'}}
            onClick={setActive}>
            <img 
                src={props.thumbnail} 
                alt={title} 
                className={styles.Thumbnail}/>
            {positionText(title)}
            <div className={styles.TitleSpacing}>
                <p className={styles.Title}>{title}</p>
                <img 
                    src={props.image} 
                    alt={title} 
                    className={styles.Image}/>
            </div>
            {setUniqueTimeStyles(title)}
            <p 
                style={{display: props.title === selected 
                    ? '' : 'none'}} 
                className={styles.Details}>VIEW DETAILS</p>
        </section>
    )
}

export default Card