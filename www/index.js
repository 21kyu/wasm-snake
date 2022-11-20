import init, {World} from "wasm-snake"

init().then(_ => {
    const w = World.new()
    console.log(w.width)
})