import {useState} from 'react';

function Form({addPost}) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleBody = (e) => { 
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,   
        }
        addPost(newPost);
        setTitle("");
        setBody("");
    };


    return(
        <form>
            <label htmlFor=""></label>
            <input value={title} type='title' name='title' placeholder="Blog Title" autoComplete='off' onChange={handleTitle}></input>
            <textarea value={body} placeholder="Type your stuff..." onChange={handleBody}></textarea> 
            <button type="submit" name='saveButton' onClick={handleSubmit}>Save</button>
        </form>
        )
    };


  export default Form;