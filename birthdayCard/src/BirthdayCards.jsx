import { useRecoilValue } from 'recoil'
import './BirthdayCards.css'
import { UsernameAtom } from './Username'

export default function BirthdayCards() {
    const username = useRecoilValue(UsernameAtom)
    return <div id="Div">
        <div id='card1'>Happy <br></br> birthday <br></br>to my <br></br>beautiful <br></br> fabulous<br></br> friend <br></br> {username}  </div>
        <div id='card2'>Happy birthday <br></br>to my crazy,<br></br> wonderful,<br></br> funny
            and <br></br>truly amazing<br></br> friend <br></br> {username} </div>
    </div>
}