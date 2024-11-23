import React from "react";
import './Slider.css';
import { Toast } from "../toast/Toast";

type SliderProps = {
    currentValue: number;
    onChange: (newValue: number) => void
}

export const Slider = ({ currentValue, onChange }: SliderProps) => {
    return <div className="slider-container">
        <input className="slider" type="range"
            min={0} max={49} value={currentValue} step={1}
            onChange={(event) => onChange(parseInt(event.target.value))} />
        <Toast text={currentValue.toString()} />
    </div>
}