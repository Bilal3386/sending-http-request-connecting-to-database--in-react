import React, {useRef} from 'react'
import classes from './AddMovieForm.module.css'

const AddMovieForm = props => {

    const titleRef = useRef('')
    const openingTextRef = useRef('')
    const  releaseDateRef = useRef('')
    // const [title, setTitle] = useState('')
    // const [openingText, setOpeningText] = useState('')
    // const [releaseDate, setReleaseDate] = useState('')

    // const titleHandler = (event) => {
    //     setTitle(event.target.value)
    // }

    // const openingTextHandler = (event) => {
    //     setOpeningText(event.target.value)
    // }

    // const releaseDateHandler = (event) => {
    //     setReleaseDate(event.target.value)
    // }


    const submitHandler = event => {
        event.preventDefault()
        const newMovieObj = {title: titleRef.current.value, openingText: openingTextRef.current.value, releaseDate: releaseDateRef.current.value}
        props.onAddMovies(newMovieObj)
    }
  return (
    <form className={classes.control} onSubmit={submitHandler}>
    <label htmlFor='title'>Title</label>
    <input type='text' id='title' ref={titleRef}/>
    <label htmlFor='opening-text'>opening Text</label>
    <textarea row='5' type='text' name='openingText' ref={openingTextRef}/>
    <label>Release Date</label>
    <input type='text' name='releasingDate' ref={releaseDateRef}/>
    <button type='submit'>Add Movie</button>
    </form>
  )
}

export default AddMovieForm