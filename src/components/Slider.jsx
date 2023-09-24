import './Slider.css'


export const Slider = ({ value, min, max, onChange }) => {
    return (
        <input
          type="range"
          className="custom-slider"
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      );
}