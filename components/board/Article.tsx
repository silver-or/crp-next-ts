import { IArticle } from "@/types"
import React from "react"

type Props = {
    article: IArticle
}

const Article: React.FC<Props> = ({article}) => {
    return (
        <>
            <h1>Article</h1>
        </>
    )
}

export default Article