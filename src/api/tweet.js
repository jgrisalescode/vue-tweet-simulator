import { v4 as uuidv4 } from 'uuid';
import { size } from 'lodash';
import { TWEETS } from '../utils/constants';
import { remove } from 'lodash'

const saveTweetApi = (tweet, username) => {
  const tweets = getTweetsApi();
  if (size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date()
      },
    ]
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp))
  } else {
    tweets.push({
      id: uuidv4(),
      tweet,
      username,
      createdAt: new Date()
    })
    console.log(tweets)
    localStorage.setItem(TWEETS, JSON.stringify(tweets))
  }
}

const getTweetsApi = () => {
  const tweets = localStorage.getItem(TWEETS)
  if (tweets) {
    return JSON.parse(tweets)
  }
  return []
}

const deleteTweetApi = (idTweet) => {
  const tweets = getTweetsApi();

  remove(tweets, function (tweet) {
    return tweet.id === idTweet
  })

  localStorage.setItem(TWEETS, JSON.stringify(tweets))

}

export {
  saveTweetApi,
  getTweetsApi,
  deleteTweetApi
}