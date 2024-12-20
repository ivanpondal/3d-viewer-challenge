import React from "react";
import './Slider.css';
import { Toast } from "ui/toast/Toast";
import { Button } from "ui/button/Button";

type SliderProps = {
    currentValue: number;
    onChange: (newValue: number) => void
}

export const Slider = ({ currentValue, onChange }: SliderProps) =>
    <div className="slider-container">
        <input className="slider" type="range"
            min={0} max={49} value={currentValue} step={1}
            onChange={(event) => onChange(parseInt(event.target.value))} />
        <Button text="prev (j)" onClick={() => { if (currentValue > 0) onChange(currentValue - 1) }} />
        <Button text="next (k)" onClick={() => { if (currentValue < 49) onChange(currentValue + 1) }} />
        <Toast text={currentValue.toString()} />
    </div>