import React from 'react'
import DetailPlaceListItem from './DetailPlaceListItem'

export default function DetailPlaceList() {
    const image1 = 'https://lh3.googleusercontent.com/p/AF1QipOxemmo6z3vhALSvC9OKRwqrjYuvqZ9WmC_qNCl=s1360-w1360-h1020'
    const image2 = 'https://lh3.googleusercontent.com/p/AF1QipOxemmo6z3vhALSvC9OKRwqrjYuvqZ9WmC_qNCl=s1360-w1360-h1020'
    const image3 = 'https://lh3.googleusercontent.com/p/AF1QipOxemmo6z3vhALSvC9OKRwqrjYuvqZ9WmC_qNCl=s1360-w1360-h1020'
    const item = {title: '덕수궁', category: '궁', images: [image1, image2, image3], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos. Nisi modi neque nam deserunt eveniet, tempore alias voluptatum dolorem reiciendis incidunt atque corporis minus cupiditate quaerat in, laudantium fuga.'}

    return (
        <ul >
            <DetailPlaceListItem item={item} />
            <DetailPlaceListItem item={item} />
        </ul>
    )
}