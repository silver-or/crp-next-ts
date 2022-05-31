import AddPost from "@/components/board/AddPost";
import Article from "@/components/board/Article";
import { IArticle } from "@/types";
import { InferGetStaticPropsType } from "next";
import React, { useState } from "react";

export default function BoardPage({articles}: InferGetStaticPropsType<typeof getStaticProps>) { // 자바에서 컨트롤러 역할
    const [articleList, setArticleList] = useState(articles)
    const addPost = async (e:React.FormEvent, formData: IArticle) => {
        e.preventDefault()
        const article: IArticle = {
            artId: Math.random(),
            title: formData.title,
            content: formData.content
        }
        setArticleList([article, ...articleList])
    }

    const deletePost = async (artId: number) => {
        const arr: IArticle[] = articles.filter((article: IArticle) => (article.artId !== artId))
        setArticleList(arr)
    }

    if(!articleList) return <h1>Loading...</h1>

    return <>
        <AddPost write={addPost}/>
        {articleList.map((article: IArticle) => (
            <Article key={article.artId} article={article} deletePost={deletePost} />
        ))}
    </>
}

export async function getStaticProps() { // 유저가 누구든 상관없이 모두 똑같이 보는 글
    const res = await fetch(BASE_URL) // cf. find : 조건 有, fetch : 조건 없이 전부 다 가져오기
    const articles: IArticle[] = await res.json()

    return {props: {articles}}
}

const BASE_URL: string = "http://localhost:8080/articles"
