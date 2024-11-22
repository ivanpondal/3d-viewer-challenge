import React from "react";
import './Slider.css';

type SliderProps = {
    currentValue: number;
    onChange: (newValue: number) => void
}

export const Slider = ({ currentValue, onChange }: SliderProps) => {
    return <>
        <input className="slider" type="range"
            min={0} max={49} value={currentValue} step={1} list="markers"
            onChange={(event) => onChange(parseInt(event.target.value))} />
        <datalist id="markers">
            <option value="0"></option>
            <option value="25"></option>
            <option value="50"></option>
        </datalist>
    </>
}