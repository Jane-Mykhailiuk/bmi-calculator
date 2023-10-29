import React, { useState } from "react";

function BMI() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        const weightFloat = parseFloat(weight);
        const heightFloat = parseFloat(height) / 100;

        if (!isNaN(weightFloat) && !isNaN(heightFloat) && heightFloat !== 0 && heightFloat > 0 && weightFloat > 0) {
            const bmiValue = weightFloat / (heightFloat * heightFloat);
            setBMI(bmiValue);

            // Визначення категорії ваги
            if (bmiValue < 18.5) {
                setCategory("Недостатня вага");
            } else if (bmiValue < 24.9) {
                setCategory("Нормальна вага");
            } else if (bmiValue < 29.9) {
                setCategory("Надлишкова вага");
            } else {
                setCategory("Ожиріння");
            }
        } else {
            setBMI(null);
            setCategory("");
        }
    };

    return (
        <div className="h-screen p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <h1 className="text-2xl font-bold mb-4">Калькулятор Індексу Маси Тіла (ІМТ)</h1>
            <div className="mb-2">
                <label className="block text-sm font-medium mb-2">Вага (кг):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Зріст (см):</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button onClick={calculateBMI} className="bg-blue-500 text-white px-4 py-2 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                Розрахувати ІМТ
            </button>
            {bmi !== null && (
                <div className="mt-4">
                    <p className="text-lg">Ваш ІМТ: {bmi.toFixed(2)}</p>
                    <p className="text-lg">Категорія ваги: {category}</p>
                </div>
            )}
            {(bmi === null || bmi < 0) && (
                <div className="mt-4">
                    <p className="text-lg">Введіть значення більше 0</p>
                </div>
            )}
        </div>
    );
}

export default BMI;
