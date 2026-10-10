import "./TimePicker.css";

import { useRef, useState } from "react";

const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
);

const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
);

const periods = ["AM", "PM"];

function Wheel({ items, value, setValue }) {

    const ref = useRef();

    const handleScroll = (e) => {

        const index = Math.round(e.target.scrollTop / 42);

        if (items[index]) {

            setValue(items[index]);

        }

    };

    return (

        <div
            className="wheel"
            ref={ref}
            onScroll={handleScroll}
        >

            {items.map((item) => (

                <div
                    key={item}
                    className={
                        value === item
                            ? "wheel-item active"
                            : "wheel-item"
                    }
                >
                    {item}
                </div>

            ))}

        </div>

    );

}

const TimePicker = ({ onChange }) => {

    const [hour, setHour] = useState("10");

    const [minute, setMinute] = useState("00");

    const [period, setPeriod] = useState("AM");

    const update = (h, m, p) => {

        onChange?.(`${h}:${m} ${p}`);

    };

    return (

        <div className="time-picker">


<div className="wheel-container">

                 <h4>hours</h4>
             </div>            
            <Wheel

                items={hours}

                value={hour}

                setValue={(v) => {

                    setHour(v);

                    update(v, minute, period);

                }}

            />

            <div className="wheel-container">

                 <h4>minutes</h4>
             </div>

            <Wheel

                items={minutes}

                value={minute}

                setValue={(v) => {

                    setMinute(v);

                    update(hour, v, period);

                }}

            />

            <Wheel

                items={periods}

                value={period}

                setValue={(v) => {

                    setPeriod(v);

                    update(hour, minute, v);

                }}

            />

            <div className="wheel-selection"></div>

        </div>

    );

};

export default TimePicker;