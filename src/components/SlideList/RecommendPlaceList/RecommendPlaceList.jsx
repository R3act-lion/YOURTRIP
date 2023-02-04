import DetailPlaceListItem from '../DetailPlaceList/DetailPlaceListItem';
import * as S from "./style";

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
    <S.ListDetailPlace>
      {
        printList.map(place => {
          return (
            <DetailPlaceListItem place={place} key={place.title}  />
          )
        })
      }
    </S.ListDetailPlace>
  )
}
