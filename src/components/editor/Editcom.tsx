import React, { ReactElement, useRef, useState } from "react";
import parse from "html-react-parser";
import {options} from './data'

import "../../App.css";
import {
    FaBootstrap, FaItalic, FaUnderline, FaAlignCenter, FaAlignLeft, FaAlignRight, FaLink,
    FaListOl, FaListUl, FaCamera, FaUndo, FaRedo,
} from "react-icons/fa";

export function Editcom({ data }: any): ReactElement {
    const [first, setfirst] = useState<any[]>([])
    console.log("first", first);
   
    let myDivElement = useRef(null);
    function onHeading1Click(e: any) {
        const heading: string = e.target.value
        document.execCommand('formatBlock', false, `<${heading}>`);
    }
    const handlechange = (event: any) => {
        setfirst(event.relatedTarget)
    }

    const handlebold = () => {
        document.execCommand("bold");
    };

    const handleitalic = () => {
        document.execCommand("italic");
    };

    function handleunderline() {
        document.execCommand("underline");
    }

    const handleOlClick = () => {
        document.execCommand("insertOrderedList");
    };
    const handleulClick = () => {
        document.execCommand("insertUnorderedList");
    };

    function handleredo() {
        document.execCommand("redo");
    }
    function handleundo() {
        document.execCommand("undo");
    }
    function handlecreateLink() {
        document.execCommand("CreateLink", false, "http://stackoverflow.com/");
    }
    function handlejustifyCenter() {
        document.execCommand("justifyCenter");
    }
    function handlejustifyLeft() {
        document.execCommand("justifyLeft");
    }
    function handlejustifyRight() {
        document.execCommand("justifyRight");
    }
    function handleInsertImage() {
        document.execCommand("inserImage", false, "<img src={} alt='image'>");
    }
    function handleSave() {

    }
    return (
        <>
            <div className="container">
                <div className="options">
                    {/*  Text Format */}
                    <button onClick={handlebold} > <FaBootstrap /> </button>
                    <button onClick={handleitalic}><FaItalic /></button>
                    <button onClick={handleunderline} ><FaUnderline /></button>

                    {/*  List */}
                    <button onClick={handleOlClick}><FaListOl /></button>
                    <button onClick={handleulClick}><FaListUl /></button>
                    {/*  Undo/Redo */}
                    <button onClick={handleundo}><FaUndo /></button>
                    <button onClick={handleredo}><FaRedo /></button>

                    {/*  Link */}
                    <button onClick={handlecreateLink}><FaLink /></button>
                    <button onClick={handleInsertImage}><FaCamera /></button>

                    {/*  Alignment */}
                    <button onClick={handlejustifyCenter}><FaAlignCenter /></button>
                    <button onClick={handlejustifyLeft}><FaAlignLeft /></button>
                    <button onClick={handlejustifyRight}><FaAlignRight /></button>
                    {/*  Selection */}

                    <select onClick={onHeading1Click}>
                        {options.map((option, i: any) => (
                            <option value={option.value} key={i}>{option.label}</option>
                        ))}
                    </select>
                      {/*  Save Button only */}
                    <button className="option-button spacing" onClick={handleSave}>Save</button>
                </div>
                <div ref={myDivElement} className="text-input" contentEditable={true} suppressContentEditableWarning={true} onMouseEnter={handlechange}>
                    {parse(data)}
                </div>
            </div>
        </>
    );
}
