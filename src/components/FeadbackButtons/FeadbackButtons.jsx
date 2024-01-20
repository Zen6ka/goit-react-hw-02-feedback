import{ButtonList} from './FeadbackButtons.styled'


export const FeadbackButtons = ({ButtonList, button})=>{
	return (
		<ButtonList>
			<button>Good</button>
			<button>Neutral</button>
			<button>Bad</button>
		</ButtonList>
	
	)
}