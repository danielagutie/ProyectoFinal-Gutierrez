import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantityInput({ min = 1, max = 100, initial = 1, onChange }) {
    const [value, setValue] = useState(initial);

    const handleChange = (newValue) => {
        if (newValue >= min && newValue <= max) {
            setValue(newValue);
            onChange?.(newValue);
        }
    };

    const handleDec = (e) => {
        e.preventDefault();
        handleChange(value - 1);
    };

    const handleInc = (e) => {
        e.preventDefault();
        handleChange(value + 1);
    };

    const handleInput = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) handleChange(newValue);
    };

    return (
        <div className="pro-qty border">
            <a href="#" className="dec qtybtn" onClick={handleDec}>
                <Minus size={12} />
            </a>
            <input type="text" value={value} onChange={handleInput} />
            <a href="#" className="inc qtybtn" onClick={handleInc}>
                <Plus size={12} />
            </a>
        </div>
    );
}
