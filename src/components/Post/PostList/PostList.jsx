import React from 'react'
import styled from 'styled-components'
import PostItem from '../PostItem/PostItem'
import { Link } from 'react-router-dom'

const ListPost = styled.ul`
    & > li + li {
        margin-top: 25px;
    }
`

export default function PostList() {
    return (
        <ListPost>
            <li>
                <Link to='/post/test'>
                    <PostItem />
                </Link>
            </li>
            <li>
                <Link to='/post/test'>
                    <PostItem />
                </Link>
            </li>
        </ListPost>
    )
}
