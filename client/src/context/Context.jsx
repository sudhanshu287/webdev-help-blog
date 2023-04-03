import { createContext, useState } from "react";

export const Context=createContext();

const AppContext=({children})=>{

    const [categories,setCategories]=useState();
    const [tags,setTags]=useState();
    const [articles,setArticles]=useState();
    const [singleArticle,setSingleArticle]=useState();
    return (
        <Context.Provider
        value={{
            categories,setCategories,
            tags,setTags,
            articles,setArticles,
            singleArticle,setSingleArticle,
        }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext ;