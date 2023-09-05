import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../redux/counter/counterSlice"
import { useState } from "react"

const Counter = () => {

    const [inputValue, setInputValue] = useState(0)

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <div style={{ padding: "10px", border: "1px solid black", width: "150px", borderRadius: "10px" }}>{count}</div>
            <div className="buttons" style={{ display: "flex" }}>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
            <input type="number" placeholder="increment by amount" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(inputValue))}>increment by amount</button>
        </div>

    )
}

export default Counter