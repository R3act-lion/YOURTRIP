import React from 'react'
import styled from 'styled-components'
import SimplePlaceListItem from './SimplePlaceListItem'

const ListPlace = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 2px 22px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function SimplePlaceList() {
    const placelist = {
        list: [
            {
                title: '고양이1',
                firstimage: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS-OZTPpZNsnOchlOMmYsSeMprn5sYU4kdOZGPL0_ksM2nHGegFrzLhGlQMBF-amQqPRFs4DzbLrI_o5gA',
                firstimage2: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이2',
                firstimage: 'https://cdn.popsci.co.kr/news/photo/202205/11966_7101_2744.jpg',
                firstimage2: 'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/16b98d3e3d30e.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이3',
                firstimage: 'https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000',
                firstimage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/1200px-Persian_Cat_%28kitten%29.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            }
        ]
    }

    return (
        <ListPlace>
            {
                placelist.list.map(place => <SimplePlaceListItem key={place.title} place={place} />)
            }
        </ListPlace>
    )
}
