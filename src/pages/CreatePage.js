import React, {useState} from 'react';

const CreatePage = () => {
    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [result, setResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                user
            })
        })
            .then(response => response.json())
            .then(data => {
                setResult(data)
                console.log(data)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    return (
        <div>
            <h2>create post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    title:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
                <label>
                    user:
                    <input type="text" value={user} onChange={e => setUser(e.target.value)}/>
                </label>
                <button type={"submit"}>create</button>
            </form>
            {
                result && (
                    <div>
                        <p>title: {result.title}</p>
                        <p>user: {result.user}</p>
                    </div>
                )
            }
        </div>
    );
};

export default CreatePage;