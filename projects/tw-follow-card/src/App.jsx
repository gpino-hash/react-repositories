import './App.css';
import TwFollowCard from "./TwFollowCard.jsx";

function App () {

  const users = [
    {
      username: 'gpino-hash',
      name: 'Gustavo Pino',
      isFollowing: true,
    },
    {
      username: 'midudev',
      name: 'Miguel Angel Durán',
      isFollowing: false,
    },
    {
      username: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false,
    },
    {
      username: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: true,
    },
    {
      username: 'vxnder',
      name: 'Vxnder',
      isFollowing: true,
    },
  ]
  
  return (
    <section className="App">
      {
        users.map(user => {
          const { username, name, isFollowing } = user;
          return (
            <TwFollowCard key={username} username={username} initialIsFollowing={isFollowing}>
              {name}
            </TwFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
