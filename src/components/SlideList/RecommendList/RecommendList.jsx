import React from 'react'
import styled from 'styled-components'
import RecommendListItem from './RecommendListItem'

export default function RecommendList({ title, subtitle, placelist, selectedItem, category, url, themeData, theme, isLocation }) {
    if (isLocation) {
        placelist = []
        for (const key in themeData['list']) {
            placelist.push(themeData['list'][key])
        }
    }
    else if (selectedItem) {
        placelist = []
        for (let index = 0; index < 10; index++) {
            placelist.push(selectedItem[Math.floor(Math.random() * selectedItem.length)]);
        }
    }

    return (
        <>
            {
                isLocation
                ?<RecommendListItem placelist={themeData.list} url={url} title={theme} />
                : <RecommendListItem placelist={placelist} category={category} url={url} title={title} subtitle={subtitle} />
            }
        </>
    )
}