import { useTimeSpeed } from '../../Context/TimeSpeedContext';

export function TimeSpeedController() {
    const { setTimeSpeed } = useTimeSpeed(); // 時間スピードを更新する関数

    return(
        <div className="absolute bottom-5 left-5 bg-gray-800 text-white p-3 rounded">
        <label htmlFor="timeSpeed">Time Speed: </label>
        <input
        id="timeSpeed"
        type="range"
        min="0.01"
        max="10"
        step="0.1"
        defaultValue={1}
        onChange={(e) => setTimeSpeed(Number(e.target.value))}
        />
    </div>
    )
}

