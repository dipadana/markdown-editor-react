import { useState, useEffect } from "react";
import './home.css';

import codeContext from "../../codeContext";

// components
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import MarkdownInput from "../../components/MarkdownInput";
import MarkdownOutput from "../../components/MarkdownOutput";

import defaultInput from "../../const/defaultInput";

export default function Home(){
    const [code, setCode] = useState(defaultInput);
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [title, setTitle] = useState('Untitled Document');

    const contextValue = {
        code,
        setCode,
        wordCount,
        setWordCount,
        charCount,
        setCharCount,
        title,
        setTitle
    };

    return(
        <codeContext.Provider value={contextValue}>
            <Navbar></Navbar>
            <div className="container-fluid mh-100 mt-2" style={{height:'82vh'}}>
                <Title></Title>
                <div className="h-100 border-top d-flex mt-2">
                    <MarkdownInput></MarkdownInput>
                    <MarkdownOutput></MarkdownOutput>
                </div>
            </div>
        </codeContext.Provider>
    )
}