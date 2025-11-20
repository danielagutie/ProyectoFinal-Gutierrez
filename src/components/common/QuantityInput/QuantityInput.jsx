import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantityInput({ min = 1, max = Infinity, initial = 1, onChange, size = "normal" }) {
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
        const val = e.target.value;

        // Permitir borrar
        if (val === "") {
            setValue("");
            return;
        }

        const num = parseInt(val, 10);
        if (!isNaN(num)) {
            handleChange(num);
        }
    };

    const handleBlur = () => {
        // Si queda vacio, poner 1
        if (value === "" || isNaN(value)) {
            setValue(1);
            onChange?.(1);
        }
    };

    return (
        <div className={`pro-qty border qty-${size}`}>
            <a href="#" className="dec qtybtn" onClick={handleDec}>
                <Minus size={size === "small" ? 10 : 12} />
            </a>
            <input type="text" value={value} onChange={handleInput} onBlur={handleBlur} />
            <a href="#" className="inc qtybtn" onClick={handleInc}>
                <Plus size={size === "small" ? 10 : 12} />
            </a>
        </div>
    );
}
