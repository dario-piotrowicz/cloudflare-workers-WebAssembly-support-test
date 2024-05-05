import mod from '../add-one.wasm';

export default {
	async fetch(request, env, ctx) {
		const helloWasmModule = await WebAssembly.compileStreaming(mod);
		const addOne = helloWasmModule.exports.add_one;

		const n = 4;
		const result = addOne(4);
		const message = `${n} + 1 = ${result}`;

		return new Response(message);
	},
};
