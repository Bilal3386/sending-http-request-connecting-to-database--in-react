import React, {useState} from 'react'
import classes from './AddMovieForm.module.css'

const AddMovieForm = () => {

    const [title, setTitle] = useState('')
    const [openingText, setOpeningText] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const openingTextHandler = (event) => {
        setOpeningText(event.target.value)
    }

    const releaseDateHandler = (event) => {
        setReleaseDate(event.target.value)
    }


    const submitHandler = event => {
        event.preventDefault()
        console.log(title,openingText, releaseDate)
    }
  return (
    <form className={classes.control} onSubmit={submitHandler}>
    <label>Title</label>
    <input type='text' name='title' onChange={titleHandler}/>
    <label>opening Text</label>
    <textarea type='text' name='openingText' onChange={openingTextHandler}/>
    <label>Release Date</label>
    <input type='text' name='releasingDate' onChange={releaseDateHandler}/>
    <button type='submit'>Add Movie</button>
    </form>
  )
}

export default AddMovieForm