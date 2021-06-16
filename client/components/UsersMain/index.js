import React from 'react'
import { hot } from 'react-hot-loader'

export const HomeUsers = () => {
    return (
        <>
            <HomeUsersContainer>
                <HomeMainSpan>
                    <MainSpanH1></MainSpanH1>
                    <MainSpanLink to="/planes"></MainSpanLink>
                </HomeMainSpan>
            </HomeUsersContainer>
        </>
    )
}

export default hot(module)(HomeUsers)
