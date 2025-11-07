import React from "react";
import type { Filter } from "../types/filter";

interface FiltersProps {
    currentFilter: Filter;
    onChange: (filter: Filter) => void;
}

function Filters({ currentFilter, onChange }: FiltersProps) {
    const filters: { label: string; value: Filter }[] = [
        { label: "Все", value: "all" },
        { label: "Выполненные", value: "completed" },
        { label: "Невыполненные", value: "active" },
    ];

    return (
        <div className="filters">
            {filters.map(({ label, value }) => (
                <button
                    key={value}
                    className={`filters__btn ${currentFilter === value ? "filters__btn--active" : ""}`}
                    onClick={() => onChange(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Filters;