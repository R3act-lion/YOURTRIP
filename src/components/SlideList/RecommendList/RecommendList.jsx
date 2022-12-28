import React from 'react'
import RecommendListItem from './RecommendListItem'

export default function RecommendList({ data, title, selectedItem, category, url }) {
    // const placelist = {
    //     list: [
    //         {
    //             title: '고양이1',
    //             firstimage: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS-OZTPpZNsnOchlOMmYsSeMprn5sYU4kdOZGPL0_ksM2nHGegFrzLhGlQMBF-amQqPRFs4DzbLrI_o5gA',
    //             firstimage2: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
    //             category: '나만 없어 고양이',
    //             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
    //         },
    //         {
    //             title: '고양이2',
    //             firstimage: 'https://cdn.popsci.co.kr/news/photo/202205/11966_7101_2744.jpg',
    //             firstimage2: 'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/16b98d3e3d30e.jpg',
    //             category: '나만 없어 고양이',
    //             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
    //         },
    //         {
    //             title: '고양이3',
    //             firstimage: 'https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000',
    //             firstimage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/1200px-Persian_Cat_%28kitten%29.jpg',
    //             category: '나만 없어 고양이',
    //             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
    //         }
    //     ]
    // }

    // const placelist2 = {
    //     list: [
    //         {
    //             title: '고양이1',
    //             firstimage: 'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
    //             firstimage2: 'https://www.sisain.co.kr/news/photo/202110/45791_82634_4851.jpg',
    //             category: '나만 없어 고양이',
    //             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
    //         },
    //         {
    //             title: '고양이2',
    //             firstimage: 'https://cdn.ccdailynews.com/news/photo/202104/2048894_529560_1429.png',
    //             firstimage2: 'https://wimg.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    //             category: '나만 없어 고양이',
    //             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
    //         },
    //         {
    //             title: '고양이3',
    //             firstimage: 'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg',
    //             firstimage2: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png',
    //             category: '나만 없어 고양이',
    //             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
    //         }
    //     ]
    // }

    let randomIndexArray = []
    let placelist = []
    while (randomIndexArray.length < 10){
        let randomNum = Math.floor(Math.random() * selectedItem.length)
        if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
        }
    }
    randomIndexArray.map(i => placelist.push(selectedItem[i]))

    return (
        <ul>
            <RecommendListItem data={data} title={title} placelist={placelist} category={category} url={url} />
        </ul>
    )
}