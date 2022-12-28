import styled from 'styled-components';
import DetailPlaceListItem from '../DetailPlaceList/DetailPlaceListItem';

const ListDetailPlace = styled.ul`
    margin: 20px 0;
`

export default function RecommendPlaceList(props) {
  const { selectedItem, category } = props

  let randomIndexArray = []
  let printList = []
  while (randomIndexArray.length < 10){
    let randomNum = Math.floor(Math.random() * selectedItem.length)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    }
  }
  randomIndexArray.map(i => printList.push(selectedItem[i]))

  return (
    <ListDetailPlace>
      {
        printList.map(place => {
          return (
            <DetailPlaceListItem place={place} key={place.title}  />
          )
        })
      }
    </ListDetailPlace>
  )
}
