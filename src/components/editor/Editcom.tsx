import React, { ReactElement, useState } from "react";
import parse from "html-react-parser";
import { options } from './data'
import { FaBootstrap, FaItalic, FaUnderline, FaAlignCenter, FaAlignLeft, FaAlignRight, FaLink, FaListOl, FaListUl, FaUndo, FaRedo, FaCamera } from "react-icons/fa";



export function Editcom({ data }: any): ReactElement {
    const [first, setfirst] = useState("")
    console.log("first", first);

    const handlechange = (e: any) => {
        // e.target.style.color = 'grey';
        const newdata = e.target
        console.log("E", newdata)
        setfirst(newdata)
    }
    function onHeading1Click(e: any) {
        const heading: string = e.target.value
        if (heading) {
            document.execCommand('formatBlock', false, `${heading}`);
        }
    }
    const handlebold = () => {

        document.execCommand("bold")
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
        var data = window.prompt();
        document.execCommand("insertImage", false, `${data}`||"https://images.meesho.com/images/products/64842144/nm3ko_512.jpg");
    }
    return (
        <div className="container">
            <div className="options">
                {/*  Text Format */}
                <button onClick={handlebold} className="button"> <FaBootstrap /> </button>
                <button onClick={handleitalic}className="button"><FaItalic /></button>
                <button onClick={handleunderline} className="button"><FaUnderline /></button>
                {/*  List */}
                <button onClick={handleOlClick}className="button"><FaListOl /></button>
                <button onClick={handleulClick}className="button"><FaListUl /></button>
                {/*  Undo/Redo */}
                <button onClick={handleundo}className="button"><FaUndo /></button>
                <button onClick={handleredo}className="button"><FaRedo /></button>
                {/*  Link */}
                <button onClick={handlecreateLink}className="button"><FaLink /></button>
                {/*  Alignment */}
                <button onClick={handlejustifyCenter}className="button"><FaAlignCenter /></button>
                <button onClick={handlejustifyLeft}className="button"><FaAlignLeft /></button>
                <button onClick={handlejustifyRight}className="button"><FaAlignRight /></button>
                {/*  Selection */}
                <select onClick={onHeading1Click} className="button">
                    {options.map((option, i: any) => (
                        <option value={option.value} key={i}>{option.label}</option>
                    ))}
                </select>
                <button onClick={handleInsertImage}className="button"><FaCamera /></button>
            </div>
            <div className="text-input" contentEditable={true} suppressContentEditableWarning={true} onClick={handlechange}>
                {parse(data)}
            </div>
        </div>

    );
}
