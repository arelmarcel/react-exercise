// import tweets from '../tweets.json';
// import Tweet from './Tweet';

import initialTweets from '../tweets.json';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import ComposeForm from './ComposeForm';
import Timeline from './Timeline';
import { FaTwitter } from 'react-icons/fa';
import './App.css';

const CURRENT_USER = 'arel'

function App() {
    // return <div className='App'>No more hello world please</div>
    // return (
    //     <div className='timeline'>
    //         {tweets.map(({ id, user, created_on, content }) => (
    //             <Tweet key={id} user={user} createdOn={created_on}>{content} </Tweet>
    //         ))}
    //     </div>
    // )

    // because useState, need to init/config things first
    // inisiasi value awal utk konten tweet
    const [tweets, setTweets] = useState(initialTweets)

    // handler
    const handlePostTweet = (content) => {
        const newTweet = {
            content,
            id: nanoid(),
            created_on: Date(Date.now()),
            user: CURRENT_USER,
            comments_count: 0,
            retweets_count: 0,
            favorites_count: 0,
        }
        setTweets([...tweets, newTweet])

    }

    return (
        <div className='app'>
            <div className='logo-container'>
                <FaTwitter className='app-logo' size="2em" />
            </div>

            {/* panggil handler saat post tweet */}
            <ComposeForm onSubmit={handlePostTweet} />
            <div className='separator'></div>
            <Timeline tweets={tweets} />
        </div>
    )
}




export default App