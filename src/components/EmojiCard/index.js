// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickChangeEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button
        type="button"
        className="emoji-button"
        onClick={onClickChangeEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
